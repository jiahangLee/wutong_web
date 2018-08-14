import React,{Component} from 'react'
import PropTypes from 'prop-types'
class CommentInput extends Component{
    static propTypes = {
        onSubmit: PropTypes.func
    }
    constructor(){
        super()
        this.state = {
            username: '',
            content:''
        }
    }
    componentDidMount () {
        this.textarea.focus()
    }
    componentWillMount () {
        this._loadUserName()
    }
    _saveUserName(username){
        localStorage.setItem('username',username)
    }
    _loadUserName(){
        const username = localStorage.getItem('username')
        console.log(username)
        if(username){
            this.setState({username})
        }
    }
    handleUserNameChange(event){
        this.setState({
            username:event.target.value
        })
    }
    handleCommentChange(event){
        this.setState({
            content:event.target.value
        })
    }
    handleSubmit(){
        if(this.props.onSubmit){
            const {username,content} = this.state
            this.props.onSubmit({username,content,createdTime:+new Date()})
        }
        this.setState({content: ''})
    }
    handleUserNameBlur(event){
        this._saveUserName(event.target.value)
    }
    render(){
        return(
            <div className= 'comment-input'>
                <div className='comment-field'>
                    <span className='comment-field-name'>用户名</span>
                    <div className='comment-field-input'>
                        <input value={this.state.username} onBlur={this.handleUserNameBlur.bind(this)} onChange={this.handleUserNameChange.bind(this)} type="text"/>
                    </div>
                </div>
                <div className='comment-field'>
                    <span className='comment-field-name'>评论内容</span>
                    <div className='comment-field-input'>
                        <textarea
                            value={this.state.content}
                            onChange={this.handleCommentChange.bind(this)}
                            ref={(textarea)=>this.textarea = textarea}
                            name="area" id="" cols="30" rows="10">
                        </textarea>
                    </div>
                </div>
                <div className='comment-field-button'>
                    <button onClick={this.handleSubmit.bind(this)}>
                        发布
                    </button>
                </div>
            </div>
        )
    }
}

export default CommentInput
