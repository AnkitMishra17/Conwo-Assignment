import React, { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/LoaderComponent/Loading";
const Nav = lazy(() => import("./components/Nav"));
const Homepage = lazy(() => import("./components/Homepage"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Nav />
        <Homepage />
      </Suspense>
    </div>
  );
}

export default App;
