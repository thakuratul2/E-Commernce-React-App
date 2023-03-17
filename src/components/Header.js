import React, { Fragment } from 'react'

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
    </Fragment>
  )
}

export default Header