/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Banner } from 'ui'
//import QUERY from './graphql/query.graphql'
//import { AplProvider } from 'stories/utils'
//import { Router } from 'stories/utils'
//import {ALL_COLORS, SIZES } from 'stories/config.js'
//import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title: 'common/Banner',
  component:Banner,
  //componentSubtitle:'Component subtitle',
  subcomponents: {
    //Item:Banner.Item
  },
  decorators: [ 
    //storyfn => <div className="">{ storyfn() }</div>,
    //storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
    //storyfn => <Router>{ storyfn() }</Router>,
  ]
}

/*

const storyParameters = {
 previewTabs: {
    'canvas': {
      hidden: true
    },
  }
}

 */

export const Default = () => (
  <Banner></Banner> 
)

//Default.parameters = storyParameters

export const Variant = () => (
    <Banner></Banner> 
)

//Variant.parameters = storyParameters
