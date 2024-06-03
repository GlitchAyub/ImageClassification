import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';

const FileUpload = () => {
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [base64Images, setBase64Images] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/*',
    onDrop: (acceptedFiles) => {
      setUploadedFiles(acceptedFiles);

      // Convert each file to a base64 string
      acceptedFiles.forEach(file => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          setBase64Images(prev => [...prev, reader.result]);
        };
      });
    },
  });

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
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {uploadedFiles.map((file, index) => (
          <li key={file.name} style={{ marginBottom: '10px' }}>
            {/* <p>{file.name}</p> */}
            {base64Images[index] && (
              <img
                src={base64Images[index]}
                alt={file.name}
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FileUpload;
