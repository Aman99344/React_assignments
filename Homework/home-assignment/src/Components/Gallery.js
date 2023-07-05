import  { useState, useEffect } from 'react';
import "./Gallery.css"

const Gallery = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    fetchPhotos();
  }, []);

  const fetchPhotos = async () => {
    try {
      const response = await fetch(
        `https://api.unsplash.com/photos/?client_id=s076kURZmryhYatKdr-ZlYH3QzzuT6p1wWlvSmgYhMs`
      );
      const data = await response.json();
      setPhotos(data);
    } catch (error) {
      console.error('Error fetching photos:', error);
    }
  };

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `https://api.unsplash.com/search/photos/?client_id=s076kURZmryhYatKdr-ZlYH3QzzuT6p1wWlvSmgYhMs&query=${searchQuery}`
      );
      const data = await response.json();
      setPhotos(data.results);
    } catch (error) {
      console.error('Error searching photos:', error);
    }
  };

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search photos..."
          value={searchQuery}
          onChange={handleInputChange}
        />
        <button className='btn' type="submit">Search</button>
      </form>
      <div className="gallery">
        {photos.map((photo) => (
          <img key={photo.id} src={photo.urls.small} alt={photo.alt_description} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
