import React, { Component } from 'react'
import NavBar from './component/navbar';
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import HomeTab from './component/Home/home';
import BookingTab from './component/Bookings/bookingTab';
import CustomerData from './component/cutomerdata/customerdata';
import PaymentOption from './component/payment/paymentoption';
import AddHotel from './component/Home/addhotel';


export default class App extends Component{
 
  render(){

    return(
    
        <div>
            <NavBar/>
            <BrowserRouter>
              <Routes>
                <Route path='/'  element={<HomeTab/>}/>
                <Route path='/addhome'  element={<AddHotel/>}/>
                <Route path='/booking'  element={<BookingTab/>}/>
                <Route path='/customer'  element={<CustomerData/>}/>
                <Route path='/payment'  element={<PaymentOption/>}/>
              </Routes>
            </BrowserRouter>
    
        </div>
      
    


    );
  }

  }


