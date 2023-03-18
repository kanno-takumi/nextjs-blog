import * as React from 'react';
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
                <label htmlFor="title">タイトル：</label>
                <input name="title" id="title" />
                <br />

                <label htmlFor="date">日付：</label>
                <input name="date" id="date" />
                <br />

                <label htmlFor="content">内容：</label>
                <input name="content" id="content" />
                <br />
            </form>
        </>
    )
}