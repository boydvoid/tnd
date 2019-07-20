import axios from "axios";

// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  login: data => {
    return axios.post(`/api/login`, data);
  },
  checkLogin() {
    return axios.get(`/api/checkLogin`);
  },
  registerUser(userData) {
    return axios.post(`/api/register`, userData);
  },
  logout() {
    return axios.get(`/api/logout`);
  },
  findUserById: id => {
    return axios.get(`/api/users/find/${id}`);
  },
  saveBlog: data => {
    return axios.post(`/api/blog/save`, data);
  },
  loadBlogs: () => {
    return axios.get(`/api/blog/loadall`);
  },
  loadBlog: data => {
    return axios.get(`/api/blog/load/${data}`);
  },
  newBlog: data => {
    return axios.post(`/api/blog/new`, data);
  },
  search: search => {
    return axios.get(`/api/blog/search/${search}`);
  },
  categorySearch: search => {
    return axios.get(`/api/blog/categorySearch/${search}`);
  },
  updateViews: data => {
    return axios.post(`/api/blog/views`, data);
  },
  addLink: data => {
    return axios.post("/api/slider/addLink", data);
  },
  retrieveLinks: () => {
    return axios.get("/api/slider/retrieveLinks");
  },
  submitSubscriber: data => {
    return axios.post(
      "https://api.convertkit.com/v3/forms/988284/subscribe?api_key=TYgg8lXToCzj3_E7q4JnLw",
      data
    );
  }
};
