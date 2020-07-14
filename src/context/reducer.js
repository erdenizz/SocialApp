export function reducer(state, action) {
  switch (action.type) {
    case "SET_FAVORITE_POST":
      state.favoritePost = action.favPost;
      return { ...state };

    default:
      return { ...state };
  }
}
