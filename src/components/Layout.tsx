import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
  MenubarContent,
  MenubarItem,
  MenubarSeparator,
} from "@/components/ui/menubar";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../store";
import { RootState } from "../store";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import LanguageSwitcher from "./LanguageSwitcher";
import spiderwebImage from "../assets/spiderweb.png";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground">
        <img
          src={spiderwebImage}
          alt="Spiderweb"
          className="fixed top-0 left-0 mx-auto h-24 w-auto"
        />
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold">{t("app.title")}</h1>

          <Menubar className="bg-transparent border-none shadow-none">
            <MenubarMenu>
              <MenubarTrigger>{t("menu.home")}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem onClick={() => navigate("/home")}>
                  {t("menu.dashboard")}
                </MenubarItem>
                <MenubarItem>{t("menu.profile")}</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
              <MenubarTrigger>{t("menu.settings")}</MenubarTrigger>
              <MenubarContent>
                <MenubarItem>{t("menu.account")}</MenubarItem>
                <MenubarItem>{t("menu.preferences")}</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={handleLogout}>
                  {t("menu.logout")}
                </MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>

          <nav className="flex items-center space-x-4">
            <span>{user}</span>
            <Button variant="secondary" onClick={handleLogout}>
              {t("home.logout")}
            </Button>

            <LanguageSwitcher />
          </nav>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">{children}</main>
      <footer className="bg-secondary text-secondary-foreground">
        <div className="container mx-auto px-4 py-3 text-center">
          {t("app.footer")}
        </div>
      </footer>
    </div>
  );
};

export default Layout;
