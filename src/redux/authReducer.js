const initialState = {
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SIGNUP':
      return { ...state };
    case 'LOGIN':
      // Handle login action and update user data
      console.log('Updating user data in Redux store:', action.payload);
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

export default authReducer;