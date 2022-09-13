
import React, { Component } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
export default class Addclient extends Component{

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
    fetch('http://localhost:5055/api/Clients', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          
        },
        body:JSON.stringify({
           
                  
            "clientName": event.target.clientname.value,
            "email": event.target.email.value,
            "phone": event.target.phone.value,
            "location": event.target.location.value,
             "companyName": event.target.CompanyName.value,
             "createdDate": event.target.CreatedDate.value
        }),
    }).then(response => response.text())
        .then(data => {this.setState({snackbaropen:true,snackbarmsg:'Client added Successfully!!!'})})    
        .catch(error => {this.setState({snackbaropen:true,snackbarmsg:'Client added Failed'})})



 }
    render(){
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
              Add Client
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form  onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="clientname">
              <Form.Label>Client Name</Form.Label>
              <Form.Control type="text" placeholder="Enter client name" pattern='[a-zA-Z]+'   required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number" pattern='^[789][0-9]{9}$' required/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location"required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="CompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text"  placeholder="Enter feed back"pattern='[a-zA-Z]+' required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="CreatedDate">
              <Form.Label>CreatedDate</Form.Label>
              <Form.Control type="datetime-local"  placeholder="Enter feed back" required />
             
            </Form.Group>
      
      
           
            <Button variant="primary" className='Button' type="submit">
              Add
            </Button>
          </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className='Button' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal></div>);
    }
}