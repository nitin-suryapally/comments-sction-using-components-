
import react from "react";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';

const CommentDetails = (props) => {
    return (
        <div className="comment">
            <a className="avatar">
                <img alt="avtar" src={faker.image.avatar()} />
            </a>

            <div className="content">
                <a className="author">{props.author}</a>

                <div className="metadata">
                    <span className="date">{props.time}</span>
                </div>

                <div className="text">
                    {props.content}
                </div>

                <div className="actions">
                    <a className="reply">Reply</a>
                </div>
            </div>
        </div>
    );
};


export default CommentDetails;

