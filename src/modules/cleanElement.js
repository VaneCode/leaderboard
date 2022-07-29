const cleanElement = (elementID) => {
  const element = document.querySelector(elementID);
  while (element.firstChild) {
    element.removeChild(element.lastChild);
  }
};

export default cleanElement;