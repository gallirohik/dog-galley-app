const DogsReducer = (state = [], action) => {
  console.log(action.type);
  switch (action.type) {
    case "LOADDATA": {
      console.log("[load data]", action.payload);
      const seen = new Set();
      const filteredArray = [...state, ...action.payload].filter(el => {
        const dup = seen.has(el._id);
        seen.add(el._id);
        return !dup;
      });
      return filteredArray;
    }
    case "ADDDOG": {
      console.log("[add dog]", action.payload);
      return [...state, action.payload];
    }
    case "REMOVEDOG": {
      console.log("[remove dog]", action.payload);
      return state.filter(dog => dog._id !== action.payload);
    }
    case "UPDATEDOG": {
      console.log("[Update thhshshs dog]", action.payload);
      const aux = state.filter(dog => dog._id !== action.payload._id);
      return [...aux, action.payload];
    }
    default: {
      return state;
    }
  }
};

export default DogsReducer;
