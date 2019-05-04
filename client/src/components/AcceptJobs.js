import React, { Component } from "react";
import PartnerIdComponentForm from './PartnerIdComponentForm'
import axios from "axios"
import Jobacc from "./Jobacc";
class AcceptJobs extends Component {
    constructor(props) {
        super(props);
        this.state = {
          job: [],
          error: false,
          loading: true,
          clicked: false
        };
      }
    
      getJobs = (e) =>  {
        e.preventDefault();
        const partner = e.target.elements.id.value;
        console.log(partner)
        axios.get(`http://localhost:5000/api/partners/${partner}/jobs`);
        window.location.reload();
      };
      render() {
        return (
          <div>
            <PartnerIdComponentForm getJobs={this.getJobs}/>
            <Jobacc getJobs={this.getJobs}
             job={this.state.job}
        />
        
          </div>
    
    );
      }
    }


export default AcceptJobs;