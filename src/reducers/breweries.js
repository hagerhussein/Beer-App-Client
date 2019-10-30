import { BREWERY_FETCHED} from "../actions/breweries";

export default (state = null, action = {}) => {
  switch (action.type) {
    case BREWERY_FETCHED:
      return action.brewery
    default:
      return state
  }
}