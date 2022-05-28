import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

const Compare = () => {

    const [phone1, setPhone1] = useState([]);
    const product1 = phone1 && phone1;
    const [phone2, setPhone2] = useState([]);
    const product2 = phone2 && phone2;
    const [phone3, setPhone3] = useState([]);
    const product3 = phone3 &&  phone3;
    const products = useSelector(state=> state.products.allProducts);
    const productsName = useSelector(state=>state.products.allProducts.map(x =>{
        return x.brand + " " + x.model;
    }));
    const noDuplicates = Array.from(new Set(productsName));

  return (
    <div className='container mb-5'>
        <div className="row text-center my-4">
            <h1 className='fw-bold mb-4' style={{color: "darkorange"}}>Compare</h1>
            <hr style={{color: "lightgreen"}}/>
        </div>
        <div className="row my-4"> {/*input */}
            <div className="col col-md-2">
            </div>
            <div className=" col col-md-3">
                <select onChange={(e)=> e.target.value=="Select a Phone" ? setPhone1("") : setPhone1(products.filter(x=> x.brand + " " + x.model == e.target.value)[0])} className=" form-select mb-4">
                        <option>Select a Phone</option>
                        {noDuplicates.map((x,index)=>{
                                return(
                                <option key={index}>{x}</option>
                                )
                            })}
                </select>
            </div>
            <div className="col col-md-3">
                <select onChange={(e)=>  e.target.value=="Select a Phone"?setPhone2("") : setPhone2(products.filter(x=> x.brand + " " + x.model == e.target.value)[0])} className="form-select mb-4">
                    <option>Select a Phone</option>
                    {noDuplicates.map((x,index)=>{
                            return(
                            <option key={index}>{x}</option>
                            )
                        })}
                </select>
            </div>
            <div className="col col-md-3">
            <select onChange={(e)=>  e.target.value=="Select a Phone"?setPhone3("") : setPhone3(products.filter(x=> x.brand + " " + x.model == e.target.value)[0])} className="form-select mb-4">
                    <option>Select a Phone</option>
                    {noDuplicates.map((x,index)=>{
                            return(
                            <option key={index}>{x}</option>
                            )
                        })}
                </select>
            </div>
        </div>
        <div className="row me-5 my-4"> {/*img */}
            <div className="col col-md-2">
            </div>
            <div className={phone1 == "" ? "col col-md-3 compare" :"col col-md-3"}>
                <img src={"/assets/phone-image/smartphones/"+product1.img} alt="" width="120%" height="100%" />
            </div>
            <div className={phone2 == "" ? "col col-md-3 compare" :"col col-md-3"}>
                <img src={"/assets/phone-image/smartphones/"+product2.img} alt="" width="120%" height="100%" />
            </div>
            <div className={phone3 == "" ? "col col-md-3 compare" :"col col-md-3"}>
                <img src={"/assets/phone-image/smartphones/"+product3.img} alt="" width="120%" height="100%" />
            </div>
        </div>
        <div className="row info"> {/*dati */}
            <div className="col col-md-2 my-4 fw-bold">
                <div>Brand:</div>
                <hr style={{color: "orange"}}/>
                <div>System:</div>
                <hr style={{color: "orange"}}/>
                <div>GB:</div>
                <hr style={{color: "orange"}}/>
                <div>Inch:</div>
                <hr style={{color: "orange"}}/>
                <div>Dimensions:</div>
                <hr style={{color: "orange"}}/>
                <div>Weight:</div>
            </div>
            <div className={phone1 == "" ? "col col-md-3 my-4 compare" :"col col-md-3 my-4"}>
                <div>{product1.brand}</div>
                <hr style={{color: "orange"}}/>
                <div>{product1.system}</div>
                <hr style={{color: "orange"}}/>
                <div>{product1.gb}</div>
                <hr style={{color: "orange"}}/>
                <div>{product1.inch}</div>
                <hr style={{color: "orange"}}/>
                <div>{product1.dimensions}</div>
                <hr style={{color: "orange"}}/>
                <div>{product1.weight}</div>
                <NavLink to={"/products/"+product1.id} className=' btn my-4' style={{color: "black", backgroundColor: "lightgreen"}}><b>Show more</b></NavLink>
            </div>
            <div className={phone2 == "" ? "col col-md-3 my-4 compare" :"col col-md-3 my-4"}>
                <div>{product2.brand}</div>
                <hr style={{color: "orange"}}/>
                <div>{product2.system}</div>
                <hr style={{color: "orange"}}/>
                <div>{product2.gb}</div>
                <hr style={{color: "orange"}}/>
                <div>{product2.inch}</div>
                <hr style={{color: "orange"}}/>
                <div>{product2.dimensions}</div>
                <hr style={{color: "orange"}}/>
                <div>{product2.weight}</div>
                <NavLink to={"/products/"+product2.id} className=' btn my-4' style={{color: "black", backgroundColor: "lightgreen"}}><b>Show more</b></NavLink>
            </div>
            <div className={phone3 == "" ? "col col-md-3 my-4 compare" :"col col-md-3 my-4"}>
                <div>{product3.brand}</div>
                <hr style={{color: "orange"}}/>
                <div>{product3.system}</div>
                <hr style={{color: "orange"}}/>
                <div>{product3.gb}</div>
                <hr style={{color: "orange"}}/>
                <div>{product3.inch}</div>
                <hr style={{color: "orange"}}/>
                <div>{product3.dimensions}</div>
                <hr style={{color: "orange"}}/>
                <div>{product3.weight}</div>
                <NavLink to={"/products/"+product3.id} className=' btn my-4' style={{color: "black", backgroundColor: "lightgreen"}}><b>Show more</b></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Compare