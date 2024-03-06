const initState = {
    isLoading: false,
}

export type PropsType = {
    isLoading: boolean;
};

export const loadingReducer = (state = initState, action: LoadingActionType): PropsType => {
    switch (action.type) {
        case "CHANGE_LOADING": {
            state.isLoading = action.isLoading
            return {...state}
          }

        default:
            return state
    }
}

type LoadingActionType = {
    type: 'CHANGE_LOADING'
    isLoading: boolean
}

export const loadingAC = (isLoading: boolean): LoadingActionType => {
    return { type: 'CHANGE_LOADING', isLoading}
}
