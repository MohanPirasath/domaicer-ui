import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export function Logout() {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear("currentOfusername");
    navigate("/");
  }, []);

  return (
    <p>
      Logging out please wait....
    </p>
  );
}
