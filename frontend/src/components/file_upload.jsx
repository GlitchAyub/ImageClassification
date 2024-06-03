import React, { useState, useEffect, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';
import { ResponseContext, ResponseProvider } from './ResponseContext';
import ResponseDisplay from './ResponseDisplay';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [base64Images, setBase64Images] = useState([]);
  const { setResponse } = useContext(ResponseContext);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);
      setBase64Images([]); // Clear previous images
      // Convert each file to a base64 string
      acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setBase64Images([reader.result]); // Set the new image
        };
      });
    },
  });

  useEffect(() => {
    if (base64Images.length > 0) {
      loadModel(base64Images[base64Images.length - 1]);
    }
  }, [base64Images]);

  const loadModel = (base64Image) => {
    const formData = new FormData();
    formData.append('image_data', base64Image);

    axios.post('http://127.0.0.1:5000/classify_image', formData)
      .then(response => {
        console.log(response.data);
        setResponse(response.data);
      })
      .catch(error => {
        console.error('There was an error making the request:', error);
        if (error.response) {
          console.error('Server responded with status code:', error.response.status);
        } else if (error.request) {
          console.error('No response received:', error.request);
        } else {
          console.error('Error setting up request:', error.message);
        }
      });
  };

  return (
    <div
      {...getRootProps()}
      style={{
        border: '2px dashed #cccccc',
        padding: '20px',
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '10px',
        backgroundColor: '#f9f9f9',
      }}
    >
      <input {...getInputProps()} />
      <p>Drag and drop files here or click to browse.</p>
      {base64Images.length > 0 && (
        <div style={{ marginTop: '20px' }}>
          <img
            src={base64Images[0]}
            alt={uploadedFiles[0]?.name}
            style={{ width: '100px', height: '100px', objectFit: 'cover' }}
          />
        </div>
      )}
    </div>
  );
};

const App = () => (
  <ResponseProvider>
    <FileUpload />
    <ResponseDisplay />
  </ResponseProvider>
);

export default App;
