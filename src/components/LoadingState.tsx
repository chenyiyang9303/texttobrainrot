import React from 'react';

interface LoadingStateProps {
  message: string;
  estimatedTime?: string;
}

const LoadingState = ({ message, estimatedTime }: LoadingStateProps) => {
  return (
    <div className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-gray-900 p-8 rounded-lg shadow-xl max-w-md w-full mx-4">
        <div className="flex flex-col items-center">
          <div className="w-16 h-16 mb-4">
            <svg
              className="animate-spin w-full h-full text-blue-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">{message}</h3>
          {estimatedTime && (
            <p className="text-gray-400 text-center">
              Estimated processing time: {estimatedTime}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoadingState;
