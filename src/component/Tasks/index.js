import {useState} from 'react'

import {v4 as uuidv4} from 'uuid'

import Tags from '../Tags/index'

import TaskItems from '../TaskItems/index'

import './index.css'

export default function Tasks(props) {
  const {tagsList} = props

  const [userInput, setUserInput] = useState('')

  const [userTags, setUserTags] = useState(tagsList[0].optionId)

  const [userTasksList, setUserTaskList] = useState([])

  const [activeTabId, setActiveTabId] = useState('INITIAL')

  const onSubmitTheForm = event => {
    event.preventDefault()
    const newTasks = {
      id: uuidv4(),
      userInput,
      userTags,
    }

    setUserTaskList(prevState => [...prevState, newTasks])
    setUserInput('')
    setUserTags(tagsList[0].optionId)
  }

  const toggleTheActiveTab = id => {
    console.log(id)
    setActiveTabId(prevState => (prevState === id ? 'INITIAL' : id))
  }

  console.log(activeTabId)

  const filteredTaskList =
    activeTabId === 'INITIAL'
      ? userTasksList
      : userTasksList.filter(
          eachItem => eachItem.userTags.toUpperCase() === activeTabId,
        )

  return (
    <div className="bg-container">
      <div className="input-input-container">
        <h1 className="user-input-heading">Create a Task!</h1>
        <form className="form-element" onSubmit={onSubmitTheForm}>
          <label htmlFor="user-input" className="user-input-label-1">
            Task
          </label>
          <input
            type="text"
            id="user-input"
            className="user-input"
            placeholder="Enter the task here"
            value={userInput}
            onChange={e => setUserInput(e.target.value)}
          />
          <label htmlFor="user-select-input" className="user-input-label-2">
            Tags
          </label>
          <select
            className="select-input"
            id="user-select-input"
            onChange={e => setUserTags(e.target.value)}
            value={userTags}
          >
            {tagsList.map(eachItem => (
              <option key={eachItem.optionId} value={eachItem.optionId}>
                {eachItem.displayText}
              </option>
            ))}
          </select>
          <button type="submit" className="submit-button">
            Add Task
          </button>
        </form>
      </div>
      <div className="tags-list-container">
        <h1 className="tags-list-container-heading">Tags</h1>
        <ul className="tags-list">
          {tagsList.map(eachItem => (
            <Tags
              key={eachItem.optionId}
              tagName={eachItem}
              toggleTheActiveTab={toggleTheActiveTab}
              activeTabId={activeTabId}
            />
          ))}
        </ul>
        <h1 className="tags-list-container-heading">Tasks</h1>
        {filteredTaskList.length !== 0 ? (
          <ul className="user-tasks-list">
            {filteredTaskList.map(eachItem => (
              <TaskItems key={eachItem.id} taskDetails={eachItem} />
            ))}
          </ul>
        ) : (
          <p className="not-found-view">No Tasks Added Yet</p>
        )}
      </div>
    </div>
  )
}
