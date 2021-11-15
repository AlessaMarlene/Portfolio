import marlene from '../../../assets/marlene.jpg';
import Personaldetails from './PersonalDetails/Personaldetails';
import './Info.css';

const Info = () => {
    return(
        <div className="info">
            <img alt="marlene" src={marlene}/>
            <Personaldetails/>
        </div>
    );
}

export default Info;