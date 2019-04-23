import React, { Component } from 'react';
class MemberCard extends Component {
 
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
            <p>{"Emails                  :"}{this.props.email}</p>
            <p>{"Skills                 :"}{this.props.skills}</p>
            <p>{"Available Daily Hours  :"}{this.props.AvailableDailyHours}</p>
            <p>{"Location               :"}{this.props.location}</p>
            <p>{"Review                 :"}{this.props.reviews}</p>
           
        </div>
    )
  }
}

export default MemberCard;