import React from 'react'
import Layout from './common/Layout'
import { Link } from 'react-router-dom'

const Checkout = () => {
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
      
    </div>
    </Layout>
    </>
  )
}

export default Checkout
