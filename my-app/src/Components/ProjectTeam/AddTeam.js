
import React, { Component } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
export default class Addteam extends Component{

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
    fetch('http://localhost:5183/api/ProjectTeams', {
        method: 'POST',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          
        },
        body:JSON.stringify({
           
                  
            "projectTeamName": event.target.teamname.value,
            "projectTeamManager": event.target.manager.value,
            "projectTeamMember": event.target.member.value,
            "workLocation": event.target.Worklocation.value,
             "teamEmail": event.target.ProjectTeamEmail.value,
           
        }),
    }).then(response => response.text())
        .then(data => {this.setState({snackbaropen:true,snackbarmsg:'Team added Successfully!!!'})})    
        .catch(error => {this.setState({snackbaropen:true,snackbarmsg:'Team added Failed'})})



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
              Add Team
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form  onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="teamname">
              <Form.Label>Project Team Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Project Team Name" pattern='[a-zA-Z]+'   required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="manager">
              <Form.Label>Project Team Manager</Form.Label>
              <Form.Control type="text" placeholder="Enter Project Team Manager"required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="member">
              <Form.Label>TeamMember</Form.Label>
              <Form.Control type="number" placeholder="Project TeamMember" pattern='[0-9]' required/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="Worklocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location"required />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProjectTeamEmail">
              <Form.Label>Project TeamEmail</Form.Label>
              <Form.Control type="email"  placeholder="Enter TeamEmail" required />
             
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