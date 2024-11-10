import React from 'react';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-primary mb-8">
            Plant Disease Detection
          </h1>
          
          <div className="max-w-3xl mx-auto text-gray-300 text-lg leading-relaxed mb-12">
            <p className="mb-4">
              Accurate and timely detection of plant diseases is a major challenge 
              in agriculture, often leading to crop loss and reduced productivity 
              due to delayed interventions. Traditional methods are manual, slow, 
              and prone to errors.
            </p>
            
            <p>
              This project, <span className="text-primary font-semibold">
              Plant Disease Detection for Agricultural Robots</span>, aims to solve 
              this problem by developing an automated system using 
              <span className="text-primary font-semibold"> computer vision</span> and 
              a custom <span className="text-primary font-semibold">
              Convolutional Neural Network (CNN)</span>. The system can be integrated 
              into agricultural robots to detect diseases in real time, allowing for 
              early intervention and reducing the need for chemical treatments. 
              This approach enhances productivity, supports sustainable farming, 
              and contributes to food security.
            </p>
          </div>
        </header>
        
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;