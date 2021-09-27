import React, { useContext } from "react";

import AuthCtx from "../../store/context/AuthCtx";

const HomePage = () => {
  const { handleLogout } = useContext(AuthCtx);

  return (
    <div className="home-page-container">
      HOME PAGE
      <br />
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default HomePage;
