import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const base_url = 'https://conexa-backend-challenge.herokuapp.com';

function Content() {
  
    let navigate = useNavigate();
    const handleLogout = async (event) => {
      try {
          event.preventDefault();
          // Use FormData to get the input values
          const formData = new FormData(event.target);
          
          // Optionally, convert FormData into an object
          const dataObject = Object.fromEntries(formData);
          
          // Process the data
          await axios.post(`${base_url}/api/logout`, dataObject, {withCredentials: true, credentials: 'include'});
          navigate("/");
          
      } catch (error) {
        console.error(error)
      }
    }

  return (
    
    <div className="">
        <div className="mt-8 mr-8 flex items-center rounded-md justify-end">
        <form
          method="post"
          onSubmit={handleLogout}>
          <button className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Logout</button>
        </form>
            
        </div>
        
        
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-center flex-col">
        <h1 className="mb-14 font-medium text-4xl text-indigo-800">Content</h1>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
            <div className="inline-flex rounded-md shadow">
            <button onClick={() => {navigate("/content/posts")}} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Posts</button>
            </div>
            <div className="ml-8 inline-flex rounded-md shadow">
            <button onClick={() => {navigate("/content/photos")}} className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50">Photos</button>
            </div>
        </div>
    </div>
  </div>
  );
}

export default Content;
