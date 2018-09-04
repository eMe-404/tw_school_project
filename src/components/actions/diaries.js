import request from 'superagent'

export const loadDiaries = () => {
    return (dispatch) => {
        request.get('/practiceDiaries')
            .end((err, res) => {
                dispatch({
                    type: 'INIT_LOG',
                    data: res.body
                })
            })
    }
}

export const addDiaryWithDispatch = (logInfo) => {
    return (dispatch) => {
        request.post('/practiceDiaries')
            .send(logInfo)
            .end((err, res) => {
                if (res.statusCode === 201) {
                    dispatch(loadDiaries())
                }
            })
    }
}

export const deleteDiaryWithDispatch = (id) => {
    return (dispatch) => {
        request.del(`/practiceDiaries/${id}`)
            .end((err, res) => {
                if (res.statusCode === 204) {
                    dispatch(loadDiaries())
                }
            })

    }
}

export const updateDiaryWithDispatch = (logInfo) => {
    return (dispatch) => {
        request.put(`/practiceDiaries/${logInfo.id}`)
            .send(logInfo)
            .end((err, res) => {
                if (res.statusCode === 204) {
                    dispatch(loadDiaries())
                }
            })
    }
}

export const changePageWithDispathch = (pageNum, pageSize) => {
    return (dispatch) => {
        request
            .get('/practiceDiaries')
            .query({ pageNum: pageNum - 1, pageSize: pageSize })
            .end((err, res) => {
                dispatch({
                    type: 'INIT_LOG',
                    data: res.body
                })
            })
    }
}