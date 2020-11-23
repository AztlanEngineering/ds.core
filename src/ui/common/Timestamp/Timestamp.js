/* @fwrlines/generator-react-component 2.4.1 */
import * as React from 'react'
import { useMemo, useCallback, useState } from 'react'
import PropTypes from 'prop-types'


import { format, fromUnixTime, differenceInDays, formatDistance, formatRelative } from 'date-fns'

//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './timestamp.scss' */
import { isBackend } from 'ui/isBackend'

if(!isBackend) {
  import('./timestamp.scss')
}

const baseClassName = 'timestamp'


/**
 * `Timestamp`: An interchangeble label to show the time in unix and date format. It can have different prefixes depending on where its used.
 */
const Timestamp = ({
  id,
  className,
  style,
  time,
  prefix,
  enabledFormats,
  distanceMaxDays,
  relativeMaxDays,
  dateFormat,

  as:Element
}) => {

  const [currentDisplay, setCurrentDisplay] = useState(enabledFormats[0])

  const formatMap = useMemo(() => ({
    'unix'    :(unix) => Number(unix),
    'date'    :(unix) => format(new Date(unix), dateFormat),
    'distance':(unix) => (!distanceMaxDays || (differenceInDays(Date.now(), new Date(unix)) < distanceMaxDays)) ?
      formatDistance(new Date(unix), new Date(), { addSuffix: true })
      : format(new Date(unix), dateFormat)
    ,
    'relative':(unix) => (!relativeMaxDays || (differenceInDays(Date.now(), new Date(unix)) < relativeMaxDays)) ?
      formatRelative(new Date(unix), new Date())
      : format(new Date(unix), dateFormat)
  }), [])

  const onClick = useCallback((e) => {
    e.persist()
    const currentIndex = enabledFormats.findIndex(e => e === currentDisplay)
    const nextIndex = (currentIndex + 1) % enabledFormats.length
    setCurrentDisplay(enabledFormats[nextIndex])
  }, [currentDisplay])

  if(!Number(time)) return null

  return (
    <Element
      className={
        [
        //styles[baseClassName],
          baseClassName,
          (enabledFormats.length > 1) && 'pointer',
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      onClick={ (enabledFormats.length > 1) ? onClick : undefined }

    >
      { prefix && prefix }
      { prefix && ' ' }
      { formatMap[currentDisplay](Number(time)) }
    </Element>
  )}

Timestamp.propTypes = {
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
   * The time to display in unix
   */
  time:PropTypes.number.isRequired,

  /**
   *  The children JSX
   */
  prefix:PropTypes.node,

  /**
   * Formats
   */
  enabledFormats:PropTypes.arrayOf(
    PropTypes.oneOf([
      'unix',
      'date',
      'distance',
      'relative'
    ])
  ),

  /**
  * How many days to display distance before reverting to unix display
  */
  distanceMaxDays:PropTypes.number,

  /**
  * How many days to display distance before reverting to unix display
  */
  relativeMaxDays:PropTypes.number,

  /**
   * Unix Format Read https://date-fns.org/v2.16.1/docs/format for options
   */
  dateFormat:PropTypes.string.isRequired,

  /**
   * Which html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),
}

Timestamp.defaultProps = {
  as            :'p',
  dateFormat    :'yyyy-MM-dd\'T\'HH:mm:ss.SSSxxx',
  enabledFormats:['unix', 'date'],
}
export default Timestamp
