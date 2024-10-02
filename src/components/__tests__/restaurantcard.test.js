import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Mock_Data from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("Should render restaurant card component with props data",()=>{
 
    render(<RestaurantCard resData={Mock_Data}/>)

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})