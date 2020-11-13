/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './keys.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./keys.scss')
}

const baseClassName = 'keys'


/**
 * Use `Keys` to display inline keyboard Keys. If the key name has more than 1 character in its name (for instance ctrl), it will display in a long key.<br/>
 * Color : `--x`, defaults to `--subtitle`<br/>
 * CSS Vars : key `border-radius:var(--r)` 
 */
const Keys = ({
  id,
  className,
  style,

  keys
}) => {

  return (
    <span
      className={
        [
        //styles[baseClassName],
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { keys.map((e, i) =>
        <kbd
          className={
            [
              'key',
              e.length > 1 && 'long',
            ].filter(e => e).join(' ')
          }
          key={i}
        >
          { e }
        </kbd>
      ) }
    </span>
  )}

Keys.propTypes = {
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
   * The keys to display
   */
  keys:PropTypes.arrayOf(PropTypes.string).isRequired,

  /*
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */
}

/*
Keys.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/
export default Keys
