import { taskInterface } from './interface';

class MyTaskManager implements taskInterface {

    tasks: Array<string> = [];

    constructor() { }
    addTask(task: string): number {
        console.log("Item " + task + " has been added to the Array.");
        return this.tasks.push(task);
    }

    listAllTasks(): void {
        console.log("List all the items in the array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    }

    deleteTask(task: string): number {
        for (let i: number = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                this.tasks.splice(i, 1);
                console.log("Item " + task + " has been deleted from the array");
                return this.tasks.length;
            }
        }
        console.log("Item " + task + " was not found in the array");
        return this.tasks.length;
    }
}

let myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.addTask("item three");
myTaskManager1.listAllTasks();
myTaskManager1.deleteTask("item two");
myTaskManager1.listAllTasks();