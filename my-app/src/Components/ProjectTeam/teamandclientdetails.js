import {Table,Button,ButtonToolbar} from 'react-bootstrap';


import { Component } from 'react';
import '../ProjectDetails/Table.css';



import deleteicon from '../delete.png'

// import UpdateFeedback from './UpdateFeedback';
import Home from '../Home1';
import TeamMoredetails from './teamandprojectmodel';
import backicon from '../ProjectDetails/left-arrow.png';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,useParams} from 'react-router-dom';

class TeamandClient extends Component {
    constructor(props){
        super(props);
        this.state={sups:[],addModelShow:false,editModelShow:false,updateModelShow:false,Error:'',back:false}
    }
   
    refreshList(){
        // this.setState({
        //     sups:[{"Id":1,"Name":"IT"}]
        // })
        let token=localStorage.getItem('login')
        if(token)
        {
        fetch('http://localhost:5183/api/ProjectTeamprojects',{headers:{"Authorization":`Bearer${token}`}})
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
    
    render() {

        const{sups,teamid,projectname,managerr,depart,status,projectid,clientid,progress,Clientname,Error,back}=this.state;
        let addModelClose=()=>this.setState({addModelShow:false});
        let editModelClose=()=>this.setState({editModelShow:false});
        let updateModelClose=()=>this.setState({updateModelShow:false});
        if(back)
        {
          return <Navigate to={'/AllProjectTeamdetails'} />;
          
      
        };
      return (   
        <div>
         <Home/>
         <center>
           <h1 style={{color:"red"}}>{Error}</h1>
           </center>
           <Button className='butt113'  variant='light'  onClick={()=>this.setState({back:true})}><img src={backicon}/></Button>
        <Table striped bordered hover className='eTable111' >
      <thead>
        <tr>
          <th> Id</th>
          
          <th>ProjectManager</th>
          <th>Options</th>
          
        </tr>
      </thead>
      <tbody>
        {sups.map(sup=>
            <tr key={sup.id}>
              <td>{sup.id}</td>
                <td>{sup.projectManager}</td>
                
                <td> <ButtonToolbar>
       
       <Button className="mr-2" variant='White'  id='Butt' onClick={()=>this.setState({editModelShow:true,projectname:sup.projectName,teamid:sup.projectTeamId,progress:sup.progress,managerr:sup.projectManager,status:sup.status,depart:sup.department,projectid:sup.projectId,clientid:sup.clientId,Clientname:sup.clientName})}>View More</Button>
      
       <TeamMoredetails  show={this.state.editModelShow}  onHide={editModelClose}
      projectname={projectname}
      teamid={teamid}
      managerr={managerr}
      depart={depart}
    
      progress={progress}
       clientid={clientid}
       projectid={projectid}
      Clientname={Clientname}
      status={status}
 
    
      />
    </ButtonToolbar></td>
   
            </tr>
            
            
        )}
        
      </tbody>
    </Table>
 
    </div>
  );

    }
  }
export default TeamandClient ;