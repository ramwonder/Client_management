import { Component } from "react";
import Home from '../Home1';
import '../dash.css';
import './projectTeam.css';
import client from './project-management (1).png';
import clientt from './project-management (2).png';
import project from '../s0_banner2.gif';

import team from './team.png';
import backs from '../svg (3).png';
import {Form,Button,Card,Col,Row} from 'react-bootstrap';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
import { margin } from "@mui/system";
function AllProjectTeamdetails() {
    const navigate=useNavigate();
    const enter=()=>
    {
      navigate('/team');
      
  
    };
    const enter2=()=>
    {
      navigate('/Feedback');
      
  
    };
    
    const enter3=()=>
    {
      navigate('/TeamandClient');
      
  
    };
    return(<div><Home/>
    <img variant="top" src={project} width="100px"  className="aaa"/>
    <div class="container" id="neww">
   
  <div class="row">
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card2'>
      <img variant="top" src={team} width="100px" className="aa"/>
      <Card.Body>
      <Card.Text>
        <center>
        ProjectTeam Details
        </center>
        </Card.Text>
       
        <Button variant="danger" className="but" id='te' onClick={enter}>Go</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card3'>
      <img variant="top" src={client} width="100px" className="aa"/>
      <Card.Body>
      <Card.Text>
        <center>
        CLient Feedback Details
        </center>
        </Card.Text>
       
       
       
        <Button variant="danger" className="but" id='te' onClick={enter2}>Go</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card4'>
      <img variant="top" src={clientt} width="100px" className="aa"/>
      <Card.Body>
      <Card.Text>
        <center>
        Project,Team and client Details
        </center>
        </Card.Text>
       
       
       
        <Button variant="danger" className="but" id='te' onClick={enter3}>Go</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
    </div>
   
    </div>);
    
}
export default   AllProjectTeamdetails;