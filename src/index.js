import './css/index.css'
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';  //import 〇〇 from 'ファイル名など' 別ファイルで指定した〇〇(クラス名や変数)を使用可能

//ReactDOM.Render()でHTMLのIDのある場所にコンポーネントを挿入
ReactDOM.render(<App />, document.getElementById('root')); //public/index.htmlにある<div> id="root"</div>にAppコンポーネントを挿入する

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();
