import { useState } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [username, setUsername] = useState("");

  const submitCoffee = async () => {
    if (!username) {
      toast.error("Enter username");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        {
          username
        }
      );

      toast.success(
        `Coffee registered for ${response.data.username} at ${response.data.time}`
      );

      setUsername("");
    } catch (error) {
      toast.error("Error");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: "20px"
      }}
    >
      <h1>Coffee Counter</h1>

      <input
        placeholder="Enter Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={{
          padding: "10px",
          width: "250px"
        }}
      />

      <button
        onClick={submitCoffee}
        style={{
          padding: "10px 20px",
          cursor: "pointer"
        }}
      >
        Get Coffee
      </button>

      <Toaster />
    </div>
  );
}

export default App;