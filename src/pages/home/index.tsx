import React from 'react'
import { Text } from '../../components/atom/text'
const style = {
  color: '#666',
}
const Home = () => {
  return (
    <>
      <Text tag="h1" style={style} className="">
        Heading 1
      </Text>
      <Text tag="h2" style={style} className="">
        Heading 2
      </Text>
      <Text tag="h3" style={style} className="">
        Heading 3
      </Text>
      <Text tag="h4" style={style} className="">
        Heading 4
      </Text>
      <Text tag="h5" style={style} className="">
        Heading 5
      </Text>
      <Text tag="h6" style={style} className="">
        Heading 6
      </Text>
    </>
  )
}

export default Home
