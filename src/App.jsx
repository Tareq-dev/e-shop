import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart";
import { Toaster } from 'react-hot-toast';
function App() {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/cart"
          element={<Cart />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
