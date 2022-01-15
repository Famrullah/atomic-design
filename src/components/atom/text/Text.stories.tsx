import React from 'react'
import { Text } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Text',
  component: Text,
} as ComponentMeta<typeof Text>

const style = {
  color: '#666',
}

export const Primary: ComponentStory<typeof Text> = () => (
  <Text tag="h1" style={style} className="">
    Heading 1
  </Text>
)
