export const LoadState = (state) => {
  try {
    const serializedState = localStorage.getItem("todoState");
    if (serializedState === null) return;
    return JSON.parse(serializedState);
  } catch (err) {
    console.log("error to Load data from localstorage ", err);
  }
};

export const SaveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem("todoState", serializedState);
  } catch (err) {
    console.log("error to save data", err);
  }
};
