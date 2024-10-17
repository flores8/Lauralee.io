// File: App.js (or App.jsx)

import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { useState } from 'react';

// Placeholder components
const Home = () => <div>Home Page</div>;
const PostIndex = () => <div>Post Index Page</div>;
const PostView = () => <div>Post View Page</div>;
const About = () => <div>About Page</div>;
const TagIndex = () => <div>Tag Index Page</div>;

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <nav className="bg-white shadow-lg">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
              <div className="flex space-x-7">
                <div>
                  <Link to="/" className="flex items-center py-4 px-2">
                    <span className="font-semibold text-gray-500 text-lg">Blog</span>
                  </Link>
                </div>
                <div className="hidden md:flex items-center space-x-1">
                  <Link to="/" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Home</Link>
                  <Link to="/posts" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">Posts</Link>
                  <Link to="/about" className="py-4 px-2 text-gray-500 hover:text-green-500 transition duration-300">About</Link>
                </div>
              </div>
              <div className="hidden md:flex items-center space-x-3">
                {isLoggedIn ? (
                  <button onClick={() => setIsLoggedIn(false)} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log Out</button>
                ) : (
                  <>
                    <button onClick={() => setIsLoggedIn(true)} className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</button>
                    <button className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</button>
                  </>
                )}
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/posts" component={PostIndex} />
          <Route path="/posts/:id" component={PostView} />
          <Route path="/about" component={About} />
          <Route path="/tags/:tag" component={TagIndex} />
        </Switch>

        <footer className="bg-white text-center lg:text-left">
          <div className="text-gray-700 text-center p-4">
            © 2023 Blog. All rights reserved.
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;