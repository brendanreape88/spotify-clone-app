export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Set token to null after finished developing...
  token:
    "BQBiWOVlHIKS4r_8MWCjz0vzYcprMKtQ7XAHf6W0iXoRXwTXnPm3hyiUjqqP8ioG5oC78T3PysCMcFL4ATpuQP_uhyHdqvgaK67iYU8NK6kRkNd94-ui5tlO5JqYGh_WyC21PYVTGCicLPI5culIz1-MtAyZcYYqXg",
};

const reducer = (state, action) => {
  console.log("ACTION", action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };

    default:
      return state;
  }
};

export default reducer;
