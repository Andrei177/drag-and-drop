import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './Layout'
import DragAndDropOne from '../pages/DragAndDropOne'
import DragAndDropTwo from '../pages/DragAndDropTwo'
import DragAndDropThree from '../pages/DragAndDropThree'

const AppRouter = () => {
  return (
    <Routes>
        <Route path='/' element={<Layout/>}>
            <Route path='/' element={<DragAndDropOne/>}/>
            <Route path='drag-1' element={<DragAndDropOne/>}/>
            <Route path='drag-2' element={<DragAndDropTwo/>}/>
            <Route path='drag-3' element={<DragAndDropThree/>}/>
        </Route>
    </Routes>
  )
}

export default AppRouter
