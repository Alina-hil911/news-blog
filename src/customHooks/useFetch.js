// import React, { useState, useEffect } from "react";
// import axios from "axios";

// import { baseUrl } from "../API";

// export default url => {
//   const [isLoading, setIsLoading] = useState(false);
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);
//   const [options, setOptions] = useState({});

//   const doFetch = (options = {}) => {
//     setOptions(options);
//     setIsLoading(true);
//   };

//   useEffect(() => {
//     if (!isLoading) {
//       return;
//     }
//     axios(`${baseUrl}${url}`, options)
//       .then(res => {
//         setIsLoading(false);
//         setResponse(res.data);
//       })
//       .catch(e => {
//         setError(e.response.data);
//         setIsLoading(false);
//       });
//   }, [isLoading]);

//   return [
//     {
//       isLoading,
//       response,
//       error,
//     },
//     doFetch,
//   ];
// };

import { useState, useEffect } from "react";
import axios from "axios";

import { baseUr } from "../API";

export default url => {
  const baseUrl = "https://conduit.productionready.io/api";

  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState({});

  const doFetch = (options = {}) => {
    console.log(baseUrl, baseUr, baseUr === baseUrl, "BASE URL");
    setOptions(options);
    setIsLoading(true);
  };

  useEffect(() => {
    if (!isLoading) {
      return;
    }

    axios(baseUr + url, options)
      .then(res => {
        setResponse(res.data);
        setIsLoading(false);
      })
      .catch(error => {
        setError(error.response.data);
        setIsLoading(false);
      });
  }, [isLoading]);

  return [{ isLoading, response, error }, doFetch];
};
