import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import axios from "axios";

//import page
import HomePage from "./pages/HomePage";
import CreateProductPage from "./pages/CreateProductPage";
import EditProductPage from "./pages/EditProductPage";
import ViewProductPage from "./pages/ViewProductPage";

function App() {
  return (
    <div className="App">
      {/* Start coding here */}
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/product/create" element={<CreateProductPage />} />
          <Route
            path="/product/edit/:productId"
            element={<EditProductPage />}
          />
          <Route
            path="/product/view/:productId"
            element={<ViewProductPage />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
