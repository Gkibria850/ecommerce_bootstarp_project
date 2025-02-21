import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import ProductImg from '../assets/images/eleven.jpg'

const Checkout = () => {
  const[paymentMethod, setPaymentMethod] = useState('cod');
  const handlePaymentMethod =(e) => {
    setPaymentMethod(e.target.value);
  };
  return (
    <>
    <Layout>
    <div className="container product-detail">
          
              <div className="row">
                    <div className="co-md-12">
                        <nav aria-label="breadcrumb py-4">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item " aria-current="page">Checkout</li>
                                    </ol>
                        </nav>
                    </div>
                </div>
                <div className="row">
                  <div className="col-md-7">
                    <h3 className="border-bottom  pb-3"> <strong>Billing Details</strong></h3>
                    <form action="" className='shadow m-3 '>
                      <div className="row m-3 py-3">
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label for="name">Name *</label>
                            <input type="text" className="form-control" id="name" required />
                          </div>
                        </div>
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label for="email">Email *</label>
                            <input type="email" className="form-control" id="email" required />
                          </div>
                        </div>
                       
                        <div className="col-md-12 mt-2">
                          <div className="form-group">
                            <label for="address">Address *</label>
                            <textarea className="form-control" id="address" rows={3}>
                              
                            </textarea>
                          </div>
                        </div>
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label for="phone">Phone *</label>
                            <input type="text" className="form-control" id="phone" required />
                          </div>
                        </div>

                        
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label for="city">City *</label>
                            <input type="text" className="form-control" id="city" required />
                          </div>
                        </div>
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label for="state">State *</label>
                            <input type="text" className="form-control" id="state" required />
                          </div>
                        </div>
                        <div className="col-md-6 mt-2">
                          <div className="form-group">
                            <label for="zip">Zip *</label>
                            <input type="text" className="form-control" id="zip" required />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="col-md-5">
                    <h3 className="border-bottom  pb-3"> <strong>Items</strong></h3>
                     <table className="table pb-5">
                                          <tbody>
                                            <tr>
                                              <th scope="col">
                                                <img src={ProductImg} width={80} alt=""/>
                                              </th>
                                              <th scope="col">
                                              <h4>Dummy Product Title</h4>
                                                <div className="d-flex align-items-center pt-3">
                                                
                                                  <span>$20</span>
                                                  <div className='ms-2'>
                                                  <button type="button" className="btn btn-size ms-1">S</button>
                                                  <button type="button" className="btn btn-size ms-1">Color</button>
                                                  </div>
                                                  
                  
                                                </div>
                                              </th>
                                              <th scope="col" valign='middle'>
                                                <input type="number" style={{width:'100px'}} value={1} className="form-control"/>
                                              </th>
                                             
                                            </tr>
                                          </tbody>
                                        </table>
                                         <table className="table pb-5">
                                                                <tbody>
                                                                  <tr>
                                                                    <th scope="col">
                                                                      <img src={ProductImg} width={80} alt=""/>
                                                                    </th>
                                                                    <th scope="col">
                                                                    <h4>Dummy Product Title</h4>
                                                                      <div className="d-flex align-items-center pt-3">
                                                                      
                                                                        <span>$20</span>
                                                                        <div className='ms-2'>
                                                                        <button type="button" className="btn btn-size ms-1">S</button>
                                                                        <button type="button" className="btn btn-size ms-1">Color</button>
                                                                        </div>
                                                                        
                                        
                                                                      </div>
                                                                    </th>
                                                                    <th scope="col" valign='middle'>
                                                                      <input type="number" style={{width:'100px'}} value={1} className="form-control"/>
                                                                    </th>
                                                                    
                                                                  </tr>
                                                                </tbody>
                                                              </table>

                                                                <div className="row  mx-5">
                                                                                <div className="col-md-12">
                                                                                    <div className="d-flex justify-content-between border-bottom pb-2">
                                                                                        <h4>Subtotal</h4>
                                                                                        <div className="ms-auto">$100</div>
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-between border-bottom py-2">
                                                                                        <h4>Shipping</h4>
                                                                                        <div className="ms-auto">$20</div>
                                                                                    </div>
                                                                                    <div className="d-flex justify-content-between border-bottom mb-3 py-2">
                                                                                        <h4>Total</h4>
                                                                                        <div className="ms-auto">$120</div>
                                                                                    </div>
                                                                                    
                                                                
                                                                                </div>
                                                                              </div>
                                                                              <h3 className="border-bottom">Payment Method</h3>
                                                                              <div className="form-check d-flex">
                                                                                          <div>
                                                                                            <input type="radio" onClick={handlePaymentMethod} checked={paymentMethod == 'stripe'} value={'stripe'} name="paymentMethod" id="creditCardRadio" required />
                                                                                            <label className="form-label" for="creditCardRadio">Stripe</label>
                                                                                          </div>
                                                                                        


                                                                                        <div className='ms-2'>
                                                                                        <input type="radio" onClick={handlePaymentMethod} checked={paymentMethod == 'cod'} value={'cod'} name="paymentMethod" id="creditCardRadio" required />
                                                                                        <label className="form-label" for="creditCardRadio">COO</label>
                                                                                        </div>
                                                                              </div>
                                                                              <div className="d-flex mb-4 justify-content-end">
                                                                                        <Link to="/checkout">
                                                                                        <button type="button" className="btn btn-primary btn-block">Payment Now</button>
                                                                                        </Link>
                                                                                    </div>
                  </div>
                </div>
      
    </div>
    </Layout>
    </>
  )
}

export default Checkout
