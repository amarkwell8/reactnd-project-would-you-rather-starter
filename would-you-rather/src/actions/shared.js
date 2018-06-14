import { _getUsers, _getQuestions } from '../utils/_DATA.js'
import { receiveUsers } from './users'
import { recieveQuestions } from './questions'

function getInitialData(){
    return Promise.all([
        _getUsers(),
        _getQuestions(),
    ]).then(([users, questions]) => ({
        users,
        questions,
    }))
}

export function handleInitialData() {
    return (dispatch) => {
        //dispatch(showLoading())
        return getInitialData()
            .then(({users, questions}) => {
                dispatch(receiveUsers(users))
                dispatch(recieveQuestions(questions))
            })
    }
}