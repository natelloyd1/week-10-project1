// import the library version of axios
import axios from "axios";

// create a version of axios with useful defaults
export default axios.create({
    // use your own url
    baseURL: "http://apitest.restful.training/api/blog/",

    // use your own key
    params: {
        key: "6a6f8bdcfc830032b92ac907509498cbf0394017",
    },

    // make sure we get JSON back
    headers: {
        Accept: "application/json",
    },
});