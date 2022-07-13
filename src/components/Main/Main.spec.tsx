import { render, screen } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { createMock } from "ts-jest-mock";
import { Main } from "."
import { useAppSelector, useAppDispatch } from "../../hooks";
import { defaultTheme } from "../../styles/themes/default"

import { dispatchTest } from '../../redux/slices/testsSlice'

import { getProductsAsync, productInterface } from "../../redux/slices/productsSlice";

jest.mock('../../hooks');

jest.mock('../../redux/slices/productsSlice')


describe('Sei nn', () => {
    it('renders two skeletons while products is being fetched', () => {
        const useAppDispatchMocked = createMock(useAppDispatch);

        const useAppSelectorMocked = createMock(useAppSelector);

        const getProductsAsyncMocked = createMock(getProductsAsync);

        const loading = 'loading';

        useAppSelectorMocked.mockReturnValue({
            loading,
            products: []
        })

        getProductsAsyncMocked.mockReturnValueOnce({
            type: dispatchTest.type,
            payload: ''
        })

        useAppDispatchMocked.mockReturnValue(useAppDispatch)

        render(
            <ThemeProvider theme={defaultTheme}>
                <Main />
            </ThemeProvider>
        )

        expect(screen.getAllByRole('skeleton')).toHaveLength(2)
    }),

    it('renders one product card component for each product fetched', () => {
        const useAppDispatchMocked = createMock(useAppDispatch);

        const useAppSelectorMocked = createMock(useAppSelector);

        const getProductsAsyncMocked = createMock(getProductsAsync);

        const loading = 'succeeded';

        const products: productInterface[] = [{
            brand: 'apple',
            description: 'some description',
            id: 53,
            name: 'Iair',
            price: 100000
        }]

        useAppSelectorMocked.mockReturnValue({
            loading,
            products
        })

        getProductsAsyncMocked.mockReturnValueOnce({
            type: dispatchTest.type,
            payload: ''
        })

        useAppDispatchMocked.mockReturnValue(useAppDispatch)

        render(
            <ThemeProvider theme={defaultTheme}>
                <Main />
            </ThemeProvider>
        )

        expect(screen.getAllByRole('component')).toHaveLength(products.length)
    })
})