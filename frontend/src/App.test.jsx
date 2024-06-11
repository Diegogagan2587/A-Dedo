import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Provider } from 'react-redux';
import store from './store/store';
import App from './App';

/*
Priority
Queries that are done through ByRole ensure that our UI is accessible to everyone
no matter what mode they use to navigate the webpage
getByRole('button', {name: /submit/i})
getByRole('heading', {level: 1})
*/

describe('App', () => {
  it('renders App component', () => {
    render(
      <Provider store={store} >
        <App />
      </Provider>
    );
  });
  
    it('renders Correct Heading', () => {
        render(
        <Provider store={store} >
            <App />
        </Provider>
        );
        expect(screen.getByRole( 'heading',{level:1} ).textContent).toMatch(/Viaja\s*ahorrando/i);
    });

});
