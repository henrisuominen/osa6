import anecdoteService from '../services/anecdotes'

const getId = () => (100000*Math.random()).toFixed(0)

const anecdoteReducer = (store = [], action) => {
  if (action.type==='VOTE') {
    const old = store.filter(a => a.id !==action.data.id)
    const voted = store.find(a => a.id === action.data.id)

    return [...old, { ...voted, votes: voted.votes+1} ]
  }
  if (action.type === 'CREATE') {

    return [...store, { content: action.data.content, id: getId(), votes:0 }]
  }
	if (action.type === 'INIT') {
		return action.data
  }

  return store
}

export const anecdoteInitialization = () => {
	return async (dispatch) => {
    const anecdotes = await anecdoteService.getAll()
    dispatch({
      type: 'INIT',
      data: anecdotes
    })
  }
}


export const anecdoteCreation = (content) => {
	return async (dispatch) => {
    await anecdoteService.createNew(content)
    dispatch({
      type: 'CREATE',
    	data: {
				content
    	}
    })
  }
}

export const anecdoteVoting = (anecdote) => {
	return async (dispatch) => {
    await anecdoteService.vote(anecdote.id, anecdote.content, anecdote.votes + 1)
    dispatch({
      type: 'VOTE',
    	data: {
				id:anecdote.id
    	}
    })
  }
}

export default anecdoteReducer