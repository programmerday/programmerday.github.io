export const baseUrl = "";

export const POST_CONFIG = (user_token) => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user_token}`,
    },
  };
};

// export const POST_CONFIG_FILE = (user_token) => {
//   return {
//     method: "POST",
//     headers: {
//       "Content-Type": "multipart/form-data",
//       Authorization: `Token ${user_token}`,
//     },
//   };
// };

export const GET_CONFIG = (user_token, params) => {
  return {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user_token}`,
    },
    params,
  };
};

export const PATCH_CONFIG = (user_token) => {
  return {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${user_token}`,
    },
  };
};

export const API_LOGIN = baseUrl + "/api/user/login/";
export const API_REGISTER = baseUrl + "/api/user/register/";

export const API_GET_ALL_QUESTION = baseUrl + "/api/questions";
export const API_GET_ONE_QUESTION = (id: number) =>
  baseUrl + `/api/questions/${id}`;
