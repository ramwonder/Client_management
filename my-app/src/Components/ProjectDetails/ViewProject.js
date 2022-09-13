import { Component } from "react";
import Home from '../Home1';
import '../dash.css';
import './project.css';
import client from '../idea (2).png';
import project from '../s0_banner2.gif';
import team from '../select.png';
import backs from '../svg (3).png';
import {Form,Button,Card,Col,Row} from 'react-bootstrap';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
import { margin } from "@mui/system";
function Projectdetails() {
    const navigate=useNavigate();
    const enter=()=>
    {
      navigate('/Projectdetails');
      
  
    };
    const enter2=()=>
    {
      navigate('/Projectgetbyid');
      
  
    };
    return(<div><Home/>
    <img variant="top" src={project} width="100px"  className="aaa1"/>
    <div class="container" id="neww">
   
  <div class="row">
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card2'>
      <img variant="top" src={client} width="100px" className="aa"/>
      <Card.Body>
      <Card.Text>
        
        </Card.Text>
       
        <Button variant="danger" className="but" onClick={enter}>View Project Details</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card3'>
      <img variant="top" src={team} width="100px" className="aa"/>
      <Card.Body>
      <Card.Text>
        
        </Card.Text>
       
        <Button variant="danger" className="but" onClick={enter2}>Get project by id</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
   
    </div>);
    
}
export default  Projectdetails;