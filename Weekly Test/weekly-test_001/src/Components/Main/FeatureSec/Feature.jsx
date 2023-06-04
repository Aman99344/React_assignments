import "../FeatureSec/Feature.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Feature = ({heading, icons}) => {
    return (
        <div className='feacture-Section'>

            <div className="feacture-Section-Card">

                <div className="icon-container">
                    <FontAwesomeIcon icon={icons} className="icon" />
                </div>
                <h3>{heading}</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <a href="/">Read More</a>
            </div>
        </div>
    )
}

export default Feature;