import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ViewProjectgetbyid from "./projectgetbyid";
import ViewDetails from "./ViewProject";
import Projectdetails from "./ProjectDetails";
import Moredetails from "./moreDetails"
import Projectgetbyid from './projectgetbyidmodel'
test("should render ViewDetails component",()=>{
    render(<Projectdetails/>);
})

test("should render ViewProject component",()=>{
    render(<ViewProjectgetbyid/>);
})
test("should render MoreDetails component",()=>{
    render(<Moredetails/>);
})
test("should render Projectgetbyid component",()=>{
    render(<Projectgetbyid/>);
})
 

 


