import Template from "./Template";
import Sign_In from './components/createAccount';
import Login from "./components/Login";
import HomePage from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <Template />,
      errorElement: <div>error 404</div>,
      children: [
        {
          index:true,
          element: <HomePage />,
        },
        {
          path: 'home',
          element: <HomePage />,
        },
        {
          path: 'login',
          element: <Login />,
        },
        {
          path: 'sign-in',
          element: <Sign_In />,
        },
      ]
    }
  ]
)
function App() {

  return <RouterProvider router={router} />
}
export default App;
