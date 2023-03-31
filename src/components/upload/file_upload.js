import React, { useState } from 'react';

function FileUpload() {
  const [file, setFile] = useState(null);

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', file);
    fetch('http://localhost:8080/api/resume/upload', {
    // fetch('http://localhost:8080/api/resume/upload', {
      method: 'POST',
      body: formData,
      headers: {
        'auth-token': '2',
    },
    })
      .then(response =>console.log(response.json()))
      .then(data => console.log(data))
      .catch(error => console.error(error));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="file" onChange={handleFileUpload} />
      <button type="submit">Upload</button>
    </form>
  );
}

export default FileUpload;