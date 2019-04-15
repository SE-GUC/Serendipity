// import React, { Component } from 'react'
// import axios from 'axios';
// import setAuthToken  from '../../helpers/setAuthToken'
// import { connect } from 'react-redux';
// import { login } from '../../globalState/actions/authActions';
// import PropTypes from 'prop-types';

// export class LoginPage extends Component {
//   state={
//     name:'',
//     email:''
//   }
//   login = (password,email) => {
//     const userdata= {password:password ,email:email}
//     console.log(userdata)
// 		this.props.login(userdata);
// 	};
//   // login(email,password){
//   //   console.log(password)
//   //   console.log(email)
//   //   axios.post("localhost:5000/api/educationalOrganizations/login",
//   //   { password:password,email:email})
//   //   .then( res => {
//   //     		const { token } = res.data
//   //     		localStorage.setItem('jwtToken', token)
//   //     		setAuthToken(token)
//   //     		alert('right data')
//   //     	})
//   //     	.catch(err => console.log('Invalid User'),alert('Invalid data'))
//   // }
//   // login(email,password){
//   //   axios.post("localhost:5000/api/educationalOrganizations/login",
//   //   { password:password,email:email})
//   //       .then(res =>this.setState({login:[...this.state.LoginPage,res.data]}))
//   //       .catch(e=>"error")
//   //       alert('Login success!!')
//   // }
//   //////
// //   import setAuthToken  from '../../helpers/setAuthToken'
// // export const login = (userData) => dispatch => {
// // 	axios.post('http://localhost:5000/api/login', userData)
// // 	.then( res => {
// // 		const { token } = res.data
// // 		localStorage.setItem('jwtToken', token)
// // 		setAuthToken(token)
// // 		alert('right data')
// // 	})
// // 	.catch(err => console.log('Invalid User'),alert('Invalid data'))
	
// onChange=(e)=>this.setState({[e.target.name]:e.target.value});

// onSubmit=(e)=>{
//   e.preventDefault();
//   if(!this.state.email)
//   alert('please enter email!')
//   else if(!this.state.password){
//     console.log(this.state.email)
//     console.log(this.state.password)
//   alert('please enter password!')
//   }

//   else{
//     console.log(this.state.email)
//     console.log(this.state.password)
//   this.login(this.state.email,this.state.password);
//   }

//  }
// // 	};
//   //////
//   render() {
//     return (
//       <div>
        
// 					<label>Email <input name="email" type="email" value={this.state.email}  onChange={this.onChange} /> <br/></label>
//           <p>typed :{this.state.email}</p>
//           <label>Password <input name="password" type="string" value={this.state.password} onChange={this.onChange}/> <br/> </label>
//           <p>typed :{this.state.password}</p>
//           <input 
//           type="submit" 
//           value="LOGIN" 
//           onClick={this.onSubmit}
//           //className="btn"
//          // style={{flex: '1'}}
//         />
//           {/* <button style={btnStyle} onClick={this.login}>Login</button> */}
//       </div>
//     )
//   }
// }
// const btnStyle={
//   background:'#000000',
//   color:'#fff',
//  border:'none',
//  padding:'15px 17px',
//  borderRadius:'pointer',
//  float:'center'
  
//   }
//   LoginPage.propTypes = {
//     // getBooks: PropTypes.func.isRequired,
//     // books: PropTypes.array.isRequired,
//     login: PropTypes.func.isRequired
//     //logout: PropTypes.func.isRequired,
//   };
//   const mapStateToProps = state => ({
//     //books: state.books.books,
//     isLoggedIn: state.auth.isLoggedIn,
//     loggedUser: state.auth.loggedUser,
//   });
  
// //export default LoginPage
// export default connect(mapStateToProps,{ login })(LoginPage);
