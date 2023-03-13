// import  {getPosts,sample} from '../../firebase/firebase'
// import {FC} from 'react'
import {usePosts} from '../../hooks/usePosts'

export default function fire(){
    const {isLoading,posts}=usePosts()
    if(isLoading) return <p>Loading...</p>
    return (
        <>
            {/* <table> */}
            
            <div>
                {posts.map((post)=>(
                    <>
                    <div>{post.date}</div>   
                    <div>{post.title}</div>
                    <div>{post.content}</div>
                    </>
                ))}
              {console.log(posts)}
            </div>
            {/* </table> */}
        </>
    )
    
}
    // const mydata=[]
    // const [data,setData]=useState(mydata)
    // // const [message,setMessage]=useState('wait')

//     useEffect(()=>{
//         postsdb.collection('posts').get().then((snapshot)=>{
//             snapshot.forEach((document)=>{
//                 const doc=document.data()
//                 mydata.push(
//                     <tr key={document.id}>
//                         <td><a href={'/fire/del?id='+document.id}>{document.id}</a></td>
//                         <td>{doc.name}</td>
//                         <td>{doc.mail}</td>
//                         <td>{doc.age}</td>
//                     </tr>
//                 )
//             })
//             setData(mydata)
//             setMessage('firebase data.')
//         })
//  } , [])

// const postsList=async ()=>{
//     const postslist=await posts();
// }


