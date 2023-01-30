
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import  '../stylesGlobal.css'

export const Icon = ({ icon, css}) => {
  return (
    <FontAwesomeIcon className={css} icon={icon} />
  )
}
