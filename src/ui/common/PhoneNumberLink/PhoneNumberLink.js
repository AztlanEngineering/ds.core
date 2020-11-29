/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
import PropTypes from 'prop-types'
import qs from 'query-string'

// Local Imports
import { isBackend } from 'ui/isBackend'


if(!isBackend) {
  import('./phone_number_link.scss')
}

const baseClassName = 'phone_number_link'

/**
 * Use `PhoneNumberLink` to display an interactive link on mobile, to open either the phone app or the Whatsapp app.
 */
const PhoneNumberLink = ({
  id,
  className,
  style,
  children,

  phoneNumber,
  whatsapp,
  whatsappText:userWhatsappText,

  icon:userIcon
}) => {

  const icon = userIcon || (whatsapp ? '7' : '6')

  const whatsappText = userWhatsappText ? `&${qs.stringify({text: userWhatsappText})}` : ''

  return (
    <a
      href={whatsapp ?
        `https://api.whatsapp.com/send?phone=${phoneNumber}${whatsappText}`
        :`tel:${phoneNumber}`
      }
      target='_blank'
      rel='noreferer nofollow'
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
      <span className='fi'>{ icon }</span>
      &nbsp;
      { children || phoneNumber }
    </a>
  )}

PhoneNumberLink.propTypes = {
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
   * The phone number to call on click. Usually you would want international format here. This can be different than children, if children is provided, the text inside the link will be superseded (not the target of the call).
   */
  phoneNumber:PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired,

  /**
   * Whether this is a whatsapp link
   */
  whatsapp:PropTypes.bool,


  /**
   * The default message to send on whatsapp.
   */
  whatsappText:PropTypes.string,

  /**
   * Icon for the phone number
   */
  icon:PropTypes.string,
}

PhoneNumberLink.defaultProps = {
  whatsapp:false,
}

export default PhoneNumberLink
