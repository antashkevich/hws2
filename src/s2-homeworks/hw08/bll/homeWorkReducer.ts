import {UserType} from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => {
    switch (action.type) {
        case 'sort': {
            if (action.payload === 'up') {
                state.sort((a, b) => a.name > b.name ? 1 : -1);
            } 

            if (action.payload === 'down') {
                state.sort((a, b) => a.name < b.name ? 1 : -1);
            }

            return state
        }
        case 'check': {
            state.sort((a, b) => a.name > b.name ? 1 : -1);
            return state.filter(user => user.age >= 18)
        }
        default:
            return state
    }
}
