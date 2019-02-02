import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import axios from 'axios';

export class DataService {

    private data;

    getOnlineData() {
        let url = 'https://randomuser.me/api/?results=10';
        fetch(url, {
            method: "GET", // *GET, POST, PUT, DELETE, etc.
            mode: "cors", // no-cors, cors, *same-origin
            cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
            credentials: "same-origin", // include, *same-origin, omit
            headers: {
                "Content-Type": "application/json",
                // "Content-Type": "application/x-www-form-urlencoded",
            },
            redirect: "follow", // manual, *follow, error
            referrer: "no-referrer", // no-referrer, *client
        })
            .then((data) => {
                // this.data=data.data.results;
                console.log(data)
                return data;
            }).catch(() => 'error')
        localStorage.setItem('key', 'value');
    }
    getCachedData() {
        let val = localStorage.getItem('key');
        console.log(val)
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
                                return obj;//this.data;
    }

    // A channel so component1 and component2 can exchange data
    emitter = new EventEmitter<string>();
    emitValue(value: string) {
        this.emitter.emit(value);
    }

}
