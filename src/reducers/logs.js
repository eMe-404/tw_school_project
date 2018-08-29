/* eslint-disable indent,no-case-declarations */
const initState = []

const logs = (state = initState, action) => {
    switch (action.type) {
        case 'ADD_LOG':
            const newState = [...state]
            newState.push(action.data)
            return newState
        default:
            return state
    }
}

export default logs