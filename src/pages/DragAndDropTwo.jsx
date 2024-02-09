import { useState } from "react"
import "../styles/DnDTwo.css" 

const DragAndDropTwo = () => {
  const [boards, setBoards] = useState([
    {id: 1, title: "Сделать", items: [{id: 1, title: "Сходить в магазин"},{id: 2, title: "Сходить в универ"},{id: 3, title: "Посмотреть видосы Ulbi TV"}]},
    {id: 2, title: "Проверить", items: [{id: 4, title: "Сходить в тц"},{id: 5, title: "Сходить в кино"},{id: 6, title: "Сделать дз"}]},
    {id: 3, title: "Сделано", items: [{id: 7, title: "Позвонить маме"},{id: 8, title: "Позвонить папе"},{id: 9, title: "Посмотреть интересное кино"}]}
  ])

  const [currentItem, setCurrentItem] = useState({});
  const [currentBoard, setCurrentBoard] = useState({}); 
  const handleStart = (item, board) => {
    setCurrentItem(item);
    setCurrentBoard(board)
  }
  const handleLeave = (e) => {
    e.target.style.background = "white";
    //console.log('leave');
  }
  const handleOver = (e) => {
    e.preventDefault();
    e.target.style.background = "rgb(133, 255, 133)";
    //console.log('over');
  }
  const handleDrop = (e, item, board) => {
    e.preventDefault();
    e.target.style.background = "white";
    const currentIndex = currentBoard.items.indexOf(currentItem);
    currentBoard.items.splice(currentIndex, 1);
    const itemIndex = board.items.indexOf(item);
    board.items.splice(itemIndex + 1, 0, currentItem);
    setBoards([...boards]);//обновляем состояние, чтобы произошёд перерендер
    //console.log('drop');
  }

  const handleOverEmptyBoard = (e, board) => {
    e.preventDefault();
    if(!board.items.length && e.target.className === "items"){
      e.target.style.background = "lightgreen";
      console.log("OVER");
    }
  }
  const handleDropEmptyBoard = (e, board) => {
    e.preventDefault();
    if(!board.items.length){
      board.items.push(currentItem);
      const currentIndex = currentBoard.items.indexOf(currentItem);
      currentBoard.items.splice(currentIndex, 1);
      setBoards([...boards]);
      e.target.style.background = "white";
    }
  }
  const handleLeaveEmptyBoard = (e) => {
    e.target.style.background = "white";
  }
  return (
    <div className="boards-wrapper">
      <h1 style={{color: 'green'}}>Аналог TRELLO</h1>
      <div className="boards">
        {
        boards.map(board => {
          return (
            <div 
            className="board" 
            key={board.id}
            onDragOver={e => handleOverEmptyBoard(e, board)}
            onDragLeave={e => handleLeaveEmptyBoard(e)}
            onDrop={e => handleDropEmptyBoard(e, board)}
            >
              <h2 className="board__title">{board.title}</h2>
              <div className="items">
                {
                  board.items.map(item => {
                    return (<div
                      key={item.id} 
                      className="item"
                      draggable={true}
                      onDragStart={() => handleStart(item, board)}
                      onDragLeave={e => handleLeave(e)}
                      onDragOver={e => handleOver(e)}
                      onDrop={e => handleDrop(e, item, board)}
                      >
                        {item.title}
                        </div>)
                  })
                }
              </div>
            </div>
          )
        })
        }
      </div>
    </div>
  )
}

export default DragAndDropTwo
