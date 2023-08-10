import { BrowserRouter } from "react-router-dom";

import { App } from "./app.routes";

export function Routes() {
  return (
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
}
