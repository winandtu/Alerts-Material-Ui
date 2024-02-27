import React, { useState } from "react";
import CustomAlert from "./CustomAlert";

function App() {
  const [open, setOpen] = useState(false);

  const handleOpenAlert = () => {
    setOpen(true);
  };

  const handleCloseAlert = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenAlert}>Show Alert</button>
      <CustomAlert
        open={open}
        severity="success"
        message="This is a success Alert."
        handleClose={handleCloseAlert}
      />
    </div>
  );
}

export default App;
