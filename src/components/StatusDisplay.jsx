import React from 'react';

const StatusDisplay = ({ status }) => {
  if (!status) return null;

  return (
    <div className="p-4 bg-background-secondary rounded-lg text-center mt-8">
      <p className={`text-lg flex items-center justify-center gap-2 
        ${status === 'healthy' ? 'text-green-500' : 'text-red-500'}`}>
        Plant Status: {status === 'healthy' ? (
          <>
            Healthy ✅
          </>
        ) : (
          <>
            Disease Detected ⚠️
          </>
        )}
      </p>
    </div>
  );
};

export default StatusDisplay;