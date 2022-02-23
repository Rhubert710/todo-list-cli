const prompt = require('prompt-sync')();


let running = true;
let todo_list = [];
let is_complete = [];
let choice = 0;


//greeting message
console.log('\n\nWelcome to the To-Do List Manager Application!');

while(running == true){
    console.log('\n==============================================\n')

    display_toDoList();

    display_menu();
    

    if(choice == 1)
    {
        addItem();
    }

    if(choice == 2)
    {
        completeTask();
    }
}








//function definitions
function addItem(){

    //prompt
    console.log('\n~ Creating a new to-do item ~');
    console.log('What is this to-do item called?');

    //get item
    let newItem = prompt("> ");

    //update list
    todo_list.push(newItem);
    is_complete.push('[incomplete] ');
}


function completeTask(){

    //prompt
    console.log('\n~ Completing a to-do item ~');
    console.log('Which item-number do you want to complete?');

    //get item to complete
    let itemToComplete = prompt("> ");

    //update list
    is_complete[itemToComplete-1] = '[completed] ';
}


function display_toDoList(){

    if(todo_list.length ==0){
        console.log('your to-do list is empty.\n');}
    
    else
    {
        //display todo list
        console.log('\nYou have ' + todo_list.length + ' to-do item(s).');
        
        for(i=0; i<todo_list.length; i++)
        {
            console.log((i+1)+'. ' + is_complete[i] + todo_list[i]);
        }
    }
}

function display_menu(){

    //prompt for choice
    console.log('\n~ Select an action ~');
    console.log('[1] Create a to-do item');
    console.log('[2] Complete a to-do item');
    choice = Number(prompt("> "));
}