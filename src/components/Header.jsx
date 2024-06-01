import React from 'react'
import { Link } from 'react-router-dom'
import './head.css'

function Header() {
  return (
    <>
    
    <nav className="navbar bg-light shadow navbar-expand-lg p-3 ">
        <div className="container-fluid">
          <a className="navbar-brand " href="#">Fashion<span className='bg-warning badge text-dark'>Sotre</span></a>
          
          
                  
          
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-danger" id="offcanvasNavbarLabel">FASHION STORE</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body ">
             
                
                  <ul className="navbar-nav  navbar-right justify-content-center ul1   flex-grow-1 pe-3">
                    <li className="nav-item me-3">
                      {/* <a className="nav-link na-cont" aria-current="page" href="#">PRODUCT</a> */}
                      <Link className='n-link' to={'/product'}>PRODUCT</Link>
                    </li>
                    <li className="nav-item me-3">
                    <Link className='n-link' to={'/add'}>ADD PRODUCT</Link>
                    </li><li className="nav-item me-3">
                    <Link className='n-link' to={'/user'}>USERS</Link>
                    </li>
                    
                    <li className="nav-item me-3">
                    <Link className='n-link' to={'/order'}>ORDERS</Link>

                    </li>
                    
                  
                  </ul>
                 
                  <div>
                    
                  </div>
                  


                </div>

              </div>


            </div>
      </nav>

    </>
  )
}

export default Header