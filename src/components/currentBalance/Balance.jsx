import React from 'react'
import {connect} from "react-redux";

function Balance (props) {

let totalbalance = [0]
    props.transactionData.map(index=>{
        totalbalance.push(+index.transaction)
    })
const reducer = (accumulator, currentValue) => accumulator + currentValue;

    return (
        <div className="row mx-0 mt-4 justify-content-center">
            <div className="col-11 col-sm-11 col-md-4 shadow rounded py-3 text-center">
                <h4>CURRENT BALANCE</h4>
                <h2>$ {totalbalance.reduce(reducer)}</h2>
            </div>
        </div>
    )
}


export default connect(function (store) {
	return store;
})(Balance);