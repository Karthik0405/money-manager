// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {income, expenditure, balance} = props
  return (
    <div>
      <ul className="money-details-list-items">
        <li className="money-details-list-contianer money-details-bg-1">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            className="money-details-img"
            alt="balance"
          />
          <div>
            <p className="money-details-heading">Your Balance</p>
            <p className="money-details-amount" data-testid="balanceAmount">
              Rs {balance}
            </p>
          </div>
        </li>
        <li className="money-details-list-contianer money-details-bg-2">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            className="money-details-img"
            alt="income"
          />
          <div>
            <p className="money-details-heading">Your Income</p>
            <p className="money-details-amount" data-testid="incomeAmount">
              Rs {income}
            </p>
          </div>
        </li>
        <li className="money-details-list-contianer money-details-bg-3">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            className="money-details-img"
            alt="expenses"
          />
          <div>
            <p className="money-details-heading">Your Expenses</p>
            <p className="money-details-amount" data-testid="expensesAmount">
              Rs {expenditure}
            </p>
          </div>
        </li>
      </ul>
    </div>
  )
}

export default MoneyDetails
