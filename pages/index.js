import React from 'react';
import Button from '@material-ui/core/Button';

const Home = () => {
  const handleClick = () => {
    console.log('click done');
  };

  return (
    <Button
      variant="contained"
      color="primary"
      onClick={handleClick}
    >
      Hola Mundo!
    </Button>
  );
};

export default Home;
