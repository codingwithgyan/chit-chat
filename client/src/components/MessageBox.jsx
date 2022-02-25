import { UserMessageLeft } from "./UserMessageLeft";
import { UserMessageRight } from "./UserMessageRight";

export function MessageBox({messageList,name})
{
    return <div className="message_box">
                {
                    messageList!==undefined && messageList.length>0?messageList.map((item)=>{
                          return item.name==name?<UserMessageRight message={item.message} />:<UserMessageLeft message={item.message} />
                    })
                    :
                    <p></p>
                }
               
    </div>
}