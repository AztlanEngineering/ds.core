/* @fwrlines/generator-react-component 1.1.1 */
import * as React from 'react'
import PropTypes from 'prop-types'



/* Config*/
import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./label.scss')
}

const baseClassName = 'label'

/**
 * Label: <br/>
 * background: var()
 */

const Label = ({
  id,
  className,
  style,
  children,
  as:Wrapper,

  icon,
  basic,
  simple,
  rounded,
  dash,

  ...otherProps
}) => {


  return (
    <Wrapper
      className={
        [
          baseClassName,
          className,
          C.transition,
          basic && C.basic,
          simple && C.simple,
          rounded && 'rounded',
          dash && C.dash,
          /*   icon && (C.fontIcon + ' ' + C.iconInside) */
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      { children }
    </Wrapper>
  )}

Label.propTypes = {
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
  children:PropTypes.node.isRequired,

  /**
   * With html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /**
   * Icon only
   */
  icon:PropTypes.bool,

  /**
   * Basic style, in the spirit of semantic-ui
   */
  basic:PropTypes.bool,

  /**
   * Simple style, in the spirit of semantic-ui
   */
  simple:PropTypes.bool,

  /**
   * Circular
   */
  rounded:PropTypes.bool,

  /**
   * Whether to apply the dash style
   */
  dash:PropTypes.bool,
}

Label.defaultProps = {
  as     :'span',
  basic  :false,
  simple :false,
  rounded:false,
  dash   :false
}

export default Label
