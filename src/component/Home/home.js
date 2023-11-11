import React, { Component } from 'react'


export default class HomeTab extends Component{

    render(){
        
        return(
        <div className='m-3'>
            <div className="d-flex justify-content-between">

                <h3>Hotel list</h3>
                <a href='addhome' className='btn btn-dark'>Add Hotel</a>
            </div>
            <table class="table pt-5">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </table>
        </div>

        );

    }


}