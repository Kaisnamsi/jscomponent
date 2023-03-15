import logo from './logo.svg';
import './App.css';
import React from 'react';
import ProfilePhoto from './Component/Profile/ProfilePhoto';
import FullName from './Component/Profile/FullName';
import Address from './Component/Profile/Address';


function App() {
  return (
    <div className="App">
      <ProfilePhoto className="ProfilePhoto" />
      <FullName className="FullName" />
      <Address className="Address" />
    </div>
  );
}

export default App;
