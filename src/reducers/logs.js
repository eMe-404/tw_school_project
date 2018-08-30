/* eslint-disable indent,no-case-declarations,no-redeclare */
const initState = []

const logs = (state, action) => {
    if (!state) {
        state = initState
    }

    if (action.type === 'ADD_LOG') {
        const newState = [...state]
        newState.push(action.data)
        return newState
    }
    if (action.type === 'DELETE_LOG') {
        const newState = [...state]
        newState.splice(action.data, 1)
        return newState
    }
    if (action.type === 'UPDATE_LOG') {
        const newState = [...state]
        newState[action.data.logId].date = action.data.date
        newState[action.data.logId].content = action.data.content
        return newState
    }
    return state

}

export default logs