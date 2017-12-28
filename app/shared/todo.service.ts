import { Injectable } from "@angular/core";
import { Http, Headers, ResponseOptions } from "@angular/http";
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { Todo } from "./todo";

@Injectable()
export class TodoService {
    private apiUrl = 'api/todos';
    todos: Todo[] = [];

    constructor(private http: Http) { }

    getTodos(): Observable<Todo[]> {
        return this.http
                .get(this.apiUrl)
                .map(res => res.json().data as Todo[])
                .catch(this.handleError);
    }

    createTodo(title: string) {
        let headers = new Headers({'Content-type': 'application/json'}),
            options = new ResponseOptions({ headers }),
            todo = new Todo(title);

        return this.http
                .post(this.apiUrl, todo, options)
                .map(res => res.json().data)
                .catch(this.handleError);
    }

    removeTodo(todo: Todo) {
        let headers = new Headers({'Content-type': 'application/json'}),
            options = new ResponseOptions({ headers }),
            url = `${this.apiUrl}/${todo.id}`;

        return this.http
                    .post(this.apiUrl, todo, options)
                    .catch(this.handleError);

    }

    toggleTodo(todo: Todo) {
        let headers = new Headers({'Content-type': 'application/json'}),
            options = new ResponseOptions({ headers }),
            url = `${this.apiUrl}/${todo.id}`;

        return this.http
                    .post(this.apiUrl, todo, options)
                    .catch(this.handleError);
    }

    private handleError(error: any) {
        console.log('Error!', error);
        return Observable.throw(error.message || error);
    }

}