import React, { Component } from 'react'
import '../App.css'

export class PartnerItem extends Component {
  getStyle = () => {
    return {
      backgroundColor : '#f4f4f4f4',
      borderBottom: '1px #ccc dotted',
      textDecoration: this.props.current.reviewed? 'line-through':'none'
    }

  }

  render () {
    const {email,name,description,boardOfMembers,fieldOfWork,vacancies,partners,
    pastProjects} = this.props.current
    return(

        <div style={this.getStyle()}>
             <p>Email: {email}</p>
            <p>Name: {name}</p>
            <p>Description: {description}</p>
            <p>Partners: {partners}</p>
            <p>Board Of Members: {boardOfMembers}</p>
            <p>Field Of Work: {fieldOfWork}</p>
            <p>Vacancies: {vacancies.map(item => <li>{item.title}</li>)}</p>
            <p>Past Projects: {pastProjects}</p>
        
<br></br>

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
export default PartnerItem