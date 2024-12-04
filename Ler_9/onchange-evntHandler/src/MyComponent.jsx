import React ,{useState} from 'react';

function MyComponent(){

    const [name, setname] = useState("Guest")
    const [quantity, setquantity] = useState(30)
    const [comment, setcomment] = useState("")
    const [payment, setpayment] = useState("")
    const [shipping, setshipping] = useState("")

   
    function helphandlechange(){
        setname(event.target.value)
    }

    function handlequantitychange(){
        setquantity(event.target.value)
    }

    function handlecommentchange(){
        setcomment(event.target.value)
    }
    function handlepaymentchange(){
        setpayment(event.target.value)
    }

    function handleshippingchange(){
        setshipping(event.target.value)
    }

    return(
        <>
        <input value={name} onChange={helphandlechange} />
        <p>Name :{name} </p>
        
        <input value={quantity} onChange={handlequantitychange} type='number'/>
        <p>quantity :{quantity} </p>

        <input value={comment} onChange={handlecommentchange} placeholder='Enter  dilivery instructions'/>
        <p>comment :{comment} </p>

        <select value={payment} onChange={handlepaymentchange}>
            <option>Select an option</option>
            <option value='cash'>Cash</option>
            <option value='card'>Card</option>
            <option value='bitcoin'>bitcoin</option>
            <option value='UPI'>UPI</option>
            <option value='Giftcard'>Giftcard</option>
        </select>
        <p>payment :{payment} </p>


        <label>
            <input type='radio' value="Pick up"
            checked={shipping === "Pick up"} onChange={handleshippingchange}/>
            pick up
        </label>
        <br/>
        <label>
            <input type='radio' value="Delivery"
            checked={shipping === "Delivery"} onChange={handleshippingchange}/>
            Delivery
        </label>
        <p>Shipping :  {shipping} </p>
        </>
    )
}

export default MyComponent;