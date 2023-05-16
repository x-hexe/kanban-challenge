import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'jotai';
import Column from '../components/Column';

describe('Column', () => {
    test('renders correctly', () => {
        const cards: ColumnProps['cards'] = [{ id: '1', description: 'Card 1' }];
        const { getByText } = render(
            <Provider>
                <Column id={1} title='test' cards={cards} />
            </Provider>
        );
        expect(getByText('Card 1')).toBeInTheDocument();
    });
});