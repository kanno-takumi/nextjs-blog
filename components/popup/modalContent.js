import * as React from 'react';
import modalStyles from '../../styles/popup/modal.module.css'
// import { useForm } from 'react-hook-form';

// formValues ={
//     title,
//     date,
//     content
// }

export default function modalContent(){
    // const { register } = useForm(); 

    return(
        <>
            <form>
                <div className={modalStyles.formLayout}>
                <label htmlFor="title">タイトル　</label>
                <input name="title" id="title" type="text" className={modalStyles.textLayout}/>
                </div>

                <div className={modalStyles.formLayout}>
                <label htmlFor="date" > 　　日付　</label>
                <input name="date" id="date" type="number" className={modalStyles.textLayout} />
                </div>

                <div className={modalStyles.formLayout}>
                <div className={modalStyles.textPosition}>　　内容</div>
                <label htmlFor="content" >　　　　　</label>
                <textarea name="content" id="content" type="text" rows="12" cols="50" wrap="soft" className={`${modalStyles.textLayout} `}>
                日付は8桁の数字で入力
                </textarea>
                </div>

                <button className={modalStyles.button}>決定</button>
            </form>
        </>
    )
}