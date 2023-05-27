import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { DUMMY_RES_DATA } from "../../../mocks/dummyResData";
import "@testing-library/jest-dom"
import { StaticRouter } from 'react-router-dom/server'

global.fetch = jest.fn(
    () => {
        return Promise.resolve({
            json: () => {
                return (DUMMY_RES_DATA)
            }
        })
    }
)

test("test the shimmer", () => {
    const body = render(<Body />)

    const shimmer = body.getByTestId("shimmer")

    expect(shimmer.children.length).toBe(15)
})

test("test the resCards", async () => {

    const body = render(
        <StaticRouter>
            <Body />
        </StaticRouter>

    )

    await waitFor(() => expect(body.getByTestId("resCon")))

    const container = body.getByTestId("resCon")

    expect(container.children.length).toBe(15)

})

test("test the resturant search", async () => {

    const body = render(
        <StaticRouter>
            <Body />
        </StaticRouter>

    )

    await waitFor(() => expect(body.getByTestId("resCon")))

    const resSearchInput = body.getByTestId("resSearchInput")
    fireEvent.change(resSearchInput, {
        target: {
            value: "food"
        }
    })

    const searchBtn = body.getByTestId("searchBtn")

    fireEvent.click(searchBtn)

    const container = body.getByTestId("resCon")
    expect(container.children.length).toBe(2)
})


