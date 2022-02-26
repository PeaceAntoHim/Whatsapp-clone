import Login from './login';
import '../styles/globals.css';
import {auth, db} from '../firebase';
import Loading from '../components/Loading';
import { useAuthState } from 'react-firebase-hooks/auth';

function MyApp({ Component, pageProps }) {
  const [user, loading] = useAuthState(auth);

  if (loading) return <Loading />;
  if (!user) return <Login />;

  return <Component {...pageProps} />
}

export default MyApp
