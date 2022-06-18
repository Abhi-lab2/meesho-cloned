export const loadData = (key) => {
  try {
    const value = JSON.parse(localStorage.getItem(key));
    return value;
  } catch {
    return null;
  }
};
