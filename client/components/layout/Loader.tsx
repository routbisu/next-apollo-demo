import React from 'react'
import Card from '../Card/Card'

const Loader: React.FC = () => {
  return (
    <>
      {Array.from(Array(12).keys()).map((key) => (
        <Card key={key} isLoading />
      ))}
    </>
  )
}

export default Loader
