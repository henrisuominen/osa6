import React from 'react'
import { anecdoteCreation } from './../reducers/anecdoteReducer'
import { notificationCreation, notificatinRemoval, notify } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteForm extends React.Component {

	 handleSubmit = async (e) => {
		e.preventDefault()
		const content = e.target.anecdote.value
		this.props.anecdoteCreation(content)
		this.props.notify('you created the anecdote \'' + content + '\'', 5)
    e.target.anecdote.value = ''
  }
	 
   render() {
     return (
       <div>
      <h2>create new</h2>
        <form onSubmit={this.handleSubmit}>
          <div><input name='anecdote'/></div>
          <button>create</button> 
        </form>
      </div>
     )
   }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    filter: state.filter,
		anecdotes:state.anecdotes
  }
}

const mapDispatchToProps = {
  anecdoteCreation,
	notificatinRemoval,
	notificationCreation,
	notify
}

const ConnectedAnecdoteForm = connect(mapStateToProps,mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm