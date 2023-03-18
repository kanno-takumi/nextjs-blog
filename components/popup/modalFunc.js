import postButton from '../../styles/postAddButton.module.css'
import modalStyles from '../../styles/popup/modal.module.css'
import React, {useState} from 'react' 
import ModalContent from './modalContent'

export default function Button(){

    const [modal , openModal] = useState(false);
    const onModal=(isOpen)=>{
        openModal(isOpen);
    }
    return(
        <>
            <div className={postButton.btnset}>
                <div className={`  ${postButton.btnmod} ${postButton.btnborder} ${postButton.btnlarge} ${postButton.btnround}`}
                onClick={()=>openModal(true)}>
                    記事を追加
                </div>
            </div>

            {modal && (
            <div>
                <div className={modalStyles.isOpen}>
	                <div className={modalStyles.window}>
                        <ModalContent />
                    <div className={modalStyles.close}//×の部分 
                        onClick={()=>{openModal(false)}}
                    >×</div>
                        
                    </div>
                </div>

            </div>
            )}
            
            {console.log(modal)}
        </>
    )
}