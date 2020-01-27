var tasks = [];
var elementCount = addTask("Number One");
console.log(elementCount);
addTask("Number Two");
addTask("Number Three");
listAllTasks();
deleteTask("Number Two");
listAllTasks();

function addTask(task) {
    console.log("Item " + task + " has been added to the Array.");
    return tasks.push(task);
}
function listAllTasks() {
    /*for(let i:number = 0; i < tasks.length;i++)
    {
        console.log(tasks[i]);
    }
}*/
    console.log("List all the items in the array");
    tasks.forEach(function (task) {
        console.log(task);
    });
}
function deleteTask(task) {
    for (var i = 0; i < tasks.length; i++) {
        if (tasks[i] == task) {
            tasks.splice(i, 1);
            console.log("Item " + task + " has been deleted from the array");
            return tasks.length;
        }
    }
    console.log("Item " + task + " was not found in the array");
    return tasks.length;
}
