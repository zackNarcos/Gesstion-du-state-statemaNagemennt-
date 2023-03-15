import {Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {AppStateInterface} from "./store/app.state.interface";
import {getCurrentRouteState} from "./store/store-route/router.selector";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    seriesId: string;
    series;
    private
    subscriptions: { [key: string]: any } = {};

    constructor(private store: Store<AppStateInterface>) {
    }

    ngOnInit(): void {
        this.subscriptions['routerSelector'] = this.store
            .pipe(select(getCurrentRouteState))
            .subscribe((route: any) => {
                const seriesId = route.params.seriesId;
                this.series = this.series.find((series) => series.id === seriesId);
            });
    }

    ngOnDestroy(): void {
        this.subscriptions['routerSelector'].unsubscribe();
    }

}