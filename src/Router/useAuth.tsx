import { useState, useEffect } from 'react';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = () => {
      setTimeout(() => {
        setIsAuthenticated(false); // Change to false to simulate unauthenticated state
        setLoading(false);
      }, 1000);
    };

    checkAuth();
  }, []);

  return { isAuthenticated, loading };
};
