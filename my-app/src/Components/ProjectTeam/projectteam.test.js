import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Addteam from "./AddTeam";
import EditTeam from "./EditTeam";
import AllDetailsofTeam from './AllDetailsofTeam';
import Feedback from './feedback';
import Team from './Team';
import TeamMoredetails from "./teamandprojectmodel";
import TeamandClient from './teamandclientdetails'
test("should render AddTeam component",()=>{
    render(<Addteam/>);
})
test("should render EditTeam component",()=>{
    render(<EditTeam/>);
})
test("should render Feedback component",()=>{
    render(<Feedback/>);
})
test("should render team component",()=>{
    render(<Team/>);
})

test("should render Teamandclient component",()=>{
    render(<TeamandClient/>);
})
test("should render Teammoredetails component",()=>{
    render(<TeamMoredetails/>);
})



