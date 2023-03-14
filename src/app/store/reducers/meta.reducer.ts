import { ActionReducer, Action } from '@ngrx/store';

export function errorReducer<TState>(
    reducer: ActionReducer<TState>
): ActionReducer<TState> {
    return (state: TState, action: Action) => {
        try {
            return reducer(state, action);
        } catch (error) {
            return {
                ...state,
                error: error.message
            };
        }
    };
}
