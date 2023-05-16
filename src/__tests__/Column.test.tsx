import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import Column from '../components/Column';

describe('Column', () => {
    test('renders correctly', () => {
        //@ts-ignore
        const cards = [{ id: 1, description: 'Card 1' }];
        const { getByText } = render(
            <Provider>
                <Column cards={cards} />
            </Provider>
        );
        expect(getByText('Card 1')).toBeInTheDocument();
    });
});