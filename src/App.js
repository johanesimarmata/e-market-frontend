import { BrowserRouter as Router } from 'react-router-dom';
import React from 'react'
import { Layout } from './routes/Layout.js';
import { UserProvider } from './context/UserContext.js';

function App() {
  return (
      <Router>
        <UserProvider>
          <Layout/>
        </UserProvider>
      </Router>
  );
}

export default App;
