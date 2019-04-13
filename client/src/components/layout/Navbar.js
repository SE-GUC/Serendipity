// Navbar.js
//trail yan

import React, { Component } from 'react';

class Navbar extends Component {
    render() {
        return(
            <nav class="navbar navbar-expand-lg navbar-light bg-light">
                <a class="navbar-brand" href="#">LirtenHub</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav ml-auto">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/loginp">Login</a>
                        </li>
                        <li class="nav-item">
                                
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;