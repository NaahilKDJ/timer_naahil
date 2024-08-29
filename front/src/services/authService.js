import axios from "axios";

const API_URL = "http://localhost:5000/api/auth";

export const registerUser = async (userData) => {
  await axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  const response = await axios.post(`${API_URL}/login`, userData);
  localStorage.setItem("token", response.data.token);
};