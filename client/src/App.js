import React, { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/LoaderComponent/Loading";
const Nav = lazy(() => import("./components/Nav"));
const Form1 = lazy(() => import("./components/Form1"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Nav />
        <Form1 />
      </Suspense>
    </div>
  );
}

export default App;
