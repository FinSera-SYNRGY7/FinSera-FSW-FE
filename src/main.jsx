import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { GlobalHistory } from '@/lib/utils'
import { BrowserRouter } from 'react-router-dom'
import '@/index.css'
import "nprogress/nprogress.css";


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <BrowserRouter>
        <GlobalHistory />
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </QueryClientProvider>
)