let taskManager= (function(){
    let tasks=[];
    function addTask (taskDescription){
    tasks.push(taskDescription)
    }
    function displayTasks(){console.log(tasks);}
    return {
        addTask: addTask,
        displayTasks: displayTasks
      };
})()
taskManager.addTask('do laundry');
taskManager.addTask('wash dishes');
taskManager.addTask('mow lawn');
taskManager.displayTasks()
