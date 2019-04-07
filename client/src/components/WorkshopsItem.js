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
    const {title,eduOrganisation,educator,price} = this.props.current
    return(
        <div style={this.getStyle()}>
             <h1>Title: {title}</h1>
            <p>eduOrganisation: {eduOrganisation}</p>
            <p>educator: {educator}</p>
            <p>price: {price}</p>

        </div>
    )
  }
  
}

const btnStyle={
 background:'#ff0000',
 color:'#ffff',
 border:'none',
 padding:'5px 10px',
 borderRadius:'pointer',
 float:'right'
}
export default WorkshopsItem