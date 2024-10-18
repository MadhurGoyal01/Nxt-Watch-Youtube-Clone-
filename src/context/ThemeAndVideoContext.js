import React from 'react'

const ThemeAndVideoContext = React.createContext({
  isDarkTheme: false,
  savedVideos: [],
  activeTab: 'Home',
  changeTab: () => {},
  toggleTheme: () => {},
  addVideo: () => {},
})

export default ThemeAndVideoContext
