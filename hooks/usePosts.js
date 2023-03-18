import{useEffect,useState} from 'react'
import {getPosts} from '../firebase/firebase'
// import useSWR from 'swr'

const DEFAULT_OUTPUT={
        isLoading:true,
        posts:[]
}

export function usePosts(){
    const [output,setOutput]=useState(DEFAULT_OUTPUT)
    useEffect(async ()=>{
        const posts=await getPosts()
        setOutput({isLoading:false,posts:posts})
    },[])
return output
} 