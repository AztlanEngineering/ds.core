/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
import { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'

import { SiteContext, useSite } from '@fwrlines/ds'

//Intl

//import { FormattedMessage} from "react-intl";
//import messages from "./messages";
// <FormattedMessage {...messages.title} />

//Local imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
 import('./theme_selector.scss')
}

const baseClassName = 'theme_selector'



/**
 * Use `ThemeSelector` to display a toggle to change site Themes. Consumes `SiteContext`
 */

const ThemeSelector = ({
  id,
  className,
  style,

  themes,
  iconMap,
}) => {
  const {
    userTheme,
    setPreferredTheme
  } = useSite()


  const loopThemes = useCallback(() => {
    const current = themes.indexOf(userTheme)
    setPreferredTheme(themes[(current + 1) % themes.length])
  },
  [userTheme]
  )

  
  return (
    <div
      className={
        [
        //styles[baseClassName],
          baseClassName,
          'pointer',
          className
        ].filter(e => e).join(' ')
      }
      id={id}
      style={style}
      onClick={loopThemes}
    >
      <span className='fi v0 m-v fi-icon'>
      { iconMap[userTheme] }
      </span>
    </div>
  )
}

ThemeSelector.propTypes = {

  /**
   * Provide an HTML id to this element
   */
  id:PropTypes.string,

  /**
   * The html class names to be provided to this element
   */
  className:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the element.
   */
  style:PropTypes.object,


  /**
   * Which html tag to use
   */
  /*
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),*/

  /**
   * The themes and the order in which they appear
   */
  themes:PropTypes.arrayOf(PropTypes.string).isRequired,

  /**
   * A map of the theme names with the icons that represent them. Uses the default font icon.
   */
  iconMap:PropTypes.object.isRequired,

}


ThemeSelector.defaultProps = {
  themes:['light', 'dark'],
  iconMap:{
    'dark':'n',//sun,
    'light':'m'//moon,
  }
}



export default ThemeSelector
