import Header from "../Header"
import "@testing-library/jest-dom"
import { render ,screen} from "@testing-library/react"
import { Provider } from "react-redux"
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";

//testcase1
it("Should load header component with login button",() =>{

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    //if there are multiple button in screen so u have to be specific
    const loginButton = screen.getByRole("button", {name:"Login"});


    expect(loginButton).toBeInTheDocument();
    
})

//testcase2
it("Should load header component with cartItems",() =>{

    render(
    <BrowserRouter>
    <Provider store={appStore}>
        <Header/>
    </Provider>
    </BrowserRouter>
    )
    //if there are multiple button in screen so u have to be specific
    const cartItems = screen.getByText("Cart-(0 items)");


    expect(cartItems).toBeInTheDocument();
    
})