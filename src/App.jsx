import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';
import AuthProvider from './contexts/AuthProvider';
import Mainlayput from './Layouts/Mainlayput';

function App() {
  return (
    <>
      {/* Your Routes and Layout */}
      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer />

        <AuthProvider>
            <Mainlayput></Mainlayput>
        </AuthProvider>
    </>
  );
  
}
export default App;