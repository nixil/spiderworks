import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, logout } from "../store";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home: React.FC = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">
        Welcome to the Home Page, {user}!
      </h1>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
};

export default Home;
