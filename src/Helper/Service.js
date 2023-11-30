import axios from "axios";
import { trackPromise } from "react-promise-tracker";

export async function serviceCallPost(url, postData, headers) {
  // TODO: Global Function Pending
  try {
    const response = await trackPromise(axios.post(url, postData, headers));
    return response;
  } catch (error) {
    console.log(error, "ServiceCall Catch Block");
  }
}

export async function serviceCallGet(url) {
  debugger;
  try {
    const response = await trackPromise(axios.get(url));
    console.log(response, "Response from service call");
    return response;
  } catch (error) {
    console.log(error, "ServiceCall Catch Block");
  }
}
