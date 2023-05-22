import { render } from "@testing-library/react"
import Header from '../Header'
import { StaticRouter } from 'react-router-dom/server'
import store from "../../../utils/reduxStore"
import { Provider } from "react-redux"

test('logo test', () => {

    const header = render(
        <StaticRouter >
            <Provider store={store}><Header /></Provider>
        </StaticRouter>
    )

    const logo=header.getByTestId('logo')

    expect(logo.src).toBe("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7jwxmZBKwVFeeo6Zc7qpn62zWvPe08pUQFQ&usqp=CAU")
})

test('online test', () => {

    const header = render(
        <StaticRouter >
            <Provider store={store}><Header /></Provider>
        </StaticRouter>
    )

    const online=header.getByTestId('online')

    expect(online.innerHTML).toBe("<h2>🟢</h2>")
})

test('cart test', () => {

    const header = render(
        <StaticRouter >
            <Provider store={store}><Header /></Provider>
        </StaticRouter>
    )

    const cart=header.getByTestId('cart')

    expect(cart.innerHTML).toBe("Cart-0")
})