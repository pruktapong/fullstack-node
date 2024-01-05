// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";

export default function App() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    fetch('http://localhost:5000/users')
      .then(res => res.json())
      .then(result => {
        setUsers(result)
        console.log(result)
      })
  }, []);

  return (
    <div>
      <ul>
        {users.map(user => (
          // eslint-disable-next-line react/jsx-key
          <li>
            {user.id} {user.name} {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

