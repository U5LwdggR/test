import { createContext, useContext, useState } from 'react'

const DataContext = createContext()

export const useData = () => {
  const context = useContext(DataContext)
  if (!context) {
    throw new Error('useData doit être utilisé dans DataProvider')
  }
  return context
}

export const DataProvider = ({ children }) => {
  const [shareholders, setShareholders] = useState([
    {
      id: '1',
      name: 'Jean Dupont',
      email: 'jean.dupont@email.com',
      shares: 25000,
      percentage: 35.7,
      dateJoined: '2023-01-15',
      type: 'Fondateur'
    },
    {
      id: '2',
      name: 'Marie Martin',
      email: 'marie.martin@email.com',
      shares: 18000,
      percentage: 25.7,
      dateJoined: '2023-03-20',
      type: 'Investisseur'
    },
    {
      id: '3',
      name: 'Pierre Legrand',
      email: 'pierre.legrand@email.com',
      shares: 15000,
      percentage: 21.4,
      dateJoined: '2023-06-10',
      type: 'Employé'
    },
    {
      id: '4',
      name: 'Sophie Bernard',
      email: 'sophie.bernard@email.com',
      shares: 12000,
      percentage: 17.2,
      dateJoined: '2023-09-05',
      type: 'Investisseur'
    }
  ])

  const addShareholder = (newShareholder) => {
    const id = Date.now().toString()
    setShareholders(prev => [...prev, { ...newShareholder, id }])
  }

  const updateShareholder = (id, updatedShareholder) => {
    setShareholders(prev => 
      prev.map(s => s.id === id ? { ...s, ...updatedShareholder } : s)
    )
  }

  const deleteShareholder = (id) => {
    setShareholders(prev => prev.filter(s => s.id !== id))
  }

  const getTotalShares = () => {
    return shareholders.reduce((total, shareholder) => total + shareholder.shares, 0)
  }

  const value = {
    shareholders,
    addShareholder,
    updateShareholder,
    deleteShareholder,
    getTotalShares
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}