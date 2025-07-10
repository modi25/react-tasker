import react, {useState} from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
// Placeholder auth state: false means logged out, true means logged in
  const [isAuthenticated, setIsAuthenticated] = useState(false);

    const handleAuthToggle = () => {
    setIsAuthenticated(!isAuthenticated);
  };

    return (
    <nav style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
      <h2 style={{ display: 'inline', marginRight: '20px' }}>ReactTasker</h2>

      {/* <Link to="/login" style={{ marginRight: '10px' }}>Login</Link>
      <Link to="/signup" style={{ marginRight: '10px' }}>Signup</Link> */}

      {isAuthenticated ? (
        <>
          <button onClick={handleAuthToggle}>Logout</button>
        </>
      ) : (
        <>
          <button onClick={handleAuthToggle}>Login</button>
        </>
      )}
    </nav>
  );

}

export default NavBar;