import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

test("Should load contact us component",()=>{

    //whenever u r testing ui componnet i reat u have to render that component in JSdom first

    render(<ContactUs/>);

    //now we will test did my heading rendered  using screen screen is a objectwhich we get from testing librray
    const heading = screen.getByRole("heading");//this will find all heading component

    expect(heading).toBeInTheDocument();
})