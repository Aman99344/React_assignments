import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Polling = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);
  const [timer, setTimer] = useState(10);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
        );
        const newPosts = response.data.hits;
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

  
    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

  
    fetchPosts();

    
    const timerId = setInterval(fetchPosts, 10000);

    
    return () => {
      clearInterval(interval);
      clearInterval(timerId);
    };
  }, [page]);

  useEffect(() => {
    if (timer === 0) {
      setTimer(10);
      setPage((prevPage) => prevPage + 1);
    }
  }, [timer]);

  return (
    <div style={{width: "85%",margin: "10px auto"}}>
      <h2 style={{letterSpacing: "3px",backgroundColor: "teal", color: "white"}}>POLLING APP</h2>
      <h3 style={{width: "fit-content", margin:"14px auto"}}>Next update in: <span style={{color: "teal"}}>{timer}</span> </h3>
      <table frame="box" rules="all" cellPadding={10} cellSpacing={5}>
        <thead style={{backgroundColor: "black", color:"white"}}>
          <tr>
            <th>Title</th>
            <th>URL</th>
            <th>Created At</th>
            <th>Author</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.objectID}>
              <td>{post.title}</td>
              <td>{post.url}</td>
              <td>{post.created_at}</td>
              <td>{post.author}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Polling;
