import React from 'react'
import {connect} from "react-redux";

function TransactionStatus(props) {
    let positiveNumber = [0]
    let negativeNumber = [0]

    props.transactionData.map(index=>{
        if(index.transaction > 0){
            positiveNumber.push(+index.transaction)
        }
        if(index.transaction < 0){
            negativeNumber.push(+index.transaction)
        }
        
    })

    // To reduce the array we use 
const reducer = (accumulator, currentValue) => accumulator + currentValue;


    return (
        <div className="row mx-0 mt-4 justify-content-center">
                <div className="col-11 col-sm-11 col-md-4 shadow rounded py-3 text-center">
                    <div className="row mx-0">
                       
                        <div className="col-12 col-sm-12 col-md-6 p-0 text-center border-end">
                           <h5>INCOME</h5>
                           <h4>$<span className="text-success">{ positiveNumber.reduce(reducer)}</span> </h4>
                        </div>
                        <div className="col-12 col-sm-12 col-md-6 p-0 text-center mt-3 mt-sm-3 mt-md-0">
                           <h5>EXPENSE</h5>
                           <h4>$<span className="text-danger"> {negativeNumber.reduce(reducer)}</span> </h4>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default connect(function (store) {
	return store;
})(TransactionStatus);
