import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './features/auth/Login';
import RoleBasedRoutes from './components/RoleBasedRoutes';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<RoleBasedRoutes />} />
      </Routes>
    </Router>
  );
}

export default App;