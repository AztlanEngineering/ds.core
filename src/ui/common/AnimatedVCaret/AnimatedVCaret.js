/* @fwrlines/generator-react-component 1.0.1 */
import * as React from 'react'
import { useMemo } from 'react'
import PropTypes from 'prop-types'



/* Config */
import C from 'ui/cssClasses'
import { isBackend } from 'ui/isBackend'

import { generateRandomString } from '@fwrlines/utils'

//Relative imports
if(!isBackend) {
  import('./animated_v_caret.scss')
}

const baseClassName = 'animated_v_caret'

/**
 * `AnimatedVCaret` : An animated caret to be associated with the opening or closing of a ui element, like an accordion or menu. <br/>
 * color : `--x`, defaults to `--paragraph`
 */
const AnimatedVCaret = ({
  id:userId,
  className,
  style,

  listenerId,

  strokeWidth=10,
  strokeLinecap,

  height,
  width,

  duration,

  active,
  setActive,
}) =>
{

  const localId = useMemo(() => userId || `animated_v_caret_${generateRandomString()}`, [])

  /*
  const lpathId = useMemo(() => `lpath${localId}`)
  const rpathId = useMemo(() => `rpath${localId}`)
  */

  const swd = strokeWidth / 2 //strokeWidthDistance

  /*
  const lpath_initial = `M ${swd} 50 L 50 ${100 - swd}`
  const rpath_initial = `M ${100 - swd} 50 L 50 ${100 - swd}`

  const lpath_active = `M ${swd} 50 L 50 ${swd}`
  const rpath_active = `M ${swd} 50 L 50 ${swd}`
  */

  const listenToId = listenerId || localId

  //const subId = (sub) => id ? id + '_' + sub : sub

  return(
    <div
      className={
        [
          baseClassName,
          'pointer',
          className,
          active && C.active
        ].filter(e => e).join(' ')
      }
      id={ localId }
      style={ style }
      onClick={ () => setActive(!active) }
    >
      <svg
        viewBox='0 0 100 100'
        xmlSpace='preserve'
        xmlns='http://www.w3.org/2000/svg'
        version='1.1'
        preserveAspectRatio='xMinYMin meet'
        height={ height }
        width={ width }
      >
        <g>
          { [swd, 100 - swd].map((e,i) =>
            <line
              key={i}
              strokeLinecap={ strokeLinecap }
              strokeWidth={ strokeWidth }
              //             stroke='blue'
              x1={ e }
              y1={ 50 }
              x2={ 50 }
              y2={ active ? swd : 100 - swd }
              className={ 'line'+ ( i+1 ) }
            >

              {active ?
                <animate
                  attributeType='XML'
                  attributeName='y2'
                  values={`${100 - swd};82;18;${swd}`}
                  keyTimes='0;.25;.75; 1'
                  dur={ duration + 's' }
                  fill='freeze'
                  //dur={ animationDuration + 's' }
                  repeatCount='1'
                  restart='always'
                  begin={`${listenToId}.click`}
                />
		  :
                <animate
                  attributeType='XML'
                  attributeName='y2'
                  values={`${swd};18;82;${100 - swd}`}
                  keyTimes='0;.25;.75; 1'
                  dur={ duration + 's'}
                  fill='freeze'
                  //dur={ animationDuration + 's' }
                  repeatCount='1'
                  restart='always'
                  begin={`${listenToId}.click`}
                />
              }

            </line>


          ) }
        </g>
      </svg>
    </div>

  )}

AnimatedVCaret.propTypes = {
  /**
   * Provide an HTML id to this element. Without `id`  or `listenerId` the SVG animation breaks.
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
   * The id of another element in the DOM to trump the default id to trigger the animation. If this is not provided the animation will only be triggered on clicking the caret only.
   */
  listenerId:PropTypes.string,

  /**
   * The `stroke-width` SVG Property
   */
  strokeWidth:PropTypes.number,

  /**
   * The `stroke-linecap` SVG Property
   */
  strokeLinecap:PropTypes.oneOf(['round', 'square', 'butt']),

  /**
   * The height of the SVG node, as a SVG property
   */
  height:PropTypes.string,

  /**
   * The width of the SVG node, as a SVG property
   */
  width:PropTypes.string,

  /**
   * The duration of the animation in seconds
   */
  duration:PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string
  ]),

  /**
   * Whether the position is down
   */
  active:PropTypes.bool.isRequired,

  /**
   * Callback on click
   */
  setActive:PropTypes.func,
}

AnimatedVCaret.defaultProps = {
  strokeLinecap:'round',
  duration     :0.6,
  active       :false,
  setActive    :() => null,
}
export default AnimatedVCaret
