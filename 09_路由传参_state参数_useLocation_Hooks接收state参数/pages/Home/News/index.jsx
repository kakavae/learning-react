import React from 'react'
import { useLocation } from 'react-router-dom'

export default function News() {
  // 1.接收params参数
  // const { title, content } = useParams()
  // 2.接收search参数---searchParams和修改当前searchParams参数的方法
  // const [searchParams, setSearchParams] = useSearchParams()
  // const title = searchParams.get('title')
  // const content = searchParams.get('content')
  // 3.接收路由的state参数
  const { state: { title, content } } = useLocation()
  // console.log(location)

  function removeNews() {
    // setSearchParams('id=4&title=修改&content=坏蛋')
  }
  return (
    <div>
      {/* 
        实现一个功能：当前组件传递需要删除的新闻的id给Home组件，也就是父组件
        1.props传参
        2.pubSub传参
        3.context传参
        4.redux传参
        5.通过路由的参数间接实现
      */}
      {title}------{content}----<button onClick={removeNews}>更新当前新闻</button>
    </div>
  )
}
