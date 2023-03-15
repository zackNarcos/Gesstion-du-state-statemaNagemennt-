import * as fromRouter from '@ngrx/router-store';
import {createSelector} from '@ngrx/store';
import {AppStateInterface} from "../app.state.interface";

export const getRouterState = (state: AppStateInterface) => state.router;

export const getCurrentRouteState = createSelector(
    getRouterState,
    (state: fromRouter.RouterReducerState) => state.state
);
