import React from 'react'
import { anecdoteVoting } from './../reducers/anecdoteReducer'
import { notificationCreation, notificatinRemoval, notify } from './../reducers/notificationReducer'
import { connect } from 'react-redux'

class AnecdoteList extends React.Component {
	
	vote = (anecdote) => () => {
		this.props.anecdoteVoting(anecdote)
		this.props.notify('you voted \'' + anecdote.content + '\'',5)
	}
	
  render() {
    const anecdotes = this.props.anecdotes
		console.log(anecdotes)
    return (
      <div>
        <h2>Anecdotes</h2>
        {anecdotes.sort((a, b) => b.votes - a.votes).map(anecdote =>
          <div key={anecdote.id}>
            <div>
              {anecdote.content}
            </div>
            <div>
              has {anecdote.votes}
              <button onClick={this.vote(anecdote)
              }>
                vote
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

const anecdotesToShow = (anecdotes, filter) => {
  return anecdotes.filter(anecdotes => anecdotes.content.includes(filter))
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    filter: state.filter,
		anecdotes: anecdotesToShow(state.anecdotes, state.filter)
  }
}

const mapDispatchToProps = {
  anecdoteVoting,
	notificationCreation,
	notificatinRemoval,
	notify
}


const ConnectedAnecdoteList = connect(mapStateToProps,mapDispatchToProps)(AnecdoteList)

export default ConnectedAnecdoteList