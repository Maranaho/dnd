import React from 'react'
import './dnd.css'
import Drag from './Drag'
import { DragDropContext,Droppable } from 'react-beautiful-dnd'

const onDragEnd = result => {
  const { destination, source, draggableId} = result
  if (!destination) return
  console.log(result);
}
const onDragStart = result => {
  console.log(result);
}

const items = [0,1,2,3,4]
const items1 = [0]


const App =()=><DragDropContext
  onDragStart={onDragStart}
  onDragEnd={onDragEnd}>
  <Droppable droppableId='968465'>
    {provided=>(
      <section
        {...provided.droppableProps}
        ref={provided.innerRef}>
        <h2>Droppable</h2>
        {items1.map((d,i)=><Drag key={String(i)} item={String(i)} id={String(i)} index={i}/>)}
        {provided.placeholder}
      </section>
    )}
  </Droppable>
  <Droppable droppableId='654654'>
    {provided=>(
      <section
        {...provided.droppableProps}
        ref={provided.innerRef}>
        <h2>Droppable</h2>
        {items.map((d,i)=><Drag key={String('sdf'+i)} item={String('sdf'+i)} id={String('sdf'+i)} index={i}/>)}
        {provided.placeholder}
      </section>
    )}
  </Droppable>
</DragDropContext>

export default App
