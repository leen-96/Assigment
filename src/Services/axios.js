import React, { Fragment } from "react";
import axios from "axios";
import { baseUri,baseUriCode } from "./endpoints"; 
import { toast } from "react-toastify";
import { ToastBody } from "reactstrap";

 
export const apiService = axios.create({
  baseURL: baseUri,

});
export const apiServicedetails = axios.create({
  baseURL: baseUriCode,
  
});

const requestInterceptor = (config) => {
  config.headers["Content-Type"] = "application/json";
  config.headers["Accept"] = "application/json";
  config.headers["Accept-Language"] = "en";
  config.headers["Access-Control-Allow-Origin"] = "*";
  return config;
};

const requestInterceptorError = (error) => {
  toast.error(
    () => (
      <Fragment>
        <ToastBody>{`Error : ${
          (error.response?.status === 404 && "Sorry...no data found !!") || //for handle 404 status code
          error.response?.data?.message || // for show the error from back end
          error.response?.data?.exception?.message ||
          error.response?.data?.title ||
          error.message // for show error message
        }`}</ToastBody>
      </Fragment>
    ),
    {
      hideProgressBar: true,
      position: "top-right",
    }
  );
  return Promise.reject(error);
};

apiService.interceptors.response.use(requestInterceptor, requestInterceptorError);
