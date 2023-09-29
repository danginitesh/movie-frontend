import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import MovieList from "../src/components/MovieList";
import CreateMovie from '../src/components/CreateMovie';

function App() {
  return (
    <>
      <Router>
        <div>
          <ul>
            <li>
              <Link to='/'>Movie List</Link>
            </li>
            <li>
              <Link to='/create-movie'>Create Movie</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route exact path="/" element={<MovieList />}></Route>
          <Route exact path="/create-movie" element={<CreateMovie />}></Route>
        </Routes>
      </Router>
      {/*  */}
    </>
  );
}

export default App;
