
const axios = require('axios').default; 
export const   getAllBooks = async () => {
    const response =  await axios.get(`${process.env.REACT_APP_API_SERVER}/books`)
    return response.data
  };

  export const updateBook = async ({ id, ...data }) => {
    const response = await axios.put(
      `${process.env.REACT_APP_API_SERVER}/books/${id} `,data)
    return response;
  };

  export const createBook = async (data) => {
    const response = await axios.post(
      `${process.env.REACT_APP_API_SERVER}/books/ `,data)
    return response;
  };



  
export const getBook= async (id) => {
  const response =  await axios.get(`${process.env.REACT_APP_API_SERVER}/books/${id}`)
  return response.data
};
  
  
  export const removeBook = async (id) => {
    await axios.delete(`${process.env.REACT_APP_API_SERVER}/books/${id}`);
    return true;
  };


 
