import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Delete() {
  
  const [id, set_id] = useState("");

  const sendDelete = () => {
    const url = `https://subitt-application-clientdemo.onrender.com/client/${id}`;
    Axios.delete(url).then(() => {
      console.log("Delete request successful.")
    })
  };

  return (
    <div>
      <h3>Delete</h3>
      <form>
        <label>ID:<input type='text' onChange={(event) => {set_id(event.target.value)}} /></label>
        <button type='button' onClick={sendDelete}>Delete</button>
      </form>
    </div>
  );
}