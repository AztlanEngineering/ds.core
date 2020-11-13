/* @fwrlines/generator-react-component 1.1.1 */
import * as React from 'react'
import PropTypes from 'prop-types'

//* Config
import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

if(!isBackend){
  import('./grayscale_icon.scss')
}

const baseClassName='grayscale_icon'


/**
 * `GrayscaleIcon` : An inline icon of, for instance, a news outlet. It is converted to grayscale. <br/>
 * Colors : compatible with `ui-dark` theme.
 */
const GrayscaleIcon = ({
  id,
  className,
  style,

  height,
  width,

  src,
  alt,
  link,

  objectPosition,

  imgStyle
}) => {

  if (!link) return (
    <span
      className={
        [
          baseClassName,
          className,
          C.transition
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{ ...style, height, width }}
      >
      <img
        src={ src }
        alt={ alt }
        style={{
          ...imgStyle,
          objectPosition,
        }}
      />
    </span>

  )

  return (
    <a
      href={ link }
      target='_blank'
      rel='noopener noreferrer nofollow'
      className={
        [
          baseClassName,
          className,
          C.transition
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={{ ...style, height, width }}
    >
      <img
        src={ src }
        alt={ alt }
        style={{
          ...imgStyle,
          objectPosition,
        }}
      />
    </a>
  )}

GrayscaleIcon.propTypes = {
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
   *  The image source
   */
  src:PropTypes.string.isRequired,

  /**
   *  The link that wraps the image
   */
  link:PropTypes.string,

  /**
   *  The alt text
   */
  alt:PropTypes.string.isRequired,

  /**
   *  The height of the image
   */
  height:PropTypes.string,

  /**
   *  The width of the image
   */
  width:PropTypes.string,

  /**
   * Where is the image pinned, for instance `center center` or `left bottom`
   */
  objectPosition:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the child image.
   */
  imgStyle:PropTypes.object,
    
}

GrayscaleIcon.defaultProps = {
  height:'2.2em',
  objectPosition:'bottom left',
}

export default GrayscaleIcon
