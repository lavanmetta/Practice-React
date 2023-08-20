import { useState } from "react";
import Home from "./Home";

function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
  });

  const [success, setSuccess] = useState(false);

  const onLoginHandler = async (event) => {
    event.preventDefault();
    const { username, password } = data;
    const userDetails = { username, password };
    const url = "https://apis.ccbp.in/login";
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);

    console.log(response);
    if (response.ok === true) {
      setSuccess(true);
    }
  };

  const onChnageUsername = (e) => {
    setData({
      ...data,
      username: e.target.value,
    });
  };

  const onChnagePassword = (e) => {
    setData({
      ...data,
      password: e.target.value,
    });
  };

  return (
    <div>
      <center>
        <form onSubmit={onLoginHandler}>
          <label htmlFor="username">UserName</label>
          <input id="username" type="text" onChange={onChnageUsername} />
          <label htmlFor="password">password</label>
          <input id="password" type="password" onChange={onChnagePassword} />
          <button type="submit">Submit</button>
        </form>

        {success ? <Home /> : <h2>You are not Logged</h2>}
      </center>
    </div>
  );
}

export default Login;
