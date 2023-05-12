import "./App.css";
import Header from "./components/Header/Header";
import ProtectedRoutes from "./components/ProtectedRoutes";
import HomePage from "./pages/homepage/HomePage";
import LogIn from "./pages/login/LogIn";
import { AuthContext, AuthContextProvider } from "./context/Auth";
import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import { DarkModeProvider } from "./context/DarkModeContext";
import Error from "./pages/error/Error";
import ProtectedRouterAfterLogIn from "./components/ProtectedRouterAfterLogIn";
import ForgotPassword from "./pages/forgotpwd/ForgotPassword";
import SignUp from "./pages/signup/SignUp";
import Teaser from "./pages/teaser/Teaser";

function App() {
  return (
    <AuthContextProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            {/* <Route path="/home" element={<HomePage />} /> */}
            <Route element={<ProtectedRouterAfterLogIn />}>
              <Route path="/login" element={<LogIn />} />
            </Route>
            <Route element={<ProtectedRoutes />}>
              <Route element={<HomePage />} path="/home" exact />
              <Route element={<Teaser />} path="/teaser/:id" />
            </Route>
            <Route element={<ForgotPassword />} path="/forgotpassword" />
            <Route element={<SignUp />} path="/signup" />
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </AuthContextProvider>
  );
}

export default App;
