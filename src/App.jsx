import React from 'react';

import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Todo from './Components/Todo';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/settings">Settings</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </nav>
        <Routes>
          <Route exact path="/" element={<Todo />} />
          <Route path="/settings" element={<Todo />} />
        </Routes>
      </BrowserRouter >
    );
  }
}