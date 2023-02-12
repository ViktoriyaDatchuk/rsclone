// 1. src/options создаем новый файл (например dropdownExpenses.ts), 
//    там переменная с массивом нужных значений (export default[]...)
// 2. в нужном месте импортируем переменную (import  dropdownExpenses  from './options/dropdownValue')
//    а так же компонент (import { Dropdown } from './components/Dropdown/dropdown')
// 3. вставляем компонент (<Dropdown options={dropdownExpenses} />)

import type { DropdownProps } from '../../interfaces/propsTypes'
import './dropdown.css'
import type { ReactElement } from 'react'
import { useState } from 'react'

export function Dropdown({ options }: DropdownProps): ReactElement {
  const [selected, setSelected] = useState('Выберите вариант')
  const [isActive, setIsActive] = useState(false)

  return (
    <div className="dropdown">
      <div
        className="dropdown-btn"
        onClick={(e) => {
          setIsActive(!isActive)
        }}
      >
        {selected}
        <span className="fas fa-caret-down"></span>
      </div>
      {isActive && (
        <div className="dropdown-content">
          {options.map((option, key) => (
            <div
              onClick={(e) => {
                setSelected(option)
                setIsActive(false)
              }}
              className="dropdown-item"
              key={key}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
