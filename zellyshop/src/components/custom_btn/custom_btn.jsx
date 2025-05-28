import './style.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

function Custom_btn(props) {
    return (
        <button type="button">{props.text} <FontAwesomeIcon icon={faChevronRight} /></button>
    )
}
export default Custom_btn