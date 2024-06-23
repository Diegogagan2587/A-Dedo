import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, beforeAll, afterEach, afterAll } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';
import { Provider } from 'react-redux';
import store from '../../src/store/store';
import { VITE_API_URL_BASE } from '../../src/config';
import App from '../../src/App';
import exampleTrips from './exampleTrips';

const SIGNUP_URL = `${VITE_API_URL_BASE}/register`;
const GET_TRIPS_URL = `${VITE_API_URL_BASE}/trips`;
const server = setupServer(
  http.post(SIGNUP_URL, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json(
      {
        message: 'USUARIO REGISTRADO',
        data: {
          fullName: 'Juan Perez',
          email: 'juanperez@mail.com',
          password: '$2b$10$/Jt0jk4OFTLdlbuUua7NOuA41KeAuKVgbK90Y9dBtVml.hdm82N9K',
          rol: ['passenger'],
          phone: '1234567890',
          history_trip: [],
          messages: [],
          calification: [],
          _id: '6674d154c96e030a2818b1ff',
          __v: 0,
        },
      },
    );
  }),
  http.get(GET_TRIPS_URL, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json({ data: { trips: [] } }, { status: 200 });
  })
);

server.use(
  http.get(GET_TRIPS_URL, async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return HttpResponse.json(exampleTrips);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Sign In Flow', () => {
  it('renders the home page correctly after sign in', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const user = userEvent.setup();
    // Act
    // Click on the "Ingresar" button
    const signInLink = screen.getByRole('link', { name: 'Ingresar' });
    await user.click(signInLink);
    // We navigate to the Sign Up page
    const signUpButton = screen.getByRole('button', { name: 'Crear Cuenta' });
    await user.click(signUpButton);
    // we complete the first step of the sign up form
    const nameAndLastNameInput = screen.getByRole('textbox', {
      name: /nombre y apellido/i,
    });
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const phoneInput = screen.getByRole('textbox', { name: /teléfono/i });
    const nextButton = screen.getByRole('link', { name: /siguiente/i });

    await user.type(nameAndLastNameInput, 'Juan Perez');
    await user.type(emailInput, 'juanperez@mail.com');
    await user.type(phoneInput, '1234567890');
    await user.click(nextButton);
    // we complete the second step of the sign up form
    const passwordInput = screen.getByLabelText('contraseña');
    const confirmPasswordInput = screen.getByLabelText('confirmar contraseña');
    const termsCheckbox = screen.getByRole('checkbox', {
      name: /acepto los términos y condiciones/i,
    });
    const submitButton = screen.getByRole('button', { name: /Registrarme/i });

    await user.type(passwordInput, 'Password123*456');
    await user.type(confirmPasswordInput, 'Password123*456');
    await user.click(termsCheckbox);
    await user.click(submitButton);

    const continueButton = screen.getByRole('link', { name: /continuar/i });

    await user.click(continueButton);

    const seeTripsButton = screen.getByRole('link', { name: /ver viajes/i });
    await user.click(seeTripsButton);

    // Assert
    const tripsTitle = await screen.findByRole('heading', { level: 1, name: '¡Hola, Juan Perez!'});
    expect(tripsTitle).toBeInTheDocument();
  });
});
