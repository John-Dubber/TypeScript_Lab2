export interface taskInterface {
    addTask(task:string):number;
    listAllTasks():void;
    deleteTask(task:string):number;

    tasks: Array<string>;
}
