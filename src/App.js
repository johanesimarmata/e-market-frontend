import { BrowserRouter as Router } from 'react-router-dom';
import { Layout } from './routes/Layout.js';

function App() {
  return (
    <Router>
      <Layout/>
    </Router>
  );
}

export default App;
