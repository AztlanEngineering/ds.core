import * as React from 'react'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

export default {
  title    :'ds.core',
  //component:Welcome,
}

export const ToStorybook = () => (
  <>
    <h1>Welcome to Fwrlines / Design System</h1>
    <p>Use the left menu to navigate in between the components.</p>
    <p>The source code of this library is available on{' '}
      <a href="https://github.com/fwrlines/ds.core">GitHub</a>.
    </p>
  </>
)

ToStorybook.story = {
  name:'Welcome',
}
