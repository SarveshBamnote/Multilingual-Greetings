import './App.css'
import {Component} from 'react'
import GreetingLanguage from './components/GreetingLanguage'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {
    activeLangDetail: languageGreetingsList[0],
  }

  onClickActiveLang = eachLang => {
    this.setState({activeLangDetail: eachLang})
  }

  render() {
    const {activeLangDetail} = this.state

    return (
      <div className="greeting-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="buttons-container">
          {languageGreetingsList.map(each => (
            <GreetingLanguage
              onClickActiveLang={this.onClickActiveLang}
              eachLang={each}
              key={each.id}
              isActive={each.id === activeLangDetail.id}
            />
          ))}
        </ul>
        <img
          className="image"
          src={activeLangDetail.imageUrl}
          alt={activeLangDetail.imageAltText}
        />
      </div>
    )
  }
}
export default App
