import { useState, createContext, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

const AuthContext = createContext();

function Home() {
  const [auth, setAuth] = useState(false);

  const styleOfContainer = {
    backgroundColor: "crimson",
    padding: "10px",
    width: "600px",
    color: "white",
    borderRadius: "10px",
  };

  const signInHandler = () => {
    setAuth(true);
  };

  const signOutHandler = () => {
    setAuth(false);
  };
  return (
    <AuthContext.Provider value={auth}>
      <center>
        <h1>Home Component</h1>
        
        <div style={styleOfContainer}>
          <Link to="/">Home</Link>

          {auth ? (
            <>
              <Link to="/dashboard">Dashboard</Link>
              <Link to="/settings">Settings</Link>
            </>
          ) : null}

          <Link to="/about">About</Link>
        </div>
        <Outlet />
        <strong>login to see Dashboard and settings</strong>
        {auth ? (
          <button onClick={signOutHandler}>Logout</button>
        ) : (
          <button onClick={signInHandler}>Login</button>
        )}
      </center>
    </AuthContext.Provider>
  );
}
export const Authentication = () => useContext(AuthContext);
export default Home;
