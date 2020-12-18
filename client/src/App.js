import React, { Suspense, lazy } from "react";
import "./App.css";
import Loading from "./components/LoaderComponent/Loading";
const Nav = lazy(() => import("./components/Nav"));
const Task = lazy(() => import("./components/Task"));

function App() {
  return (
    <div className="App">
      <Suspense fallback={<Loading />}>
        <Nav />
        <Task />
      </Suspense>
    </div>
  );
}

export default App;
