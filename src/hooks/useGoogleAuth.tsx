import { signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from '../firebase/firebase';
import { useGoogleSignInMutation } from '../features/apiSlice';

const useGoogleAuth = () => {
  const navigate = useNavigate();
  const [googleSignIn] = useGoogleSignInMutation();

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      if (user) {
        const userData = {
          uid: user.uid,
          email: user.email,
          name: user.displayName,
        };

        const response = await googleSignIn(userData).unwrap();
        console.log('User data saved or found:', response);

        localStorage.setItem('userId', user.uid);

        navigate('/home');
      }
    } catch (error) {
      console.error('Error signing in with Google:', error);
    }
  };

  return signInWithGoogle;
};

export default useGoogleAuth;
