import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const base_url = 'https://conexa-backend-challenge.herokuapp.com';

export default function App() {
  let navigate = useNavigate();
  const [photos, setPhotos] = useState(null);

  useEffect(() => {
    axios.get(`${base_url}/api/photos`).then((response) => {
      setPhotos(response.data);
    });
  }, []);

  if (!photos) return null;

  return (
  <div className="flex flex-col mt-4">
    <div className="ml-8 mb-8 flex items-center rounded-md justify-start">
            <button onClick={() => {navigate("/content")}} className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">Back</button>
        </div>
    <div className="flex flex-wrap justify-center">
      {photos.map(photo => (
        <div className="flex flex-col justify-center">
          <img className="w-1/4 h-auto	m-10" src={photo.url} alt={photo.id} />
          <p className="w-1/4">{photo.title}</p>
        </div>
      ))}
    </div>
</div>
    
  );
}