import React, { useState } from 'react'
import { Navigate, Link, Outlet } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(0)
  const [newsList] = useState([
    { id: '1', title: '新闻1', content: '阳光灿烂的日子' },
    { id: '2', title: '新闻2', content: '好的' },
    { id: '3', title: '新闻3', content: '不好的' }
  ])
  return (
    <div className="row">
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <h3>我是Home的内容</h3>
            {/* 只要Navigate被渲染到页面上，就会修改路径为Navigate指定的路径并切换视图 */}
            {sum === 2 ? <Navigate to="/about" replace={true}></Navigate> : undefined}
            <h5>当前的sum值为：{sum}</h5>
            {/* 当sum的值是2的时候就将about组件渲染到页面上 */}
            <button onClick={() => { setSum(sum + 1) }}>Click me</button>
            <hr />
            {newsList.map((item) => {
              return <Link to={`/home/news/${item.id}/${item.title}/${item.content}`} key={item.id}>{item.title}</Link>
            })}
            <hr />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}
