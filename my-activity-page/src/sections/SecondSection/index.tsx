import{FC,useEffect,useRef,useState} from "react";
import CartoonImage from '../../image/cartoon.jpg';
import MovieImage from '../../image/movie.png';
import LifeImage from '../../image/life.jpg';
import FoodImage from '../../image/food.jpg';

import styles from './styles.module.scss';
import classNames from "classnames";

const tabs=[
    {
        key:'cartoon',
        title:'動畫'
    },
    {
        key:'food',
        title:'美食'
    },
    {
        key:'movie'
        ,title:'電影'
    },
    {
        key:'life',
        title:'生活'
    },
];
const SecondSection:FC = () => {
    const [activeTab, setActiveTab] = useState<string>('cartoon');
    const [isFixed,setIsFixed] = useState<boolean>(false);
    const secondSectionRef = useRef<HTMLDivElement>(null);

    const activate = (key:string) => {
        setActiveTab(key);
        const tabContentEL = document.querySelector(`[data-id="${key}"]`);
        if (tabContentEL){
            tabContentEL.scrollIntoView({behavior: "smooth"});
        }

    }
    
    const onScroll = () =>{
        if (secondSectionRef.current){
            const {top} =  secondSectionRef.current.getBoundingClientRect();
            setIsFixed(top <= 0);
        }

    useEffect(() =>{
        window.addEventListener('scroll',onScroll);

        return() =>{
            window.removeEventListener('scroll',onScroll);
        };       
        },[]);      

    }

    return (
        <div className={styles.secondSection} ref = {secondSectionRef}>
            {/*Tabs */}
            <ul className={classNames({[styles.isFixed]:isFixed})}>
                {tabs.map(tab =>(
                    <li key={tab.key} onClick={()=>activate(tab.key)}>  
                        <span>{tab.title}</span>                        
                        <span className={classNames(styles.line,{[styles.visible]:activeTab===tab.key})} />
                    </li>
                ))} 
            </ul>
            
            {/*Tab Content */}
            <div>
                {tabs.map(tab =>(
                    <section data-id ={tab.key}>
                        <h2>{tab.title}</h2>
                        <img src={CartoonImage} alt={tab.key}/>
                    </section>
                ))}                
            </div>
        </div>
    )
}

export default SecondSection;