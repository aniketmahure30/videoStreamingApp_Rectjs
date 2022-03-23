import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./pages/navbar/Navbar";
import StreamBaseRoutes from "./routes/StreamBaseRoutes"; //? all Routes
import { ToastContainer } from "react-toastify"; //?for popup message
import "react-toastify/dist/ReactToastify.css"; //?for popup message
import AuthProvider from "./apis/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <header>
          <Navbar />
        </header>
        <main>
          <ToastContainer pauseOnHover theme="dark" />
          <StreamBaseRoutes />
        </main>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default App;
