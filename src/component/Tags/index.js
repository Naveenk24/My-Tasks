import './index.css'

export default function Tags(props) {
  const {tagName, toggleTheActiveTab, activeTabId} = props
  const {displayText, optionId} = tagName

  const onClickTheTagButton = () => {
    toggleTheActiveTab(optionId)
  }

  const activeTagClassName =
    activeTabId === optionId
      ? 'active-tags-list-item-button'
      : 'tags-list-item-button'

  return (
    <li className="tags-list-item">
      <button
        type="button"
        className={activeTagClassName}
        onClick={onClickTheTagButton}
      >
        {displayText}
      </button>
    </li>
  )
}
