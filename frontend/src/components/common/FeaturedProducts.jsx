import React from 'react'
import productimg3 from '../../assets/images/three.jpg'
import productimg4 from '../../assets/images/two.jpg';

const FeaturedProducts = () => {
  return (
   <>
        <section className='section-2 py-5'>
            <div className='container'>
              <h2 className=''>Featured Products</h2>
              <div className="row mt-4">
               <div className="col-md-3">
                 <div className="product card border-0">
                   <div className="card-img">
                         <img src={productimg3} alt='' className='w-100'/>
                   </div>
                   <div className="card-body pt-3">
                     <a href="" >Red Check Shirt for Men</a>
                     <div className="price">
                       $50 <span className='text-decoration-line-through'>$80</span>
                     </div>
                   </div>
                  
                  </div>
               </div>
               <div className="col-md-3">
                 <div className="product card border-0">
                   <div className="card-img">
                         <img src={productimg4} alt='' className='w-100'/>
                   </div>
                   <div className="card-body pt-3">
                     <a href="" >Red Check Shirt for Men</a>
                     <div className="price">
                       $50 <span className='text-decoration-line-through'>$80</span>
                     </div>
                   </div>
                  
                  </div>
               </div>
               <div className="col-md-3">
                 <div className="product card border-0">
                   <div className="card-img">
                         <img src={productimg3} alt='' className='w-100'/>
                   </div>
                   <div className="card-body pt-3">
                     <a href="" >Red Check Shirt for Men</a>
                     <div className="price">
                       $50 <span className='text-decoration-line-through'>$80</span>
                     </div>
                   </div>
                  
                  </div>
               </div>
               <div className="col-md-3">
                 <div className="product card border-0">
                   <div className="card-img">
                         <img src={productimg4} alt='' className='w-100'/>
                   </div>
                   <div className="card-body pt-3">
                     <a href="" >Red Check Shirt for Men</a>
                     <div className="price">
                       $50 <span className='text-decoration-line-through'>$80</span>
                     </div>
                   </div>
                  
                  </div>
               </div>
   
   
   
   
   
   
              </div>
            </div>
          </section>
       </>
  )
}

export default FeaturedProducts