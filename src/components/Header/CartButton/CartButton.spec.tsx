import { render, screen } from '@testing-library/react'
import { ThemeProvider } from 'styled-components'
import { CartButton } from '.'
import { defaultTheme } from '../../../styles/themes/default'

import { createMock } from 'ts-jest-mock'
import { useAppDispatch, useAppSelector } from '../../../hooks'



jest.mock('../../../hooks')

it('renders value acording to hook', () => {
    const totalQuantity = 1;

    const useAppSelectorMocked = createMock(useAppSelector);

    useAppSelectorMocked.mockReturnValueOnce({
        totalQuantity
    })

    render(
        <ThemeProvider theme={defaultTheme}>
            <CartButton />
        </ThemeProvider>
    )

    expect(screen.getByText(totalQuantity)).toBeInTheDocument()
})