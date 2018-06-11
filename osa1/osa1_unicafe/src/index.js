import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  constructor(props) {
      super(props)
      this.state = {
          hyva: 0,
          neutraali: 0,
          huono: 0
      }
  }

  click = (option) => {
      return () => {
          this.setState({
              [option]: this.state[option] + 1
          })
      }
  }

  render() {
      return (
          <div>
              <h1>anna palautetta</h1>
              <Button handleClick={this.click('hyva')} text='hyvä' />
              <Button handleClick={this.click('neutraali')} text='neutraali' />
              <Button handleClick={this.click('huono')} text='huono' />

              <Statistics state={this.state} />
          </div>
      )
  }
}

const Button = ({ handleClick, text }) => (
  <button onClick={handleClick}>
      {text}
  </button>
)

const Statistic = ({ statistic }) => {
  return (
      <tr>
          <td>{statistic.text}</td>
          <td>{statistic.luku}</td>
      </tr>
  )
}

const Statistics = ({ state }) => {
  const otsikko = 'statistiikka'
  const hyva = {
      text: 'hyvä',
      luku: state.hyva
  }
  const neutraali = {
      text: 'neutraali',
      luku: state.neutraali
  }
  const huono = {
      text: 'huono',
      luku: state.huono
  }
  const yht = hyva.luku + neutraali.luku + huono.luku
  const keskiarvo = {
      text: 'keskiarvo',
      luku: ((hyva.luku * 1 + neutraali.luku * 0 + huono.luku * -1) / yht).toFixed(1)
  }
  const positiivisia = {
      text: 'positiivisia',
      luku: (hyva.luku / yht).toFixed(1) + ' %'
  }

  if (yht === 0) {
      return (
          <div>
              <h1>{otsikko}</h1>
              <p>ei yhtään palautetta annettu</p>
          </div>
      )
  }

return (
      <div>
          <h1>{otsikko}</h1>
          <table>
              <Statistic statistic={hyva} />
              <Statistic statistic={neutraali} />
              <Statistic statistic={huono} />
              <Statistic statistic={keskiarvo} />
              <Statistic statistic={positiivisia} />
          </table>
      </div>
  )
}

ReactDOM.render(
<App />,
document.getElementById('root')
);