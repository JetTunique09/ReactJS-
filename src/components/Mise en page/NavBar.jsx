import React, { useEffect, useState } from 'react';
import { Link } from 'gatsby';
import { fetchUserStatus } from '../Acces/auth.js';

const NavBar = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const checkAuth = async () => {
      const status = await fetchUserStatus();
      if (status) {
        setIsAuthenticated(true);
        setUserType(status);
      } else {
        setIsAuthenticated(false);
        setUserType('');
      }
    };

    checkAuth();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login';
  };

  return (
    <nav style={styles.navbar}>
      <ul style={styles.navList}>
        <li style={styles.navItem}>
          <Link to="/home" style={styles.navLink}>Accueil</Link>
        </li>
        {isAuthenticated && userType === 'admin' && (
          <li style={styles.navItem}>
            <Link to="/conference" style={styles.navLink}>Conférences</Link>
          </li>
        )}
        {isAuthenticated && userType === 'admin' && (
          <li style={styles.navItem}>
            <Link to="/users" style={styles.navLink}>Liste des Utilisateurs</Link>
          </li>
        )}
        {isAuthenticated && userType === 'user' && (
          <li style={styles.navItem}>
            <Link to="/paramsUser" style={styles.navLink}>Mon compte</Link>
          </li>
        )}
        {isAuthenticated && userType === 'admin' && (
          <li style={styles.navItem}>
            <Link to="/paramsAdmin" style={styles.navLink}>Mon compte</Link>
          </li>
        )}
        <li style={styles.navItem}>
          {isAuthenticated ? (
            <>
              <span style={styles.navLink}>Connecté en tant que {userType}</span>
              <button onClick={handleLogout} style={styles.logoutButton}>Déconnexion</button>
            </>
          ) : (
            <span style={styles.navLink}>Non connecté</span>
          )}
        </li>
      </ul>
    </nav>
  );
};

const styles = {
  navbar: {
    backgroundColor: '#3aaed8',
    padding: '1rem',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    justifyContent: 'space-around',
    margin: 0,
    padding: 0,
    alignItems: 'center',
  },
  navItem: {
    marginTop: 0,
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
  },
  logoutButton: {
    backgroundColor: '#FC5130',
    color: 'white',
    border: 'none',
    padding: '0.5rem 1rem',
    cursor: 'pointer',
    fontSize: '1rem',
    marginLeft: '6rem',
  },
};

export default NavBar;
