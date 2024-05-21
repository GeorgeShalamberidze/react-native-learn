const generateRandomNum = (min, max, exclude) => {
  const rndNum = Math.floor(Math.random() * (max - min) + min);
  return rndNum === exclude ? generateRandomNum(min, max, exclude) : rndNum;
};

export default generateRandomNum;
