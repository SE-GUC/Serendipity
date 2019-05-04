import React from 'react';

const MemberID = (props) => {
    return (

<form onSubmit={props.getMember}> 
<h5>Member id:</h5>
    <input type="text" name="id"/>
    <button>ok</button>
    
</form>);

}
export default MemberID;