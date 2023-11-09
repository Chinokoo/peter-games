import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1cb933810bc948e897091b673e01a217",
  },
});
