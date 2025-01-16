import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Categories from "./Categories";
import Category from "./Category";
import Header from "./Header";

function App() {
  return (
    <div className="app">
      <Header />

      <Routes>
        <Route path="/" element={<Home title="Home" />} />
        <Route path="about" element={<About />} />
        <Route path="categories" element={<Categories />}>
          <Route path=":catId" element={<Category />} />
        </Route>
        <Route
          path="/"
          element={<Home title = "Home" />}
        />
        <Route path="categories" element={<Categories />} />
      </Routes>

      <footer className="container">
        &copy;2024 | <a href="https://www.rp.edu.sg/schools-courses">Republic Polytechnic</a>
      </footer>
    </div>
  );
}

export default App;
