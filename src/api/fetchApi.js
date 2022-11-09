const baseUrl = "https://api.github.com/users/kunmi-a/repos";
let obtainedData;

export const fetchApi = async () => {
  const response = await fetch(baseUrl);
  obtainedData = await response.json();
  return obtainedData;
};
