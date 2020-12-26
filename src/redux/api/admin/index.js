import axios from "axios";

const api = {
  admin: {
    login: async (credential) =>
      await axios.post("http://localhost:4444/api/users/login", credential, {
        headers: {
          "Content-Type": "application/json",
        },
      }),
    logout: async () =>
      await axios.delete("http://localhost:4444/api/users/logout", {
        headers: {
          "Content-Type": "application/json",
        },
      }),
  },
};
export default api;
