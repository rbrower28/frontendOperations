import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Update() {

  const [firstName, set_fname] = useState("");
  const [lastName, set_lname] = useState("");
  const [email, set_email] = useState("");

  return (
    <div>
      <h3>Update</h3>
      <form>
        <label>ID:
          <input type='text' />
        </label>
        <label>First Name
          <input type='text' onChange={(event) => {set_fname(event.target.value)}} />
        </label>
        <label>Last Name
        <input type='text' onChange={(event) => {set_lname(event.target.value)}} />
          </label>
        <label>Email
          <input type='text' onChange={(event) => {set_email(event.target.value)}} />
        </label>
        {/* <button type='button' onClick={sendUpdate}>Create</button> */}
      </form>
    </div>
    );
}