import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu.js"
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header";
import "@testing-library/jest-dom";



// Mock fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should load restuarant menu component", async () => {


    await act(async () => render( 
        <Provider store={appStore}>
        <BrowserRouter>
        <Header/>
        <RestaurantMenu/>
        </BrowserRouter>
        </Provider>
    ))
    //got accordion
    const accordionheader = screen.getByText("Recommended (16)")

    //click on accordion header
    fireEvent.click(accordionheader)

    const recommendedlist=screen.getAllByTestId("foodItems")
    expect(recommendedlist.length).toBe(16);

    // click on add button

    const addbtn = screen.getAllByRole("button", {name:"Add +"})

    console.log(addbtn.length)
    //before click on add cart items are 0
    expect(screen.getByText("Cart-(0 items)")).toBeInTheDocument();

    //clicking on first button will
    fireEvent.click(addbtn[0])

    //my header should change with cart-1 items

    expect(screen.getByText("Cart-(1 items)")).toBeInTheDocument();

    fireEvent.click(addbtn[1])

    expect(screen.getByText("Cart-(2 items)")).toBeInTheDocument();


})