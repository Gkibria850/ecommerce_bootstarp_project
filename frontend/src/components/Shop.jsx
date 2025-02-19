import React from 'react'
import Layout from './common/Layout'
import productimg3 from '../assets/images/eleven.jpg'
import productimg4 from '../assets/images/eight.jpg';
import { Link } from 'react-router-dom';

const Shop = () => {
  return (
    <Layout>
      <div className="container">
          <nav aria-label="breadcrumb py-4">
            <ol class="breadcrumb">
              <li class="breadcrumb-item"><a href="/">Home</a></li>
              <li class="breadcrumb-item active" aria-current="page">Shop</li>
              </ol>
          </nav>
          <div className="row">
            <div className="col-md-3">
              {/* Sidebar */}
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h5 className="mb-2">Categories</h5>
                  <ul className="list-group">
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Kids</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Men's</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Women's</label>
                    </li>
                    
                  </ul>


                </div>
          </div>

             
              <div className="card shadow border-0 mb-3">
                <div className="card-body p-4">
                  <h5 className="mb-2">Brands</h5>
                  <ul className="list-group">
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Puma</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Loto</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Arong</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Sara</label>
                    </li>
                    <li className="mb-2">
                      <input type="checkbox" name="category"/>
                      <label className="custom-control-label ps-2" for="category">Walton</label>
                    </li>
                    
                  </ul>
                </div>
                <div className="card-body p-4">
                    <h5>Price Range</h5>
                      <div className="custom-range">
                        <input type="range" min="0" max="100" className="custom-range-input" id="customRange1" />
                      </div>
                      <h5>Color Filter</h5>
                     <div className='d-flex'>
                     <div className="custom-control custom-checkbox mx-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label ps-2" for="customCheck1">Red</label>
                      </div>
                      <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label ps-2" for="customCheck1">Blue</label>
                      </div>
                     <div className="custom-control custom-checkbox mx-3">
                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                        <label className="custom-control-label ps-2" for="customCheck1">Green</label>
                      </div>
                     
                     </div>
                  </div>
              </div>
            </div>
            <div className="col-md-9">
              <div className="row">
              {/* Products */}
                         <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                                <Link to="/product">
                                <img src={productimg3} alt='' className='w-100'/>
                                </Link>
                                   
                              </div>
                              <div className="card-body pt-3">
                                <Link to="/product" >Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             
                             </div>
                          </div>
                          <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                                  <Link to="/product">
                                    <img src={productimg4} alt='' className='w-100'/>
                                    </Link>
                              </div>
                              <div className="card-body pt-3">
                              <Link to="/product">Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             
                             </div>
                          </div>
                          <div className="col-md-3">
                            <div className="product card border-0">
                            <Link to="/product">
                                    <img src={productimg3} alt='' className='w-100'/>
                                    </Link>
                              <div className="card-body pt-3">
                              <Link to="/product">Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             
                             </div>
                          </div>
                          <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                              <Link to="/product">
                                    <img src={productimg4} alt='' className='w-100'/>
                                    </Link>
                              </div>
                              <div className="card-body pt-3">
                              <Link to="/product">Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             </div>
                          </div>
                         <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                              <Link to="/product">
                                    <img src={productimg3} alt='' className='w-100'/>
                                    </Link>
                              </div>
                              <div className="card-body pt-3">
                                <Link to="/product" >Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             
                             </div>
                          </div>
                          <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                              <Link to="/product">
                                    <img src={productimg4} alt='' className='w-100'/>
                                    </Link>
                              </div>
                              <div className="card-body pt-3">
                              <Link to="/product">Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             
                             </div>
                          </div>
                          <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                              <Link to="/product">
                                    <img src={productimg3} alt='' className='w-100'/>
                                    </Link>
                              </div>
                              <div className="card-body pt-3">
                              <Link to="/product">Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             
                             </div>
                          </div>
                          <div className="col-md-3">
                            <div className="product card border-0">
                              <div className="card-img">
                              <Link to="/product">
                                    <img src={productimg4} alt='' className='w-100'/>
                                    </Link>
                              </div>
                              <div className="card-body pt-3">
                              <Link to="/product">Red Check Shirt for Men</Link>
                                <div className="price">
                                  $50 <span className='text-decoration-line-through'>$80</span>
                                </div>
                              </div>
                             </div>
                          </div>






                          </div>
             </div>
          </div>
     </div>
    
    
    </Layout>
  )
}

export default Shop