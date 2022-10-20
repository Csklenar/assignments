import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <h2>Home View</h2>
      <p>Welcome to the Home page</p>
      <button onClick={() => navigate('/about')}></button>
    </div>
  );
}
