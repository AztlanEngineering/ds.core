import * as React from 'react'
import packageInfo from '../../package.json'
import { linkTo } from '@storybook/addon-links'
import { Welcome } from '@storybook/react/demo'

export default {
  title:'ds.core',
  //component:Welcome,
}

export const ToStorybook = () => (
  <>
    <h1>Welcome to Fwrlines / Design System</h1>
    <p>
      Version
      { packageInfo.version }
    </p>
    <p>Use the left menu to navigate in between the components.</p>
    <p>
      The source code of this library is available on
      {' '}
      <a href='https://github.com/fwrlines/ds.core'>GitHub</a>
      .
    </p>
    <p>
      <strong>Dependency tree</strong>
    </p>
    <ul>
      <li>
        Components in
        <em>common</em>
        {' '}
        do not have any external dependency.
      </li>
      <li>
        Components in
        <em>elements</em>
        {' '}
        can have dependencies in
        <em>common</em>
        .
      </li>
      <li>
        Components in
        <em>site</em>
        {' '}
        can have dependencies in
        <em>common</em>
        {' '}
        and
        <em>site</em>
        .
      </li>
      <li>Stories outside a folder are there temporarily and will be removed prior to V2 release.</li>
    </ul>
  </>
)

ToStorybook.story = {
  name:'Welcome',
}
