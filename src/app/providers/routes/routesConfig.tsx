import { Route, Routes } from "react-router-dom";
import RegisterPage from "@/pages/register-page/register-page.tsx";
import { FC } from "react";
import MainPage from "@/pages/main-page/main-page.tsx";

interface Props {}

export const RoutesApp: FC<Props> = () => {
  return (
    <Routes>
      <Route path="/auth" element={<RegisterPage />} />
      <Route path="/" element={<MainPage />} />
      <Route path="*" element={<RegisterPage />} />
    </Routes>
  );
};
