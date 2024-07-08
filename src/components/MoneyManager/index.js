import {Component} from 'react'
import {v4 as uuid4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

// Write your code here
class MoneyManager extends Component {
  state = {
    titleInput: '',
    amountInput: '',
    typeInput: transactionTypeOptions[0].optionId,
    historyList: [],
  }

  gettingIncome = historyList => {
    let totalIncome = 0
    historyList.forEach(eachItem => {
      if (transactionTypeOptions[0].displayText === eachItem.type) {
        totalIncome += parseInt(eachItem.amount)
      }
    })
    return totalIncome
  }

  gettingBalance = historyList => {
    let totalIncome = 0
    let totalExpenditure = 0
    historyList.forEach(eachItem => {
      if (transactionTypeOptions[0].displayText === eachItem.type) {
        totalIncome += parseInt(eachItem.amount)
      } else {
        totalExpenditure += parseInt(eachItem.amount)
      }
    })
    return totalIncome - totalExpenditure
  }

  getTitleInput = e => {
    this.setState({
      titleInput: e.target.value,
    })
  }

  getAmountInput = e => {
    this.setState({
      amountInput: e.target.value,
    })
  }

  getTypeInput = e => {
    this.setState({
      typeInput: e.target.value,
    })
  }

  gettingTrasactionList = () => {
    const {titleInput, amountInput, typeInput} = this.state
    const typeOption = transactionTypeOptions.find(
      eachItem => eachItem.optionId === typeInput,
    )
    const {displayText} = typeOption
    const transactionIs = {
      id: uuid4(),
      title: titleInput,
      amount: amountInput,
      type: displayText,
    }
    this.setState(prevState => ({
      historyList: [...prevState.historyList, transactionIs],
      titleInput: '',
      amountInput: '',
      typeInput: transactionTypeOptions[0].optionId,
    }))
  }

  deleteHistory = id => {
    this.setState(prevState => ({
      historyList: prevState.historyList.filter(eachItem => eachItem.id !== id),
    }))
  }

  gettingExpenditure = historyList => {
    let totalExpenditure = 0
    historyList.forEach(eachItem => {
      if (transactionTypeOptions[1].displayText === eachItem.type) {
        totalExpenditure += parseInt(eachItem.amount)
      }
    })
    return totalExpenditure
  }

  render() {
    const {titleInput, amountInput, typeInput, historyList} = this.state
    const income = this.gettingIncome(historyList)
    const balance = this.gettingBalance(historyList)
    const expenditure = this.gettingExpenditure(historyList)
    return (
      <div className="money-manager-container">
        <div className="user-name-container">
          <h1 className="user-name">Hi, Richard</h1>
          <p className="user-name-description">
            Welcome back to your
            <span className="user-name-span"> Money Manager</span>{' '}
          </p>
        </div>
        <MoneyDetails
          income={income}
          expenditure={expenditure}
          balance={balance}
        />
        <div className="add-transaction-history-container">
          <div className="add-transaction-container ">
            <h1 className="add-transaction-heading">Add Transactions</h1>
            <form>
              <div className="form-control">
                <label className="form-label" htmlFor="title">
                  TITLE
                </label>
                <input
                  type="text"
                  id="title"
                  className="form-input"
                  placeholder="TITLE"
                  onChange={this.getTitleInput}
                  value={titleInput}
                />
              </div>
              <div className="form-control">
                <label className="form-label" htmlFor="amount">
                  AMOUNT
                </label>
                <input
                  type="text"
                  id="amount"
                  className="form-input"
                  placeholder="AMOUNT"
                  onChange={this.getAmountInput}
                  value={amountInput}
                />
              </div>
              <div className="form-control">
                <label className="form-label" htmlFor="select-type">
                  TYPE
                </label>
                <select
                  id="select-type"
                  className="form-input"
                  value={typeInput}
                  onChange={this.getTypeInput}
                >
                  <option
                    value={transactionTypeOptions[0].optionId}
                    key={transactionTypeOptions[0].optionId}
                  >
                    {transactionTypeOptions[0].displayText}
                  </option>
                  <option
                    value={transactionTypeOptions[1].optionId}
                    key={transactionTypeOptions[1].optionId}
                  >
                    {transactionTypeOptions[1].displayText}
                  </option>
                </select>
              </div>
              <button
                className="add-button"
                type="button"
                onClick={this.gettingTrasactionList}
              >
                Add
              </button>
            </form>
          </div>
          <div className="add-transaction-container ">
            <h1 className="add-transaction-heading">History</h1>
            <ul className="history-container">
              <li className="history-list">
                <p className="history-container-para">TITLE</p>
                <p className="history-container-para">AMOUNT</p>
                <p className="history-container-para">TYPE</p>
              </li>
              {historyList.map(eachItem => (
                <TransactionItem
                  eachItem={eachItem}
                  key={eachItem.id}
                  deleteHistory={this.deleteHistory}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
