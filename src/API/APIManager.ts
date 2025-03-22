import api from "../config/Constants"

export const loginUser = async (email: string, password: string) => {
  try {
    const formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    const response = await api.post('/login', formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const getEventList = async (token: string) => {
  console.log('token', token)
  try {
    const response = await api.post('/events-listing', "",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    console.log('response', response)
    return response.data;
  } catch (error) {
    throw error;
  }
};
