import React from 'react'
import { useParams } from 'react-router-dom'

export default function News() {
  const { title, content } = useParams()
  return (
    <div>
      {title}------{content}
    </div>
  )
}
