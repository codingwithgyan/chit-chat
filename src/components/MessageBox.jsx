import { UserMessageLeft } from "./UserMessageLeft";
import { UserMessageRight } from "./UserMessageRight";

export function MessageBox()
{
    return <div className="message_box">
                <UserMessageLeft message="how are you?" />
                <UserMessageRight message="I am fine. what about you tell me?" />
                <UserMessageLeft message="how are you?" />
                <UserMessageRight message="I am fine" />
                <UserMessageLeft message="how are you?" />
                <UserMessageRight message="I am fine" />
                <UserMessageLeft message="how are you?" />
                <UserMessageRight message="I am fine" />
                <UserMessageLeft message="how are you?" />
                <UserMessageRight message="I am fine" />
                <UserMessageLeft message="how are you?" />
                <UserMessageRight message="I am fine" />
    </div>
}