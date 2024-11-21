import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ProtectedRoute: FC<{ children: JSX.Element }> = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      navigate('/');
    }
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
