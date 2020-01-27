"use strict";
exports.__esModule = true;
var MyTaskManager = /** @class */ (function () {
    function MyTaskManager() {
        this.tasks = [];
    }
    MyTaskManager.prototype.addTask = function (task) {
        console.log("Item " + task + " has been added to the Array.");
        return this.tasks.push(task);
    };
    MyTaskManager.prototype.listAllTasks = function () {
        console.log("List all the items in the array");
        this.tasks.forEach(function (task) {
            console.log(task);
        });
    };
    MyTaskManager.prototype.deleteTask = function (task) {
        for (var i = 0; i < this.tasks.length; i++) {
            if (this.tasks[i] == task) {
                this.tasks.splice(i, 1);
                console.log("Item " + task + " has been deleted from the array");
                return this.tasks.length;
            }
        }
        console.log("Item " + task + " was not found in the array");
        return this.tasks.length;
    };
    return MyTaskManager;
}());
var myTaskManager1 = new MyTaskManager();
myTaskManager1.addTask("item one");
myTaskManager1.addTask("item two");
myTaskManager1.addTask("item three");
myTaskManager1.listAllTasks();
myTaskManager1.deleteTask("item two");
myTaskManager1.listAllTasks();
