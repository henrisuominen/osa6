const initialState = null

const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MESSAGE':
      return action.message
		case 'REMOVE_MESSAGE':
      return null
    default:
      return state
  }
}

export const notificationCreation = (message) => {
	return {
    type: 'SET_MESSAGE',
    message: message
  }
}

export const notificatinRemoval = () => {
	return {
    type: 'REMOVE_MESSAGE'
  }
}

export const notify = (message,time) => {
	return async (dispatch) => {
    dispatch({
      type: 'SET_MESSAGE',
    	message: message
  	})
		setTimeout(() => {
      dispatch({
        type: 'REMOVE_MESSAGE'
      })
    }, time * 1000)
	}
}

export default notificationReducer