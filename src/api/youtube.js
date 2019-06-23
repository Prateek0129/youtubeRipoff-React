import axios from "axios";

const KEY = "AIzaSyBDy_N0rHL1Sgssk7pD0lcQNHyMHmtTaJI";

export const a = axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3a",
  params: {
      c: "aa"
  }
});

a.post("/asdhjahs");

export default a;