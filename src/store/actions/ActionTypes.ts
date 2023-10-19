export enum ActionType {
    IS_LOADING = "IS LOADING"
}

interface IsLoading{
    type: ActionType.IS_LOADING,
    payload: any
}

export type Action = IsLoading