// This file contains type definitions for react-beautiful-dnd
// We need this because we're using TypeScript

export interface DraggableLocation {
  droppableId: string
  index: number
}

export interface DragResult {
  draggableId: string
  type: string
  source: DraggableLocation
  destination?: DraggableLocation
  reason: "DROP" | "CANCEL"
  mode: "FLUID" | "SNAP"
}

