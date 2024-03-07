import { RouterProvider } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { router } from '@/core/routes.tsx';
import { ToastContainer } from 'react-toastify';

function App() {
    return (
        <>
            <RouterProvider router={router} />
            <ToastContainer />
        </>
    );
}

export default App;
