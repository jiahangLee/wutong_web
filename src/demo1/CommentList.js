import React,{Component} from 'react'
import Comment from './Comment'
class CommentList extends Component{


    static defaultProps = {
        comments: []
    }

    handleDeleteComment (index) {
        if (this.props.onDeleteComment) {
            this.props.onDeleteComment(index)
        }
    }
    render(){
        // const comments = [
        //     {username: 'Jerry',content:'hello'},
        //     {username: 'Tomy',content:'world'},
        //     {username: 'lucy',content:'youCan'}
        // ]
        return(
        <div>{this.props.comments.map((comment,i)=>
            // return(
            //     <div key={i}>
            //         {comment.username}: {comment.content}
            //     </div>
            // )

                <Comment comment={comment} key={i}/>
            )}
       </div>
    )}
}

export default CommentList
