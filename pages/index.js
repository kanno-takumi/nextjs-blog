import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date'
import Layout,{siteTitle} from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import { getSortedCardsData } from '../lib/cards';
import CardList from '../components/cardlist';
// import { console1 } from '../lib/posts';

export async function getStaticProps(){//getStaticPropsはpageからのみエクスポートされる
  const allPostsData=getSortedPostsData();//allPostsDataはid,title,contentを持った配列
  const allCardsData=getSortedCardsData();

  // console.log("allPostsDataの値＝getSortedPostsDataの値")
  // console.log(allPostsData)
  
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
      {/* <CardList /> */}


      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>{/**utils.module.css　$を使って複数classNameを追加できる */}
      {console.log("allCardsDataの中身")}
      {console.log(allCardsData)}

      {allCardsData.map(({content,date,title, id})=>(
        <Link href={`/cards/${id}`}>{title}</Link>
      ))}

      {/*ブログ部分*/}
      <h2 className={utilStyles.headiingLg}>Blog</h2>
      <ul className={utilStyles.list}>{/**ul 箇条書き */}
      {console.log("allPostsDataの値↓")}
      {console.log(allPostsData)}

      {allPostsData.map(({ content, date, title, id }) => (
        <li className={utilStyles.listItem} key={id} >
          <Link href={`/posts/${id}`}>{title}</Link>{/*ダイナミックルーティングに対応*/}
          {/* <br />
          {title}
          <br />
          {content}
          <br />
           */}
            <small className={utilStyles.lightText}>{/*smallタグ→テキストを一回り小さくするタグ */}
            <br />
            <Date dateString={date} />
            </small>
            {console.log({date})}
        </li>
      ))}
      </ul>
        {/* <p>
          大学3年生で、プログラミングについて学習中です。
        </p> */}
        {/* <p>
          <a href="http://www.ktkr2020.com/myapps/portfolio/kanno-takumi.jsp">過去のポートフォリオはこちら</a>
        </p> */}
      </section>
    </Layout>
    
    {/* <Head >sample code</Head> */}
    </div>   
    

    
  )
}