const search = {
  fetchAllUser: async (userName) => {
    const res = await fetch(
      `https://api.github.com/search/users?q=${userName}`
    );
    return res;
  },
};

export default search;
