import App from "./App.jsx"
import config from "./amplifyconfiguration.json"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import { Amplify } from "aws-amplify"
import "./index.css"

Amplify.configure(config)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
