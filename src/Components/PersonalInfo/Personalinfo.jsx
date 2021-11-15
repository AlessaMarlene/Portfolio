import Info from './Info/Info';
import Sociallinks from './SocialLinks/Sociallinks';
import './Personalinfo.css';

const Personalinfo = () => {
    return (
        <div className="personalInfo">
            <Info/>
            <Sociallinks/>
        </div>
    );
}

export default Personalinfo;