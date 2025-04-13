import { useEffect, useState } from 'react';
import './Search.css'

export const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const gridItems = document.querySelectorAll('.GridContainer');

    gridItems.forEach(item => {
      const title = item.querySelector('.GridTitle')?.textContent?.toLowerCase() || '';
      const description = item.querySelector('.GridDescription')?.textContent?.toLowerCase() || '';
      const match = title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());

      item.style.display = match ? 'block' : 'none';
    });
  }, [searchTerm]);

  return (
    <div className="SearchBoxContainer">
    <input
      className="SearchInputBox"
      placeholder="Search Topics..."
      value={searchTerm}
      onChange={e => setSearchTerm(e.target.value)}
    />
    </div>
  );
};
