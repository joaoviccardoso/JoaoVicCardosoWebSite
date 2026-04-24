import { Navigate } from "react-router-dom";

function PrivateRoute({ children, role }) {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // Não está logado
  if (!token) {
    return <Navigate to="/login" />;
  }

  // Se tiver regra de role (admin)
  if (role && user.role !== role) {
    return <Navigate to="/dashboard" />;
  }

  return children;
}

export default PrivateRoute;