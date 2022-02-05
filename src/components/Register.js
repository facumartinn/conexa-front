import { useState } from "react";  
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const base_url = 'https://conexa-backend-challenge.herokuapp.com';

const Register = () => {
  let navigate = useNavigate();

    const [registerStatus, setRegisterStatus] = useState()

    const handleRegisterSubmit = async (event) => {
      try {
        event.preventDefault();

        // Use FormData to get the input values
        const formData = new FormData(event.target);
        
        // Optionally, convert FormData into an object
        const dataObject = Object.fromEntries(formData);
        // console.log(dataObject)
        // Process the data
        
        const response = await axios.post(`${base_url}/api/register`, dataObject, {withCredentials: true, credentials: 'include'});
        // console.log(response.data);

        if (response.status === 200) {
          setRegisterStatus(response.data.message);
          navigate('/');
        } 
      } catch (error) {
        console.error(error)
        setRegisterStatus("User already exists. Please log in!")
        
      }
        // Clear the form
        event.target.reset();
    };

  return (
    <div className="flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
  <div className="max-w-md w-full space-y-8">
    <div>
      <h2 className="mt-6 text-center text-3xl font-bold">Sign up your account</h2>
      <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <button onClick={() => {navigate('/')}} className="font-medium text-indigo-600 hover:text-indigo-500">
                login if you already have one
              </button>
            </p>
    </div>

    <form onSubmit={handleRegisterSubmit} className="mt-8 space-y-6">
      <input type="hidden" name="remember" value="true" />
      <div className="rounded-md shadow-sm -space-y-px">
        <div>
          <label htmlFor="email-address" className="sr-only">Email address</label>
          <input key={"email-register"} name="username" type="email" autoComplete="email" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">Password</label>
          <input key={"password-register"} name="password" type="password" autoComplete="current-password" required className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" placeholder="Password" />
        </div>
      </div>


      <div className="flex items-center justify-center">
              <div className="text-sm">
                <p className="font-medium text-600">
                  {registerStatus}
                </p>
              </div>
            </div>

      <div>
        <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Register</button>
      </div>
    </form>
  </div>
</div>
  );
}

export default Register;