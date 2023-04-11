import React, { useState } from 'react';

const PageChangeCTX = React.createContext({
  goToProductPage: () => { },
  goToCartPage: () => { },
  currentPage: 0
})

const PageChangeProvider = (props) => {

  // State To Change Page
  const [currentPage, setCurrentPage] = useState(0)


  // Function To Go Product Page
  const goToProductPage = () => {
    setCurrentPage(0)
  }

  // Function To Go CartPage
  const goToCartPage = () => {
    setCurrentPage(1)
  }

  return (
    <PageChangeCTX.Provider value={{ currentPage, goToCartPage, goToProductPage }}>
      {props.children}
    </PageChangeCTX.Provider>
  )
}

export default PageChangeCTX
export { PageChangeProvider }