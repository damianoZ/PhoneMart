import React from 'react'

const Footer = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='footer'>
        <div className="row">
          <div className="col-md"></div>
          <div className="col-md d-flex justify-content-around mb-4 my-5">
          <div><i className="fa fa-facebook-f" style={{color: "dodgerblue"}}/></div>
          <div><i className="fa fa-twitter"style={{color: "royalblue"}}/></div>
          <div><i className="fa fa-google"style={{color: "crimson"}}/></div>
          <div><i className="fa fa-instagram"style={{color: "fuchsia"}}/></div>
          <div><i className="fa fa-linkedin"style={{color: "mediumblue"}}/></div>
          <div><i className="fa fa-github"style={{color: "lightgrey"}}/></div>
          </div>
          <div className="col-md"></div>
        </div>
        <div className="row">
          <div className="col-md 3 text-center mb-5 my-4">
            <div>© 2020 Copyright: MDBootstrap.com</div>
          </div>
        </div>
      </div>  
    </div>
    <div className="row"></div>
    </>
  )
}

export default Footer