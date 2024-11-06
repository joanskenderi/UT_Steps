import { STEP_CONFIG } from '../config';

const StepGroup = ({ step }) => {
  return (
    <div className="numbers">
      {STEP_CONFIG.map((num) => (
        <div key={num} className={step >= num ? 'active' : ''}>
          {num}
        </div>
      ))}
    </div>
  );
};

export default StepGroup;
