/** Learning Resource is: https://kentcdodds.com/blog/how-to-use-react-context-effectively */
import DummyData from '../data/testData.json';
import genericStock from '../data/genericStock.json'

import * as React from 'react'
import stockType from '../types/stockType';

type Action = { type: 'purchaseInvestment', content: stockType } | 
	{ type: 'saleInvestment', content: stockType  } | 
	{ type: 'editInvestment', content: stockType} |
	{ type: 'convertInvestment', content: stockType} |
	{ type: 'currentInvestment', content: stockType };

type Dispatch = (action: Action) => void
type State = { investment: stockType }
type InvestmentProviderProps = { children: React.ReactNode }

const InvestmentStateContext = React.createContext<
	{ state: State; dispatch: Dispatch } | undefined
>(undefined)

function investmentReducer(state: State, action: Action) {
	switch (action.type) {
		case 'purchaseInvestment': {
			return { investment: action.content}
		}
		case 'editInvestment': {
			return { investment: action.content}
		}		
		case 'saleInvestment': {
			return { investment: action.content}
		}
		case 'convertInvestment': {
			return { investment: action.content}
		}
		case 'currentInvestment': {
			// console.log("currentInvestment", action.content)
			return { investment: action.content}
		}
		default: {
			throw new Error(`Unhandled action type`)
		}
	}
}

function InvestmentProvider({ children }: InvestmentProviderProps) {
	const [state, dispatch] = React.useReducer(investmentReducer, { investment: genericStock })
	// NOTE: you *might* need to memoize this value
	// Learn more in http://kcd.im/optimize-context
	const value = { state, dispatch }
	return (
		<InvestmentStateContext.Provider value={value}>
			{children}
		</InvestmentStateContext.Provider>
	)
}

function useInvestments() {
	const context = React.useContext(InvestmentStateContext)
	if (context === undefined) {
		throw new Error('useInvestments must be used within a InvestmentProvider')
	}
	return context
}

export { InvestmentProvider, useInvestments }