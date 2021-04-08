export const setFavorite = payload => ({
  type: 'SET_FAVORITE',
  payload
});

export const deleteFavorite = payload => ({
  type: 'DELETE_FAVORITE',
  payload
});

export const loginRequest = payload => ({
  type: "LOGIN_REQUEST",
  payload
})

export const logOutRequest = payload => ({
  type: "LOGOUT_REQUEST",
  payload
})

export const registerRequest = payload => ({
  type: 'REGISTER_REQUEST',
  payload
})

export const setVideoSource = payload => ({
  type: 'SET_VIDEO_SOURCE',
  payload
})