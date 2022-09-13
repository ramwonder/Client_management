import {Table,Button,ButtonToolbar,Card,DropdownButton,Dropdown} from 'react-bootstrap';


import { Component } from 'react';

import './projectTeam.css';

import emailicon from './email.png'
import locationicon from './location.png'
import groupicon from './team (1).png'
import managericon from './manager (1).png'
import nameicon from './id-card.png'
import addicon from '../follower.png'
import deleteicon from '../delete.png'
import Editicon from '../clipboard (1).png'
import Addteam from './AddTeam';
import EditTeam from './EditTeam';
// import UpdateFeedback from './UpdateFeedback';
import Home from '../Home1';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,useParams} from 'react-router-dom';

class Team extends Component {
    constructor(props){
        super(props);
        this.state={sups:[],addModelShow:false,editModelShow:false,updateModelShow:false,Error:''}
    }
   
    refreshList(){
        // this.setState({
        //     sups:[{"Id":1,"Name":"IT"}]
        // })
        let token=localStorage.getItem('login')
        if(token)
        {
        fetch('http://localhost:5183/api/ProjectTeams',{headers:{"Authorization":`Bearer${token}`}})
        .then(response=>response.json())
        .then(data=>{
            this.setState({
                sups:data
            });
        }
            
            );
      }
      else{
        this.state.Error='404 Error'
        
      }
    }
    componentDidMount()
    {
        this.refreshList();
    }
    componentDidUpdate()
    {
        this.refreshList();
    } 
    deletedep(depid)
    {
       if(window.confirm('are you sure?'))
       {
        fetch('http://localhost:5183/api/ProjectTeams/'+depid, {
               method: 'DELETE',
               headers: {
                   'Accept': 'application/json',
                   'Content-Type': 'application/json'
               }
        });
       } }
    render() {
        const{sups,id,name,email,phone,location,companyname,createdDate,Error}=this.state;
        let addModelClose=()=>this.setState({addModelShow:false});
        let editModelClose=()=>this.setState({editModelShow:false});
        let updateModelClose=()=>this.setState({updateModelShow:false});
      return (   
        <div>
         <Home/>
         <center>
           <h1 style={{color:"red"}}>{Error}</h1>
           </center>
           <ButtonToolbar>
        <Button variant='danger' className='buttupdate' id='Butt' onClick={()=>this.setState({addModelShow:true})}><img src={addicon}/>Add </Button>
    <Addteam
    show={this.state.addModelShow}
    onHide={addModelClose}
   />
    </ButtonToolbar>
           <Table striped bordered hover className='eTable121' >
            <thead>
                <th> Team Id</th>
                <th>Project Team Name</th>
                <th>Project Team Manager</th>
                <th>Project Team Member</th>
                <th>WorkLocation</th>
                <th>Project Team Email</th>
                <th>Options</th>
                
            </thead>
            </Table>
           <div class="container">
           {sups.map(sup=>
           <div>
  <div class="row">
    <div class="col-12">
      
      <Card border="light" id='ssure'style={{ width: '80rem',height: '4rem' }}>
        
        <Card.Body>
        <div class="row">
        <div class="col-1">
            
            <b>{sup.projectTeamId}</b>
            </div>
        <div class="col-2">
        <img src={nameicon }/>
        -
            {sup.projectTeamName}
            </div>
            <div class="col-2">
            <img src={managericon }/>
            -
            {sup.projectTeamManager}
            </div>
            <div class="col-2">
                
            <img src={groupicon }/>
            -
            {sup.projectTeamMember}

            </div>
            <div class="col-2">
            <img src={locationicon }/>
            -
            {sup.workLocation}

            </div>
            <div class="col-2">
            <img src={emailicon }/>
            -

            {sup.teamEmail}

            </div>
            <div class="col-1">
            
            
            <DropdownButton variant="outline-danger" id="dropdown-basic-button" title="">
      <Dropdown.Item onClick={()=>this.setState({editModelShow:true,id:sup.projectTeamId,name:sup.projectTeamName,email:sup.projectTeamManager,phone:sup.projectTeamMember,location:sup.workLocation,companyname:sup.teamEmail})}>Edit</Dropdown.Item>
      <EditTeam  show={this.state.editModelShow}  onHide={editModelClose}
       id={id}
       name={name}
       email={email}
       phone={phone}  
       location={location}
       companyname={companyname}
       />
      <Dropdown.Item onClick={()=>this.deletedep(sup.projectTeamId)}>Delete</Dropdown.Item>
    
    </DropdownButton>
            

            </div>
            
            </div>
        </Card.Body>
      </Card>
    </div>


  </div>
  <br></br>
  </div>
  
   
  )}
 
  
</div>
           {/* <ButtonToolbar>
        <Button variant='danger' className='buttupdate' id='Butt' onClick={()=>this.setState({addModelShow:true})}><img src={addicon}/>Add Client</Button>
    <AddClient 
    show={this.state.addModelShow}
    onHide={addModelClose}
   />
    </ButtonToolbar>
        <Table striped bordered hover className='eTable11' >
      <thead>
        <tr>
          <th>Client Id</th>
          
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Location</th>
          <th>Company Name</th>
          <th>CreatedDate</th>
          <th>Options</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        {sups.map(sup=>
            <tr key={sup.clientId}>
                <td>{sup.clientId}</td>
                <td>{sup.clientName}</td>
                <td>{sup.email}</td>
                <td>{sup.phone}</td>
                <td>{sup.location}</td>
                <td>{sup.companyName}</td>
                <td>{sup.createdDate}</td>
                <td> <ButtonToolbar>
       
       <Button className="mr-2" variant='white'  id='Butt' onClick={()=>this.setState({editModelShow:true,id:sup.clientId,name:sup.clientName,email:sup.email,phone:sup.phone,location:sup.location,companyname:sup.companyName,createdDate:sup.createdDate})}><img src={Editicon}/></Button>
      
       <EditClient  show={this.state.editModelShow}  onHide={editModelClose}
       id={id}
       name={name}
       email={email}
       phone={phone}  
       location={location}
       companyname={companyname}
       createdDate={createdDate}/>
    </ButtonToolbar></td>
    <td><ButtonToolbar>
       
    <Button variant='white' id='Butt' onClick={()=>this.deletedep(sup.clientId)}><img src={deleteicon}/></Button>
       
       <UpdateFeedback  show={this.state.updateModelShow}  onHide={updateModelClose}
       id={id}
     
       feedback={feedback}/>
    </ButtonToolbar></td>
            </tr>
            
            
        )}
        
      </tbody>
    </Table>
  */}
    </div>
  );

    }
  }
export default Team ;