import { useState } from "react";  
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Login = () => {
    let navigate = useNavigate();

    const [loginStatus, setLoginStatus] = useState()

    const handleLoginSubmit = async (event) => {
      try {
          event.preventDefault();
          // Use FormData to get the input values
          const formData = new FormData(event.target);
          
          // Optionally, convert FormData into an object
          const dataObject = Object.fromEntries(formData);
          
          // Process the data
          
          const response = await axios.post("http://localhost:4000/api/login", dataObject, {withCredentials: true, credentials: 'include'});
        
          if (response.status === 200) {
            setLoginStatus(response.data.message);
            navigate("/content");
          }
      } catch (error) {
          setLoginStatus("Wrong username and/or password.");
      }

       // Clear the form
       event.target.reset();
    };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold">Sign in</h2>
      <p className="mt-2 text-center text-sm text-white-600">
      </p>
    </div>

    <form onSubmit={handleLoginSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input key={"email-login"} name="username" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input key={"password-login"} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
      </div>


      <div className="flex items-center justify-center">
              <div className="text-sm">
                <p className="font-medium text-red-600">
                  {loginStatus}
                </p>
              </div>
            </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Sign in</button>
      </div>
    </form>
  </div>
</div>
  );
}

export default Login;