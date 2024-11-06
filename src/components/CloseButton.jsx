const CloseButton = ({ toggleUI }) => {
  return (
    <button className="close" onClick={toggleUI}>
      &times;
    </button>
  );
};

export default CloseButton;
