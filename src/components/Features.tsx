import React from 'react';

const features = [
  {
    icon: "🌍",
    title: "Supports multiple languages",
    description: "Currently available in Chinese, English, Japanese, and 18 other languages"
  },
  {
    icon: "🎵",
    title: "High Generation Efficiency",
    description: "Generate an average of 2 videos per minute, significantly reducing video editing time."
  },
  {
    icon: "📝",
    title: "Support for Various Text Inputs",
    description: "Accepts multiple input methods, including text, TXT files, PDFs, and URL content."
  },
  {
    icon: "🎼",
    title: "Extensive Material Library",
    description: "Save the hassle of searching for resources with a rich selection of video and voice materials."
  },
  {
    icon: "⭐",
    title: "Simple and Easy to Use",
    description: "Just copy, paste, and select options to generate high-quality brainrot videos effortlessly."
  },
  {
    icon: "✨",
    title: "Free to Use",
    description: "Create brainrot videos without any subscription or cost."
  }
];

export default function Features() {
  return (
    <div id="features" className="bg-gray-900 py-24 sm:py-32">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Text to Brainrot generator's Core Features</h2>
          <p className="text-xl text-gray-400">Experience the efficiency of quickly generating brainrot videos with our intuitive AI brainrot creation tool. </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="p-8 rounded-lg border border-gray-800 bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
            >
              <div className="w-12 h-12 bg-blue-600/20 rounded-lg flex items-center justify-center mb-6">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};