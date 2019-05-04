import React from 'react';
const Masterclassform = (props) => {
    return (
<form onSubmit={props.getMasterclass}> 
<h5>Masterclass id:</h5>
    <input type="text" name="id"/>
    <button>ok</button>
    <h6>*this will be removed later and will use the id of the signed in Masterclass or GET BY ID  Will BE REMOVED AT ALL SINCE THERE IS NO PROFILE FOR A MASTERCLASS </h6>
</form>
    );
    
}
export default Masterclassform;