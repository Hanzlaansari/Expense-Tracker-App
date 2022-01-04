const transactionReducer = (state, action) => {
  switch (action.type) {
    case "Add_Transaction":
      return [action.payload, ...state];
    case "Del_Transaction":
      var a = state.filter((val, index) => {
        return index !== action.payload;
      });
      return a;
    default:
      return state;
  }
};
export default transactionReducer;
