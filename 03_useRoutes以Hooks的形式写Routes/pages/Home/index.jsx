import React, { useState } from 'react'
import { Navigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(0)
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
          </div>
        </div>
      </div>
    </div>
  )
}
