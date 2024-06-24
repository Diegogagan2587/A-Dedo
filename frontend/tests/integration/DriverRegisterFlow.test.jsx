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

const server = setupServer();

server.use(
  http.post(SIGNUP_URL, async () => {
    return HttpResponse.json({
      message: 'USUARIO REGISTRADO',
      data: {
        fullName: 'Juan Perez',
        email: 'juanperez@mail.com',
        password:
          '$2b$10$/Jt0jk4OFTLdlbuUua7NOuA41KeAuKVgbK90Y9dBtVml.hdm82N9K',
        rol: ['passenger'],
        phone: '1234567890',
        history_trip: [],
        messages: [],
        calification: [],
        _id: '6674d154c96e030a2818b1ff',
        __v: 0,
      },
    });
  })
);

server.use(
  http.get(GET_TRIPS_URL, async () => {
    return HttpResponse.json(exampleTrips);
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Register Driver Flow', () => {
  it('renders the home page correctly after Sign up and register as driver', async () => {
    // Arrange
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const user = userEvent.setup();
    // Act
    // Navigate to the Sign In page
    const signInLink = screen.getByRole('link', { name: 'Ingresar' });
    await user.click(signInLink);
    expect(window.location.pathname).toBe('/login');
    
    // Navigate to the Sign Up page
    const signUpButton = screen.getByRole('button', { name: 'Crear Cuenta' });
    await user.click(signUpButton);
    expect(window.location.pathname).toBe('/register/step-1');

    // Fill out the first step of the sign up form
    const nameAndLastNameInput = screen.getByRole('textbox', {name: /nombre y apellido/i});
    const emailInput = screen.getByRole('textbox', { name: /email/i });
    const phoneInput = screen.getByRole('textbox', { name: /teléfono/i });
    const nextButton = screen.getByRole('link', { name: /siguiente/i });

    await user.type(nameAndLastNameInput, 'Juan Perez');
    await user.type(emailInput, 'juanperez@mail.com');
    await user.type(phoneInput, '1234567890');
    await user.click(nextButton);
    expect(window.location.pathname).toBe('/register/step-2');

    // Fill out the second step of the sign up form wich is the password
    const passwordInput = screen.getByLabelText('contraseña');
    const confirmPasswordInput = screen.getByLabelText('confirmar contraseña');
    const termsCheckbox = screen.getByRole('checkbox', {name: /acepto los términos y condiciones/i});
    const registerButton = screen.getByRole('button', { name: /Registrarme/i });
    await user.type(passwordInput, 'Password123*456');
    await user.type(confirmPasswordInput, 'Password123*456');
    await user.click(termsCheckbox);
    await user.click(registerButton);

      // in the PopUp we Complete registration and navigate to the Trips page 
    const popupContinueButton = screen.getByRole('link', { name: "Continuar"});
    await user.click(popupContinueButton);
    expect(window.location.pathname).toBe('/register/step-3');

    // Select Create Trip option
    const createTripButton = screen.getByRole('link', { name: "Crear viaje" });
    await user.click(createTripButton);
    expect(window.location.pathname).toBe('/register/driver');

    // we navigate to begin the driver registration
    const beginDriverRegistrationButton = screen.getByRole('link', { name: /Comenzar el registro/i });
    await user.click(beginDriverRegistrationButton);
    // then we navigate to the next page
    const continueButton = screen.getByRole('link', { name: /continuar/i });
    await user.click(continueButton);
    // then we navigate to the next page
    const continueButton2 = screen.getByRole('link', { name: /continuar/i });
    await user.click(continueButton2);
    // we fill out the form for the make and model of the car
    const makeAndModelInput = screen.getByRole('textbox', { name: /marca y modelo/i });
    const nextButton2 = screen.getByRole('link', { name: /continuar/i });
    await user.type(makeAndModelInput, 'Toyota - Corolla');
    await user.click(nextButton2);
    // in the confirmation page we click on the go home button
    const goHomeButton = screen.getByRole('link', { name: /ir a inicio/i });
    await user.click(goHomeButton);
    // Assert
    // Verify that the user is greeted by name on the trips page  
    const tripsTitle = await screen.findByRole('heading', { level: 1, name: '¡Hola, Juan Perez!' });
    const passengerBtn = screen.getByRole('button', { name: 'Pasajero' });
    const driverBtn = screen.getByRole('button', { name: 'Conductor' });
    expect(tripsTitle).toBeInTheDocument();
    expect(passengerBtn).toBeInTheDocument();
    expect(driverBtn).toBeInTheDocument();
  });
});
