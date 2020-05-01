import React, {Component} from 'react' ;
import Todo from './Todo';

class TodoList extends Component{

    render(){ //親コンポーネント(App.js) から渡されたものはthis.propsで受け取る
        
        const todos = this.props.listtodos.map( todo =>
              //todoという新たな配列にTodo.jsから受け取ったkey(id)と要素を入れていく //これをconst todosに入れる
            <Todo
                key={todo.id}
                {...todo} //todoに入っている要素を全て引き継ぐ
                setTodoStatus={this.props.setTodoStatus} //Todoの完了/未完了切り替え関数
            />
        )

        return(  //上でできたtodosをTodoListとして呼ばれたときに返す
            <ul> 
              {todos}
            </ul>     //上で中身が渡されているTodoコンポーネントでpropsとして受け取り可能
        );
    }
}

export default TodoList
