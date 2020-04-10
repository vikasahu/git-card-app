const user = {
  fetchCurrentUser: async (userName) => {
    const res = await fetch(` https://api.github.com/users/${userName}`);
    return res;
  },
};

export default user;
