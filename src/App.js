import "./App.css";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./Home/Home";
import Dashboard from "./Dashboard/Dashboard";
import Login from "./Login/Login";
import Profile from "./Profile/Profile";
import MyOrders from "./MyOrders/MyOrders";
import MyBlog from "./MyBlog/MyBlog";
import { useSelector } from "react-redux";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

const Header = () => (
  <nav>
    <Link to="/">Home</Link>
    <Link to="/admin/dashboard">Dashboard</Link>
    <Link to="/login">Login</Link>
    <Link to="/profile">Profile</Link>
    <Link to="/myorders">My Orders</Link>
    <Link to="/myblog">Blogs</Link>
  </nav>
);

function App() {
  const { isAuthenticated } = useSelector((state) => state.root);
  return (
    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/admin/dashboard"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated} adminRoute={true}>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        {/* 
        <Route
          path="/profile"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/myorders"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyOrders />
            </ProtectedRoute>
          }
        /> */}

        {/* <Route
          path="/myblog"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <MyBlog />
            </ProtectedRoute>
          }
        /> */}

        <Route element={<ProtectedRoute isAuthenticated={isAuthenticated} />}>
          <Route path="/profile" element={<Profile />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/myblog" element={<MyBlog />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
