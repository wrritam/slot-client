import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { SecureReqProvider } from './contexts/Requests.tsx'
import {Provider} from 'react-redux'
import { store } from './store/store.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <SecureReqProvider>
    <Provider store={store}>
      <App />
      </Provider>
      </SecureReqProvider>
  </StrictMode>,
)
