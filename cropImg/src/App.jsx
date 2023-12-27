import React from 'react'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UploadAvatar from './UploadAvatar';

const App = () => {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<UploadAvatar />} />
        </Routes>
      </Router>
    </div>                                  
  )
}

export default App