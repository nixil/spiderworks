import React from "react";
import Layout from "../components/Layout";
import { useSelector, useDispatch } from "react-redux";
import { RootState, logout } from "../store";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();
  const user = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <Layout>
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <h1 className="text-4xl font-bold mb-4">
          {t("home.welcome", { user })}
        </h1>
        <Button onClick={handleLogout}>{t("home.logout")}</Button>
      </div>
    </Layout>
  );
};

export default Home;
