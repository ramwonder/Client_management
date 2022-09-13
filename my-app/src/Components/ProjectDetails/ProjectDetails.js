import {Table,Button,ButtonToolbar} from 'react-bootstrap';


import { Component } from 'react';
import './Table.css';
import Moredetails  from './moreDetails';
import backicon from './left-arrow.png';

import deleteicon from '../delete.png'

// import UpdateFeedback from './UpdateFeedback';
import Home from '../Home1';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,useParams} from 'react-router-dom';

class FullProject extends Component {
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
        fetch('http://localhost:5174/api/Projects',{headers:{"Authorization":`Bearer${token}`}})
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
     
        const{sups,projectname,cost,duration,status,startdate,enddate,progress,Error,back}=this.state;
        let addModelClose=()=>this.setState({addModelShow:false});
        let editModelClose=()=>this.setState({editModelShow:false});
        let updateModelClose=()=>this.setState({updateModelShow:false});
        if(back)
        {
          return <Navigate to={'/project'} />;
          
      
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
          <th>Project Id</th>
          
          <th>ProjectName</th>
          <th>Options</th>
          
        </tr>
      </thead>
      <tbody>
        {sups.map(sup=>
            <tr key={sup.projectId}>
              <td>{sup.projectId}</td>
                <td>{sup.projectName}</td>
                
                <td> <ButtonToolbar>
       
       <Button className="mr-2" variant='White'  id='Butt' onClick={()=>this.setState({editModelShow:true,projectname:sup.projectName,cost:sup.projectCost,progress:sup.progress,duration:sup.duration,status:sup.status,startdate:sup.startDate,enddate:sup.endDate})}>View More</Button>
      
       <Moredetails  show={this.state.editModelShow}  onHide={editModelClose}
      
      projectname={projectname}
      cost={cost}
      progress={progress}
      duration={duration}
      startdate={startdate}
      enddate={enddate}
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
export default FullProject ;