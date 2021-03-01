import React, { useState } from 'react';

const Contact=()=>
{
  const [data,setData]=useState(
    {
      fullname:'',
      phone:'',
      email:'',
      message:''
    }
  );
  const formSubmit=(e)=>
  {
          e.preventDefault();
          alert(`
         My name is ${data.fullname}. My mobile number is ${data.phone}. My email is ${data.email}` )
  }
  const inputEvent=(event)=>
  {
       const {name,value}=event.target;
       setData((preVal)=>
       {
         return {
           ...preVal,
           [name]:value,
         }
       })
  }
return(
  <>
<div className="my-5">
  <h1 className="text-center">Contact Us</h1>
</div>
<div className="container contact_div">
  <div className="row">
    <div className="col-md-6 col-10 mx-auto">
<form onSubmit={formSubmit}>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input type="text" class="form-control"  
  name="fullname"
  value={data.fullname}
  onChange={inputEvent}
  placeholder="Enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone Number</label>
  <input type="number" class="form-control"  
  name="phone"
  value={data.phone}
  onChange={inputEvent}
  placeholder="mobile number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control"  
  name="email"
  value={data.email}
  onChange={inputEvent}
  placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control"
  name="message"
    value={data.message}
    onChange={inputEvent}
      rows="3"></textarea>
</div>
 <div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
</form>
    </div>
  </div>
</div>
  </>
)
}
export default Contact;