import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faDownload } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'



export default function Main() {

    const getInitialState = () => {
        const value = "Date";
        return value;
      };
    
      const [value, setValue] = useState(getInitialState);
    
      const handleChange = (e) => {
        setValue(e.target.value);
      };

      const getSecondlState = () => {
        const secondValue = "Type";
        return secondValue;
      };
    
      const [secondValue, seSecondValue] = useState(getSecondlState);
    
      const typeChange = (e) => {
        seSecondValue(e.target.secondValue);
      };

      const getThirdlState = () => {
        const thirdValue = "Type";
        return thirdValue;
      };
    
      const [thirdValue, setThirdValue] = useState(getThirdlState);
    
      const statusChange = (e) => {
        setThirdValue(e.target.secondValue);
      };

    return (
        <>
            <div className='container'>
                <div className='main-body'>
                    <span className='search-icon'><FontAwesomeIcon icon={faMagnifyingGlass} style={{ color: "#494b4b", }} /></span>
                    <input className='input-tag' name='search' for="search" placeholder='Search by name or email' />
                </div>
                <button className='download'><FontAwesomeIcon className='dwn' icon={faDownload} style={{ color: "#010d83", }} /></button>
            </div>
            <h3>Filter by</h3>
            <div className='btns'>
                
                    <select className='drop-1' name='select' value={value} onChange={ handleChange}>
                        <optgroup label='Date'>
                        <option className='opt' value="Date">Date</option>
                        <option className='opt' value="This Month">This Month</option>
                        <option className='opt' value="Last Month">Last Month</option>
                        <option className='opt' value="Last 90 Days">Last 90 Days</option>
                        <option className='opt' value="This Year">This Year</option>
                        <option className='opt' value="Last Year">Last Year</option>
                        </optgroup>
                    </select>

                    <select className='drop-2' name='select' secondvalue={secondValue} onChange={ typeChange}>
                        <option className='opt' SecondValue="Type">Type</option>
                        <option className='opt' SecondValue="Automatic Payments">Automatic Payments</option>
                        <option className='opt' SecondValue="Payments">Payments</option>
                        <option className='opt' SecondValue="Payments Received">Payments Received</option>
                        <option className='opt' SecondValue="Refunds">Refunds</option>
                        <option className='opt' SecondValue="Transfers">Transfers</option>
                    </select>

                    <select className='drop-3' name='select' thirdValue={thirdValue} onChange={ statusChange}>
                        <option className='opt' thirdValue="Status">Status</option>
                        <option className='opt' thirdValue="Incoming payments to review">Incoming payments to review</option>
                        <option className='opt' thirdValue="Tracking numbers to add">Tracking numbers to add</option>
                        <option className='opt' thirdValue="Shipping labels to print">Shipping labels to print</option>
                        <option className='opt' thirdValue="Payment requests to review">Payment requests to review</option>
                        <option className='opt' thirdValue="Invoices to pay">Invoices to pay</option>
                    </select>
                
                
            </div>

            <h3 className='head-2'>Completed</h3>

            <h4>This Week</h4>

            <div className='transection'>
            <div className='new-logo'>
                   <span style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>name</span><span style={{color:"#494b4b",fontWeight:"bold",fontSize:"10px"}}>.com</span>
                </div>
                <div className='content'>
                <h3 style={{fontSize:"14px",fontWeight:"bold",marginLeft:"-12.5%"}}>Name.com Inc.</h3>
                <h4 style={{fontSize:"13px",paddingBottom:"6px"}}>jun 22 - Automatic Payment</h4>
                </div>
                <div className='value' style={{marginLeft:"23%",marginBottom:"2%"}}><h3>-$9.89</h3></div>
            </div>

            <div className='transection' style={{marginTop:"2%"}}>
                <div className='new-logo'>
                   <span style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>name</span><span style={{color:"#494b4b",fontWeight:"bold",fontSize:"10px"}}>.com</span>
                </div>
                <div className='content'>
                <h3 style={{fontSize:"14px",fontWeight:"bold",marginLeft:"-12.5%"}}>Name.com Inc.</h3>
                <h4 style={{fontSize:"13px",paddingBottom:"6px"}}>jun 21 - Automatic Payment</h4>
                </div>
                <div className='value' style={{marginLeft:"23%",marginBottom:"2%"}}><h3>-$8.99</h3></div>
            </div>

            <div className='transection' style={{marginTop:"2%"}}>
            <div className='new-logo'>
                   <span style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>name</span><span style={{color:"#494b4b",fontWeight:"bold",fontSize:"10px"}}>.com</span>
                </div>
                <div className='content'>
                <h3 style={{fontSize:"14px",fontWeight:"bold",marginLeft:"-12.5%"}}>Name.com Inc.</h3>
                <h4 style={{fontSize:"13px",paddingBottom:"6px"}}>jun 20 - Automatic Payment</h4>
                </div>
                <div className='value' style={{marginLeft:"23%",marginBottom:"2%"}}><h3>-$9.99</h3></div>
            </div>

            <div className='transection' style={{marginTop:"2%",marginBottom:"3%"}}>
            <div className='new-logo'>
                   <span style={{color:"white",fontWeight:"bold",fontSize:"10px"}}>name</span><span style={{color:"#494b4b",fontWeight:"bold",fontSize:"10px"}}>.com</span>
                </div>
                <div className='content'>
                <h3 style={{fontSize:"14px",fontWeight:"bold",marginLeft:"-12.5%"}}>Name.com Inc.</h3>
                <h4 style={{fontSize:"13px",paddingBottom:"6px"}}>jun 23 - Automatic Payment</h4>
                </div>
                <div className='value' style={{marginLeft:"23%",marginBottom:"2%"}}><h3>-$9.99</h3></div>
            </div>
        </>
    )
}
