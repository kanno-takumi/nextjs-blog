import Head from 'next/head'
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Date from '../components/date'
import Layout,{siteTitle} from '../components/layout';
import { getSortedPostsData } from '../lib/posts';
import CardList from '../components/cardlist';
// import { console1 } from '../lib/posts';

export async function getStaticProps(){//getStaticPropsはpageからのみエクスポートされる
  const allPostsData=getSortedPostsData();
  return{
    props:{//propsの中でalllpostsDataを返すことでHomeコンポーネントにpropとして渡す
       allPostsData,
    }
  }
}

export default function Home({allPostsData}) {//allPostsDataを使える状態になった　
  return (
    // <div className={styles.container}>
    //   <Head>
    //     <title>Create Next App</title>
    //     <link rel="icon" href="/favicon.ico" />
    //   </Head>

    //   <main>
    //     <h1 className={styles.title}>
    //       Learn <Link href="https://nextjs.org">Next.js!</Link>
    //     </h1>

    //     <p className={styles.description}>
    //       Get started by editing <code>pages/index.js</code>
    //     </p>

    //     <div className={styles.grid}>
    //       <a href="https://nextjs.org/docs" className={styles.card}>
    //         <h3>Documentation &rarr;</h3>
    //         <p>Find in-depth information about Next.js features and API.</p>
    //       </a>

    //       <a href="https://nextjs.org/learn" className={styles.card}>
    //         <h3>Learn &rarr;</h3>
    //         <p>Learn about Next.js in an interactive course with quizzes!</p>
    //       </a>

    //       <a
    //         href="https://github.com/vercel/next.js/tree/master/examples"
    //         className={styles.card}
    //       >
    //         <h3>Examples &rarr;</h3>
    //         <p>Discover and deploy boilerplate example Next.js projects.</p>
    //       </a>

    //       <a
    //         href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //         className={styles.card}
    //       >
    //         <h3>Deploy &rarr;</h3>
    //         <p>
    //           Instantly deploy your Next.js site to a public URL with Vercel.
    //         </p>
    //       </a>
    //     </div>
    //   </main>

    //   <footer>
    //     <a
    //       href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Powered by{' '}
    //       <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
    //     </a>
    //   </footer>

    //   <style jsx>{`
    //     main {
    //       padding: 5rem 0;
    //       flex: 1;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: center;
    //       align-items: center;
    //     }
    //     footer {
    //       width: 100%;
    //       height: 100px;
    //       border-top: 1px solid #eaeaea;
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //     }
    //     footer img {
    //       margin-left: 0.5rem;
    //     }
    //     footer a {
    //       display: flex;
    //       justify-content: center;
    //       align-items: center;
    //       text-decoration: none;
    //       color: inherit;
    //     }
    //     code {
    //       background: #fafafa;
    //       border-radius: 5px;
    //       padding: 0.75rem;
    //       font-size: 1.1rem;
    //       font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
    //         DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
    //     }
    //   `}</style>

    //   <style jsx global>{`
    //     html,
    //     body {
    //       padding: 0;
    //       margin: 0;
    //       font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
    //         Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
    //         sans-serif;
    //     }
    //     * {
    //       box-sizing: border-box;
    //     }
    //   `}</style>
    // </div>
<div>
{/* {console1()} */}
    <Layout home={true}>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {/* <CardList /> */}
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>{/**utils.module.css　$を使って複数classNameを追加できる */}
      <h2 className={utilStyles.headiingLg}>Blog</h2>
      <ul className={utilStyles.list}>{/**ul 箇条書き */}
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