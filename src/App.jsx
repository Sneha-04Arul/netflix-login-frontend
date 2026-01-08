import { useState } from "react";
import Login from "./Login";
import Dashboard from "./Dashboard";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <>
      {isLoggedIn ? <Dashboard /> : <Login setIsLoggedIn={setIsLoggedIn} />}
    </>
  );
}

export default App;
