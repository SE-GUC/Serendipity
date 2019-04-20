// Navbar.js

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../globalState/actions/authentication';
import { withRouter } from 'react-router-dom';
// import logo from '../../logo.png'
class Navbar extends Component {

    onLogout(e) {
        e.preventDefault();
        this.props.logoutUser(this.props.history);
    }
    // src={user.avatar}
    render() {
        const {isAuthenticated, user} = this.props.auth;
        const authLinks = (
            <ul className="navbar-nav ml-auto">
                <a href="#" className="nav-link" onClick={this.onLogout.bind(this)}>
                    <img src={user.avatar} alt={user.name} title={user.name}
                        className="rounded-circle"
                        style={{ width: '25px', marginRight: '5px'}} />
                            Logout
                </a>
            </ul>
        )
      const guestLinks = (
        <ul  className="navbar-nav ml-auto">
            <li className="nav-item">
                <Link className="nav-link" to="/register">Sign Up</Link>
            </li>
            <li className="nav-item">
                <Link  className="nav-link" to="/login">Sign In</Link>
            </li>
        </ul>
      )
        return(
            <div >
            <nav  className="navbar navbar-expand-lg navbar-light bg-light"  >
            {/* <img src={logo} alt="Logo" width='50' height='50'/> */}
                <Link   className="navbar-brand" to="/about">LirtenHub</Link>
                <div  className="collapse navbar-collapse" id="navbarSupportedContent">
                    {isAuthenticated ? authLinks : guestLinks}
                </div>
            </nav>
            </div>
        )
    }
}
// const NavStyle={
//     background:'#193E43',
//     color:'#fff',
//     textAlign:'center',
//     padding:'10px'
    
//   }
//   const LinkStyle={
//     background:'#193E43',
//     color:'#fff',
//   }

Navbar.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    auth: state.auth
})

export default connect(mapStateToProps, { logoutUser })(withRouter(Navbar));