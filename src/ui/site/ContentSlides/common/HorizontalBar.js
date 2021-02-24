/* @fwrlines/generator-react-component 1.5.0 */
import * as React from 'react'
import { useContext } from 'react'
import PropTypes from 'prop-types'

import {FormattedMessage} from 'react-intl'
import messages from '../messages'

import {
  ProgressBar
} from 'ui/common'

import {
  Button
} from 'ui/elements'

import {
  HorizontalBar as BaseHorizontalBar
} from '../../common'

import Context from './Context.js'

/* Config
   import C from 'ui/cssClasses' */

/* Relative imports
   import styles from './horizontal_bar.scss'
   import './horizontal_bar.scss' */

//const baseClassName = 'horizontal_bar'


/**
 * Use `HorizontalBar` to
 * Has color `x`
 */
const HorizontalBar = ({
  id,
  className,
  style,
  buttonClassName,
  progressBarClassName,
  progressBarStyle,
  ...otherProps
}) => {

  const {
    currentSlide,
    setNextSlide,
    setPrevSlide,
    isFirst,
    isLast
  } = useContext(Context)

  return (
    <BaseHorizontalBar
      className={
        [
        /* styles[baseClassName],
           baseClassName, */
          className
        ].filter(e => e).join(' ')
      }
      id={ id }
      style={ style }
      { ...otherProps }
    >
      <ProgressBar
        current={ currentSlide.progress }
        className={ progressBarClassName }
        style={ progressBarStyle }
        strokeWidth='5'
      />
      <div className='yf inside u50 p-u'>
        <div className='left'>
          {!isFirst &&
            <Button
              simple
              compact
              className={[
                buttonClassName,
                'it x-subtitle xh-paragraph',
              ].filter( e => e ).join(' ')}
              icon='h'
              iconSide='l'
              onClick={() => setPrevSlide()}
            >
              <FormattedMessage {...messages.back} />
            </Button>
          }
        </div>
        <div className='s1 ks yib title'>
          <p className='tb'>
            { currentSlide.title }
          </p>
        </div>
        {/*
        <Button
          className='x-success'
          onClick={() => setNextSlide()}
        >
          Next
        </Button>
        */}
      </div>
    </BaseHorizontalBar>
  )}

HorizontalBar.propTypes = {
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
   * The html styles to be provided to the progress bar. Warning : experimental api
   */
  buttonClassName:PropTypes.string,

  /**
   * The html class names to be provided to the progress bar. Warning : experimental api
   */
  progressBarClassName:PropTypes.string,

  /**
   * The html styles to be provided to the progress bar. Warning : experimental api
   */
  progressBarStyle:PropTypes.string,
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

HorizontalBar.defaultProps = {
  progressBarClassName:'x-green',
  className           :'b-y u50'
  /* height:'2.2em',
     as:'p', */
}

export default HorizontalBar
