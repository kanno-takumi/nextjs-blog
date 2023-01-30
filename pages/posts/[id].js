import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        {/* <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
        <h2 className={utilStyles.headingMd}>{postData.content}</h2>
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id)
  return {
    props: {
      postData
    }
  }
}

// import Layout from '../../components/layout';
// import {getAllPostIds,getPostData} from '../../lib/posts';
// import Head from 'next/head';
// import Date from '../../components/date'
// import utilStyles from '../../styles/utils.module.css'


// //getStaticProps内でgetPostDataを使う
// //それをpropsとしてreturnする
// export async function getStaticProps({params}){//getStaticPathsによって指定された[id]からデータをfetchする
//     const postData=getPostData(params.id);
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