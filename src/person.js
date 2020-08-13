console.log("person is running!!!!!!!");

const isAdult = (x) => {
  if (x >= 18) return true;
};

const canDrink = (x) => {
  if (x >= 18) return true;
};

const isSenior = (x) => {
  if (x >= 65) {
    return true;
  } else return false;
};

export { isAdult, canDrink, isSenior as default };
