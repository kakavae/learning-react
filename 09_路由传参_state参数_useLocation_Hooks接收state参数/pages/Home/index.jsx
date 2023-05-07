import React, { useState } from 'react'
import { Navigate, Link, Outlet, useNavigate } from 'react-router-dom'

export default function Home() {
  const [sum, setSum] = useState(0)
  const [newsList] = useState([
    { id: '1', title: '新闻1', content: '阳光灿烂的日子' },
    { id: '2', title: '新闻2', content: '好的' },
    { id: '3', title: '新闻3', content: '不好的' }
  ])

  // 重点-----使用编程式路由导航
  const navigate = useNavigate()

  function gotoNews(id, title, content) {
    return () => {
      navigate(`/home/news/${id}/${title}/${content}`)
    }
  }

  return (
    <div className="row">
      <div className="col-xs-6">
        <div className="panel">
          <div className="panel-body">
            <h3>我是Home的内容</h3>
            <div><button onClick={() => { navigate(1) }}>前进</button><button onClick={() => { navigate(-1) }}>后退</button></div>
            {/* 只要Navigate被渲染到页面上，就会修改路径为Navigate指定的路径并切换视图 */}
            {sum === 2 ? <Navigate to="/about" replace={true}></Navigate> : undefined}
            <h5>当前的sum值为：{sum}</h5>
            {/* 当sum的值是2的时候就将about组件渲染到页面上 */}
            <button onClick={() => { setSum(sum + 1) }}>Click me</button>
            <hr />
            {/* 1.params传参 */}
            {newsList.map((item) => {
              return (
                <ul key={item.id}>
                  <li>
                    <Link
                      /* 简写，前面不用再写/home/了 */
                      to={`news/${item.id}/${item.title}/${item.content}`}
                      state={{
                        id: item.id,
                        title: item.title,
                        content: item.content
                      }}
                    >{item.title}</Link>
                    <br />
                    <button onClick={gotoNews(item.id, item.title, item.content)}>点击跳转</button>
                  </li>
                </ul>
              )
            })}
            {/* 2.search传参 */}
            {/* {newsList.map((item) => {
              return <Link to={`/home/news/?id=${item.id}&title=${item.title}&content=${item.content}`} key={item.id}>{item.title}</Link>
            })} */}
            <hr />
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  )
}
