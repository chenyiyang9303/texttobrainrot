import React from 'react';

const Steps = () => {
  const steps = [
    {
      number: 1,
      title: "Choose Your Mode",
      description: "Select quick mode for instant creation, or custom mode for detailed control"
    },
    {
      number: 2,
      title: "Input Details",
      description: "Describe your desired song or input custom lyrics, style preferences and parameters"
    },
    {
      number: 3,
      title: "Generate Music",
      description: "Click generate and wait a few minutes while our AI creates your custom song"
    }
  ];

  return (
    <section className="py-24 bg-gray-900">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-16 text-4xl font-bold text-white">How It Works</h2>
          <div className="flex flex-wrap -mx-4 relative">
            {/* Curved dotted lines */}
            {steps.length > 1 && (
              <div className="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
                <img
                  className="w-full"
                  src="/assets/images/curved-dotted-line.svg"
                  alt="Curved dotted line"
                />
              </div>
            )}
            
            {steps.map((step, index) => (
              <div key={step.number} className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
                <div className="relative">
                  <div className="relative z-10">
                    <div className="w-12 h-12 mb-4 mx-auto bg-blue-600 rounded-full flex items-center justify-center relative">
                      <span className="text-xl font-bold text-white">{step.number}</span>
                    </div>
                    <h3 className="mb-4 text-xl font-bold text-white">{step.title}</h3>
                    <p className="text-gray-400">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Steps;
