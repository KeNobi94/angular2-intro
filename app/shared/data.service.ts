import { InMemoryDbService } from "angular-in-memory-web-api";

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [{
            id: 1,
            title: 'Learn JS',
            completed: true
        }, {
            id: 2,
            title: 'Learn Angular 2',
            completed: false
        }, {
            id: 3,
            title: 'Write application',
            completed: false
        }];

        return { todos };
    }
}
