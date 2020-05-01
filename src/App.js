import React, {Component} from 'react';
import TodoList from './TodoList'
import Form from './Form'
import './css/App.css';

class App extends Component{ //コンポーネントというクラス作成

  constructor(){ //constructorは初期値指定
    super() //super()でComponentを継承 //thisを使用するため
    //this.state = { //配列todosに各キーと値を設定 //連想配列

     const contodos = [ //初期値
        {
          id: 1,
          title: "Hello, React",
          desc: "Reactはじめました",
          done: false
        },
        {
          id: 2,
          title: "Hello, Redux",
          desc: "Reduxもはじめました",
          done: false
        },
      ]

      this.state = { //初期値のtodosをthis.stateのtodosに入れる
        thistodos: contodos, //state名: stateの内容 //配列名: 上の配列 //初期値ってこと
        thiscountTodo: contodos.length + 1, //何個配列があるかTodo数をカウントするstate //idの代わりに使用
      } //constructorで定められたstateの内容は最初の一度しか呼ばれないため
        //Todoを投稿して増えていってもcountTodo: todos.lengthは増えない
  
  } //constractorで定めたstateの内容は最初の１回しか呼ばれない
    //そのため、Todoを作成するたびにcountTodoを増やす記述が必要である


  handleSubmit(e){ //投稿機能(配列の最後尾に新しくTodoをプッシュしてsetStateで更新する)
    e.preventDefault(); //画面の更新をしないように指定
    const handletitle = e.target.title.value; //e.target.(name属性).valueでFormの中身を取り出せる //新規Todoのタイトルを取り出し
    const handledesc = e.target.desc.value; //新規Todoの本文を取り出し

    const handletodos = this.state.thistodos.slice() //slice()で配列を部分的に取り出せる//今回はすべて
    const handlecountTodo = this.state.thiscountTodo

    handletodos.push({ //todos配列の最後尾に新たなTodoの中身をpush関数でプッシュする
        id: handlecountTodo,
        title: handletitle,
        desc: handledesc,
        done: false,
    });

    this.setState({thistodos: handletodos}) //setState({})でstateを更新
    this.setState({thiscountTodo: handlecountTodo + 1})
    //本来はsetState({todos: todos})のように変更前と後のオブジェクトを指定するが、
    //同じ名前のときには今回のように省略可能。解読用にわかりやすく書き直した

    e.target.title.value = ''; //プッシュが終わって次のTodoのタイトルボックスを空白に
    e.target.desc.value = ''; //プッシュが終わって次のTodo内容のボックスを空白に

  }


   //Todoの完了/未完了を切り替える
  setTodoStatus(clickTodo){
    const settodos = this.state.thistodos.slice(); //新しくコピーした配列を使用
    const settodo = settodos[clickTodo.id -1]; //配列は０から, idは１から始まるので合わせる
    settodo.done = !settodo.done; //boolean型のtrue/faulseなので!で真偽を反転させる
    
    settodos[clickTodo.id -1] = settodo; //todoに入れ直す

    this.setState({settodos}) //setState()で更新する
  }



  render(){ //renderでHTMLとして渡したい変数等を設定
    return(  //return(){}内に実際に返したいHTMLそのものを記述
      <div className="app">
        <h1>Todoアプリ</h1>

        <Form handleSubmit={this.handleSubmit.bind(this)}
        //this.handleSubmit(this)にするとFormコンポーネントのthisになるから.bind(this)にして防止
        /> 

        <TodoList //呼び出したいコンポーネントは<TodoList />のように記載
          listtodos={this.state.thistodos} //渡したい内容 //TodoListでtodosという変数が使用可能になった
          setTodoStatus={this.setTodoStatus.bind(this)} // .bind()をつける
          //関数渡しは〇〇={ }
          />
      </div>
    ); //TodoListにtodos配列を読み込ませるために <TodoList> </> を使用
  }


}
//export default 〇〇 でimportされたときにデフォルトで呼び出されるものを定義
export default App
