import fs from 'fs'
import * as path from 'path'
import matter from 'gray-matter'
import { remark } from 'remark'
import html from 'remark-html'


//fullpathでなくてはいけない　
const firstCardsDirectory = path.join(process.cwd(), 'cards')//「process.cwd()→カレントディレクトリ=nextjs-blog/」+cards
const secondDirectorys=fs.readdirSync(firstCardsDirectory)

const cardsDirectorys=secondDirectorys.map((cardsInDirectory) =>{
  return(path.join(firstCardsDirectory,cardsInDirectory))})

const mdfileNames=()=>{
  const tmpFileNames=[]
  cardsDirectorys.map((cardDirectory) => {
  const mdfileName=fs.readdirSync(cardDirectory)
  mdfileName.map((onefileName)=>{
    tmpFileNames.push(onefileName)
  })
})
console.log("tmpFileNames")
console.log(tmpFileNames)
  return tmpFileNames
}
const fileNames=()=>{
  const tmpFileNames=[]
  cardsDirectorys.map((cardDirectory) => {
  const mdfileName=fs.readdirSync(cardDirectory)
  mdfileName.map((onefileName)=>{
    const fileName=onefileName.replace(/\.md$/, '')
    tmpFileNames.push(fileName)
  })
})
console.log("tmpFileNames")
console.log(tmpFileNames)
  return tmpFileNames
}

  // const noMdfileNames=fileNames.map((fileName)=>{
  //   return (fileName.replace(/\.md$/, ''))
  // })
  // const cardid =path.join( "card",fileNames)

  const fullPaths=(
    mdfileNames().map((fileName)=>{
    return (path.join(cardsDirectorys[0],fileName))
    })
  )

  const fileContents = fullPaths.map((fullPath)=>{
    return (fs.readFileSync(fullPath, 'utf8'))
  })

//indexで順番に表示するための準備
export function getSortedCardsData() {
  console.log("fullpathを表示")
  console.log(fullPaths)
  // Get file names under /posts
  // const folderNames = fs.readdirSync(cardsDirectory)//fileNamesがディレクトリになっている
  // const fileNames=folderNames.map(folderName =>{//folderNameの中でさらにファイルを見つける必要がある。
  //   fs.readdirSync(folderName)  
  //   })
  // const cardsDirectory=fs.readdirSync(tmpCardsDirectory)//cardsDirectoryの例：card
  // console.log(path.join(cardsDirectory,"card"))
  // const fileNames=fs.readdirSync(cardsInDirectory)
  const allCardsData = fileNames().map(fileName => {
    const cardidpath =path.join( "card",fileName) //fileName.replace(/\.md$/, '')//fileNameだけがidに入るー 
    const fullPath = path.join(firstCardsDirectory,/*cardsDirectory*/`${cardidpath}.md`)
    const fileContents=fs.readFileSync(fullPath,'utf8')
    

    // Use gray-matter to parse the post metadata section
    
    const matterResult = matter(fileContents)
    // Combine the data with the id
    return {//配列を返す
      cardidpath,//hobbyとか
      ...matterResult.data//content、date等の配列
    }
  })
//ここまではallCardsDataの関数(returnの内容も)

  // Sort posts by date
  //日付で分類している
  return allCardsData.sort((a, b) => {
    if (a.order > b.order) {
      return 1
    } else {
      return -1
    }
  })
}

//ファイル名から（1連の）idを返す
export function getAllCardIds() {
  const returnCardIds=()=>{return fileNames().map(fileName =>{
    return {params:{cardid:['card',fileName]}}
  })}

    // return [{params:{cardid:['card','hobby']}},{params:{cardid:['card','sample']}}]
  return returnCardIds()
}


//[...cordid]のgetStatcPorps内で値を取ってくる
export async function getCardData(cardid) {
  const newCardId=cardid.join('/')
  const fullpath=path.join(firstCardsDirectory,`${newCardId}.md`)//サンプルとして一次的な値を入れてあるだけ
  const filecontents=fs.readFileSync(fullpath, 'utf8')
  const matterResult = matter(filecontents)
  

  // Use remark to convert markdown into HTML string
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  // Combine the data with the id and contentHtml
  return {
    cardid,
    contentHtml,
    ...matterResult.data
  }
}