import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"; // Import this before other libraries

// Mock fetch function
global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => {
            return Promise.resolve(MOCK_DATA);
        },
    });
});

it("should search reslist for burger text input", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsbeforesearchclick = screen.getAllByTestId("resCard")
    //when body component rendered
    expect(cardsbeforesearchclick.length).toBe(8)

    const searchBtn = screen.getByRole("button", { name: "Search" });
     //
    const searchInput = screen.getByTestId("searchInput")
    //enter text
    fireEvent.change(searchInput,{target: {value: "biryani"}});

    //click on search button

    fireEvent.click(searchBtn);
    //screen should load one res card after search

    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1);
});


it("should give top rated restaurant on clcik of top rated button", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );

    const cardsbeforefilter = screen.getAllByTestId("resCard")
    //when body component rendered
    expect(cardsbeforefilter.length).toBe(8)

    const topratedRestaurant = screen.getByRole("button", { name: "Top Rated Button" });

    fireEvent.click(topratedRestaurant);
    //screen should load top rated restaurant after click

    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(2);
});
