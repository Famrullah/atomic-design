import React from 'react'
import { Text } from '../../components/atom/text'
import { LabelTag } from '../../components/atom/label-tag'
import { LabelTagIcon } from '../../components/molecules/labelIcon'
import { ThumbUpIcon } from '@heroicons/react/solid'

const style = {
  color: '#666',
}
const label = {
  fontSize: '10',
}

const Home = () => {
  return (
    <div className="container mx-auto">
      <LabelTag
        className="bg-green-500 text-white my-2 rounded align-middle"
        style={label}
      >
        Best Seller
      </LabelTag>
      <LabelTag
        className="bg-green-500 text-white mx-2 py-2 rounded align-middle"
        style={label}
      >
        Best Seller
      </LabelTag>

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
      <LabelTagIcon>
        <ThumbUpIcon width="16px" height="16px" className="pt-0 mr-1" />
        Best Seller
      </LabelTagIcon>
    </div>
  )
}

export default Home
