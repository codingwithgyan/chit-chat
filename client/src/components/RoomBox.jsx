import { MemberCard } from "./MemberCard";

export function RoomBox()
{
    return <div className="room_box">
               
                <MemberCard pic_name="Alpha"/>
                <MemberCard pic_name="Bravo"/>
                <MemberCard pic_name="Charlie"/>
                <MemberCard pic_name="Delta"/>
    </div>
}