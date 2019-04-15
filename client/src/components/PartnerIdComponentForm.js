import React from 'react';
const PartnerIdComponentForm = (props) => {
    return (
<form onSubmit={props.getPartner}> 
<h5>Partner id:</h5>
    <input type="text" name="id"/>
    <button>ok</button>
    <h6>*this will be removed later and will use the id of the signed in Partner</h6>
</form>
    );
}
export default PartnerIdComponentForm;