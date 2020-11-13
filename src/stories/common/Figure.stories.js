/* @fwrlines/generator-storybook-story 1.5.2 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { Subtitle, Figure, Image } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/Figure & Image',
  component    :Figure,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    Image:Image
  },
  decorators:[
    /* storyfn => <div className="">{ storyfn() }</div>,
       storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
       storyfn => <Router>{ storyfn() }</Router>, */
  ]
}

export const Default = () => (
  <Figure
    src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    alt='A city landscape'
  >
    A nice caption
  </Figure>
)

export const SimpleImage = () => (
  <Image
    src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    alt='A city landscape'
    style={{height: '200px'}}
  />
)
SimpleImage.storyName = 'Image'

export const FigureImgSize = () => (
  <Figure
    src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    alt='A city landscape'
    imgStyle={{height: '200px'}}
  >
    <Subtitle>The image caption</Subtitle>
  </Figure>
)

export const ObjectFit = () => (
  <>
  <Figure
    src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    alt='A city landscape'
    imgStyle={{height: '200px'}}
    objectFit='fill'
  >
    <Subtitle>The image caption</Subtitle>
  </Figure>
  <Image
    src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    alt='A city landscape'
    objectFit='fill'
    style={{height: '200px', width:'100%'}}
  />
    </>
)

export const ObjectPosition = () => (
  <Figure
    src='https://images.pexels.com/photos/373912/pexels-photo-373912.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'
    alt='A city landscape'
    imgStyle={{height: '200px'}}
    objectPosition='left top'
  >
    <Subtitle>The image caption</Subtitle>
  </Figure>
)

