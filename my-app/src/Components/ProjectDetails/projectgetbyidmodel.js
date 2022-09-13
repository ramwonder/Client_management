import {Table,Button,ButtonToolbar,Modal,Card} from 'react-bootstrap';
import Badge from 'react-bootstrap/Badge';
import { Component } from 'react';
import ViewProjectgetbyid from './projectgetbyid';
import {BrowserRouter,Route,Routes,useNavigate,Navigate,useHref,Link,} from 'react-router-dom';
import './bar.css';

import cost from './cost.png';
import duration from './repeat.png';
import date from './date.png';

import { CircularProgressbar ,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

class  Viewprojectmodel extends Component {
    constructor(props){
        super(props);
        this.state={supps:[],addModelShow:false,editModelShow:false,updateModelShow:false}
    }
   
    refreshList(){
        // this.setState({
        //     sups:[{"Id":1,"Name":"IT"}]
        // })
        let token=localStorage.getItem('login')
        if(token)
        {
        fetch('http://localhost:5174/api/Projects/'+this.props.value,{headers:{"Authorization":`Bearer${token}`}})
        .then(response=>response.json())
        .then(data=>{
           
            this.setState({
                supps:data
            });
        }
            
            );
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
        const{supps,id,name,email,phone,location,feedback}=this.state;
        let addModelClose=()=>this.setState({addModelShow:false});
        let editModelClose=()=>this.setState({editModelShow:false});
        let updateModelClose=()=>this.setState({updateModelShow:false});
        const percentage = supps.progress;
        const start=supps.startDate?.slice(0,10);
        const end=supps.endDate?.slice(0,10);
      
        
        
        const statuscolor=supps.status=="Active"?'success':'danger';
    
      return (   
        <div>
          
           <Modal 
            {...this.props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title id="contained-modal-title-vcenter">
              <h1>View Project</h1>
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
       
        <span className='vv'>{supps.projectName} </span>
       
          <Badge bg={statuscolor}>{supps.status}</Badge>
        
        
        </div>
      
        
      </Card.Body>
    </Card>
      <Card style={{ width: '10rem' }} className='cardss'>
      <Card.Body>
      <div class="col-sm">
        <Card.Title className='fontst'><sup>₹</sup><b>{supps.projectCost}</b></Card.Title>
        <span className='vv'>Cost</span>
        <img src={cost}/>
        </div>
      
        
      </Card.Body>
    </Card>
    <Card style={{ width: '13rem' }} className='cardsss'>
      <Card.Body>
      <div class="col-sm">
        <Card.Title className='fontst'><sup></sup><b>{supps.duration}Month</b></Card.Title>
        <span className='vv'>duration</span>
        <img src={duration}/>
        </div>
      
        
      </Card.Body>
    </Card>
    <Card style={{ width: '25rem' }} className='date1'>
      <Card.Body>
      <div class="col-sm">
        <span><b>StartDate:</b> {start} | <b>EndDate:</b>{end} </span><img src={date}/>
        
     
        </div>
        
      
        
      </Card.Body>
    </Card>
     
</div>
     
           
    
    </Modal.Body>
            <Modal.Footer>
              <Link to="/" >
              <Button className='Button' onClick={()=>window.location.reload()}  >Close</Button>
              </Link>
            </Modal.Footer>
          </Modal>
          
 
    </div>
  );
      

    }
  }
export default  Viewprojectmodel;