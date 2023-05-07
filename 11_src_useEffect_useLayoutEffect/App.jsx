import React, { useEffect, useLayoutEffect } from 'react'


export default function App() {
  /* 
  先 layout effect 再 effect。
因为 layout effect 是在 layout 阶段，也就是 dom 更新之后同步调用的，而 effect 是异步调用的。
一般不建议用 useLayoutEffect，因为同步逻辑会阻塞渲染。
layout effect 的执行就是在 layout 阶段遍历所有 fiber，取出 updateQueue 的每个 effect 执行
  */
  useEffect(() => {
    console.log('useEffect')
  }, [])
  setTimeout(() => {
    console.log(132)
  }, 0)
  Promise.resolve().then(() => {
    console.log('then')
  })
  useLayoutEffect(() => {
    console.log('useLayoutEffect')
  })
  return (
    <div className="col-xs-6">
      <div className="panel" id='div'>
        <div className="panel-body">
          <h3>我是App的内容</h3>
        </div>
      </div>
    </div>
  )
}
