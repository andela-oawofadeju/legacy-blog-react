
export const fetchingBlog = (bool) => {
  return {
    type: 'FETCHING_BLOG',
    isLoading: bool
  }
}


export const fetchBlogFromApi = (url) => {
    return (dispatch) => {
        dispatch(fetchingBlog(true))
        axios.get(url).then(response => {
            dispatch(fetchingBlog(false))
            if (response.status !== 200) {
                // dispatch error
            } else {
                // dispatch blog fetched here
            }
        }).catch(() => console.log("error"))
    }
}
