/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useState } from 'react'
import PropTypes from 'prop-types'




//Intl

import { FormattedMessage} from 'react-intl'
import messages from './messages'

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './shortener.scss' */
import { isBackend } from 'ui/isBackend'

/*if(!isBackend) {
  import('./shortener.scss')
}*/

const baseClassName = 'shortener'


/**
 * `Shortener` allows you to shorten a long text with a `Read-more` button at the end to show the complete text if needed.
 *
 */
const Shortener = ({
  id,
  className,
  style,
  children,

  as:Element,

  limit,
  separator,
  min,

  readMore,
  countLetters,
}) => {

  const [displayFull, setDisplayFull] = useState(false)

  const text = children || ''

  const excerpt = countLetters ? text.slice(0, limit) : text.split(separator).slice(0, limit).join(separator)
  const doShorten = countLetters ? text.length > limit : text.split(separator).length > limit

  return (
    <Element
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
      { (text && !displayFull && doShorten) ?
        <>
          { excerpt }
          { '... ' }
          { readMore &&
            <a
              href='#'
              onClick={ (e) => {
                e.preventDefault()
                e.stopPropagation()
                setDisplayFull(true) }
              }
            >
              { min ?
                <FormattedMessage {...messages.show} /> :
                <FormattedMessage {...messages.readMore} />
              }
            </a>}
        </>:
        text
      }

    </Element>
  )}

Shortener.propTypes = {
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
   * The text to display or shorten
   */
  children:PropTypes.string.isRequired,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
  //as: PropTypes.string,

  /**
   * How many separated elements to accept before the read more. This may mean how many words, or how many letters if `countLetters=true`
   */
  limit:PropTypes.number,

  /**
   * Which separator to use to count words. This is only used in if `countLetters=false`.
   */
  separator:PropTypes.string.isRequired,

  /**
   * Whether the shortener style is minimal. ATM is only gives a shorter message
   */
  min:PropTypes.bool,

  /**
   * Whether to display a read more
   */
  readMore:PropTypes.bool,

  /**
   * Whether to count letters instead of using a split
   */
  countLetters:PropTypes.bool,

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
}

Shortener.defaultProps = {
  as          :'span',
  separator   :' ',
  limit       :20,
  min         :false,
  readMore    :true,
  countLetters:false

  /* height:'2.2em',
     as:'p', */
}

export default Shortener
