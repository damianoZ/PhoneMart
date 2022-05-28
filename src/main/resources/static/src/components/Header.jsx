import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Login from './buttons/Login';
import Signup from './buttons/Signup';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { productAction } from '../store/products';

const Header = () => {
  const dispatch = useDispatch();
  const selected = useSelector(state=> state.products.cart);
  const tot = useSelector(state=>state.products.totalProd);
  const [totCart, setTotCart] = useState(0);
  const [hamb, setHamb]= useState(true);

  useEffect(()=>{
    totCartCount();
  });

  let totCartCount = () =>{  
    let a = 0;
      selected.forEach(x => {
        a += (x.price * x.quantity);
        setTotCart(a);  
      });
  };

  const modLine = () =>{
    hamb ? setHamb(false) : setHamb(true);
  };
  
  const openCart = () =>{
    return(
      <>    
      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header mb-4">
          <h5 className="offcanvas-title m-auto" id="offcanvasWithBothOptionsLabel"><span className='fa fa-shopping-cart me-3'></span><b>Your Cart</b></h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
        <div>
        {selected.map(phone =>{
          return(
          <div key={phone.id} className='card-cart'>
              <div className="row mb-1">
                <div className="col-md-3 fw-bold m-auto">
                  <img src={"/assets/phone-image/smartphones/"+phone.img}  width="100%" alt=".."/> 
                </div>
                <div className="col-md-3 fw-bold m-auto">
                  x {phone.quantity}
                </div>
                <div className="col-md-3 fw-bold m-auto">
                 $ {phone.price*phone.quantity}
                </div>
                <div className="col-md-3 m-auto d-flex">
                <i className="fa fa-plus-circle cart-btn me-3" onClick={()=>dispatch(productAction.increment(phone.id))}></i>
                <i className='fa fa-minus cart-btn' style={{color: "darkorange"}} onClick={()=>dispatch(productAction.decrement(phone.id))}></i>
                </div>
              </div>
          </div>
          )
        })}
        <hr style={{color: "lightgreen"}}/>
        <div className='row'>
          <div className='col-md-5'></div>
          <div className='col-md-7'>Tot $ {selected[0] ? totCart : 0} </div>
        </div>
    </div>
        </div>
      </div>
      </>)
    }

  return (
    <>
     <nav className="navbar sticky-top navbar-expand-xl">
        <div className="container-fluid">
            <button onClick={() => modLine()} className={hamb ? "hamburger navbar-toggler" : "hamburger navbar-toggler active" } type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="line"></span>
              <span className="line"></span>
              <span className="line"></span>
            </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink className="nav-link active" aria-current="page" to="/"><b>Home</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products"><b>Products</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/compare"><b>Compare</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about"><b>About</b></NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact"><b>Contacts</b></NavLink>
              </li>
            </ul>
              <NavLink className="navbar-brand fw-bold m-auto" to="/"><h1>PHONE MART <span className="fa fa-bolt" style={{fontSize: "50px"}} aria-hidden="true"></span></h1> </NavLink>
              <Login/>
              <Signup/>
              <button onClick={() => openCart() && totCartCount()} className="btn" style={{color: "darkorange", fontSize:"120%", letterSpacing: "2px"}} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" aria-controls="offcanvasWithBothOptions"><span className='fa fa-shopping-cart me-1'></span><b>Cart ({tot})</b></button>
          </div>
        </div>
      </nav>
      {openCart()}
    </>
  )
}

export default Header