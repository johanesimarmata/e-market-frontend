import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import { Layout } from './routes/Layout.js';
import { UserProvider } from './context/UserContext.js';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <UserProvider>
          <Layout/>
        </UserProvider>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
