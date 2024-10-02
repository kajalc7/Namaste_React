import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs";
import "@testing-library/jest-dom";

//testcase1
test("Should load contact us component",()=>{

    //whenever u r testing ui componnet i reat u have to render that component in JSdom first

    render(<ContactUs/>);

    //now we will test did my heading rendered  using screen screen is a objectwhich we get from testing librray
    const heading = screen.getByRole("heading");//this will find all heading component

    expect(heading).toBeInTheDocument();
})

//testcase 2
test("Should load button inside contact us component",()=>{


    render(<ContactUs/>);

    // const button = screen.getByRole("button")
    const button = screen.getByText("Submit")

    expect(button).toBeInTheDocument();
})

//testcase 3
test("Should load input name inside contact us component",()=>{


    render(<ContactUs/>);

    const inputName = screen.getByPlaceholderText("name")

    expect(inputName).toBeInTheDocument();
})

//testcase 4
test("Should load 2 input boxes inside contact us component",()=>{

    render(<ContactUs/>);

    // this is knowna s querying
    const inputboxes = screen.getAllByRole("textbox")
    
    console.log(inputboxes);//this will return jsx element that is object or virtual dom object
    console.log(inputboxes.length);


    expect(inputboxes.length).toBe(2);
})

