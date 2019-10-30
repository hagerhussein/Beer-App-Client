import request from 'superagent'
const baseUrl = 'http://localhost:4000'

export const BREWERY_FETCHED = "BREWERY_FETCHED";

const breweryFetched = brewery => ({
  type: BREWERY_FETCHED,
  brewery
})

export const getBrewery = (data) => (dispatch) => {
  dispatch(breweryFetched(null))

  request
    .post(`${baseUrl}/breweries`)
    .send(data)
    .then(response => {
      dispatch(breweryFetched(response.body))
    })
    .catch(console.error)
}