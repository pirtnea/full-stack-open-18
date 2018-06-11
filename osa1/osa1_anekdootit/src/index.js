import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selected: 0,
      votes: 0,
      mostVotes: 0
    }
  }

  getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min
  }

  newAnedcote = () => {
      this.setState({
        selected: this.getRndInteger(0,5)
      })
    return this.state.selected.anecdote
  }

  vote = () => {
    const votes = this.props.anecdotes[this.state.selected].votes + 1
    this.props.anecdotes[this.state.selected].votes = votes
    
    if (votes > this.props.anecdotes[this.state.mostVotes].votes) {
      this.setState({
        mostVotes: this.state.selected
      })
    }
    this.setState({
      votes: votes
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.anecdotes[this.state.selected].anecdote}</p>
        <p>has {this.props.anecdotes[this.state.selected].votes} votes</p>
        <div>
          <Button handleClick={this.vote} text='vote' />
          <Button handleClick={this.newAnedcote} text='next anecdote' />
        </div>
        <div>
          <h2>anecdote with most votes:</h2>
          <p>{this.props.anecdotes[this.state.mostVotes].anecdote}</p>
          <p>has {this.props.anecdotes[this.state.mostVotes].votes} votes</p>
        </div>
      </div>
    )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
      {text}
  </button>
)

const anecdotes = [
  {
    anecdote: 'If it hurts, do it more often',
    votes: 0
  },
  {
    anecdote: 'Adding manpower to a late software project makes it later!',
    votes: 0
  },
  {
    anecdote: 'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    votes: 0
  },
  {
    anecdote: 'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    votes: 0
  },
  {
    anecdote: 'Premature optimization is the root of all evil.',
    votes: 0
  },
  {
    anecdote: 'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    votes: 0
  }  
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)