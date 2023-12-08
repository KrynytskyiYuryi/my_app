import React, { useEffect, useState } from "react";
import AppRouter from "./component/AppRouter";
import { AuthContext } from "./Context/Context";

function App() {
  const [isAuth, setIsAuth] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("auth")) {
      setIsAuth(true);
    }
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isAuth,
        setIsAuth,
      }}
    >
      <AppRouter />;
    </AuthContext.Provider>
  );
}

export default App;
