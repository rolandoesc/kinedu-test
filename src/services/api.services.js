import axios from "axios";

const API_URL = 'http://staging.kinedu.com/api/v3/skills/';
const SECTIONS = {
  "physical": "2",
  "social": "23"
}
const ApiService = {
  init() {
    axios.defaults.baseURL = API_URL;
    axios.interceptors.response.use(
      response => response,
      error => Promise.reject({ ...error })
    );
    this.setHeaders();

  },
  setHeaders() {
    axios.interceptors.request.use(
      config => {
        config.headers["Accept"] = "application/json";
        config.headers["Authorization"] = `Token token=5105f4358e45f6f98057a654c882b7742c3ac5241c81a706acc48c84f8acde9f8a344993ac42369627ae9f2caf1eed42ff1be9562fe2167c9c80908e76e95c49`
        return config;
      },
      error => {
        return Promise.reject(error);
      }
    );

  },
  get(resource) {
    return axios.get(resource)
  }

};

export const KineduServices = {
  skills(type) {
    return ApiService.get(SECTIONS[type]+"/milestones")
  }
}

export default ApiService;