import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';
import axios from 'axios';




class CardButton extends Component {
 
// onClick = function(_id){

//     axios
//     .put(`http://localhost:5000/api/accept/${_id}/jobs`)
    
//     .then(res => this.setState({ job: res.data.x, loading: false }))
//     .catch(error => this.ERROR.bind(error));
// }

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
       
            <p>{"id                   :"}{this.props.id}</p>
            <p>{"Name                   :"}{this.props.name}</p>
            <p>{"Email                  :"}{this.props.email}</p>
            <p>{"Skillss                 :"}{this.props.skillss}</p>
            <p>{"Available Daily Hours  :"}{this.props.availableDailyHours}</p>
            <p>{"Location               :"}{this.props.location}</p>
            <p>{"Review                 :"}{this.props.reviews}</p>

        <button onClick = {this.props.onClick.bind(this,this.props.id)}> Accept  </button>

        </div>
    )
  }
}

export default CardButton;