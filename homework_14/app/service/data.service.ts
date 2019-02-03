import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { CanActivate, ActivatedRoute, Router,ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from "rxjs";

@Injectable()
export class DataService implements CanActivate {
    constructor(public http: HttpClient, private router: ActivatedRoute, private route: Router) {
        this.router.params.subscribe((item) => {
            let uuid = item.uuid;
            console.log(item)
        })
    }
    private users;
    private current_user;
    // A channel so component1 and component2 can exchange data
    emitter = new EventEmitter<string>();
    getOnlineData() {
        let url = 'https://randomuser.me/api/?results=10';
        return this.http.get(url);
    }
    getCachedData() {
        this.users = JSON.parse((localStorage.getItem('users')));
        let obj = [
            {
                "name":
                    { "title": "ms", "first": "valquíria", "last": "campos" },
                'login': { 'uuid': 1 }
            },
            {
                "name":
                    { "title": "ms", "first": "valquíria", "last": "campos" },
                'login': { 'uuid': 2 }
            },

        ];
        return this.users;
    }
    getUserDetail() {
        return this.current_user;
    }

    emitValue(value: string) {
        this.emitter.emit(value);
    }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        const uuid = route.params.uuid;
        console.log(route.params)
        let arr = this.getCachedData()
        arr.forEach((item) => {
            if (item.login.uuid === uuid) {
                console.log('user found')
                this.current_user=item;
                return true;
            }
        })
        if (this.current_user == null) {
            this.route.navigate(['error']);
            return false;
        }
        else return true;
    }
}
