import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import Home from "../pages/Home";

export default function ProtectedRoute({ children, requireAdmin }) {
  const { user } = useAuthContext();

  if (!user || (requireAdmin && !user?.isAdmin)) {
    return <Navigate to="/" replace={true}></Navigate>;
  }

  return children;
}
