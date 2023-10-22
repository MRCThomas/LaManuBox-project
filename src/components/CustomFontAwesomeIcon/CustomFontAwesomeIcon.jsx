import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBox, faCubes } from '@fortawesome/free-solid-svg-icons'
import { faCube } from '@fortawesome/free-solid-svg-icons'

export default function CustomFontAwesomeIcon(props) {
    const { size, color } = props;

    return (
      <>
      <FontAwesomeIcon icon={faCube} style={{ fontSize: size, color: color }} className="fa fa-duotone-levitate  "/>
      </>
    );
}
{/* <FontAwesomeIcon icon="fa-solid fa-cube" /> */}
{/* <FontAwesomeIcon icon={faBox} style={{ fontSize: size, color: color }} /> */}
