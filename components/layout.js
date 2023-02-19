import styles from './layout.module.css';
import Head from 'next/head';
import Image from 'next/image';
// import styles from '../styles/utils.module.css'
import Link from 'next/link';
import utilStyles from '../styles/utils.module.css'
// import Card from './card';
import CardList from './cardlist';

const name='Takumi Kanno';
const func_console=(children)=>console.log(children);

export const siteTitle='Next.js Sample Webite'
export default function Layout({children,home}){
    return (
        <div>
        <div className={styles.container}>{/**layout.module.css */}
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta 
                     name="description"
                     content="Learn how to build a personal website using Next.js"
                />
                <meta
                    property="og:image"
                    content={'https://og-image.vercel.app/${encodeURI(siteTitle,)}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg'}
                    />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" /> 
            </Head>
            <header className={styles.header}>{/**layout.module.css */}
                {home?(//条件
                    <>
                     {/* home=true→ルートディレクトリ(index)の時 */}
                    <Image
                    priority
                    src="/images/profile_chiba.jpg"
                    className={utilStyles.borderCircle}
                    height={144}
                    width={144}
                    alt=""
                    />
                    <h1 className={utilStyles.heading2Xl}>{name}</h1>{/**utils.module.css */}
                    {/* <Link href="/posts/first-post">Sample Page</Link> */}
                    {/* 写真二つ横並びに出す */}

                    {/* <Link href={props.alink} className={`${utilStyles.backColor} ${LinkBlack.linkBlack}`}> */}
                    </>
                ):(//条件不一致の場合(post)
                    <>
                    <Link href="/">
                    <Image
                    priority
                    src="/images/profile_chiba.jpg"
                    className={utilStyles.borderCircle}
                    height={108}
                    width={108}
                    alt=""
                    />
                    </Link>
                    
    {/*     styles/utils.module.css
    .headingLg{
    font-size:1.5rem;
    line-height:1.4;
    margin:1rem 0 ; 
    */}
     {/* .colorInherit {
    color: inherit;
    /* 親要素を引き継ぐ 
    */}
  

                    <h2 className={utilStyles.headingLg}>{/**utils.module.css */}
                        <Link href="/" className={utilStyles.colorInherit}>
                        {/* <Link href="/"> */}
                             {name}
                        </Link>
                    </h2>
                    </>
                )}
                </header>
                <main>{children[0]}</main>
                <main>{children[1]}</main>
                <main>{children[2]}</main>
                {func_console(children[0])}
                {func_console(children[1])}
                {func_console(children[2])}
                {/* {console.log({home})}
                {console.log(!{home} +"確認用")} */}

                {!home &&
                (//ルートディレクトリにいない場合(index.jsでtrueを渡しているから)
                    <div className={styles.backToHome}>{/**layout.module.css */}
                        <Link href="/">Back to home</Link>
                    </div> 
                    
                )}
                {/* <Link href="/"><h2>stylesを使わないバージョン</h2></Link> */}
        </div>
         {home && (
            <footer className={styles.footer}>
                <div className={utilStyles.padding10px}>
                <div className={utilStyles.headingMd}>
                <a href="http://www.ktkr2020.com/myapps/portfolio/kanno-takumi.jsp" >過去のポートフォリオはこちら</a>
                </div>
                </div>
            </footer>
        )} 
        </div>
    );
}