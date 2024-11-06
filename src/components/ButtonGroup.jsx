import { Button } from '../components';

const ButtonGroup = ({ handlePrevious, handleNext }) => {
  return (
    <div className="buttons">
      <Button bgColor="#7950f2" textColor="#fff" onClick={handlePrevious}>
        <span>👈</span> Previous
      </Button>
      <Button bgColor="#7950f2" textColor="#fff" onClick={handleNext}>
        Next <span>👉</span>
        <span>🤓</span>
      </Button>
    </div>
  );
};

export default ButtonGroup;
