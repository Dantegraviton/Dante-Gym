import React,{useState} from "react";
import { FaFacebook } from 'react-icons/fa';
import {FaTwitter } from 'react-icons/fa';
import {FaInstagram } from 'react-icons/fa';

 

function Contact() {
  const[input,setInput]=useState([
    {id:1,name:"kemi", age:18,class:500},
    {id:2,name:"Bambam", age:15,class:500},
    {id:3,name:"kemi", age:8,class:400}
  ])

  const[all,setAll]= useState("")
  const[age,setAge]=useState("") 
  const[level,setlevel]=useState("")
  const [dt, setDt] = useState("")

const handleChange =(e)=>{
  setAll(e.target.value)
  console.log("hello",e.target.value)
}

const ageChange =(e)=>{
  setAge(e.target.value)
  console.log("hello",e.target.value)
}
const addName = (e)=>{
  e.preventDefault()
  const newest ={
    name:all,
    age:age,
    class:level

  }
  setInput([...input,newest])
  setAll('')
  setAge('')
  setlevel('')
  console.log(new Date())
}
const fuss = {
  color : 'aquamarine'
}

const fuster = {
  color : 'aquamarine'
}

const fustery = {
  color : 'aquamarine'
}

  return (
  
    <section className="contact">
    <div className="contact-form">
      <h1>contact <span>Us</span></h1>
        <p>{'We are spectacular at what we do , We provide you with the best Gyming Equipment you need for what ever purpose and we`re set to deliver to utmost Quality and Satisfaction'}</p> .
              
   
   <form onSubmit={addName}>
   <h4 id="name">Name</h4><input type="name"id="not"placeholder="Your Name" value={age} onChange={ageChange}/><br></br>
    <h4 id="mail">Email</h4> <input type="email"id="null"placeholder="Email" value={all} onChange={handleChange} />
   <h4 id="meg">Message</h4><textarea className="form-control rounded-0" id="message"
   name="message"
   placeholder="message" ></textarea><br></br>
    <button type='submit' className="btn">Send</button>
   </form>
   </div>

   <div className="contact-img">
     <img src="/img/woman.jpg.jpg" alt="" /> 
     </div>

<div className="pacture">

     <h2 className="colory">Get in touch Via  </h2>
     <h3> < FaFacebook  style={fuss} size='30px'/> </h3>
     <h3>  < FaTwitter  style={fuster} size='30px'/> </h3> 
     <h3>< FaInstagram  style={fustery} size='30px'/>   </h3>
     <address>
       
     
     </address>
     </div>
   
   
   

   
   </section>
    
   /* {
    input.map(m =>{
      return(
        <div key={m.id}>
          <div>Name: {m.name}</div>
          <div>Age: {m.age}</div>
          class:{m.class}
        </div>
      )
    }) */
   
  
  );
}


export default Contact;
