import React, { Component } from 'react'
import './css/form.css'

class Form extends Component{
    render(){
        return(//<form onsubmit="イベント発生時の処理"><form/>
            
            //入力されるページのFormを書いている。
            //onsubmit関数により、送信ボタンを押すと入力された内容を受け取り発火する。

            //propsとして受け取ったhandleSubmitをonSubmit時に発動
            <div className="form">
                <form onSubmit={this.props.handleSubmit}> 
                    <input name="title" type="text" placeholder="(placeholder)タイトル ＊必須" defaultValue="(defaultValue)reactの勉強" /><br/>
                    <textarea name="desc" placeholder="(placeholder)説明を入力" defaultValue="(defaultValue)todoアプリを作っています"></textarea><br/>
                    <button type="submit">todoを作成</button>
                </form>
            </div>
        ) //defaultValueはデバッグのとき入力をしなくてもいいようにするため
    }
}

export default Form