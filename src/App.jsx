import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { Toaster } from "react-hot-toast";
import Login from "./pages/Login";
import ProtectedRoute from "./components/ProtectedRoute ";
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart />
            </ProtectedRoute>
          }
        />

        <Route
          path="/login"
          element={<Login />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
