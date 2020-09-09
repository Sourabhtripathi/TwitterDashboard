// Auth actions

// User Loading
export const setLoading = (data) => (dispatch) => {
	dispatch({ type: "SET_LOADING", payload: data });
}

// Login
export const loginUser = (id) => (dispatch) => {
	dispatch({ type: "SET_CURRENT_USER", payload: id });
};

// Log user out
export const logoutUser = () => (dispatch) => {
	dispatch({ type: "SET_CURRENT_USER", payload: null });
};

//------------------------------------------------------------

// Tweet actions

// Set Recent tweets
export const setRecentTweets = (data) => (dispatch) => {
	dispatch({ type: "SET_RECENT_TWEETS", payload: data });
};
// Set Recent trends
export const setRecentTrends = (data) => (dispatch) => {
	dispatch({ type: "SET_RECENT_TRENDS", payload: data });
};

// Set Selected Trends
export const setSelectedTrends = (data) => (dispatch) => {
	dispatch({ type: "SET_SELECTED_TRENDS", payload: data });
};

// Set Filtered Data
export const setFilteredTweets = (data) => (dispatch) => {
	dispatch({ type: "SET_FILTERED_TWEETS", payload: data });
};