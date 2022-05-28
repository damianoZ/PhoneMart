import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { productAction } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';

const Home = () => {

  const products = useSelector(state => state.products.allProducts);
  const PORT = useSelector(state => state.products.port);
  const dispatch = useDispatch();

  useEffect(()=>{
    serachProducts();
    },[]);
  
    const serachProducts = () => {
      fetch(PORT).then(response => response.json()).then(data => {
        dispatch(productAction.select(data));
        dispatch(productAction.search(data));
      });
    };

  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel" >
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="4000">
          <img src="/assets/phone-image/carousel/carousel-1.png"/>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
          <img src="/assets/phone-image/carousel/carousel-2.jpg"/>
          </div>
          <div className="carousel-item" data-bs-interval="4000">
          <img src="/assets/phone-image/carousel/carousel-3.png"/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {products.map(phone =>{
            return(
              <div className="card card-space" style={{backgroundColor: "rgba(0, 0, 0, 0", width: "18rem", border:"none"}}key={phone.id}>
                <img src={"/assets/phone-image/smartphones/" + phone.img} className="card-img-top" alt=".."/>
                <div className='price'><p className="lead">${phone.price}</p></div>
                <div className="card-body text-center" style={{padding: "0"}}>
                  <h5 className="card-title"><b>{phone.brand} {phone.model}</b></h5>
                  <div className='my-3'>
                  <NavLink to={"/products/" + phone.id} className="btn" style={{color: "black", backgroundColor: "lightgreen"}}><b>Show more</b></NavLink>
                  </div>
                </div>
              </div>
            )
          })} 
        </div>
      </div>
    </>
  )
}

export default Home