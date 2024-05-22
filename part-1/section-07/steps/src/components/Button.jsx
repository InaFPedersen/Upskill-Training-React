const Button = ({ textColor, backgroundColor, onClick, children }) => {
  return (
    <button
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
      }}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
