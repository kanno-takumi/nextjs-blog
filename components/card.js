import Image from 'next/image';
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
import LinkBlack from '../styles/linkBlack.module.css'

// const style={
//     border:"1px solid black",
//     width:"1000px",
//     margin:"100px",
// }

export default function Card(props){
    return(
                <div className={utilStyles.cardContent}>
                <div className={utilStyles.cardImage}>     
                <Image 
                // priority//スタイルの優先順位
                src={props.image}
                // className={styles.profilePictures}
                height={180}//外枠のpaddingが10のため-20にしておく
                width={180}
                alt=""
                // fill
                // style={{objectFit:'cover',}}
                />
                </div>
                {/* <div className={utilStyles.flex}> */}
                <div className={utilStyles.cardTitleBox}>
                <div className={utilStyles.cardTitle}>{props.title}</div>
                </div>
                </div>
    )
}