/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import { useState, useMemo, useEffect }from 'react'
import PropTypes from 'prop-types'

import { useInterval } from '@fwrlines/utils'

//import C from 'ui/cssClasses'

//Relative imports
import { isBackend } from 'ui/isBackend'

/*
if(!isBackend) {
  import('./number_increase.scss')
}*/

const baseClassName = 'number_increase'

/**
 * `NumberIncrease` can be used to display a number that dynamically increases. It's good to use in conjunction with a revealer, like `react-reveal`.
 * 
 */
const NumberIncrease = ({
  id,
  className,
  style,

  number,
  duration,

  suffix,
  suffixClassName,
  suffixStyle,

  as:Wrapper,
}) => {

  const { interval, addEveryTick  } = useMemo(
    () => {
      const baseInterval = duration / number
      const minimumInterval = 30
      return {
        interval    :Math.max(baseInterval, minimumInterval),
        addEveryTick:(baseInterval > minimumInterval) ? 1 : (minimumInterval / baseInterval) * 1
      }
    }
    ,[ duration, number ]
  )


  let [count, setCount] = useState(0)

  useEffect(() => {console.log(number, duration, interval)}, [duration, number])

  const condition = count < number

  useInterval(() => {
    setCount(Math.min(count + addEveryTick, number))
  }, interval, condition)

  if (number < 0) {
    return null
  }
  else {
    return (
      <Wrapper
        className={
          [
            baseClassName,
            className
          ].filter(e => e).join(' ')
        }
        id={ id }
        style={ style }
      >
        { count }
        <span className={ suffixClassName } style={ suffixStyle }>
          { suffix }
        </span>
      </Wrapper>
    )
  }
}

NumberIncrease.propTypes = {
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
   * The number to increase to
   */
  number:PropTypes.number.isRequired,

  /**
   * The duration of the animation
   */
  duration:PropTypes.number.isRequired,

  /**
   * This suffix, for instance a unit measure, to append to the number
   */
  suffix:PropTypes.string,

  /**
   * The class name to apply to the suffix
   */
  suffixClassName:PropTypes.string,

  /**
   * The JSX-Written, css styles to apply to the isuffix of the element.
   */
  suffixStyle:PropTypes.object,

  /**
   * With html tag to use
   */
  as:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object
  ]),

  /*
  : PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    state: PropTypes.string.isRequired,
  }),
  : PropTypes.func,
  : PropTypes.func,
  : PropTypes.oneOf(['primary', 'stroke', 'flat'])
  */
}

NumberIncrease.defaultProps = {
  as      :'p',
  duration:1000,
}

export default NumberIncrease
