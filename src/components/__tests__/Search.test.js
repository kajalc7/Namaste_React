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

it("should render the body component with search button", async () => {
    await act(async () => 
        render(
            <BrowserRouter>
                <Body />
            </BrowserRouter>
        )
    );


    const searchBtn = screen.getByRole("button", { name: "Search" });
     //
    const searchInput = screen.getByTestId("searchInput")
  //enter text
    fireEvent.change(searchInput,{target: {value: "biryani"}});

    //click on serach button

    fireEvent.click(searchBtn);
    //screen should load one res card

    const cards = screen.getAllByTestId("resCard")
    expect(cards.length).toBe(1);
});
