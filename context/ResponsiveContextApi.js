import React, { Component } from "react"

const ResponsiveContext = React.createContext()

class ResponsiveContextProvider extends Component {
  render() {
    const { children, isMobile } = this.props

    return (
      <ResponsiveContext.Provider value={{ isMobile }}>
        {children}
      </ResponsiveContext.Provider>
    )
  }
}

export default ResponsiveContext

export { ResponsiveContextProvider }
