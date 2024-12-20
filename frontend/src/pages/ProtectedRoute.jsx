import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useCookie from "../context/useCookie";

function ProtectedRoute({ children }) {
  const { cookie } = useCookie();

  const navigate = useNavigate();
  useEffect(
    function () {
      if (!cookie) {
        navigate("/login");
      }
    },
    [cookie, navigate]
  );

  return children;
}

export default ProtectedRoute;
