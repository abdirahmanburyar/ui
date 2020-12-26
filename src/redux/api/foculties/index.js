import axios from "axios";

const api = {
  foculty: {
    createFoculty: async (title) =>
      await axios
        .post("http://localhost:4444/api/foculties/create-foculty", title, {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        })
        .catch((err) => console.log(err)),
    fetchFoculties: async () =>
      await axios.get("http://localhost:4444/api/foculties", {
        headers: {
          "Content-Type": "application/json",
        },
        withCredentials: true,
      }),
  },
};
export default api;
