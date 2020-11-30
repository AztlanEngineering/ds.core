/* @fwrlines/generator-react-component 1.1.0 */
import * as React from 'react'
import PropTypes from 'prop-types'


/* Config
   import C from 'ui/cssClasses' */

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./breadcrumb.scss')
}
import { Item } from './common'

const baseClassName = 'breadcrumb'

/**
 * `Breadcrumb` helps navigationg through the site easily showing trail of the path user navigated<br />
 * color: `var(--x-light, var(--light-gray))`<br/>
 * font-size:`calc(var(--s-1 * 1em))`<br/>
 * color:`var(--metadata)` <br />
 * color:`var(--subtitle)`<br />
 * color:`var(--dark-subtitle)`
 */

const Breadcrumb = ({
  id,
  className,
  style,
  children
}) => {


  return (
    <ol
      id={ id }
      style={ style }
      className={
        [
          baseClassName,
          className
        ].filter(e => e).join(' ')
      }
      itemScope
      itemType='http://schema.org/BreadcrumbList'
    >
      { children }
    </ol>
  )}

Breadcrumb.propTypes = {
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

}

/*
Breadcrumb.defaultProps = {
  status: 'neutral',
}
*/

Breadcrumb.Item = Item

export default Breadcrumb
