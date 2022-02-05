import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const base_url = 'https://conexa-backend-challenge.herokuapp.com';

const Posts = () => {
    let navigate = useNavigate();

    const [posts, setPosts] = useState(null);

    useEffect(() => {
      axios.get(`${base_url}/api/posts`, {withCredentials: true, credentials: 'include'}).then((response) => {
        
        if(response.status === 200) {
          setPosts(response.data);
        }
        
      });
    }, []);
    // console.log(posts)
    if (!posts) return null;

    

  return (
      <div className="flex flex-col mt-4">
      <div className="ml-8 flex items-center rounded-md justify-start">
            <button onClick={() => {navigate("/content")}} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Back</button>
        </div>
        <div className="my-2 sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block w-5 sm:px-6 lg:px-8">
            <div className="shadow border-b border-gray-200 sm:rounded-lg">
              <table className=" divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Body
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {posts.map((post) => (
                    <tr key={post.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">{post.title}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-xs text-gray-800">{post.body}</div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    
    
      
  );
}

export default Posts;
