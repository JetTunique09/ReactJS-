import React, { useEffect, useState } from 'react';
import { navigate } from 'gatsby';
import { fetchUserStatus } from './auth';

const PrivateRoute = ({ component: Component, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = async () => {
      const status = await fetchUserStatus();
      console.log('User status:', status);
      if (status) {
        setIsAuthenticated(true);
      } else {
        navigate('/login');
      }
      setIsLoading(false);
    };

    checkAuth();
  }, []);

  if (isLoading) return <p>Chargement...</p>;

  return isAuthenticated ? <Component {...rest} /> : null;
};

export default PrivateRoute;
