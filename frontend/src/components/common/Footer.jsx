import React from 'react'
import logoBlack from '../../assets/images/logo-white.png';
const Footer = () => {
  return (
    <footer>
        <div className="container">
          <div className="row mb-3">
                <div className="col-md-3">
                  <img src={logoBlack} alt="" width={150}/>
                  <p className='pt-1'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                </div>
                <div className="col-md-3">
                  <h5>Categories</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">Men's</a></li>
                    <li><a href="#">Women's</a></li>
                    <li><a href="#">Kid's</a></li>
                    <li><a href="#">Oters,s</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Help & Support</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">FAQ</a></li>
                    <li><a href="#">Shipping</a></li>
                    <li><a href="#">Returns</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                  </ul>
                </div>
                <div className="col-md-3">
                  <h5>Get in Touch</h5>
                  <ul className="list-unstyled">
                    <li><a href="#">+880188823775</a></li>
                    <li><a href="#">info@gmail .com</a></li>
                    <li><a href="#">Dhaka, Bangladesh</a></li>
                    <li><a href="#">Mon-Sat: 9 AM - 6 PM</a></li>
                  </ul>
                </div>


          </div>
          <div className="row sportlight py-3">
            <div className="col-md-4 ">
            <div className="d-flex justify-content-center">
            <h5>Mony Back Guarnteed</h5>
              
              <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" className="bi bi-bag" viewBox="0 0 16 16"><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"></path></svg></a>
              </div>
            </div>
            <div className="col-md-4">
            <div className="d-flex justify-content-center">
            <h5 className='ps-2'>Free Delivery</h5>
             <a href="" ><svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" fill="currentColor" class="bi bi-truck" viewBox="0 0 16 16"><path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5zm1.294 7.456A2 2 0 0 1 4.732 11h5.536a2 2 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456M12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2"></path></svg></a>
            </div>
            </div>
            <div className="col-md-4">
            <div className="d-flex justify-content-center">
              <h5>Secure Payment</h5>
              <a href=''><svg xmlns="http://www.w3.org/2000/svg" width="28" height="24" fill="currentColor" class="bi bi-cash icon" viewBox="0 0 16 16"><path d="M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4"></path><path d="M0 4a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H1a1 1 0 0 1-1-1zm3 0a2 2 0 0 1-2 2v4a2 2 0 0 1 2 2h10a2 2 0 0 1 2-2V6a2 2 0 0 1-2-2z"></path></svg></a>
            </div>
            </div>
          </div>
          <div className="col-12 text-center mt-3">
              <p>&copy; 2025 Your Ecommerce. All rights reserved.</p>
            </div>
        </div>

       </footer>
  )
}

export default Footer