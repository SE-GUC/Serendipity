// // Login.js
// //trial yan
// Login.js
//trial yan
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../../globalState/actions/authentication';
import classnames from 'classnames';

class Login extends Component {

    constructor() {
        super();
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        const user = {
            email: this.state.email,
            password: this.state.password,
        }
        this.props.loginUser(user);
    }

    componentDidMount() {
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/');
        }
    }

    componentWillReceiveProps(nextProps) {
        if(nextProps.auth.isAuthenticated) {
            this.props.history.push('/')
        }
        if(nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
    }
//
//  this.state.error?<h1>process could not be complete</h1>:this.state.loading?
// <div class="text-center">
// <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
// <div class="spinner-border"  style={spinnerStyle} role="status">
// <span class="sr-only">Loading...</span>
// </div>
// {/* <h1>loading please be patient</h1> */}
// </div>

//
    render() {
        const {errors} = this.state;
        return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
        <div class="text-center">
        <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
        <div class="spinner-border"  style={spinnerStyle} role="status">
        <span class="sr-only">Loading...</span>
        </div>
        {/* <h1>loading please be patient</h1> */}
        </div>:(
        <div className="container" style={{ marginTop: '50px', width: '700px'}}>
            <h2 style={{marginBottom: '40px'}}>Login</h2>
            <form onSubmit={ this.handleSubmit }>
                <div className="form-group">
                    <input
                    type="email"
                    placeholder="Email"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.email
                    })}
                    name="email"
                    onChange={ this.handleInputChange }
                    value={ this.state.email }
                    />
                    {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                </div>
                <div className="form-group">
                    <input
                    type="password"
                    placeholder="Password"
                    className={classnames('form-control form-control-lg', {
                        'is-invalid': errors.password
                    })} 
                    name="password"
                    onChange={ this.handleInputChange }
                    value={ this.state.password }
                    />
                    {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                </div>
                <div className="form-group">
                    <button style={BtnStyle} type="submit" class="btn btn-dark">
                        Login
                    </button>
                </div>
            </form>
        </div>
        )
    }
}
//className="btn btn-primary"
///later
//#e5e8e8 grey
//black #00000
//MONTSERRAT
const BtnStyle={
    background:'#000000',
    color:'#e5e8e8',
    textAlign:'center',
    fontFamily:'ariel',
    padding:'10px'
  }

  const spinnerStyle={
    //background:'#193E43',
    width: '5rem',
    height: '5rem',
    color:'#e5e8e8',
    textAlign:'center',
    fontFamily:'ariel',
    padding:'10px'
  }
  //later
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})

export  default connect(mapStateToProps, { loginUser })(Login)
// import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// // import { connect } from 'react-redux';
// import { loginUser } from '../../globalState/actions/authentication';
// import classnames from 'classnames';

// class Login extends Component {

//     constructor() {
//         super();
//         this.state = {
//             email: '',
//             password: '',
//             errors: {}
//         }
//         this.handleInputChange = this.handleInputChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleInputChange(e) {
//         this.setState({
//             [e.target.name]: e.target.value
//         })
//     }

//     handleSubmit(e) {
//         e.preventDefault();
//         const user = {
//             email: this.state.email,
//             password: this.state.password,
//         }
//         this.props.loginUser(user);
//     }

//     componentDidMount() {
//         if(this.props.auth.isAuthenticated) {
//             this.props.history.push('/');
//         }
//     }

//     componentWillReceiveProps(nextProps) {
//         if(nextProps.auth.isAuthenticated) {
//             this.props.history.push('/')
//         }
//         if(nextProps.errors) {
//             this.setState({
//                 errors: nextProps.errors
//             });
//         }
//     }
// //
// //  this.state.error?<h1>process could not be complete</h1>:this.state.loading?
// // <div class="text-center">
// // <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
// // <div class="spinner-border"  style={spinnerStyle} role="status">
// // <span class="sr-only">Loading...</span>
// // </div>
// // {/* <h1>loading please be patient</h1> */}
// // </div>

// //
//     render() {
//         const {errors} = this.state;
//         return this.state.error?<h1>process could not be complete</h1>:this.state.loading?
//         <div class="text-center">
//         <br></br><br></br> <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
//         <div class="spinner-border"  style={spinnerStyle} role="status">
//         <span class="sr-only">Loading...</span>
//         </div>
//         {/* <h1>loading please be patient</h1> */}
//         </div>:(
//         <div className="container" style={{ marginTop: '50px', width: '700px'}}>
//             <h2 style={{marginBottom: '40px'}}>Login</h2>
//             <form onSubmit={ this.handleSubmit }>
//                 <div className="form-group">
//                     <input
//                     type="email"
//                     placeholder="Email"
//                     className={classnames('form-control form-control-lg', {
//                         'is-invalid': errors.email
//                     })}
//                     name="email"
//                     onChange={ this.handleInputChange }
//                     value={ this.state.email }
//                     />
//                     {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
//                 </div>
//                 <div className="form-group">
//                     <input
//                     type="password"
//                     placeholder="Password"
//                     className={classnames('form-control form-control-lg', {
//                         'is-invalid': errors.password
//                     })} 
//                     name="password"
//                     onChange={ this.handleInputChange }
//                     value={ this.state.password }
//                     />
//                     {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
//                 </div>
//                 <div className="form-group">
//                     <button style={BtnStyle} type="submit" class="btn btn-dark">
//                         Login
//                     </button>
//                 </div>
//             </form>
//         </div>
//         )
//     }
// }
// //className="btn btn-primary"
// ///later
// //#e5e8e8 grey
// //black #00000
// //MONTSERRAT
// const BtnStyle={
//     background:'#000000',
//     color:'#e5e8e8',
//     textAlign:'center',
//     fontFamily:'ariel',
//     padding:'10px'
//   }

//   const spinnerStyle={
//     //background:'#193E43',
//     width: '5rem',
//     height: '5rem',
//     color:'#e5e8e8',
//     textAlign:'center',
//     fontFamily:'ariel',
//     padding:'10px'
//   }
//   //later
// Login.propTypes = {
//     loginUser: PropTypes.func.isRequired,
//     auth: PropTypes.object.isRequired,
//     errors: PropTypes.object.isRequired
// }

// const mapStateToProps = (state) => ({
//     auth: state.auth,
//     errors: state.errors
// })

// export  default (Login)