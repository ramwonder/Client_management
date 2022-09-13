import {Table,Button,ButtonToolbar} from 'react-bootstrap';


import { Component } from 'react';
import './Table.css';
import AddClient from './AddClient';
import EditClient from './EditClient';
import addicon from '../follower.png'
import deleteicon from '../delete.png'
import Editicon from '../clipboard (1).png'
// import UpdateFeedback from './UpdateFeedback';
import Home from '../Home1';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,useParams} from 'react-router-dom';

class Getclient extends Component {
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
        fetch('http://localhost:5055/api/Clients',{headers:{"Authorization":`Bearer${token}`}})
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
        fetch('http://localhost:5055/api/Clients/'+depid, {
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
       
       {/* <UpdateFeedback  show={this.state.updateModelShow}  onHide={updateModelClose}
       id={id}
     
       feedback={feedback}/> */}
    </ButtonToolbar></td>
            </tr>
            
            
        )}
        
      </tbody>
    </Table>
 
    </div>
  );

    }
  }
export default Getclient ;