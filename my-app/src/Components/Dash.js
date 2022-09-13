import { Component } from "react";
import Home from './Home1';
import './dash.css';
import client from './client.png';
import project from './project-management.png';
import team from './team.png';
import backs from './svg (3).png';
import {Form,Button,Card,Col,Row} from 'react-bootstrap';
import {BrowserRouter,Route,Routes,useNavigate} from 'react-router-dom';
function Dash() {
    const navigate=useNavigate();
    const enter=()=>
    {
      navigate('/client');
      
  
    };
    const enter1=()=>
    {
      navigate('/Project');
      
  
    };
   
    const enter2=()=>
    {
      navigate('/AllProjectTeamdetails');
      
  
    };
    return(<div><Home/>
    
   <div class="container" style={{margin: 200}}>
   
  <div class="row">
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card2'>
      <img variant="top" src={client} width="100px" className="aa"/>
      <Card.Body>
      <Card.Text>
        
        </Card.Text>
       
        <Button variant="danger" className="but" onClick={enter}>Client Details</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm">
    
      <Card style={{ width: '18rem' }} className='card2'>
      <img variant="top" src={project} width="100px"  className="aa"/>
      <Card.Body>
        
        <Card.Text>
         
        </Card.Text>
        <Button variant="danger" onClick={enter1} className="but">Project Details</Button>
      </Card.Body>
    </Card>
    </div>
    <div class="col-sm">
     
      <Card style={{ width: '18rem' }} className='card2'>
      <img variant="top" src={team} width="100px"  className="aa"/>
      <Card.Body>
    
        <Card.Text>
         
        </Card.Text>
        <Button variant="danger" onClick={enter2}className="but">Project Team</Button>
      </Card.Body>
    </Card>
    </div>
  </div>
</div>
<img
           
           src={backs}
           alt="First slide"
          className="deg"
          width={1530}
          height={555}
        
         />
    </div>);
    
}
export default  Dash;