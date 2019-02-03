import { Injectable, EventEmitter } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable()
export class DataService {
    constructor(public http:HttpClient){

    }
    private users;

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

    // A channel so component1 and component2 can exchange data
    emitter = new EventEmitter<string>();
    emitValue(value: string) {
        this.emitter.emit(value);
    }

}
