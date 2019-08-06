import axios from "axios";
let url = "http://localhost:5000";
// The getRecipes method retrieves recipes from the server
// It accepts a "query" or term to search the recipe api for
export default {
  login: data => {
    return axios.post(`${url}/api/login`, data);
  },
  checkLogin() {
    return axios.get(`${url}/api/checkLogin`);
  },
  registerUser(userData) {
    return axios.post(`${url}/api/register`, userData);
  },
  logout() {
    return axios.get(`${url}/api/logout`);
  },
  findUserById: id => {
    return axios.get(`${url}/api/users/find/${id}`);
  },
  saveBlog: data => {
    return axios.post(`${url}/api/blog/save`, data);
  },
  loadBlogs: () => {
    return axios.get(`${url}/api/blog/loadall`);
  },
  loadBlog: data => {
    return axios.get(`${url}/api/blog/load/${data}`);
  },
  newBlog: data => {
    return axios.post(`${url}/api/blog/new`, data);
  },
  search: search => {
    return axios.get(`${url}/api/blog/search/${search}`);
  },
  categorySearch: search => {
    return axios.get(`${url}/api/blog/categorySearch/${search}`);
  },
  updateViews: data => {
    return axios.post(`${url}/api/blog/views`, data);
  },
  addLink: data => {
    return axios.post(`${url}/api/slider/addLink`, data);
  },
  retrieveLinks: () => {
    return axios.get(`${url}/api/slider/retrieveLinks`);
  },
  loadImages: () => {
    return axios.get(`${url}/api/images/`);
  },
  submitSubscriber: data => {
    return axios.post(
      "https://api.convertkit.com/v3/forms/988284/subscribe?api_key=TYgg8lXToCzj3_E7q4JnLw",
      data
    );
  }
};
