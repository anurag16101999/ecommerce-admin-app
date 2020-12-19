const baseUrl =
  location.hostname === "localhost"
    ? "http://localhost:2000"
    : "https://rest-server12.herokuapp.com/";
//const baseUrl = "http://localhost:2000";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
  return `${baseUrl}/public/${fileName}`;
};
