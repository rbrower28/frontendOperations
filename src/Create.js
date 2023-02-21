import React from 'react'
import { useState } from 'react';
import Axios from 'axios';

export default function Create() {

  const [firstName, set_fname] = useState("");
  const [lastName, set_lname] = useState("");
  const [email, set_email] = useState("");

  const sendCreate = () => {
    console.log(firstName, lastName, email)
    Axios.post(
      'https://subitt-application-clientdemo.onrender.com/client/',
      {firstName: firstName, lastName: lastName, email:email,
    }).then(() => {
      console.log("Post request successful.")
    })
  };

  return (
    <div>
      <h3>Create</h3>
      <form>
        <label>First Name
          <input type='text' onChange={(event) => {set_fname(event.target.value)}} />
        </label>
        <label>Last Name
        <input type='text' onChange={(event) => {set_lname(event.target.value)}} />
          </label>
        <label>Email
          <input type='text' onChange={(event) => {set_email(event.target.value)}} />
        </label>
        <button type='button' onClick={sendCreate}>Create</button>
      </form>
    </div>
    );
}