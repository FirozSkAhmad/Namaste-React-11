import { waitFor, render, fireEvent } from '@testing-library/react'
import { StaticRouter } from 'react-router-dom/server'
import { DUMMY_RES_MENU } from "../../../mocks/dummyResMenu";
import ResturantMenu from '../ResturantMenu';
import "@testing-library/jest-dom"
import { Provider } from 'react-redux';
import store from '../../../utils/reduxStore';
import Header from '../Header'

global.fetch = jest.fn(
    () => {
        return Promise.resolve({
            json: () => {
                return (DUMMY_RES_MENU)
            }
        })
    }
)

test("test adding items in cart", async () => {
    const menu = render(
        <StaticRouter>
            <Provider store={store}>
                <Header />
                <ResturantMenu />
            </Provider>
        </StaticRouter>

    )

    await waitFor(() => expect(menu.getByTestId("resMenu")))

    const buttons = menu.getAllByTestId("addBtn")

    fireEvent.click(buttons[0])

    const cart = menu.getByTestId("cart")

    expect(cart.innerHTML).toBe("Cart-1")
})
