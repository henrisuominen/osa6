import React from 'react'
import { connect } from 'react-redux'

class Notification extends React.Component {
  render() {
    const style = {
      border: 'solid',
      padding: 10,
      borderWidth: 1
    }
		if(this.props.notifications === null) {
			 return (
			 	null
			 )
		} else {
    	return (
			 	<div style={style}>
       		{this.props.notifications}
      	</div>
    	)
		}
  }
}

const mapStateToProps = (state) => {
  return {
    notifications: state.notifications,
    filter: state.filter
  }
}

const ConnectedNotificationList = connect(mapStateToProps)(Notification)

export default ConnectedNotificationList
