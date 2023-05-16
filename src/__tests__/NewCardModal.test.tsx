import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Provider } from 'jotai';
import NewCardModal from '../components/Modal';

describe('NewCardModal', () => {
    it('renders correctly', () => {
        const { getByText, getByTestId } = render(
            <Provider>
                <NewCardModal />
            </Provider>
        );
    });
});
