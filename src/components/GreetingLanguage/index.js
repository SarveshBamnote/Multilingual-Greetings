import {ListItem, LangButton} from './styledComponents'

const GreetingLanguage = props => {
  const {eachLang, onClickActiveLang, isActive} = props
  const {buttonText} = eachLang

  const onClickLangButton = () => {
    onClickActiveLang(eachLang)
  }

  const bgColor = isActive ? '#db1c48' : '#ffffff'
  const color = isActive ? '#ffffff' : '#db1c48'

  return (
    <ListItem>
      <LangButton
        bgColor={bgColor}
        color={color}
        onClick={onClickLangButton}
        type="button"
      >
        {buttonText}
      </LangButton>
    </ListItem>
  )
}

export default GreetingLanguage
