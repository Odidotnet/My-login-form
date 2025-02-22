import './App.css';
import Login from './login/Login';
import { Signup } from './signUp/Signup';
import 'bootstrap/dist/css/bootstrap.css';
import { RouterProvider, createBrowserRouter } from "react-router-dom";


function App() {
  const route = createBrowserRouter([
    {
    path:"/",
    element: <Signup />,
  },

  {
    path:"/login",
    element: <Login />,
  }
])
  return (
    <div className="App">
      <RouterProvider router={route}></RouterProvider>
    </div>
  );
}

export default App;
