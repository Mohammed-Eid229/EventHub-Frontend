import { Navigate } from "react-router-dom";

function OrganizerRoute({ children }) {
  const currentUser = JSON.parse(
    localStorage.getItem("currentUser")
  );

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (currentUser.role !== "organizer") {
    return <Navigate to="/" />;
  }

  return children;
}

export default OrganizerRoute;