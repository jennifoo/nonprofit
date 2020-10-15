import axios from "axios";

export default {

  savePost: function(postData) {
    return axios.post("/api/post", postData)
  },
  getDbPost: function() {
    return axios.get("/api/post")
  }
};