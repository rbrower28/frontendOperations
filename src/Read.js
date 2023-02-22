import React from 'react';
import { useState } from 'react';
import Axios from 'axios';

export default function Read() {

  const [clientList, setClientList] = useState([])

  const sendRead = () => {
    Axios.get("https://subitt-application-clientdemo.onrender.com/client/").then((response) => {
      console.log(response);
      setClientList(response.data)
    });
  };

  return (
    <div>
      <h3>Read</h3>
      <button onClick={sendRead}>Get all</button>
      <ul>
        {clientList.map((val, key) => {
          return <li>({val._id}): {val.firstName} {val.lastName} - {val.email}</li>
        })}
      </ul>
    </div>
    );
}