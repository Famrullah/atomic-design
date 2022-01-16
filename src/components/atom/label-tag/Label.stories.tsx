import * as React from 'react'
import { LabelTag } from './index'
import { ComponentStory, ComponentMeta } from '@storybook/react'

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Label Tag',
  component: LabelTag,
} as ComponentMeta<typeof LabelTag>

export const Label: ComponentStory<typeof LabelTag> = () => (
  <>
    <LabelTag
      className="bg-green-500 text-white my-2 rounded align-middle"
      style={{ color: 'green' }}
    >
      Best Seller
    </LabelTag>
  </>
)
