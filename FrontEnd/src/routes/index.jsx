import { BrowserRouter } from "react-router-dom";

import { useAuth } from "../hooks/auth";

import { App } from "./app.routes";
import { Auth } from "./auth.routes";

export function Routes() {
  const { user } = useAuth();

  return (
    <BrowserRouter>
      {
        user ? <App /> : <Auth />
      }
    </BrowserRouter>
  )
}
