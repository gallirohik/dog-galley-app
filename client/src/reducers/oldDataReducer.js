const OldDataReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOADOLDDATA": {
      console.log("This is loading old data", action.payload);
      return { hasOldData: true, data: { ...action.payload } };
    }
    case "UNSET": {
      return { hasOldData: false };
    }
    default:
      return { hasOldData: false };
  }
};

export default OldDataReducer;
