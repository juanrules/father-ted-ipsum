export const setColourScheme = (
  userPrefs: boolean,
  isDarkTheme: "true",
  callback: any
) => {
  if ((userPrefs && !isDarkTheme) || JSON.parse(isDarkTheme) === true) {
    localStorage.setItem("isDarkTheme", "true");
    callback(true);
  } else {
    localStorage.setItem("isDarkTheme", "false");
  }
};

export const toggleTheme = (isDarkTheme: boolean, setDarkTheme: any) => {
  localStorage.setItem("isDarkTheme", `${!isDarkTheme}`);
  setDarkTheme(!isDarkTheme);
};
