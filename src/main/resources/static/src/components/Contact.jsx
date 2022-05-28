import React from 'react'

const Contact = () => {
  return (
    <div className='container my-4 py-5'>
      <div className='row'>
      <h1 className='fw-bold mb-4' style={{color: "darkorange"}}>Have any questions?</h1>
          <hr style={{color: "lightgreen"}}/>
      </div>
      <div className='row'>
        <div className='col-md my-4 py-4'>
          <form action="">
            <div className="mb-3">
              <label htmlFor="exampleForm" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="exampleForm" placeholder="Mario Rossi"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlInput1" className="form-label">Email address</label>
              <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
            </div>
            <div className="mb-3">
              <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label>
              <textarea className="form-control" id="exampleFormControlTextarea1" rows="5" ></textarea>
            </div>
            <div className="mb-4">
            <label htmlFor="formFile" className="form-label">Default file input example</label>
            <input className="form-control" type="file" id="formFile"/>
          </div>
            <button type="submit" className="btn" style={{color: "black", backgroundColor: "lightgreen"}}><b>Send Message</b></button>
          </form>
        </div>
        <div className='col-md my-5 d-flex justify-content-center'>
          <img src="/assets/phone-image/contact-us.png" alt="about-us" width="438px" height="430px"/>
        </div>
      </div>
    </div>
  )
}

export default Contact