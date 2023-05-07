import React, { useEffect, useState } from 'react'

export default function TaskList({ tasks, onDeleteTask, onChangeTask, onDeleteDone }) {
  /* 控制当前活跃的id */
  const [displayId, setDisplayId] = useState(-1)

  /* 保存edit内容---三个input需要三个---直接创建原来text的副本 */
  /* 要让editContent和上面的text发生变化保持一致 */
  const [editContent, setEditContent] = useState([...tasks])

  useEffect(() => {
    setEditContent(tasks)  // 这种方法让state和props保持一致，第一次执行下来state还是原来的值，会拿着原来的值渲染一次，然后再由setState触发第二次渲染，所以第一次render的时候并不能和props保持一致
  }, [tasks])

  const editText = (item) => {
    /* 显示输入框和完成按钮 */
    setDisplayId(item.id)
  }

  /* 点击完成触发修改 */
  const finishText = (item) => {
    setDisplayId(-1)
    console.log(editContent.filter((newItem) => {
      return newItem.id === item.id
    })[0])
    onChangeTask(editContent.filter((newItem) => {
      return newItem.id === item.id
    })[0])
  }

  /* 修改 */
  const doSth = (item) => {
    return (event) => {
      onChangeTask({
        ...item,
        done: event.target.checked
      })
      console.log(event.target.checked)
    }
  }
  return (
    <>
      <ul>
        {tasks.map((item) => {
          return <li key={item.id}>
            <input
              type='checkbox'
              checked={item.done}
              onChange={doSth(item)}
            ></input>
            &nbsp;
            <div style={{
              display: (displayId === item.id ? 'none' : 'inline')
            }}>
              <span>{item.text}</span>
              <button onClick={() => { editText(item) }}>编辑</button>
            </div>
            {/* 编辑区域的输入框和完成 */}
            <div style={{
              display: (displayId === item.id ? 'inline-block' : 'none')
            }}>
              <input
                value={
                  ((editContent.filter((newItem) => {
                    return item.id === newItem.id
                  }))[0] ? (editContent.filter((newItem) => {
                    return item.id === newItem.id
                  }))[0].text : '')
                }
                onChange={(event) => {
                  setEditContent(editContent.map((newItem) => {
                    if (newItem.id === item.id) {
                      newItem.text = event.target.value
                    }
                    return newItem
                  }))
                }}
              ></input>
              <button onClick={() => { finishText(item) }}>完成</button>
            </div>
            <button onClick={() => { onDeleteTask(item.id) }}>删除</button>
          </li>
        })}
      </ul>
      <button onClick={onDeleteDone}>删除已完成</button>
    </>
  )
}
