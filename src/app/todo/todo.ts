import { Component } from '@angular/core';

@Component({
  selector: 'app-todo',
  imports: [],
  templateUrl: './todo.html',
  styleUrl: './todo.css',
})
export class Todo {
todoList = [
   {task:"Quizz 2 Angular", state:"not yet"},
   {task:"EX2 TP2 Angular", state:"not yet"}, 
   {task:"Exercice UML", state:"done"}, 
   {task:"Installation Oracle", state:"done"},
   {task:"Réviser cours POO", state:"in progress"}  ] ;

   onChangeState(item:any){
    if(item.state=='not yet')
      item.state = "in progress";
    else
      item.state = "done"
   }

}
