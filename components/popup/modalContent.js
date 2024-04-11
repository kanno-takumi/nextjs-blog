// import * as React from 'react';
import modalStyles from '../../styles/popup/modal.module.css'
import { useForm } from 'react-hook-form';
import {addPosts,getPosts} from '../../firebase/firebase'
import Router,{useRouter} from 'next/router'
import React, { useState } from 'react';
import Image from 'next/image';
import { imageUpload } from "../../api/upload";

// formValues ={
//     title,
//     date,
//     content
// }

export default function modalContent(props){
    const router = useRouter()
    const {register,handleSubmit,reset}=useForm();
    
    // const onSubmit =async (data) => {
    //     console.log(data) ;
    //     console.log("動いているか確認動いているか確認")
    //     props.propsopenModal(false);
    //     await addPosts(data);
    //     await getPosts();
    //     router.reload(); 
    // }

    const [createObject, setCreateObject] = useState(null);
    const [image, setImage] = useState(null);

    const uploadToClient = (event) => {
        if (event.target.files && event.target.files[0]) {
        const file = event.target.files[0];
    //    console.log("動いている")
        setImage(file);
        // console.log(image)
        // imageUpload(file);
        setCreateObject(URL.createObjectURL(file));
    //     console.log(createObject)
    //     console.log(image)
        }
      }

      const uploadToServer = async (data) => {

        props.propsopenModal(false);
        if(image){
        imageUpload(image);//写真を追加する
        }
        console.log("data")
        console.log(data);
        data = {
            content : data.content,
            date : data.date,
            image: image ? image.name : null,
            title : data.title,
            show: true
        }
        await addPosts(data);//データを追加する
        await getPosts();
        router.reload(); 
        reset();
    }

    return(
        <>
            <form onSubmit={handleSubmit(uploadToServer)}>
                <div className={modalStyles.formLayout}>
                <label htmlFor="title">タイトル　</label>
                <input name="title" id="title" type="text" className={modalStyles.textLayout} {...register('title')}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="file-input">　　写真　　</label>
                <input id="file-input" className="hidden" type="file" accept="image/*" name="image" onChange={uploadToClient} />
                <div className={modalStyles.image}>
                    {createObject && <Image src={createObject} width={50} height={50} className={modalStyles.image}></Image>}
                </div>
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