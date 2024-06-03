import React, { useContext } from 'react';
import { ResponseContext } from './ResponseContext';

const ResponseDisplay = () => {
  const { response } = useContext(ResponseContext);

  if (!response || response.length === 0) {
    return null;
  }

  const responseData = response[0]; // Access the first (and only) object in the array
  const { class: className, class_dictionary: classDictionary, class_probability: classProbability } = responseData;

  // Sort classDictionary based on values
  const sortedClassDictionary = Object.fromEntries(
    Object.entries(classDictionary).sort(([, a], [, b]) => a - b)
  );

  return (
    <div style={{ marginTop: '20px' }}>
      <h3> {className.split('_').join(' ')}</h3>
      <table className="table">
        <thead>
          <tr>
            {Object.keys(sortedClassDictionary).map((key, index) => (
              <th key={index} scope="col">{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {classProbability.map((probability, index) => (
              <td key={index}>{probability}</td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ResponseDisplay;
