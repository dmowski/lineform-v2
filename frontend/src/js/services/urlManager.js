let backendUrl = "http://www.lineform.by/";
let isDevTools = true;

let urlManager = {
  getProjectsUrl: function() {
    return this.getAPIUrl() + "projects";
  },
  getBackendUrl: function() {
    return backendUrl;
  },
  isDevTools: function() {
    return isDevTools;
  },
  replaceImgUrls: function(text) {
    return text.split("/img/").join(this.getBackendUrl() + "img/");
  },
  removeImgUrls: function(text) {
    return text.split(this.getBackendUrl() + "img/").join("/img/");
  },
  getAPIUrl: function() {
    return this.getBackendUrl() + "api/v1/";
  },
};

export default urlManager;
