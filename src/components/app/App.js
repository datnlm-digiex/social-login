import React from 'react'
import './App.css'
import Login from '../login/Login'
import FileUpload from '../upload/file_upload'

const App = () => {
    return (
        <div className="app container">
            <Login />
            <FileUpload />
        </div>
    )
}

export default App
