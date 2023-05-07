import * as React from 'react';
import modalStyles from '../../styles/popup/modal.module.css'
import { useForm } from 'react-hook-form';
import {addPosts,getPosts} from '../../firebase/firebase'
import Router,{useRouter} from 'next/router'

// formValues ={
//     title,
//     date,
//     content
// }

export default function modalContent(props){
    const router = useRouter()
    
    const {register,handleSubmit}=useForm();
    const onSubmit =async (data) => {
        console.log(data) ;
        props.propsopenModal(false);
        await addPosts(data);
        await getPosts();
        router.reload(); 
    }
    

    return(
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={modalStyles.formLayout}>
                <label htmlFor="title">タイトル　</label>
                <input name="title" id="title" type="text" className={modalStyles.textLayout} {...register('title')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="date" > 　　日付　</label>
                <input name="date" id="date" type="date" className={modalStyles.textLayout} {...register('date')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <div className={modalStyles.textPosition}>　　内容</div>
                <label htmlFor="content" >　　　　　</label>
                <textarea name="content" id="content" type="text" rows="12" cols="50" wrap="soft" className={`${modalStyles.textLayout} `} {...register('content')}>
                </textarea>
                </div>


                <button type="submit" className={modalStyles.button}>決定</button>
            </form>
        </>
    )
}