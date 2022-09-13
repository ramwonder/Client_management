
import React, { Component } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
export default class Editclient extends Component{

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
            
        }),
    }).then(response => response.text())
        .then(data => {this.setState({snackbaropen:true,snackbarmsg:'Client Updated Successfully!!!'})})    
        .catch(error => {this.setState({snackbaropen:true,snackbarmsg:'Client update Failed'})})



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
              Edit Client
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form  onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="clientid">
              <Form.Label>Suppiler Id</Form.Label>
              <Form.Control type="text" placeholder="Enter client id" disabled defaultValue={this.props.id}/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="clientname">
              <Form.Label>Suppiler Name</Form.Label>
              <Form.Control type="text" placeholder="Enter client name" pattern='[a-zA-Z]+'  required  defaultValue={this.props.name}/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Enter email"required defaultValue={this.props.email} />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="phone">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter phone number"required pattern='^[789][0-9]{9}$' defaultValue={this.props.phone} />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location"required defaultValue={this.props.location}/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="CompanyName">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Company Name"  required defaultValue={this.props.companyname}/>
             
            </Form.Group>
           
      
            <Button variant="primary" className='Button' type="submit">
              Update Client
            </Button>
          </Form>
            </Modal.Body>
            <Modal.Footer>
              <Button className='Button' onClick={this.props.onHide}>Close</Button>
            </Modal.Footer>
          </Modal></div>);
    }
}