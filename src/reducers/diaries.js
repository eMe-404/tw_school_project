/* eslint-disable indent,no-case-declarations,no-redeclare */
const initState = []

const diaries = (state, action) => {
    if (!state) {
        state = initState
    }
    if (action.type === 'INIT_LOG') {
        return action.data
    }
    return state

}

export default diaries