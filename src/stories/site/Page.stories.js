/* @fwrlines/generator-storybook-story 1.0.1 */
import * as React from 'react'


import { Page, InnerContent, Heading } from 'ui'
import { LocalHelmet } from 'ui/site/Page/common'
import { TEXT_XXS_ESC, TEXT_XXS, TEXT_XS, TEXT } from '../utils'

export default {
  title        :'site/Page',
  component    :Page,
  subcomponents:{
    'Section':Page.Section,

    'LocalHelmet':LocalHelmet
  },
  parameters:{
    decorators:[
      //storyfn => <Router>{ storyfn() }</Router>,
    ]
  }
}

const id = 'homepage'
const titles = [

  {
    className       :'uc',
    heading         :'Spartacus',
    subtitle        :'Stanley Kubrick, 1960',
    headingAs       :'h1',
    label           :'Film',
    labelClassName  :'x-red basic',
    headingClassName:'ts-green'
  },
  {
    heading       :'Lolita',
    subtitle      :'Stanley Kubrick, 1962',
    headingAs     :'h2',
    label         :'Today\'s cinema',
    labelClassName:'x-orange'
  },
  {
    heading       :'Dr. Strangelove',
    subtitle      :'Stanley Kubrick, 1964',
    headingAs     :'h3',
    label         :'Movie time',
    labelClassName:'x-red'
  },
]

const helmet = {
  robots             :'noindex, nofollow',
  title              :'test of the title',
  title_tag          :'this should appear in the title tag',
  canonical          :'https://home.com/description',
  meta_description   :'This is the meta description. 170 chars.',
  twitter_title      :'For twitter, a title',
  twitter_description:'',
  twitter_image      :'',
  og_title           :'This is the open graph title',
  og_description     :'',
  og_image           :'',
  og_type            :'',
  og_url             :'',
}


export const Default = () => (
  <Page
    title='defaultHelmet'
    id={ id }
  >
    READ SOURCE
  </Page>
)
export const DefaultWithSchema = () => (
  <Page
    id={ id }
    title='defaultHelmet'
    itemType='https://schema.org/FAQPage'
    canonical='meccamico.com/blah'
    HELMET={ helmet }
  >
    FAQ/PAGE READ SOURCE
  </Page>
)
export const Head = () => (
  <Page
    title='defaultHelmet'
    id={ id }
  >
    <Page.Section
      key='head'
      head
      id='head'
      HELMET={ helmet }
      className='pu u2'
    >

      <Heading
        key='heading'
        { ...titles[0] }
      />
      <p key='p'>See source code to check for meta</p>
    </Page.Section>
  </Page>
)
export const HeadWithSchema = () => (
  <Page
    id={ id }
    title='defaultHelmet'
    itemType='https://schema.org/FAQPage'
    HELMET={ helmet }
  >
    <Page.Section
      key='head'
      head
      className='pu u2'
      id='head'
    >

      <Heading
        key='heading'
        { ...titles[0] }
      />
      <p key='p'>See source code to check for meta</p>
    </Page.Section>
  </Page>

)
export const Plural = () => (
  <Page
    title='defaultHelmet'
    id={ id }
  >
    <Page.Section
      key='head'
      head
      className='pu u2'
      id='head'
    >

      <Heading
        key='heading'
        { ...titles[0] }
      />
    </Page.Section>
    <Page.Section
      key='a1'
      id='a1'
      className='pu u2'
    >
      <h2 key='h2'>Section A1</h2>
      <p key='p'>{ TEXT_XXS_ESC }</p>

    </Page.Section>
    <Page.Section
      key='a2'
      id='a2'
      className='pu u2'
    >
      <h2 key='h22'>Section A2</h2>
      <p key='pp'>{ TEXT_XXS_ESC }</p>

    </Page.Section>
  </Page>
)
export const PluralCaretDown = () => (
  <Page
    title='defaultHelmet'
    id={ id }
  >
    <Page.Section
      key='head'
      head
      id='head'
      caretDown='a1'
      className='pu u2'
    >

      <Heading
        key='heading'
        { ...titles[0] }
      />
    </Page.Section>
    <Page.Section
      key='a1'
      id='a1'
      caretDown='a2'
      className='pu u2'
    >
      <h2 key='h2'>Section A1</h2>
      <p key='p'>{ TEXT_XXS_ESC }</p>

    </Page.Section>
    <Page.Section
      key='a2'
      id='a2'
      className='pu u2'
    >
      <h2 key='h22'>Section A2</h2>
      <p
        key='pp'
        dangerouslySetInnerHTML={{ __html: TEXT_XS }}
      >
      </p>

    </Page.Section>
  </Page>
)

export const Content = () => (
  <Page
    title='defaultHelmet'
    id={ id }
  >
    <Page.Section
      key='head'
      head
      id='head'
      caretDown='a1'
      className='pu u2'
    >

      <Heading
        key='heading'
        { ...titles[0] }
      />
    </Page.Section>
    <Page.Section
      key='a1'
      id='a1'
      className='pu u2'
    >
      <InnerContent
        key='innercontent'
        dangerouslySetInnerHTML={{ __html: TEXT }}
      />

    </Page.Section>
  </Page>
)

