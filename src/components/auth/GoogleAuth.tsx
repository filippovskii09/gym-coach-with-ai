import useGoogleAuth from '../../hooks/useGoogleAuth';
import { GoogleIcon } from '../icons/GoogleIcon';

const GoogleAuth = () => {
  const signInWithGoogle = useGoogleAuth();

  return (
    <div className="flex items-center justify-center h-full">
      <button
        onClick={signInWithGoogle}
        className="hover:scale-110 transition-all p-5"
      >
        <GoogleIcon />
      </button>
      ;
    </div>
  );
};

export default GoogleAuth;
