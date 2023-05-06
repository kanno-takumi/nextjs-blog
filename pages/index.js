import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import styles from '../components/layout.module.css';
import linkBlack from '../styles/linkBlack.module.css';
import Link from 'next/link';
import Date from '../components/date'
import Layout,{siteTitle} from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { getSortedCardsData } from '../lib/cards';
import Card from '../components/card';
import { getMarkdownPaths } from '../firebase/firebase';

// import Modal from '../components/popup/modal'
import ModalFunc from '../components/popup/modalFunc'
// import useSWR from 'swr'
import ScrollHint from 'scroll-hint';

export async function getServerSideProps(){//getStaticPropsはpageからのみエクスポートされる
  // const allPostsData=getSortedPostsData();//allPostsDataはid,title,contentを持った配列
  const allPostsData=await getSortedPostsData();
  const allCardsData=getSortedCardsData();
  allPostsData.map(async (postData) => {
      const url = await getMarkdownPaths(allPostsData)
      allPostsData.push({...postData,markdownURL:url})
  })
  
  
  return{
    props:{//propsの中でalllpostsDataを返すことでHomeコンポーネントにpropとして渡す
       allPostsData,
       allCardsData,
    }
  }
}


export default function Home({allPostsData,allCardsData}) {//allPostsDataを使える状態になった　
  return (
<div>
{/* {console1()} */}
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>{/**utils.module.css　$を使って複数classNameを追加できる */}
      {/* {console.log("allCardsDataの中身")}
      {console.log(allCardsData)} */}

      {/*カード部分*/}
      {/* <div className=> */}
      {/* <div className={utilStyles.cardsBox}> */}
      <h2 className={utilStyles.headiingLg}>Introduction</h2>
        <div className=
        {`${utilStyles.flex} ${utilStyles.cardsBox} ${utilStyles.center} ${utilStyles.bottomPadding}
        
        `}>
    {allCardsData.map(({title, cardidpath, imagepath})=>(
        
        <Link href={`/cards/${cardidpath}`} >
          <Card image={imagepath} title={title} />
          </Link>
      ))}
      </div >
{/* {allCardsData.map(({content,date,title, cardid,imagepath})=>console.log(cardid))} */}

      {/*ブログ部分*/}
      <h2 className={utilStyles.headiingLg}>Blog</h2>
      <ul className={utilStyles.list}>{/**ul 箇条書き */}
      {console.log("allPostsDataの値↓")}
      {console.log(allPostsData)}

      {allPostsData.map(({ content, date, title, id }) => (
        <li className={utilStyles.listItem} key={id} >
          <Link href={`/posts/${id}`}>{title}</Link>{/*ダイナミックルーティングに対応*/}
            <small className={utilStyles.lightText}>{/*smallタグ→テキストを一回り小さくするタグ */}
            <div className={utilStyles.lightText}>
              <Date dateString={date}/>
            </div>
            </small>
            {console.log({date})}
        </li>
      ))}
      <ModalFunc />
      </ul>
      </section>
    </Layout>
    
    {/* <Head >sample code</Head> */}
    </div>   
    

    
  )
}