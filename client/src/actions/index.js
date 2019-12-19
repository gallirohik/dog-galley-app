export const loadData = data => {
  console.log("[dispatched load data action]", data);
  return {
    type: "LOADDATA",
    payload: data
  };
};

export const addDog = data => {
  console.log("[dispatched add dog action]", data);
  return {
    type: "ADDDOG",
    payload: data
  };
};

export const removeDog = id => {
  console.log("[dispatched remove dog action]", id);
  return {
    type: "REMOVEDOG",
    payload: id
  };
};

export const loadOld = data => {
  console.log("[loading old data]", data);
  return {
    type: "LOADOLDDATA",
    payload: data
  };
};

export const updateDog = data => {
  console.log("[updating Dog Detais]");
  return {
    type: "UPDATEDOG",
    payload: data
  };
};

export const unsetOldData = () => {
  console.log("[unsetting old data]");
  return {
    type: "UNSET"
  };
};

export const loggedIn = username => {
  console.log("[User Logged in ]");
  return {
    type: "LOGIN",
    payload: username
  };
};

export const loggedOut = () => {
  console.log("[User Logged in ]");
  return {
    type: "LOGOUT"
  };
};
