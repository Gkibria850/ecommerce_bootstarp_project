import React, { useState } from 'react'
import Layout from './Layout'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Thumbs, FreeMode, Navigation  } from 'swiper/modules';

import ProductImg from '../../assets/images/eleven.jpg'
import ProductImg1 from '../../assets/images/Mens/five.jpg'
import ProductImg2 from '../../assets/images/Mens/four.jpg'
import ProductImg3 from '../../assets/images/Mens/six.jpg'




import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const Product = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <Layout>
        <div className="container product-detail">
          
              <div className="row">
                    <div className="colmd-12">
                        <nav aria-label="breadcrumb py-4">
                                    <ol class="breadcrumb">
                                    <li class="breadcrumb-item"><Link to="/">Home</Link></li>
                                    <li class="breadcrumb-item " aria-current="page"><Link to="/shop">Shop</Link></li>
                                    <li class="breadcrumb-item " aria-current="page">Dummy Product Title</li>
                                    </ol>
                        </nav>
                    </div>
                </div>
                
                <div className="row">
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
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pharetra, justo vitae convallis bibendum, urna est condimentum justo, in bibendum urna nisi id eros. Donec auctor, arcu sed sollicitudin tristique, velit libero tristique ligula, vel consectetur nunc ligula a dolor.</p>
                        <Link to="/cart" className="btn btn-primary">Add to Cart</Link>
                    </div>
                </div>
          </div>
    </Layout>
  )
}

export default Product