import React, { useState } from 'react';
import Button from '../components/Button';
import CameraFeed from '../components/CameraFeed';
import StatusDisplay from '../components/StatusDisplay';

const Home = () => {
  const [isStreaming, setIsStreaming] = useState(false);
  const [diseaseStatus, setDiseaseStatus] = useState(null);

  // Dummy function to simulate disease detection
  const toggleCamera = () => {
    setIsStreaming(!isStreaming);
    if (!isStreaming) {
      // Simulate random disease detection
      const interval = setInterval(() => {
        setDiseaseStatus(Math.random() > 0.5 ? 'healthy' : 'diseased');
      }, 2000);
      
      // Store interval ID in component
      window.intervalId = interval;
    } else {
      // Clear interval when camera is turned off
      clearInterval(window.intervalId);
      setDiseaseStatus(null);
    }
  };

  return (
    <div className="flex flex-col items-center gap-8">
      <CameraFeed isStreaming={isStreaming} />
      
      <div className="flex gap-4">
        <Button onClick={toggleCamera}>
          {isStreaming ? 'Turn Off Camera' : 'Turn On Camera'}
        </Button>
      </div>

      <StatusDisplay status={diseaseStatus} />
    </div>
  );
};

export default Home;