import React, {Component} from 'react';
import './css/todo.css';

class Todo extends Component{

    render(){ //classNameもdoneのtrue/falseに合わせて切り替わるようにした
        const className = this.props.done ? 'done' : 'undone'; //todo.cssのundoneクラスを関数classNameに割当
        const link = this.props.done ? '元に戻す' : '完了' //props.doneはApp.jsのcontodos配列の中身で初期値false
        //true(完了済み)のときは「元に戻す」ボタン、faulse(未完了)のときは「完了」ボタンを表示

        return( //HTMLとして表示させたい要素を組み立てて終了
                    //listitemタグ、リストの項目を表示する
                    //スタイリング
            <li className={className}>
                <span> ID: {this.props.id}</span>
                <span> Title: {this.props.title}</span>
                <a href="testaaa" onClick={(e) => {e.preventDefault(); this.props.setTodoStatus(this.props)}}>{link}</a>
                <p>desc: {this.props.desc}</p>
            </li> // ( ) => { }はアロー関数
        );

    }  //(引数, ...) => {...関数の本体...}

}

export default Todo
