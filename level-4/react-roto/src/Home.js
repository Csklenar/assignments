import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="home-header">Sklenar's Plumbing Inc</h1>
      
      <div className="home-img-wrapper">
      <img src="https://bit.ly/3D2fE7U" className="home-img"/>
      <img src="https://bit.ly/3T5lI50" className="home-img"/>
      <img src="https://bit.ly/3CCVbFf" className="home-img"/> 
      </div>
    </div>
  );
}