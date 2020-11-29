/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import PropTypes from 'prop-types'



import { gql } from 'graphql-tag'
/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./subtitle.scss')
}

const baseClassName = 'subtitle'

/**
 * `Subtitle` a label to keep small text in it with a gray color that indicates a subtitle <br />
 * color: `var(--subtitle)`
 */

const Subtitle = ({
  id,
  className,
  style,
  children,

  as:Element='p',

  upper
}) => {

  return (
    <Element
      className={
        [
          baseClassName,
          //'x-grey nm tos',
          upper && 'tls tu',
          className,
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
    >
      { children }
    </Element>
  )}

Subtitle.propTypes = {
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
   * With html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]),

  /**
   * Apply special styles related to capitalization
   */
  upper:PropTypes.bool,
}

Subtitle.defaultProps = {
  as:'p',
}

export default Subtitle
