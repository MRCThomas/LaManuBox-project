import Contact from "./pages/Contact";
import Template from "./Template";
import Sign_In from './components/createAccount';
import Login from "./components/login";
import HomePage from './pages/Home';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import BoxCreation from './components/BoxCreation/BoxCreation'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Template />,
//       errorElement: <div>error 404</div>,
//       children: [
//         {
//           path: 'login',
//           element: <Login />,
//         },
//         {
//           path: 'sing-in',
//           element: <Sign_In />,
//         },
//         {
//           path: 'contact',
//           element: <Contact />,
//         },
//         {
//           index:true,
//           element: <HomePage />,
//         },
//       ]
//     }
//   ]
// )
// function App() {

//   return <RouterProvider router={router} />
// }
// export default App;

function App() {
  return(

    <BoxCreation />
  )
}
export default App;