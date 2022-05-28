import React from 'react';
import { NavLink } from 'react-router-dom';

const About = () => {
  return (
    <div className='container my-4 py-5'>
      <div className="row">
      <h1 className='fw-bold mb-4' style={{color: "darkorange"}}>About Us</h1>
          <hr style={{color: "lightgreen"}}/>
      </div>
      <div className='row'>
        <div className='col-md'>
          <div className='my-5'>
          <p className='lead '>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti ullam dolorem, esse assumenda doloribus eveniet nihil dolor aliquam libero velit expedita ad repudiandae voluptatum consequatur exercitationem mollitia laudantium porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti ullam dolorem, esse assumenda doloribus eveniet nihil dolor aliquam libero velit expedita ad repudiandae voluptatum consequatur exercitationem mollitia laudantium porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti ullam dolorem, esse assumenda doloribus eveniet nihil dolor aliquam libero velit expedita ad repudiandae voluptatum consequatur exercitationem mollitia laudantium porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti ullam dolorem, esse assumenda doloribus eveniet nihil dolor aliquam libero velit expedita ad repudiandae voluptatum consequatur exercitationem mollitia laudantium porro.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur corrupti ullam dolorem, esse assumenda doloribus eveniet nihil dolor aliquam libero velit expedita ad repudiandae voluptatum consequatur exercitationem mollitia laudantium porro.
          </p>
          </div>
          <NavLink to ="/contacts" className="btn" style={{color: "black", backgroundColor: "lightgreen"}}><b>Contact Us</b></NavLink>
        </div>
        <div className='col-md d-flex justify-content-center my-5'>
          <img src="/assets/phone-image/about-us.png" alt="about-us" width="438px" height="430px"/>
        </div>
      </div>
    </div>
  )
}

export default About