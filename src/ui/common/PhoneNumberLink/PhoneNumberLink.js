/* @fwrlines/generator-react-component 2.5.1 */
import * as React from 'react'
//import {} from 'react'
import PropTypes from 'prop-types'




//Intl

/* import { FormattedMessage} from "react-intl";
   import messages from "./messages";
    <FormattedMessage {...messages.title} /> */

//Config

//import C from 'ui/cssClasses'

/* Relative imports
   import styles from './phone_number_link.scss' */
import { isBackend } from 'ui/isBackend'

import qs from 'query-string'

if(!isBackend) {
  import('./phone_number_link.scss')
}

const baseClassName = 'phone_number_link'



/**
 * Use `PhoneNumberLink` to
 * Has color `x`
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

  const icon = userIcon || (whatsapp ? 'A' : 'B')

  const whatsappText = userWhatsappText ? `&${qs.stringify({text:userWhatsappText})}` : ''

  return (
    <a
      href={whatsapp ?
          `https://api.whatsapp.com/send?phone=${phoneNumber}${whatsappText}`
        :`tel:${phoneNumber}`
      }
      target="_blank"
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
   * Icon for the phone number
   */
  icon:PropTypes.string,

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

PhoneNumberLink.defaultProps = {
  whatsapp:false,
}

export default PhoneNumberLink
