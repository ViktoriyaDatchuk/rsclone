import type { ReactElement } from 'react'
import './Header.css'
import Accounts from '../../assets/img/accounts.png'
import Contributions from '../../assets/img/contributions.png'
import Expenses from '../../assets/img/expenses.png'
import Income from '../../assets/img/income.png'
import Loans from '../../assets/img/loans.png'
import Planning from '../../assets/img/planning.png'
import { HeaderButton } from '../HeaderButton/HeaderButton'
import HeaderIcon from '../../assets/img/headerIcon.png'
import { HeaderListType } from '../../interfaces/interfaces'

export const Header = (): ReactElement => {
  const HeaderList: HeaderListType = {
    Счета: Accounts,
    Расходы: Expenses,
    Доходы: Income,
    'Кредиты и Долги': Loans,
    Планирование: Planning,
    'Банковские вклады': Contributions,
  }
  return (
    <header>
      <div className="header__title">
        <img src={HeaderIcon} alt={HeaderIcon} className="title__image" />
        <h1>Домашняя бухгалтерия</h1>
      </div>
      <div className="header__container">
        {Object.entries(HeaderList).map((button) => (
          <HeaderButton image={button[1]} title={button[0]} key={button[0]} />
        ))}
      </div>
    </header>
  )
}
