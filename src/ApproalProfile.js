
import react from "react";

const ApprovalProfile = (props) => {
    return (
        <div className="ui cards">
            <div className="card">
                <div className="content">
                    <div className="text">{props.children}
                    </div>
                </div>
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Reject</div>
                </div>
            </div>
        </div>
    );
};


export default ApprovalProfile;