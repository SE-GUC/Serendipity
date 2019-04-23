import React from 'react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
// import { logoutUser } from '../../globalState/actions/authentication';
import Navbar from './layout/Navbar';

// import { logoutUser } from '../../globalState/actions/authentication';
// onLogout(e) {
//     e.preventDefault();
//     this.props.logoutUser(this.props.history);
// }
const EduOrgForm = (props) => {
    return (
        
<form onSubmit={props.getEduOrg}> 

<h5>Educational Organization id:</h5>
{/* here takes token */}
    <input type="text" name="id"/>
     <button>ok</button>
    <br></br>
    <br></br>
    
    <Link  to="/eduorg/delete">Delete my account</Link>{'       |      '}
    
    <Link  to="/eduorg/update">Update my account</Link>{' '}
   
</form>
    );
    
}
export default EduOrgForm;