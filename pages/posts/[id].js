import Layout from '../../components/layout'
import { getAllPostIds, getPostData,getSortedPostsData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'
import { getImagePaths, getPostsfromId } from '../../firebase/firebase'
import { getMarkdownPaths } from '../../firebase/firebase'
import Image from 'next/image';
import styles from '../../components/layout.module.css';



//getstaticpropsからpostDataを取得する(returnが自動的にPostの引数になる)
export default function Post({postData,imageURL}) {//postDataは単一のデータ
  
  
  console.log(imageURL)
  console.log("postData")
  console.log(postData)
  
  return (
    <Layout imagepath={imageURL} >
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date}/>
        </div>
        </div>
        {/* //markdownを使うときに使う */}
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* <div className={utilStyles.headingMd}>{postData.content}</div> */}
      </article>
    </Layout>
  )
}

export async function getStaticPaths() {
  
  const paths =await getAllPostIds()
  
  console.log("pathsです")
  console.log(paths)
  // console.log(paths)
  return {
    paths,
    fallback: 'blocking'
  }
}

export async function getStaticProps({params}) {//params→url開いたときにparameterでもらう変数のこと→一度に１つしか受け取らない
  const postData =await getPostData(params);//1つのデータ
  const imageURL =await getImagePaths(postData);
  console.log(imageURL)
  //markdown用
  // const postData = [];
  //   const url = await getMarkdownPaths(postData)
  //   postData.push({...prePostData,markdownURL:url})
  console.log("これで最後")
  console.log(postData)

  return {
    props: {
      postData,
      imageURL
    }
  }
}