import React, { Component } from 'react'


export default class NavBar extends Component{

    

    render(){
        return(


        
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                        <a class="navbar-brand" href="/">HoBo</a>
                            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                            </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Dashborad</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="booking">Bookings</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="customer">Customer</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="payment">Payment</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    </div>
                </div>
            </nav>
        
        

        );
    }


}