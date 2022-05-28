import  { React, useRef} from 'react'
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { productAction } from '../store/products';

const ProductDetails = () => {

  const dispatch = useDispatch();
  const products = useSelector(state=> state.products.allProducts);
  const prodId = useParams();  
  const prodDetails = products.filter(x => x.id == prodId.id);
  const product = prodDetails[0];

  const addToCartHandler = () =>{
    dispatch(productAction.addToCart({
      id: product.id,
      brand: product.brand,
      model: product.model,
      img: product.img,
      price: product.price,
      quantity: 1
    }))
  }
  
  return (
    <div className='container mb-5'>
      <div className='row my-4'>
        <h1 style={{color: "darkorange"}}><b>{product.brand} {product.model}</b></h1> <h5 className='my-2'>{product.color}</h5>
      </div>
      <div className='row mb-4'>
      <div className='col-md-1 my-2'>
              <NavLink to={"/products/"+ (parseInt(product.id) <= 1 ? 15 : 
                (parseInt(product.id)-1))} className='btn ms-auto me-2' style={{fontSize: "35px"}}><i className="fa fa-arrow-left" aria-hidden="true"></i>
              </NavLink>
            </div>
        <div className="col-md-5 d-flex justify-content-center">
          <img src={"/assets/phone-image/smartphones/"+product.img} alt="" width="100%" height="100%"/>
        </div>
        <div className='col-md-5 my-4 py-4'>
          <div className='row'>
            <h2 className='mb-2'>Details</h2>
            <hr />
          </div>
          <div className='row'>
            <div className='col'>
              <div>Brand:</div>
              <div>System:</div>
              <div>GB:</div>
              <div>Inch:</div>
              <div>Dimensions:</div>
              <div>Weight:</div>
            </div>
            <div className='col'>
              <div>{product.brand}</div>
              <div>{product.system}</div>
              <div>{product.gb}</div>
              <div>{product.inch}</div>
              <div>{product.dimensions}</div>
              <div>{product.weight}</div>
            </div>
          </div>
          <div className='row my-4 fw-bold'>
             <button onClick={addToCartHandler} className='btn' style={{color: "black", backgroundColor: "lightgreen"}}><b>Add to Cart $ {product.price}</b></button>
          </div>
        </div>
        <div className='col-md-1 my-2'>
              <NavLink to={"/products/"+ (parseInt(product.id) >= 15 ? 1 :
               (parseInt(product.id)+1))} className='button btn ms-auto me-2' style={{fontSize: "35px"}}><i className="fa fa-arrow-right" aria-hidden="true"></i>
              </NavLink>
            </div>
      </div>
      <div className='row'>
        <h2 className='mb-2'>Description</h2>
        <hr />
        <p className='my-2'>{product.description}</p>
      </div>
      <div className='row'>
        <div className='col-md'>
        </div>
        <div className='col-md'>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails