import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Home from './Components/Home';
import Login from './Components/login';
import Front from './Components/front';
import Home1 from './Components/Home1';
test("should render Home component",()=>{
    render(<Home/>);
})
test("should render Login component",()=>{
    render(<Login/>);
})
test("should render Front component",()=>{
    render(<Front/>);
})
test("should render Home1 component",()=>{
    render(<Home1/>);
})