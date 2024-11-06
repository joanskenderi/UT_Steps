import { useState } from 'react';

import { ButtonGroup, CloseButton, StepGroup, StepMessage } from './components';

const App = () => {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  const handlePrevious = () => {
    if (step > 1) {
      setStep((currStep) => currStep - 1);
    }
  };

  const handleNext = () => {
    if (step < 3) {
      setStep((currStep) => currStep + 1);
    }
  };

  const toggleUI = () => {
    setIsOpen((currStatus) => !currStatus);
  };

  return (
    <>
      <CloseButton toggleUI={toggleUI} />
      {isOpen && (
        <div className="steps">
          <StepGroup step={step} />
          <StepMessage step={step} />
          <ButtonGroup
            handlePrevious={handlePrevious}
            handleNext={handleNext}
          />
        </div>
      )}
    </>
  );
};

export default App;
