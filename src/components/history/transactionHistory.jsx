import React from 'react'
import {connect} from "react-redux";

function TransactionHistory (props) {
   

    return (
        <div className="row mx-0 mt-4 justify-content-center">
            <div className="col-11 col-sm-11 col-md-4 py-3 text-center">
                <h4 className="border-bottom pb-3">Transaction History</h4>
                <ul className="p-0">
                    <li className="listTransaction border border-light bg-warning mt-3 d-flex justify-content-between shadow rounded px-3 py-2 position-relative"> 
                        <div className="fw-bolder">Type</div>
                        <div className="fw-bolder">Amount</div>
                    </li>
                    {
                        props.transactionData.map((item,index)=>{
                            return (
                                <li className={`listTransaction mt-3 d-flex justify-content-between shadow rounded px-3 py-2 position-relative ${item.transaction<0?'redBorder':'greenBorder'}`} key={index}> 
                                <div>{item.decription}</div>
                                <div className={item.transaction<0?'text-danger fw-bolder':'text-success fw-bolder'}>$ <span>{item.transaction<0?'-':''}</span><span>{Math.abs(item.transaction)}</span></div>
                                {/* <button className="delete-btn op-1" onClick={(e)=>{
                                    e.target.parentNode.remove()
                                    props.transactionData.splice(index,1)
                                    console.log(props.transactionData);
                                }}>X</button> */}
                            </li>
                            )
                        })
                    }
               
                </ul>
            </div>
        </div>
        
    )
}
export default connect(function (store) {
	return store;
})(TransactionHistory);