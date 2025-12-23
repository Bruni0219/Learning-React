import{FC} from "react";
import CartoonImage from '../../image/cartoon.jpg';
import MovieImage from '../../image/movie.png';
import LifeImage from '../../image/life.jpg';
import FoodImage from '../../image/food.jpg';

import sytles from './styles.module.scss';


const SecondSection:FC = () => {
    return (
        <div className={sytles.secondSection}>
            {/*Tabs */}
            <ul>
                <li>動畫</li>
                <li>美食</li>
                <li>電影</li>
                <li>生活</li>
            </ul>
            
            {/*Tab Content */}
            <div>
                <section>
                    <h2>動畫</h2>
                    <img src={CartoonImage} alt='cartoon'/>
                </section>
                <section>
                    <h2>美食</h2>
                    <img src={FoodImage} alt='Food'/>
                </section>
                <section>
                    <h2>電影</h2>
                    <img src={MovieImage} alt='Movie'/>
                </section>
                <section>
                    <h2>生活</h2>
                    <img src={LifeImage} alt='Life'/>
                </section>
            </div>
        </div>
    )
}

export default SecondSection;