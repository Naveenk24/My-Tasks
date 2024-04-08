import './index.css'

export default function TaskItems(props) {
  const {taskDetails} = props
  const {userInput, userTags} = taskDetails
  return (
    <li className="user-task-items">
      <p className="user-task-names">{userInput}</p>
      <p className="user-task-tags">{userTags.toLowerCase()}</p>
    </li>
  )
}
