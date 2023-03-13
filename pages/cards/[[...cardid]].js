import Layout from '../../components/layout'
import { getAllCardIds, getCardData } from '../../lib/cards'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import {useRouter} from 'next/router';
import * as path from 'path'

export default function Card({ cardData }) {//getStaticPropsから受け取ったcardData
  // const card=()=>{
  //   const router=useRouter();
  //   const{cards,cardid}=router.query;
  // }
  console.log("cardData")
  console.log(cardData)
  return (
    <Layout>
      <Head>
        <title>{cardData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{cardData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={cardData.date} />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        <h2 className={utilStyles.headingMd}>{cardData.content}</h2>
      </article>
    </Layout>
  )
}


export async function getStaticProps({ params }) {
  console.log("params")
  console.log(params)
  //getCardDataの引数はid
  const cardData = await getCardData(params.cardid)//paramsの中にcardidがある。ただcardidは配列なのでそれを1つにくっつる。
  return {
    props: {
      cardData
    }
  }
}

export async function getStaticPaths() {
//ここでpathを決定するから、useRouterは使うことはできない
      const paths=getAllCardIds()
   
  return {
    paths,
    fallback: false
  }
}






// import Layout from '../../components/layout';
// import {getAllPostIds,getPostData} from '../../lib/cards';
// import Head from 'next/head';
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css'


// //getStaticProps内でgetPostDataを使う
// //それをpropsとしてreturnする
// export async function getStaticProps({params}){//getStaticPathsによって指定された[id]からデータをfetchする
//     const postData=getPostData(params.cardid);
//     return {
//         props:{
//             postData,
//         }
//     }
// }

// export async function getStaticPaths(){//"pre-rendering"や"ssg-ssr"になるようにpathを設定している
//     const paths=getAllPostIds();
//     return{
//         paths,
//         fallback:false,
//     }
// }

// //posts/...の時に表示される部分
// export default function Post({postData}){//propsとしてpostDataを使える
//     return (
//     <Layout>
//         <Head>{/*ブラウザの上のタグ */}
//             <title>{postData.title}</title>
//         </Head>
//         <article>
//         <h1 className={utilStyles.headingXl}>{postData.title}</h1>
//         <br />
//         <h2 className={utilStyles.headingMd}>{postData.content}</h2>
//         {/* <br />
//         {postData.id} */}
//         <br />
//         {/* {postData.date} */}
//         <br />
//         <div className={utilStyles.lightText}>
//         <Date dateString={postData.date} />
//         </div>
//         <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
//         </article>
//     </Layout>
//     )
// }