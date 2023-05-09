import React from 'react'

const LanguageContext = React.createContext({
  activeLanguage: 'EN',
  changeLanguage: activeLanguage => {
    this.setState({activeLanguage})
  },
})
export default LanguageContext
