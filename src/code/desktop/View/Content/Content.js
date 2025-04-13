import React from "react";
import { useLocation } from "react-router-dom";
import { Basic } from './Basic/Basic.js'
import { Descriptive } from './Descriptive/Descriptive.js'
import './Content.css'

export const Content = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get('ID');

  const [data, setData] = React.useState({});

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://siddhantrkokate.tech/hiddenhive/get-post.php?ID=${id}`);
        const result = await response.json();
        setData(result.data[0]);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div className="ContentContainer">
      <Basic data={data} />
      <Descriptive data={data} />
    </div>
  )
}