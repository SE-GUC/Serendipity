import React, { Component } from 'react';

class ExpertCard extends Component {
 
onClick = function(e){

}

  render() {
      const style = {
        backgroundColor: '#00000',
        color: '#e5e8e',
            margin: 20,
            padding: 20, 
            backgroundColor:'#00000',
           borderStyle: 'outset',
            width : 500 ,
      }
      
        
    return(
        <div style={style}>
            <p>{"Name                   :"}{this.props.name}</p>
            <p>{"Email                  :"}{this.props.email}</p>
            <p>{"Skills                 :"}{this.props.skills}</p>
            <p>{"Available Daily Hours  :"}{this.props.availableDailyHours}</p>
            <p>{"Location               :"}{this.props.location}</p>
            <p>{"Review                 :"}{this.props.reviews}</p>
        <button onClick = {this.onClick}> Book an Assessment  </button>
        </div>
    )
  }
}

export default ExpertCard;