import React, { Component } from 'react'


export default class AddHotel extends Component {

    render() {
        return (

            <div className='m-5'>
                <div class="card">

                    <div class="card-body">
                        <h5 class="card-title text-center">Hotel Registration</h5>
                        <p class="card-text">
                            <form className='m-5'>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Enter Hotel Name</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Enter Hotel address</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Enter Hotel price</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Enter Hotel amenities</label>
                                    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Discount</label>
                                    <input type="password" class="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className='text-center'>
                                    <button type="submit" class="btn btn-dark" >Submit</button>
                                </div>
                            </form>
                        </p>
                    </div>
                </div>

            </div>

        );
    }

}