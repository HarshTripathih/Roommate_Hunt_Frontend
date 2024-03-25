import React, { Component } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import { logout } from '../../actions/user'

export class Navbar extends Component {
    logoutUserHandler() {
        const { logoutUser } = this.props
        logout(logoutUser)
        window.location.href = '/'
    }

    render() {
        const { isLoggedIn, currentUser } = this.props
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/"><img class="logo" src={logo} alt="logo" /></a>
                    <a class="navbar-brand text-white text-lg" href="/">The Roommate Hunt</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">

                        <div class="navbar-nav">
                            
                            <a class="navfloatright" href="mailto:harshtripathih321@gmail.com">Support</a>
                            {!isLoggedIn && <a class="navfloatright" href="/login">Dashboard</a>}
                            {isLoggedIn && currentUser === 'admin' && <a class="navfloatright" href="/admindashboard">Dashboard</a>}
                            {isLoggedIn && currentUser !== 'admin' && <a class="navfloatright" href="/userdashboard">Dashboard</a>}
                            <a class="navfloatright" href="/finder">Posting</a>
                            <a class="navfloatright" href="/chating">Chat</a>
                            {isLoggedIn ? (
                                <button class="active loginPageButton bg-success" onClick={() => this.logoutUserHandler()}>Logout</button>
                            ) : (
                                <a class="active loginPageButton navfloatright " href="/login">Login</a>
                            )}
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar
