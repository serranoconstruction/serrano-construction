import React from "react";

const Spinner: React.FC = () => {
  return (
    <div
      role="status"
      aria-label="Loading spinner"
      className="flex items-center justify-center"
    >
      <div className="relative h-20 w-20">
        <div className="absolute inset-0 animate-spin rounded-full border-4 border-blue-400 border-t-transparent"></div>
      </div>
    </div>
  );
};

export default Spinner;
