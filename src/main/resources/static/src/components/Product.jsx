import {React } from 'react'
import { NavLink } from 'react-router-dom';
import { productAction } from '../store/products';
import { useDispatch, useSelector } from 'react-redux';

const Product = () => {

  const dispatch = useDispatch();
  const PORT = useSelector(state => state.products.port);
  const selected = useSelector(state=> state.products.selectedProducts);

  const searchBybrand = (brand) => {
    fetch(PORT + "?like=" + brand).then(response => response.json()).then(data =>dispatch(productAction.select(data)));
  }

  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-sm text-center '>
          <h1 className='fw-bold' style={{color: "darkorange"}}>Products</h1>
          <hr style={{color: "lightgreen"}}/>
        </div>
      </div>
      <div className="input-group flex-nowrap input-compare">
        <span className="input-group-text" id="addon-wrapping">Search a Phone</span>
        <input onChange={(e)=>searchBybrand(e.target.value)} type="text" className="form-control" placeholder="Iphone 13" aria-label="Username" aria-describedby="addon-wrapping"/>
      </div>
      <div className='container'>
        <div className='row justify-content-around'>
          {selected.map(phone =>{
            return(
              <div className="card card-space" style={{backgroundColor: "rgba(0, 0, 0, 0", width: "18rem", border:"none"}}key={phone.id}>
                <img src={"/assets/phone-image/smartphones/" + phone.img} className="card-img-top" alt=".."/>
                <div className='price'><p className="lead">${phone.price}</p></div>
                <div className="card-body text-center" style={{padding: "0"}}>
                  <h5 className="card-title"><b>{phone.brand} {phone.model}</b></h5>
                  <div className='my-3'>
                  <NavLink to={"/products/"+phone.id} className="btn" style={{color: "black", backgroundColor: "lightgreen"}}><b>Show more</b></NavLink>
                  </div>
                </div>
              </div> 
            )
          })} 
        </div>
      </div>
    </div>
    </>
  )
}

export default Product;