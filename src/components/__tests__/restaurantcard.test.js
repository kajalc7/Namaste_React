import { render, screen } from "@testing-library/react"
import RestaurantCard from "../RestaurantCard"
import Mock_Data from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"
import { withOpenLabel } from "../RestaurantCard"

// Wrapped version of RestaurantCard with the "Opened" label
const RestaurantCardWithOpenLabel = withOpenLabel((props) => <div>{props.children}</div>);

it("Should render restaurant card component with props data",()=>{
 
    render(<RestaurantCard resData={Mock_Data}/>)

    const name = screen.getByText("Chinese Wok");

    expect(name).toBeInTheDocument();
})

it("Should render the restaurantcard with 'Opened' label", () => {
    render(<RestaurantCardWithOpenLabel resData={Mock_Data} />);
  
    // Check if the "Opened" label is rendered
    const openLabel = screen.getByText("Opened");
    expect(openLabel).toBeInTheDocument();
  });