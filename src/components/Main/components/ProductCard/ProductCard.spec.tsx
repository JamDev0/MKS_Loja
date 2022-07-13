import { render, screen } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { useAppSelector } from "../../../../hooks";

import { ProductCard } from '.'
import { defaultTheme } from '../../../../styles/themes/default';

import { createMock } from 'ts-jest-mock'

jest.mock('../../../../hooks');

describe('ProductCard loading states', () => {
    it('renders loading components while its values are loading', () => {
        const useAppSelectorMocked = createMock(useAppSelector);

        const loading = 'loading';

        useAppSelectorMocked.mockReturnValueOnce({
            loading
        })


        render(
            <ThemeProvider theme={defaultTheme}>
                <ProductCard />
            </ThemeProvider>
        )

        expect(screen.getAllByRole('loadingPlaceholder')[0]).toBeInTheDocument()
    })

    it('renders components when its value is set ', () => {
        const useAppSelectorMocked = createMock(useAppSelector);

        const loading = 'succeeded';

        useAppSelectorMocked.mockReturnValueOnce({
            loading
        })


        const { debug } = render(
            <ThemeProvider theme={defaultTheme}>
                <ProductCard />
            </ThemeProvider>
        )

        expect(screen.queryAllByRole('loadingPlaceholder')[0]).toBeFalsy()

    })
})