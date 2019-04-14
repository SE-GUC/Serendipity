import React, { Component } from 'react';
import axios from 'axios';
import Axios from 'axios';
//import './';
//import Popup from 'reactjs-popup'
//import { useAlert } from 'react-alert'

class MasterclassUpdate extends Component {
 
    state={
        title:'',
        duration:'',
        price:'',
        description:'',
        location:'',  
        Eduorganization:'',
        courseIDs :'',
        MasterclassID:"" 
        //workshopsIDs :'',
        //applicants:''
     
    }
    choose = ()=>{
        Axios
        .get(`http://localhost:5000/api/masterclasses/${this.state.MasterclassID}`)
        .then(res => this.setState({
          title:res.data.data.title,duration:res.data.data.duration,price:res.data.data.price,description:res.data.data.description, location:res.data.data.location,Eduorganization:res.data.data.Eduorganization,courseIDs:res.data.data.courseIDs//,workshopsIDs:workshopsIDs
          }))
        .then(console.log(this.state))
        .catch(error=>console.log(error))
    }

    updateMasterclass=(title,duration,price,description,location,Eduorganization,courseIDs,id)=>{
    
      axios.put(`http://localhost:5000/api/masterclasses/${id}`,{

        title:title,duration:duration,price:price,description:description, location:location,Eduorganization:Eduorganization,courseIDs:courseIDs//,workshopsIDs:workshopsIDs
      }
     
      ).then(res => {this.setState({masterclass:[...this.state.MasterclassCreate,res.data]})})
      
    
      .catch(e=> "error")
      alert('Masterclass was updated succesfully')


        // <Popup> 
        //   <div> 
        //     Admincouldn't be created, you did not meet validations, try again
        //   </div>
        // </Popup>


     // )
    }
      
     
     onSubmit=(e)=>{
       e.preventDefault();
       if(!this.state.title){
         alert('title cannot be empty')
       }
       else if(!this.state.duration||!this.state.location||!this.state.price||!this.state.description||!this.state.Eduorganization)
       alert('validations not satisfied,try again :)!')
      
      else
       
       
       this.updateMasterclass(this.state.title,this.state.duration,this.state.price,this.state.description,this.state.location,this.state.Eduorganization,this.state.courseIDs,this.state.MasterclassID);//,this.workshopsIDs);
     
   
      }
    
   onChange=(e)=>this.setState({[e.target.name]:e.target.value});
   onChangeCourses=(e)=>{
    const ID=e.target.value+"" 
    var newIDs=this.state.courseIDs
    if(ID.length===24)
      newIDs.push(ID)
     this.setState({courseIDs:newIDs})
     console.log(newIDs)
     newIDs=[]
    }
   
   render() {
    
    return (
        <div>
              <input
                    name="MasterclassID"
                    type="text"
                    value={this.state.MasterclassID}
                    onChange={this.onChange} 
                    />
                    <button onClick={this.choose}>Submit ID</ button>
            <div >
            <h1>update Masterclass </h1>
            <form onSubmit={this.onSubmit}>
            <label>
                Title:
                <input
                    name="title"
                    type="text"
                    placeholder={this.state.title}
                    value={this.state.title}
                    onChange={this.onChange} 
                    />
                </label>
                
                <br />
                <br />
                <label>
                Duration:
                <input
                    name="duration"
                    type="text"
                    placeholder={this.state.duration}
                    value={this.state.duration}
                    onChange={this.onChange} 
                    />
                </label>
                <br />
                <br />
                <label>
                Price:
                <input
                    name="price"
                    type="number"
                    placeholder={this.state.price}
                    value={this.state.price}
                    onChange={this.onChange} 
                    />
                </label>
                <br />
                <br />
                <label>
                Description:
                <input
                    name="description"
                    type="text"
                    placeholder={this.state.description}
                    value={this.state.description}
                    onChange={this.onChange} 
                    />
                </label>
                <br />
                <br />
                <label>
                Location:
                <input
                    name="location"
                    type="text"
                    placeholder={this.state.location}
                    value={this.state.location}
                    onChange={this.onChange} 
                    />
                </label>
                <br />
                <br />
            
            
            
                <label>
                Education organization:
                <input
                name="Eduorganization"
                type="text"
                placeholder={this.state.Eduorganization}
                value={this.state.Eduorganization}
                onChange={this.onChange} 
                    />
                </label>
                <br />
                <br />
                <label>
                Courses:
                <input
                    name="courseIDs"
                    type="text"
                //     placeholder={this.state.courseIDs}
                // value={this.state.courseIDs}
                onChange={this.onChangeCourses} 
                    />
                </label>
                <br />
                <br />
            
            
                
                {/* <button onClick={this.addjob.bind(this)} style={btnStyle}> Submit</button> */}
                <input 
                type="submit" 
                value="Submit" 
                //className="btn"
                // style={{flex: '1'}}
                />
                </form>
                </div>
              </div>  
    );
  }
}
const btnStyle={
background:'#000000',
color:'#fff'

}
export default MasterclassUpdate;
