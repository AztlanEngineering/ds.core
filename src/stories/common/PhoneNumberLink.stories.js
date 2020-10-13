/* @fwrlines/generator-storybook-story 1.6.0 */
import * as React from 'react'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { PhoneNumberLink } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/PhoneNumberLink',
  component    :PhoneNumberLink,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:PhoneNumberLink.Item
  },
  parameters:{
    decorators:[
      /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
    ]
  }
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
  <PhoneNumberLink phoneNumber='+3930123423'>
  </PhoneNumberLink>
)

//Default.parameters = storyParameters

export const Whatsapp = () => (
  <PhoneNumberLink
    whatsapp
    phoneNumber='+34655725356'
  >
    Send a whatsapp at +336-12-34-56-78-90
  </PhoneNumberLink>
)

export const DoubleZero = () => (
  <>
    <PhoneNumberLink
      whatsapp
      phoneNumber='0034655725356'
    >
      Send a whatsapp at +336-12-34-56-78-90
    </PhoneNumberLink>
    <PhoneNumberLink
      phoneNumber='0034655725356'
    >
      call +336-12-34-56-78-90
    </PhoneNumberLink>
  </>
)

export const WhatsappText = () => (
  <PhoneNumberLink
    whatsapp
    phoneNumber='+34655725356'
    whatsappText='Say hello to someone'
  >
    Send a whatsapp at +336-12-34-56-78-90
  </PhoneNumberLink>
)

//Variant.parameters = storyParameters
