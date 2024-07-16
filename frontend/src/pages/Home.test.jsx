import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store/store';
import Home from './Home';
describe('Home Page', () => {
  it('renders the home page correctly', async () => {
    // Arrange
    render(
      <Router>
        <Provider store={store}>
          <Home />
        </Provider>
      </Router>
    );
  });

  it('should render only 1 trip when only 1 trip', async () => {
    // Arrange
    const mockStore = {
      getState: () => mockStore,
      subscribe: () => {},
      user: { data: { fullName: 'John Doe', rol: ['driver'] } },
      trips: {
        list: [
          {
            origin: {
              address: 'La salamandra 24',
              city: 'Centro',
              postalCode: '123456',
              date: '2024-07-31T00:00:00.000Z',
              time: '19:56',
            },
            destination: {
              address: 'La tortuga 25',
              city: 'Centro',
              postalCode: '123457',
              date: '2024-07-31T00:00:00.000Z',
              time: '21:57',
            },
            _id: '669330b43c03772c455613ee',
            driver: {
              _id: '66932f903c03772c455613e8',
              fullName: 'Diego Vidal',
              email: 'diego@mail.com',
              rol: ['passenger', 'driver'],
              phone: '123456789',
              history_trip: [],
              messages: [],
              calification: [],
              __v: 1,
              vehicle: '66932fbf3c03772c455613eb',
            },
            seats: 2,
            price: 0,
            stops: true,
            pets: true,
            childrens: true,
            acceptFood: false,
            notes: 'Bring a snack to share with driver please',
            passengers: [],
            messages_trip: [],
            calification: [],
            __v: 0,
          },
        ],
      },
    };
    render(
      <Router>
        <Provider store={mockStore}>
          <Home />
        </Provider>
      </Router>
    );
    // Act
    const tripCards = screen.getAllByRole('article', { name: /Trip card for/i });
    // Assert
    expect(tripCards.length).toBe(1);
  });
});
