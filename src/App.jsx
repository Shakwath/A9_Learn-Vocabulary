import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <>
      {/* Your Routes and Layout */}
      <Toaster position="top-center" reverseOrder={false} />
      <ToastContainer />
    </>
  );
}
