import axios from 'axios'

const url = 'http://localhost:3001/anecdotes'
			
const getAll = async () => {
  const response = await axios.get(url)
  return response.data
}

const createNew = async (content) => {
  const response = await axios.post(url, { content, votes: 0})
  return response.data
}

const vote = async (id,content,votes) => {
	const response = await axios.put(url+'/'+ id, {id, content, votes}) 
  return response.status 
}

export default { getAll, createNew, vote }