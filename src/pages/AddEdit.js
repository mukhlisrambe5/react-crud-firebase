import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import './AddEdit.css'
import fireDb from '../firebase';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const initialState = {
  name: "",
  email: "",
  contact: ""
}
const AddEdit = () => {
  const [state, setState] = useState(initialState)
  const [data, setData] = useState({})

  const { name, email, contact } = state;
  const navigate =  useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !email || !contact){
      toast.error("Please provide value in each input field",{ position: toast.POSITION.TOP_CENTER})
    }else{
      fireDb.child("contacts").push(state, (err)=>{
        if(err){
          toast.error("Error Notification !", {
            position: toast.POSITION.TOP_LEFT
          });
    
        }else{
          toast.success('Contacts Added successfully!', {
            position: toast.POSITION.TOP_CENTER
        });
        }
      });
      setTimeout(() => navigate("/"), 6000);
    }
  }
  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setState({...state, [name]:value})
  }
  return (
    <div style={{ marginTop: "100px" }}>
      <ToastContainer />
      <form
        style={{
          margin: "auto",
          padding: "15px",
          maxWidth: "400px",
          alignContent: "center",
        }}
        onSubmit={handleSubmit}
      >
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          name="name"
          placeHolder="Your name ..."
          value={name}
          onChange={handleInputChange}
        />

        <label htmlFor="name">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeHolder="Your email ..."
          value={email}
          onChange={handleInputChange}
        />

        <label htmlFor="name">Contact</label>
        <input
          type="number"
          id="contact"
          name="contact"
          placeHolder="Your contact ..."
          value={contact}
          onChange={handleInputChange}
        />

        <input type="submit" value="Save" />
      </form>
    </div>
  )
}

export default AddEdit