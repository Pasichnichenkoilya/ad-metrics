import { BrowserRouter, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import Sidebar from "./components/Sidebar";
import DashboardPage from "./pages/DashboardPage";
import MetricsDetailsPage from "./pages/MetricsDetailsPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MetricsCreationPage from "./pages/MetricsCreationPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex h-dvh bg-slate-800 text-slate-100">
        <Sidebar />
        <main className="min-h-0 flex-1 overflow-y-scroll p-2 md:p-5">
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="dashboard" element={<DashboardPage />} />
            <Route path="metrics/:id?" element={<MetricsDetailsPage />} />
            <Route path="metrics/create" element={<MetricsCreationPage />} />
          </Routes>
        </main>
      </div>
      <ToastContainer
        toastStyle={{
          backgroundColor: "#334155",
        }}
      />
    </BrowserRouter>
  );
}
