import React, { useState } from 'react';

const CounterButton: React.FC = () => {
  const [count, setCount] = useState(5);

  const handleClick = () => {
    setCount((prevCount) => prevCount + 50);
  };

  return (
    <button onClick={handleClick} style={styles.button}>
      {count}
    </button>
  );
};

const styles = {
  button: {
    padding: '10px 20px',
    fontSize: '24px',
    borderRadius: '5px',
    border: '2px solid black',
    backgroundColor: '#f0f0f0',
    cursor: 'pointer',
    minWidth: '100px',
  }
};

export default CounterButton;
