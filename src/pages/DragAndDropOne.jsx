import { useState } from 'react'
import '../App.css'

function DragAndDropOne() {

  const [carts, setCarts] = useState([
    {id: 1, title: 'КАРТОЧКА 1', order: 3},
    {id: 2, title: 'КАРТОЧКА 2', order: 2},
    {id: 3, title: 'КАРТОЧКА 3', order: 1},
    {id: 4, title: 'КАРТОЧКА 4', order: 4},
  ])
  
  const [currentCart, setCurrentCart] = useState({}); 
  const handleStart = (cart) => {
    setCurrentCart(cart);
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
  const handleDrop = (e, cart) => {
    e.preventDefault();
    e.target.style.background = "white";
    setCarts(carts.map(c => {
      if(c.id === cart.id){ 
        return {...c, order: currentCart.order}
      };
      if(c.id === currentCart.id) {
        return {...c, order: cart.order}
      };
      return c;
    }))
    //console.log('drop');
  }

  const compareFn = (a, b) => {
    return a.order - b.order;
  }

  return (
    <div className='carts'>
      <h1 style={{color: 'green'}}>Drag and drop сортировка</h1>
      <ul className='carts__list'>
        {
          carts.sort(compareFn).map(cart => {
            return <li className='carts__list-item'
            onDragStart={e => handleStart(cart)}
            onDragLeave={e => handleLeave(e)}
            onDragOver={e => handleOver(e)}
            onDrop={e => handleDrop(e, cart)}
            draggable={true}
            key={cart.id}
            >{cart.title}</li>
          })
        }
      </ul>
    </div>
  )
}

export default DragAndDropOne
