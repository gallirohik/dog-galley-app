const authReducer = (state = { isLogin: false }, action) => {
  switch (action.type) {
    case "LOGIN": {
      return {
        isLogin: true,
        userInfo: {
          userName: action.payload
        }
      };
    }
    case "LOGOUT":
      return {
        isLogin: false
      };
    default:
      return state;
  }
};

export default authReducer;
