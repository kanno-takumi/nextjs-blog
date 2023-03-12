import {useState,useEffect} from 'react'
import  {getPosts,sample} from '../../firebase/firebase'


export default function fire(){
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


return (
    <div>
        <table>
        <tbody>
            {/* {postsList} */}
          {console.log(getPosts())}
        </tbody>
        </table>

    </div>
)

}