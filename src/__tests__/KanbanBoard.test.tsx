import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import KanbanBoard from '../components/KanbanBoard';

describe('KanbanBoard', () => {
    it('renders correctly', () => {
        const { getByText } = render(
            <Provider>
                <KanbanBoard />
            </Provider>
        );
    });
});