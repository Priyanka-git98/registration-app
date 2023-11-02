export const signup = (formData) => {
  localStorage.setItem('userData', JSON.stringify(formData));
    return {
      type: 'SIGNUP',
    };
  };
  
  export const login = (formData) => {
    return {
      type: 'LOGIN',
      payload: formData,
    };
  };