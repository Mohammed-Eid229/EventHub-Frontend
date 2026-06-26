import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (currentUser.role !== "admin") {
    return <Navigate to="/" />;
  }

  return children;
}

export default AdminRoute;