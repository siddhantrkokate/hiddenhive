import React from "react";
import './Logo.css';
import { useNavigate } from "react-router-dom";

export const Logo = () => {
  const navigate = useNavigate(); // move this inside the component

  return (
    <div className="HeaderLogo" onClick={() => navigate('/')}>
      HiddenHive
    </div>
  );
};
