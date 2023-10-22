import React, { useState } from 'react';
import { Button, Container, Typography } from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';

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
    <Container>
      <Typography variant="h5" component="h2">
        File Upload
      </Typography>
      <input
        accept="image/*"
        style={{ display: 'none' }}
        id="file-upload-input"
        type="file"
        onChange={handleFileChange}
      />
      <label htmlFor="file-upload-input">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUploadIcon />}
        >
          Select File
        </Button>
      </label>
      {selectedFile && (
        <div>
          <Typography>Selected File: {selectedFile.name}</Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleUpload}
          >
            Upload
          </Button>
        </div>
      )}
    </Container>
  );
}

export default FileUpload;
