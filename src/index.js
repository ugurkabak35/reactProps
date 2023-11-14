import React from "react";
import ReactDOM from "react-dom";
import SingleComment from './SingleComment';
import profile1 from "./image/person1.jpg";
import profile2 from "./image/person2.jpg";
import profile3 from "./image/person3.jpg";
import UserCard from './UserCard';
const App = () => {
    return(
        <div className="ui comments">
            <UserCard>
                <div>
                    Hello my name is Sarah, I live in Istanbul
                </div>
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Alex" 
                    date="Today 3:45 PM"
                    text="It is amazing"
                    picture={profile1}
                />
            </UserCard>
            <UserCard>
                <SingleComment 
                    name="Jack" 
                    date="Today 4:30 PM"
                    text="Great job"
                    picture={profile2}
                />
            </UserCard>
            <SingleComment 
                name="Sarah" 
                date="Today 6:15 PM"
                text="Thanks"
                picture={profile3}
            />        
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
)