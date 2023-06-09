import React, { Fragment } from 'react'
import { NavLink,Link } from 'react-router-dom'
import {BsSearch} from 'react-icons/bs'

function Header() {
  return (
    <Fragment>
    <header className="header-top-strip py-3">
    <div className="container-xxl">
      <div className="row">
        <div className="col-6">
          <p className='text-white mb-0'>Free Shipping Available Over Rs. 399 & Free Return</p>
        </div>
        <div className="col-6">
<p className=' text-end text-white mb-0'>
Customer Care:
  <a className='text-white' href="tel: +91 8192002404"> +91 8192002404</a>
</p>
        </div>
      </div>
    </div>

    </header>
    <header className="header-upper py-3">
<div className="container-xxl">
  <div className="row align-items-center">
    <div className="col-2">
      <h6 className='header-text'>
        <Link className='text-link'>E-Commernce | Atul Pratap Singh</Link>
      </h6>
    </div>
    <div className="col-5">
    <div className="input-group">
  <input type="text" className="form-control py-2" placeholder="Search Product Here" aria-label="Search Product Here" aria-describedby="basic-addon2"/>
  <span className="input-group-text p-3" id="basic-addon2"><BsSearch className='fs-6'/></span>
</div>

    </div>
    <div className="col-5">
<div className='header-upprt-links d-flex align-items-center justify-content-between'>
<div>
  <Link>
    <img src="images/compare.svg" className='options' alt="compare" />
    <p>
      Compare <br/> Products
    </p>
  </Link>
</div>
<div>
  <Link>
    <img src="images/wishlist.svg" className='options' alt="wishlist" />
  </Link>

  <p>

  </p>
</div>
<div>
  <Link>
    <img src="" alt="" />
  </Link>
  <p>

  </p>
</div>
<div>
  <Link>
    <img src="" alt="" />
  </Link>
  <p>

  </p>
</div>
</div>
    </div>
  </div>
</div>
    </header>
    </Fragment>
  )
}

export default Header