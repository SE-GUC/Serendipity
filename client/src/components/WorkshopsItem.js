import React, { Component } from 'react'
import '../App.css'

export class WorkshopsItem extends Component {
  getStyle = () => {
    return {
      backgroundColor : '#f4f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.current.reviewed? 'line-through':'none'
    }

  }

  render () {
    const {_id,title,eduOrganisation,educator,price} = this.props.current
    return(
        <div style={this.getStyle()}>
             <h1>Title: {title}</h1>
            <p>eduOrganisation: {eduOrganisation}</p>
            <p>educator: {educator}</p>
            <p>price: {price}</p>
            <p>
              <button onClick={this.props.delWorkshops.bind(this,_id)} style={btnStyle}>delete</button>
              <button onClick={this.props.updateWorkshops.bind(this,_id)} style={btnStyle1}>update</button>
              <button onClick={this.props.applyWorkshop.bind(this,_id)} style={btnStyle1}>apply</button>

          </p>
         

        </div>
    )
  }
  
}

const btnStyle={
  color: 'white',
  background:'red',
  fontSize: 20,
  borderColor: 'black',
  borderWidth: 3,
  borderRadius:'80%',
  cursor:'pointer'
  // float:'down-right'
}
const btnStyle1={
    color: 'white',
    background:'red',
    fontSize: 20,
    borderColor: 'black',
    borderWidth: 3,
    borderRadius:'80%',
  cursor:'pointer'
  // borderRadius:'50%',
  // cursor:'pointer',
  // float:'down-right'
 }
export default WorkshopsItem