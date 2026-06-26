import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home/Home";
import Events from "../pages/Events/Events";
import EventDetails from "../pages/EventDetails/EventDetails";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Booking from "../pages/Booking/Booking";
import Bookings from "../pages/Bookings/Bookings";
import ProtectedRoute from "../guards/ProtectedRoute";
import Profile from "../pages/Profile/Profile";
import Admin from "../pages/Admin/Admin";
import AddEvent from "../pages/AddEvent/AddEvent";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/events/:id" element={<EventDetails />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/book-event/:id" element={<Booking />} />
      

      <Route
        path="/bookings"
        element={
          <ProtectedRoute>
            <Bookings />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/admin"
        element={         
        <ProtectedRoute>
          <Admin />
        </ProtectedRoute>
        }
      />  
      <Route
        path="/admin/add-event"
        element={<AddEvent />}
      />
    </Routes>
  );
}

export default AppRoutes;