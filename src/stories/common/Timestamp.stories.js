/* @fwrlines/generator-storybook-story 1.7.0 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'
import { subDays } from 'date-fns'

import { Timestamp } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy' */

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'common/Timestamp',
  component    :Timestamp,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:Timestamp.Item
  },
  decorators:[
    /* storyfn => <div className="">{ storyfn() }</div>,
         storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
         storyfn => <Router>{ storyfn() }</Router>, */
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
  <Timestamp time={ Date.now() }/>
)

export const DateFormat = () => (
  <Timestamp
    time={ Number(Date.now()) }
    enabledFormats={['date']}
    dateFormat={'yyyy-MM-dd\' at \'HH:mm'}
  />

)


export const DistanceFormat = () => (
  <Timestamp
    time={ Number(subDays(Date.now(), 3)) }
    enabledFormats={['distance','date']}
  />

)

export const DistanceFormatMaxDays = () => (
  <>
    This should appear as distance
    <Timestamp
      time={ Number(subDays(Date.now(), 3)) }
      enabledFormats={['distance','date']}
      distanceMaxDays={ 4 }
    />
    <br />

    But this should appear as date
    <Timestamp
      time={ Number(subDays(Date.now(), 5)) }
      enabledFormats={['distance','date']}
      distanceMaxDays={ 4 }
    />
  </>

)

export const RelativeFormat = () => (
  <Timestamp
    time={ Number(subDays(Date.now(), 5)) }
    enabledFormats={['relative','date']}
  />

)

export const RelativeFormatMaxDays = () => (
  <>
    This should appear as distance
    <Timestamp
      time={ Number(subDays(Date.now(), 3)) }
      enabledFormats={['relative','date']}
      relativeMaxDays={ 4 }
    />
    But this should appear as date
    <Timestamp
      time={ Number(subDays(Date.now(), 5)) }
      enabledFormats={['relative','date']}
      relativeMaxDays={ 4 }
    />
  </>

)

//Default.parameters = storyParameters

export const Prefix = () => (
  <Timestamp
    time={ Number(Date.now()) }
    prefix={
      <strong>
        Updated :
      </strong>

    }
  />
)

//Variant.parameters = storyParameters
