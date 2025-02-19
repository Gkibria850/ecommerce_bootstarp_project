import React, { useState } from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';

import ProductImg from '../assets/images/eleven.jpg'
import ProductImg1 from '../assets/images/Mens/five.jpg'
import ProductImg2 from '../assets/images/Mens/four.jpg'
import ProductImg3 from '../assets/images/Mens/six.jpg'
import { Rating } from 'react-simple-star-rating'

import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
    const [rating, setRating] = useState(4)
  return (
    <Layout>
        <div className="container product-detail">
          
              <div className="row">
                    <div className="col-md-12">
                        <nav aria-label="breadcrumb py-4">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item " aria-current="page"><Link to="/shop">Shop</Link></li>
                                    <li class="breadcrumb-item " aria-current="page">Dummy Product Title</li>
                                    </ol>
                        </nav>
                    </div>
                </div>
                
                <div className="row mb-5">
                    <div className="col-md-5">
                       <div className="row">
                        <div className="col-2">
                        <Swiper
                                    style={{
                                        '--swiper-navigation-color': '#000',
                                        '--swiper-pagination-color': '#000',
                                        }}
                                        onSwiper={setThumbsSwiper}
                                        loop={true}
                                        direction={`vertical`}
                                        spaceBetween={10}
                                        slidesPerView={6}
                                        freeMode={true}
                                        watchSlidesProgress={true}
                                        modules={[FreeMode, Navigation, Thumbs]}
                                        className="mySwiper mt-2"
                                    >
                                            
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg1} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg2} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                                    <SwiperSlide>
                                        <div className='content'>
                                            <img 
                                                src={ProductImg3} 
                                                alt="" 
                                                height={100}
                                                className='w-100' />
                                        </div>                                                                      
                                    </SwiperSlide>
                            </Swiper>

                        </div>
                        <div className="col-10">
                        <Swiper
                                    style={{
                                    '--swiper-navigation-color': '#000',
                                    '--swiper-pagination-color': '#000',
                                    }}
                                    loop={true}
                                    spaceBetween={0}
                                    navigation={true}
                                    thumbs={thumbsSwiper ? { swiper: thumbsSwiper } : undefined}
                                    modules={[FreeMode, Navigation, Thumbs]}
                                    className="mySwiper2"
                                >
                                    
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImg} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImg1} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImg2} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                                    <SwiperSlide >
                                        <div className='content'>
                                        <img 
                                            src={ProductImg3} 
                                            alt="" 
                                            className='w-100' />
                                        </div>
                                    </SwiperSlide>           
                            </Swiper>
                        </div>
                       </div>
                    </div>
                    <div className="col-md-7">
                        <h2>Dummy Product Title</h2>
                       <div className='d-flex'>
                            <Rating 
                            size={20}readonly initialValue={rating}/>
                            <span className='pt-1 ps-2'>10 Reviews</span>
                       </div>
                       <div className="price h3 py-3">
                        $20 <span className='text-decoration-line-through'>$18</span>
                       </div>
                       <div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
                            Sed vel lectus vel nunc fringilla malesuada. Donec<br/>
                             ultricies, nunc vel mollis consectetur, justo nisi<br/> 
                             faucibus arcu, non fermentum neque turpis vel justo.<br/>
                              Donec pulvinar, arcu eu dignissim viverra, felis velit<br/>
                               tempus nisi, ac faucibus tellus libero vel arcu. .</p>
                        </div>
                        <div className="py-2">
                        

                            <strong className=''>Select Size</strong>
                        <div className=" sizes pt-2">

                            <button type="button" className="btn btn-size ">S</button>
                            <button type="button" className="btn btn-size ms-1">M</button>
                            <button type="button" className="btn btn-size ms-1">L</button>
                            <button type="button" className="btn btn-size ms-1">XL</button>
 
                        
                        </div>
                        </div>
                        <div className="colors py-2">
                            <strong>Available Colors</strong>
                                <button type="button" className="btn btn-color">Red</button>
                                <button type="button" className="btn btn-color">Blue</button>
                                <button type="button" className="btn btn-color">Green</button>
                                <ul >
                                    <li className="list-group-item">Material: Cotton</li>
                                </ul>
                       
                            </div>
                       
                        <div className="add-to-cart">
                            <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
                        </div>
                        <hr/>
                        <div>
                            <strong>DDxxopu</strong>
                        </div>
                        


                       
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-sm-6">
                    <Tabs
                    defaultActiveKey="profile"
                    id="uncontrolled-tab-example"
                    className="mb-3"
                    >
                    <Tab eventKey="home" title="Description" className='my-3'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in, accusamus ut velit quis officiis neque dolor odit distinctio est?
                    </Tab>
                    <Tab eventKey="profile" title="Reviews(10)" className='my-3'>
                   <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in, accusamus ut velit quis officiis neque dolor odit distinctio est?
                   </p>
                   <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in, accusamus ut velit quis officiis neque dolor odit distinctio est?
                   </p>
                   <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in, accusamus ut velit quis officiis neque dolor odit distinctio est?
                   </p>
                   <p>
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem in, accusamus ut velit quis officiis neque dolor odit distinctio est?
                   </p>
                    </Tab>
                   
                    </Tabs>
                    </div>
                </div>
          </div>
    </Layout>
  )
}

export default Product