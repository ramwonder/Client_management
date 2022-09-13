import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import Getclient from "./Getclient";
import AddClient from './AddClient';
import EditClient from './EditClient';

test("should render Getclient component",()=>{
    render(<Getclient/>);
})

test("should render AddClient component",()=>{
    render(<AddClient/>);
})

test("should render EditClient component",()=>{
    render(<EditClient/>);
})
