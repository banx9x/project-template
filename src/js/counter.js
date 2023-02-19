export function setupCounter(element) {
  let counter = 0;
  const setCounter = (count) => {
    counter = count;
    element.innerHTML = `You likes me ${counter} (times)`;
  };
  element.addEventListener('click', () => setCounter(counter + 1));
  setCounter(0);
}
