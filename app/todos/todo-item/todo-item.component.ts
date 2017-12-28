import { Component, Input, Output, EventEmitter } from "@angular/core";

import { Todo } from "../../shared/todo";

@Component({
    moduleId: module.id,
    selector: 'todo-item',
    templateUrl: 'todo-item.component.html',
    styleUrls: ['todo-item.component.css']
})
export class TodoItemComponent{
    @Input() todo: Todo;
    @Output() remove = new EventEmitter();
    @Output() toggle = new EventEmitter();

    onToggle() {
        this.toggle.emit(this.todo);
    }

    onRemove() {
        this.remove.emit(this.todo);
    }
}