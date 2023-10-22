import React, { useState } from 'react';
import { Button, Input } from '@mui/material';

function FileUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleUpload = () => {
    // Add code to upload the selected file to your server or cloud storage
    // You can use Axios, Fetch API, or other libraries for this.
  };

  return (
    <div>
      <Input type="file" onChange={handleFileChange} />
      <Button onClick={handleUpload} variant="contained" color="primary">
        Upload
      </Button>
    </div>
  );
}

export default FileUpload;
