import React from 'react'
import Layout from '../common/Layout'

const Login = () => {
  return (
    <Layout>
        <div className="container py-5">
            <div className="card-body p-4 login">
                <h2>Admin Login</h2>
                <form>
                    <div className="form-group">
                        <label for="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
                    </div>
                    <div className="form-group">
                        <label for="password">Password</label>
                        <input type="password" className="form-control" id="password" placeholder="Enter password"/>
                    </div>
                    <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label" for="exampleCheck1">Remember me</label>
                    </div>
                    <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </Layout>
  )
}

export default Login