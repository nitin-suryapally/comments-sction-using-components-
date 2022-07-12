
import react from "react";
import reactDOM from "react-dom";
import { faker } from 'https://cdn.skypack.dev/@faker-js/faker';
import CommentDetails from "./CommentDetails";
import ApprovalProfile from "./ApproalProfile";

const App = () => {
    return (
        <div className="ui container comments">
            <h3 className="ui dividing header">Comments</h3>

            <ApprovalProfile>
                <CommentDetails
                    author={faker.name.findName()}
                    time="4:30 A.M"
                    content={faker.random.words(7)}
                />
            </ApprovalProfile >


            <ApprovalProfile>
                <CommentDetails
                    author={faker.name.findName()}
                    time="4:30 A.M"
                    content={faker.random.words(7)}
                />
            </ApprovalProfile>


            <ApprovalProfile>
                <CommentDetails
                    author={faker.name.findName()}
                    time="4:30 A.M"
                    content={faker.random.words(7)}
                />
            </ApprovalProfile>

            

        </div>
    );
};

reactDOM.render(<App />, document.querySelector("#root"));