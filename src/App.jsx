import { useState } from "react";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* Navbar Section */}
      <section className="">
        <Navbar />
      </section>
    </>
  );
}

export default App;
