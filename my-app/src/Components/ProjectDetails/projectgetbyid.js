


import {Form,Button,Card,Col,Row,Modal,ButtonToolbar} from 'react-bootstrap';
import React from 'react';
import { Component } from 'react';
import {browserHistory} from 'react-router';
// import Viewstockofpart from './ViewStockofPart';
import Projectmodel from './projectgetbyidmodel'
 import './bar.css';
 import backicon from './left-arrow.png';
import Home from '../Home1';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,} from 'react-router-dom';

class  ViewProjectgetbyid extends Component {
    constructor(props) {
        super(props);
        this.state = {value: ' ',Redirect:false,addModelShow:false,back:false};
    
   
      
      }
   
    
    
  render(){
    const {value,Redirect,back}=this.state;
    if(back)
    {
      return <Navigate to={'/project'} />;
      
  
    };
    let addModelClose=()=>this.setState({addModelShow:false});
    return (
    
        <div>
          <Home/>
          <Button className='butt13'  variant='light'  onClick={()=>this.setState({back:true})}><img src={backicon}/></Button>
          <Card className='card1222'>
        <Card.Header as="h5">View Project Get by Id</Card.Header>
        <Card.Body>
        <Form  onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="partid">
              <Form.Label>Project ID</Form.Label>
              <Form.Control type="text" placeholder="Enter Project Id" onChange={e=>this.setState({value:e.target.value,Redirect:true})} />
             
            </Form.Group>
            <ButtonToolbar>
       
     <Projectmodel 
    show={this.state.addModelShow}
  
    value={value}
   
   /> 
    <Button variant='primary' className='butt' onClick={()=>this.setState({addModelShow:true})} >View</Button>
    </ButtonToolbar>
            
          
            </Form>
        </Card.Body>
      </Card>
      
    
      </div>
            
  
    );
  }
}
export default ViewProjectgetbyid  ;