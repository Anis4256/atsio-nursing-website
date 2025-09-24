import React from 'react';
import ReactDOM from 'react-dom/client';
import "./preloader.css"
import { Suspense } from 'react';
const App = React.lazy(() => import("./app.jsx"));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={
      <div className="center">
        <div className="preloader-orbit-loading">
          <div className="cssload-inner cssload-one"></div>
          <div className="cssload-inner cssload-two"></div>
          <div className="cssload-inner cssload-three"></div>
        </div>
      </div>
    }>
      <App />
    </Suspense>
  </React.StrictMode>
);


