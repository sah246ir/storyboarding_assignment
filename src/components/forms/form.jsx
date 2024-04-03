import React, { useState } from 'react';

const MyForm = () => {
  // State for form inputs
  const [textInput, setTextInput] = useState('');
  const [selectInput, setSelectInput] = useState('Landscape (16:9)');
  const [isAIAssistantEnabled, setIsAIAssistantEnabled] = useState(false); // State for AI Assistant toggle

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  }

  // Function to enable/disable submit button based on input values
  const isSubmitDisabled = () => {
    return !textInput.trim() || !selectInput.trim();
  }

  return (
    <div className="max-w-md mx-auto w-full h-full text-left">
      <form onSubmit={handleSubmit} className='flex flex-col justify-around h-full'>
        {/* Text Input */}
        <div className="">
          <div className="mb-4">
            <label htmlFor="text-input" className="block text-sm font-medium">Storyboard name</label>
            <input
              type="text"
              id="text-input"
              className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-2 border-solid border-gray-300 rounded-md"
              placeholder="e.g. Default Storyboard Name"
              value={textInput}
              onChange={(e) => setTextInput(e.target.value)}
            />
          </div>
          {/* Select Input */}
          <div className="mb-4">
            <label htmlFor="select-input" className="block text-sm font-medium">Frame size</label>
            <select
              id="select-input"
              className="mt-1 block w-full pl-3 pr-10 py-3 text-base border-2 border-solid bg-white border-gray-300 rounded-md"
              value={selectInput}
              onChange={(e) => setSelectInput(e.target.value)}
            >
              <option value="landscape">Landscape (16:9)</option>
              <option value="portrait">Portrait (16:9)</option>
              <option value="some-size">Some size (16:9)</option>
              {/* Add options here */}
            </select>
          </div>
        </div>

        <div className='flex-col sm:flex-row flex justify-between items-baseline relative'>
          {/* Toggle Button for AI Assistant */}
          <div className="flex items-center mb-4">
            <button
              type="button"
              className={`flex items-center relative rounded-full w-7 h-4 transition-colors duration-200 ease-in-out border-2 border-solid border-black ${isAIAssistantEnabled ? 'bg-black' : 'bg-white'}`}
              onClick={() => setIsAIAssistantEnabled(!isAIAssistantEnabled)}
            >
              <span className={`  w-1.5 h-1.5 rounded-full bg-black shadow-lg transform transition-transform duration-200 ease-in-out ${isAIAssistantEnabled ? 'translate-x-4 bg-white' : 'translate-x-1'}`} ></span>
            </button>
            <span className="text-sm ml-2">AI Assistant</span>
          </div>

          <button
            type="submit"
            className={`hover:bg-gray-800 w-full sm:w-auto bg-black text-white py-2 px-4 rounded-md ${isSubmitDisabled() ? 'opacity-15 cursor-not-allowed' : ''}`}
            disabled={isSubmitDisabled()}
          >
            Create storyboard
          </button>
        </div>
      </form>
    </div>
  );
}

export default MyForm;
