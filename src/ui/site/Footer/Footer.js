/* @fwrlines/generator-react-component 2.3.4 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'

import { Main } from './common'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './footer.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./footer.scss')
}

const baseClassName = 'footer'


/**
 * Use `Footer` to
 * Has color `x`
 */
const Footer = ({
  id,
  className,
  style,
  children,
  end

}) => {


  return (
    <footer
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
      <div className='content'>
        { children }
      </div>
      { end }
    </footer>
  )}

Footer.propTypes = {
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
   *  The children JSX
   */
  children:PropTypes.node,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['', ''])
  */

  /**
   * The very end of the footer, the end of the page
   */
  end:PropTypes.node
}

/*
Footer.defaultProps = {
  status: 'neutral',
  //height:'2.2em',
  //as:'p',
}
*/

Footer.Main = Main
export default Footer
