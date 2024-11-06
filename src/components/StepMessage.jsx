import { STEPS } from '../data';

const StepMessage = ({ step }) => {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {STEPS[step - 1]}
    </div>
  );
};

export default StepMessage;
