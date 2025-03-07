import { RoutesBuilder } from './components/molecules/RoutesBuilder.tsx';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />
      <RoutesBuilder />
    </>
  );
}

export default App;
