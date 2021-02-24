import * as React from 'react'
import { addDecorator } from '@storybook/react'
import { IntlProvider } from 'react-intl'
import '../src/local.scss'

addDecorator(storyFn => <IntlProvider locale='en'>{ storyFn() }</IntlProvider>)

