import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

// const tokenB= localStorage.getItem('jwtToken');
// console.log(tokenB)

// if(edu){
//   axios.get(`http://localhost:5000/api/assessments/${edu}`, {
//     Authorization: tokenB
//   }).then((res) =>{
    
//     const id = edu;
//     const userName = res.data.userName;
//     const name = res.data.name;
//     const email = res.data.email;
//     const masterClasses = res.data.masterClasses;
//     const courses = res.data.courses;
//     const workshops = res.data.workshops;
//     const trainers = res.data.trainers;
//     const educators = res.data.educators;
//     const trainingPrograms = res.data.trainingPrograms;
//     const description = res.data.description;
//     const contract = res.data.contract;
//     const expirationDate = res.data.expirationDate;

//     this.setState({id})
//     this.setState({userName})
//     this.setState({name})
//     this.setState({email})
//     this.setState({masterClasses})
//     this.setState({courses})
//     this.setState({workshops})
//     this.setState({trainers})
//     this.setState({educators})
//     this.setState({trainingPrograms})
//     this.setState({description})
//     this.setState({contract})
//     this.setState({expirationDate})


//   })
// } else return;

function ContainedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="contained" color="secondary" disabled className={classes.button}>
        Disabled
      </Button>
      <Button variant="contained" href="#contained-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);
