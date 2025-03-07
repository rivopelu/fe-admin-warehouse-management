import Button from '../../components/atoms/Button.tsx';
import { useAuth } from '../../hooks/useAuth.ts';

export default function HomePage() {
  const auth = useAuth();
  return (
    <div>
      <h1>HOME PAGE</h1>
      <Button onClick={() => auth.logOut()}>LOGOUT</Button>
    </div>
  );
}
