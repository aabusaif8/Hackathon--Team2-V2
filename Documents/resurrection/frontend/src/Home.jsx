import axios from "axios";
import React, {useEffect,useState} from "react";
import {Link} from "react-router-dom";

function Home() {
  const [auth, setAuth] = useState(false)
  const [message, setMessage] = useState('')
  const [name, setName] = useState('')
  const [userData, setUserData] = useState({})

  useEffect(() => {
    console.log('useEffect hook called');
    axios.get('http://localhost:7000')
      .then(res => {
        console.log('axios.get request sent');
        setUserData(res.data);
        console.log(res.data);
        if (res.data.Status === "Success" && res.data.isLoggedIn) {
          setAuth(true);
          setName(res.data.Name);
        } else {
          setAuth(false);
          setMessage(res.data.Error);
        }
      })
      .catch((err) => {
        console.log(err);
        setMessage("Error retrieving data");
      });
    return () => {
      console.log('useEffect hook cleaned up');
    };
  }, []);

// Client-side code
const handleDelete = () => {
  axios.get('http://localhost:7000/logout')
    .then(res => {
      location.reload(true)
    })
    .catch((err) => {
      console.log(err);
    });
}
  return (
    <div>
      {
        auth ?
        <div>
          <h3> Welcome {name}</h3>
          <button className="btn btn-danger" onClick={handleDelete}>Logout</button>
        </div>
        :
        <div>
          <h3>{message}</h3>
          <h3>Please login</h3>
          <Link to='/login'>Log in</Link>
        </div>
      }
    </div>
  )
}

export default Home