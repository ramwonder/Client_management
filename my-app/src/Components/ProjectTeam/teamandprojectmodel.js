
import React, { Component } from 'react';
import {Button,Modal,Form,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import '../ProjectDetails/bar.css';
import micon from './organization-structure.png';
import depicon from './technical-support.png';
import idicon from './user-images.png';
import cicon from './about.png';
import svgg from './svg (6).png';
import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default class TeamMoredetails extends Component{

 constructor(props){
    super(props);
    this.state={snackbaropen:false,snackbarmsg:''}
    this.handleSubmit=this.handleSubmit.bind(this);
   
 }
 
 snackbarclose=(event)=>{
    this.setState({snackbaropen:false});
 }
 
 handleSubmit(event){
    event.preventDefault();
    let token=localStorage.getItem('login')
    fetch('http://localhost:5055/api/Clients/'+event.target.clientid.value, {
        method: 'PUT',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          
        },
        body:JSON.stringify({
            "clientId": event.target.clientid.value,
            "clientName": event.target.clientname.value,
            "email": event.target.email.value,
            "phone": event.target.phone.value,
            "location": event.target.location.value,
             "companyName": event.target.CompanyName.value,
             "createdDate": event.target.CreatedDate.value
        }),
    }).then(response => response.text())
        .then(data => {this.setState({snackbaropen:true,snackbarmsg:'Client Updated Successfully!!!'})})    
        .catch(error => {this.setState({snackbaropen:true,snackbarmsg:'Client update Failed'})})



 }
    render(){
        const percentage = this.props.progress;
        const start=this.props.startdate?.slice(0,10);
        const end=this.props.enddate?.slice(0,10);
      
        
        
        const statuscolor=this.props.status=="Active"?'success':'danger';
        return( 
        <div>
            <Snackbar
  anchorOrigin={{ vertical:'center', horizontal:'center' }}
  open={this.state.snackbaropen}
  autoHideDuration={3000}
  severity="success"
  onClose={this.snackbarclose}
  message={<span id="msg-id">{this.state.snackbarmsg}</span>}
action={[
    <IconButton key="close"
    aria-label='inherit'
    onClick={this.snackbarclose}
    
    >x</IconButton>
]}
/>
<Modal 
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            

          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
            View Project Details 
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
           
            <span style={{margin: '70px'}}>Progress</span>
            <div class="container">
  
      
      <div style={{ width: 200, height: 200 }}>
            <CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={{
    // Customize the root svg element
    root: {},
    // Customize the path, i.e. the "completed progress"
    path: {
      // Path color
      stroke: `rgba(62, 152, 199, ${percentage / 100})`,
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Customize transition animation
      transition: 'stroke-dashoffset 0.5s ease 0s',
      // Rotate the path
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the circle behind the path, i.e. the "total progress"
    trail: {
      // Trail color
      stroke: '#ff3385',
      
      // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
      strokeLinecap: 'butt',
      // Rotate the trail
      transform: 'rotate(0.25turn)',
      transformOrigin: 'center center',
    },
    // Customize the text
    text: {
      // Text color
      fill: '#ff0844',
      // Text size
      fontSize: '16px',
    },
    // Customize background - only used when the `background` prop is true
    background: {
      fill: '#ff0844',
    },
  }}
/>
</div>
    
 
<Card style={{ width: '30rem' }} className='cards1s'>
      <Card.Body>
      <div class="col-sm">
       
        <span className='vv'>{this.props.projectname} </span>
       
          <Badge bg={statuscolor}>{this.props.status}</Badge>
        
        
        </div>
      
        
      </Card.Body>
    </Card>
    <Card style={{ width: '30rem' }} className='cardsss1'>
      <ListGroup variant="flush">
        <ListGroup.Item><img src={idicon}/>  ProjectTeamId:   {this.props.teamid}</ListGroup.Item>
        <ListGroup.Item><img src={depicon}/>ProjectManager:   {this.props.managerr}</ListGroup.Item>
        <ListGroup.Item><img src={micon}/> Department:        {this.props.depart}</ListGroup.Item>
        <ListGroup.Item><img src={idicon}/> ProjectId:        {this.props.projectid}</ListGroup.Item>
        <ListGroup.Item><img src={idicon}/> ClientId:         {this.props.clientid}</ListGroup.Item>
        <ListGroup.Item><img src={cicon}/> ClientName:        {this.props.Clientname}</ListGroup.Item>
      </ListGroup>
    </Card>
      {/* <Card style={{ width: '10rem' }} className='cardss'>
      <Card.Body>
      <div class="col-sm">
        <Card.Title className='fontst'><sup>₹</sup><b>{this.props.cost}</b></Card.Title>
        <span className='vv'>Cost</span>
        <img src={cost}/>
        </div>
      
        
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' }} className='cardsss'>
      <Card.Body>
      <div class="col-sm">
        <Card.Title className='fontst'><sup></sup><b>{this.props.duration}Month</b></Card.Title>
        <span className='vv'>duration</span>
        <img src={duration}/>
        </div>
      
        
      </Card.Body>
    </Card> */}
    {/* <Card style={{ width: '25rem' }} className='date1'>
      <Card.Body>
      <div class="col-sm">
        <span><b>StartDate:</b> {start} | <b>EndDate:</b>{end} </span><img src={date}/>
        
     
        </div>
        
      
        
      </Card.Body>
    </Card> */}
     
</div>
          
           
            </Modal.Body>
            <img src={svgg} id='d'/>
            <Modal.Footer>
              <Button className='Button' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal></div>);
    }
}