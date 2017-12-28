import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-list',
    templateUrl: 'todo-list.component.html',
    styleUrls: ['todo-list.component.css']
})
export class TodoListComponent {
    @Input() todos: Todo[];
    @Output() remove: EventEmitter<Todo> = new EventEmitter();
    @Output() toggle: EventEmitter<Todo> = new EventEmitter();

    onRemove(todo: Todo) {
        this.remove.emit(todo);
    }

    onToggle(todo: Todo) {
        this.toggle.emit(todo);
    }
}