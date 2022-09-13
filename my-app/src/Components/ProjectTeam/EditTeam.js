
import React, { Component } from 'react';
import {Button,Modal,Form} from 'react-bootstrap';
import { Snackbar } from '@mui/material';
import IconButton from '@mui/material/IconButton';
export default class EditTeam extends Component{

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
    fetch('http://localhost:5183/api/ProjectTeams/'+event.target.teamid.value, {
        method: 'PUT',
        headers: {
            'accept': '*/*',
            'Content-Type': 'application/json'
          
        },
        body:JSON.stringify({
            "projectTeamId": event.target.teamid.value,
                  
            "projectTeamName": event.target.teamname.value,
            "projectTeamManager": event.target.manager.value,
            "projectTeamMember": event.target.member.value,
            "workLocation": event.target.Worklocation.value,
             "teamEmail": event.target.ProjectTeamEmail.value
            
        }),
    }).then(response => response.text())
        .then(data => alert("Update Successfully"))    
        .catch(error => alert("Failed"))



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
              Edit Team Details
              </Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form  onSubmit={this.handleSubmit}>
            <Form.Group className="mb-3" controlId="teamid">
              <Form.Label>Team Id</Form.Label>
              <Form.Control type="text" placeholder="Enter Team id" disabled defaultValue={this.props.id}/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="teamname">
              <Form.Label>Team Name</Form.Label>
              <Form.Control type="text" placeholder="Enter Team name" pattern='[a-zA-Z]+'  required  defaultValue={this.props.name}/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="manager">
              <Form.Label>Email</Form.Label>
              <Form.Control type="text" placeholder="Enter Manager name"required defaultValue={this.props.email} />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="member">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Enter Project Member"required pattern='[0-9]' defaultValue={this.props.phone} />
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="Worklocation">
              <Form.Label>Location</Form.Label>
              <Form.Control type="text" placeholder="Enter location"required defaultValue={this.props.location}/>
             
            </Form.Group>
            <Form.Group className="mb-3" controlId="ProjectTeamEmail">
              <Form.Label>Company Name</Form.Label>
              <Form.Control type="email" placeholder="Enter Project TeamEmail"  required defaultValue={this.props.companyname}/>
             
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