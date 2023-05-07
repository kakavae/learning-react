import React from 'react'
import { NavLink, useRoutes } from 'react-router-dom'
import routes from './routes'

export default function App() {
  const element = useRoutes(routes)
  return (
    <div>
      <div className="col-xs-2 col-xs-offset-1">
        <div className="list-group">
          <NavLink className="list-group-item" to="/about">About</NavLink>
          <NavLink className="list-group-item" to="/home">Home</NavLink>
        </div>
      </div>
      {/* 
        1.现在的element相当于之前的Routes包裹Route结构
        2.现在不同再写html类似的结构来表示路由之间的关系了，用数组对象的形式
        3.最终由react自己生成结构放在这个位置，返回的对象具有和之前Routes一样的属性
      */}
      {element}
    </div>
  )
}
