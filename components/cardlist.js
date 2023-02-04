import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
// import LinkBlack from '../styles/linkBlack.module.css'
import Card from './card';

const card1={
    image:"/images/profile_volleyball.jpg",
    alink:"/",
    title:"経歴",
}

const card2={
    image:"/images/profile_cafe.jpg",
    alink:"/",
    title:"スキル",
}

const card3={
    image:"/images/profile_drive.jpg",
    alink:"/",
    title:"趣味"
}

export default function cardList(){
    return(
        <>
        <div className={utilStyles.updownMargin}>
         <div className={utilStyles.flex}>
            {/*imageとリンク先のpropsと表示する文字入れておく*/}
            <Card image={card1.image} alink={card1.alink} title={card1.title}/>
            <Card image={card2.image} alink={card2.alink} title={card2.title}/>
            <Card image={card3.image} alink={card3.alink} title={card3.title}/>
         </div>
        </div>
        </>
    )
}