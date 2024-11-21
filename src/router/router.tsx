import { createBrowserRouter } from 'react-router-dom';
import HomeView from '../views/HomeView';
import AuthView from '../views/AuthView';
import { CreateWorkoutView } from '../views/CreateWorkoutView';
import ProtectedRoute from './ProtectedRoute';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AuthView />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <HomeView />
      </ProtectedRoute>
    ),
  },
  {
    path: '/create',
    element: (
      <ProtectedRoute>
        <CreateWorkoutView />
      </ProtectedRoute>
    ),
  },
]);
