import { SkeletonElement } from "./styles"

export interface SkeletonProps{
  type: 'text' | 'title' | 'image' | 'thumbnail'
}


export function Skeleton({type}: SkeletonProps){
  return <SkeletonElement type={type} />
}