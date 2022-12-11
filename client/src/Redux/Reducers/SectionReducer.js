export const sectionDetailsReducer = (
    state = { details: { articles: [] } },
    action
  ) => {
    switch (action.type) {
      case "SECTION_DETAILS_REQUEST":
        return { ...state, loading: true };
      case "SECTION_DETAILS_SUCCESS":
        return { loading: false, details: action.payload };
      case "SECTION_DETAILS_FAIL":
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
