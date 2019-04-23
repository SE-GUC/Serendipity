import React from 'react';
import {Link} from 'react-router-dom';

const EduOrgForm = (props) => {
    return (
<form onSubmit={props.getEduOrg}> 
<h5>Educational Organization id:</h5>
    <input type="text" name="id"/>
    <button>ok</button>
    <br></br>
    <br></br>
    
    {/* <Link  to="/eduorg/delete">Delete my account</Link>{'       |      '} */}
    
    {/* <Link  to="/eduorg/update">Update my account</Link>{' '} */}
   
</form>
    );
    
}
export default EduOrgForm;