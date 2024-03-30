import { getStorage, ref, uploadBytes } from "firebase/storage";

export const imageUpload =(file) =>{
const storage = getStorage();
const storageRef = ref(storage, 'images/'+file.name);

// 'file' comes from the Blob or File API
uploadBytes(storageRef, file).then((snapshot) => {
  console.log('Uploaded a blob or file!');
});
}