const prompt = require('prompt-sync')();


let running = true;
let todo_list = [];
let Completed_list = [];
//greeting message
console.log('\n\nWelcome to the To-Do List Manager Application!');


while(running == true){
    console.log('\n==============================================\n')

    //Display to-do list (if exists)
    if(todo_list.length ==0){
        console.log('your to-do list is empty.\n');}
    else{

        if(Completed_list.length != 0)
        {
            //display completed items
            console.log('\nYour Completed tasks: ');
            for(i=0; i<Completed_list.length; i++)
            {
                console.log((i+1)+'. [completed] ' + Completed_list[i]);
            }
        }
        //display incomplete items
        console.log('\nYou have ' + todo_list.length + ' to-do item(s).');
        for(i=0; i<todo_list.length; i++)
        {
            console.log((i+1)+'. [incomplete] ' + todo_list[i]);
        }
    }

    //prompt for choice
    console.log('\n~ Select an action ~');
    console.log('[1] Create a to-do item');
    console.log('[2] Complete a to-do item');
    let choice = Number(prompt("> "));
    

    if(choice == 1)
    //add item
    {
        //prompt
        console.log('\n~ Creating a new to-do item ~');
        console.log('What is this to-do item called?');

        //get item
        let newItem = prompt("> ");

        todo_list.push(newItem);
    }

    if(choice == 2)
    //complete item
    {
         //prompt
         console.log('\n~ Completing a to-do item ~');
         console.log('Which item-number do you want to complete?');
 
         //get item to complete
         let itemToComplete = prompt("> ");
        console.log(todo_list.pop(itemToComplete-1));
         Completed_list.push(todo_list.pop(todo_list[itemToComplete-1]));
    }
}