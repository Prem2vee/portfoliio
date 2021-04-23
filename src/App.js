import React, { Component } from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Directory from './components/DirectoryComponent'
import './App.css';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Navbar dark color="primary">
                <div className="container">
                    <NavbarBrand href="/">Portfolio</NavbarBrand>
                </div>
                </Navbar>
                <Directory />
            </div>
        );
    }
}

export default App;