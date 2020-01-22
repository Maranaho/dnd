import React from 'react'
import { Draggable } from 'react-beautiful-dnd'
const Drag = ({id,index,item})=> <Draggable
  draggableId={id}
  index={index}>
  {provided=>(
    <div
    {...provided.dragHandleProps}
    {...provided.draggableProps}
    ref={provided.innerRef}>
      <h3>Draggable {item}</h3>
    </div>
  )}
</Draggable>

export default Drag
