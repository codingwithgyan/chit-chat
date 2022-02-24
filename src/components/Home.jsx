import { Navbar } from './Navbar';
import { RoomBox } from './RoomBox';
import { MemberBox } from './MemberBox';
import { MessageBox } from './MessageBox';
export function Home()
{
    return <div>
                <Navbar/>
                <RoomBox/>
                <MessageBox/>
                <MemberBox/>
    </div>
}