import { useState } from 'react';
import '../styles/DnDThree.css'

const DragAndDropThree = () => {

  const [files, setFiles] = useState([]);

  const handleDrop = (e) => {
    e.preventDefault();
    e.target.style.background = "white";
    setFiles([...e.dataTransfer.files]);
    let filess = [...e.dataTransfer.files];//Эта переменная просто для проверки что файлы там лежат,
    // просто почему-то в консоли когда вывожу files выводиться пустой массив хотя долны быть файлы,
    // а когда вывожу filess то все файлы есть                                        
    console.log(files);
    console.log(filess);

    // Это можно дописать если нужно отправить файлы на сервер,
    // но в этом проекте только фронтенд реализовал для умения делать Dran and drop
    
    // const formData = new FormData();
    // formData.append('file', files[0]);
    // axios.post('url', formData);
  }
  const handleOver = (e) => {
    e.preventDefault();
    e.target.style.background = "lightgreen";
    e.target.style.border = "5px dashed green";
  }
  const handleLeave = (e) => {
    e.target.style.border = "5px dashed lightgreen";
    e.target.style.background = "white";
  }
  return (
    <div className='wrapper-upload-block'>
      <h1 className='upload-title'>Место куда можно перетащить файл для отправки на сервер</h1>
      <div 
      className='upload-block' 
      onDrop={e => handleDrop(e)}
      onDragOver={e => handleOver(e)}
      onDragLeave={e => handleLeave(e)}
      >
        {
            files.length > 0 && files.map(file => {
              return <h4 style={{padding: 5}} key={file.size}>{file.name}</h4>
            })
        }
      </div>
    </div>
  )
}

export default DragAndDropThree
