import logo from "../avatar.png";
export function MemberCard({pic_name})
{
    return <div className="member_card">
            <div>
                <img src={logo} className="member_pic" />
            </div>
            <div><a className="member_name">{pic_name}</a></div>
           </div>
}