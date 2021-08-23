import React,{useRef} from 'react'
import store from '../../Store/store'
export const AddTransaction = () => {
    let descriptionRef = useRef();
    let transactionRef = useRef();

    const submitData = (e) =>{
        e.preventDefault();
                descriptionRef.current.nextElementSibling.classList.add('invisible')
                transactionRef.current.nextElementSibling.classList.add('invisible')
                setTimeout(() => {
                    document.getElementsByClassName('successDiv')[0].classList.remove('animationClass')
                }, 4000);
        if(transactionRef.current.value !== '' && descriptionRef.current.value !== ''){
            let obj={
                decription:descriptionRef.current.value,
                transaction:transactionRef.current.value,
            }
            store.dispatch({
                type:"Transaction_Data" ,
                payload:obj
              })
              descriptionRef.current.value = '';
              transactionRef.current.value = '';
              document.getElementsByClassName('successDiv')[0].classList.add('animationClass')
        }else{
            if(descriptionRef.current.value === ''){
                descriptionRef.current.nextElementSibling.classList.remove('invisible')
                
            }
            if(transactionRef.current.value === ''){
                transactionRef.current.nextElementSibling.classList.remove('invisible')
            }
        }

    }

    return (
        <>
          <div className="row mx-0 justify-content-center">
                <div className="successDiv">
                        Data sccessfully added
                    </div>
            <div className="col-11 col-sm-11 col-md-4 py-3">
                <h4 className="border-bottom pb-3 text-center">Add New Transaction</h4>

            <form className="row pt-3 g-3 needs-validation" validate="true">
                <div className="col-md-12 m-0">
                    <label htmlFor="validationCustom01" className="form-label">Description</label>
                    <input type="text" className="form-control" id="validationCustom01" ref={descriptionRef} placeholder="Detail of Transaction"  required />
                    <div className="invisible text-danger my-1">
                        Please add Description
                    </div>
                </div>
                <div className="col-md-12 m-0">
                    <label htmlFor="validationCustom02" className="form-label">Last name</label>
                    <input type="number" className="form-control" id="validationCustom02" ref={transactionRef} placeholder="Dollar Value of Transaction" required />
                    <div className="invisible text-danger my-1">
                        Please add Transaction amount
                    </div>
                </div>  
                <div className="col-12 text-center m-0">
                    <button className="btn btn-success" type="submit" onClick={submitData}>Add Transaction</button>
                </div>
            </form>
           
            </div>
        </div>
        </>
    )
}
