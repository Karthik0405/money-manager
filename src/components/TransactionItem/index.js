// Write your code here
import './index.css'

const TransactionItem = props => {
  const {eachItem, deleteHistory} = props
  const {id, title, amount, type} = eachItem

  const deleteTransaction = () => {
    deleteHistory(id)
  }
  return (
    <li className="Transaction-item-list">
      <p className="Transaction-item-list-items">{title}</p>
      <p className="Transaction-item-list-items">Rs {amount}</p>
      <p className="Transaction-item-list-items">{type}</p>
      <button
        className="Transaction-button"
        type="button"
        onClick={deleteTransaction}
        data-testid="delete"
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
          alt="delete"
          className="Transaction-item-list-image"
        />
      </button>
    </li>
  )
}
export default TransactionItem
