import { render, screen } from "@testing-library/react";
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
    const searchinput = screen.getByTestId("searchInput")
    console.log(searchinput);
    expect(searchBtn).toBeInTheDocument();
});
