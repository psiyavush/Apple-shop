import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import './stile.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

function App() {
  const [isDark, setIsDark] = useState(false)
  const [cart, setCart] = useState([])
  return (
    <div className="App" style={{color: isDark ? "white" : "#0C1014"}}>
      <Header isDark={isDark} cart={cart} setCart={setCart}/>
      <main>
        <Home isDark={isDark} setIsDark={setIsDark} cart={cart} setCart={setCart}/>
      </main>
      <Footer isDark={isDark}/>
      <ToastContainer
        position='top-center'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
    />
    </div>
  );
}

export default App;
