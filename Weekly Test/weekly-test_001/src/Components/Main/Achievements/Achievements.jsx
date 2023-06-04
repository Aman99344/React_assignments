import "../Achievements/Achievements.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const Achievements = ({icons, para, num}) => {
  return (
          <div className="acchievments-items">
              <FontAwesomeIcon icon={icons} className="achevement-icon" />
              <span>{num}</span>
              <p>{para}</p>
    </div>
  )
}

export default Achievements