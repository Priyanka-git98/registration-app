export const signup = (formData) => {
    return {
      type: 'SIGNUP',
      payload: formData,
    };
  };
  
  export const login = (formData) => {
    return {
      type: 'LOGIN',
      payload: formData,
    };
  };
  