// ContentView.js
import React, { useState, useEffect } from 'react';
import { Grid } from './Grid/Gird'; // adjust path if needed
import './ContentView.css';

export const ContentView = () => {
  const [gridData, setGridData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchContent = async () => {
    try {
      const response = await fetch('https://siddhantrkokate.tech/hiddenhive/show-grid.php');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.data) {
        setGridData(data.data);
      } else {
        setError('No data found');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="ContentViewContainer">
      {Array.isArray(gridData) && gridData.map((item) => (
        <Grid 
          key={item.post_id} 
          post_id={item.post_id}
          contentTitle={item.post_title} 
          description={item.post_description} 
          post_category={item.post_category} 
          post_emoji={item.post_emoji} 
        />
      ))}
    </div>
  );
};

export default ContentView;