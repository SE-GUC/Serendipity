import React, { Component } from 'react'
import '../App.css'

export class viewWorkshopEduOrgItem extends Component {
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
        </div>
    )
  }
  
}
export default viewWorkshopEduOrgItem