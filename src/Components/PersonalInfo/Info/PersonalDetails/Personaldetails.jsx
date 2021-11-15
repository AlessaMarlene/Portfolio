import Name from './Name/Name';
import Position from './Position/Position';
import Button from './Button/Button';
import './Personaldetails.css';

const Personaldetails = () => {
    return(
        <div className="personalDetails">
            <Name/>
            <Position/>
            <Button/>
        </div>
    );
}

export default Personaldetails;