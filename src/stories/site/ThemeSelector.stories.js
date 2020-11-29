/* @fwrlines/generator-storybook-story 1.6.1 */
import * as React from 'react'
import faker from 'faker'
//import {} from 'react'

//import { action } from '@storybook/addon-actions'

import { SiteContextProvider, useSite, ThemeSelector } from 'ui'
/* import QUERY from './graphql/query.graphql'
   import { AplProvider } from 'stories/utils'
   import { Router } from 'stories/utils'
   import {ALL_COLORS, SIZES } from 'stories/config.js'
   import { LIST, LIST_XS, TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from 'stories/utils/Dummy'
    */
const config={
  SITE_NAME       :'Internet 1999',
  SITE_CANONICAL  :'https://internet1999.org',
  FACEBOOK        :'facebook_id',
  INSTAGRAM       :'@superaccount',
  SUPPORT_EMAIL   :'support@support.com',
  SITE_DESCRIPTION:faker.lorem.paragraph(10)
}

//const endpoint = 'https://api.fwrlines.com/graphql'

export default {
  title        :'site/ThemeSelector',
  component    :ThemeSelector,
  //componentSubtitle:'Component subtitle',
  subcomponents:{
    //Item:ThemeSelector.Item
  },
  decorators:[
    storyfn => <SiteContextProvider config={ config }>{ storyfn() }</SiteContextProvider>,
    /* storyfn => <AplProvider endpoint={ endpoint }>{ storyfn() }</AplProvider>,
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

export const Default = () => {

  const ChildCo = () => {

    const { userTheme } = useSite()
    return (
      <div
        className={
          [
            'ui-'+ userTheme,
            'y-background b-y'
          ].filter(e => e).join(' ')
        }
      >
        <p>
          Theme :
          { userTheme }
        </p>
        <ThemeSelector/>
      </div>
    )
  }
  return (
    <ChildCo/>
  )
}


