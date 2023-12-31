import { Outlet, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

function Videocard(props) {
    const vid_title = props.vid_title;
    const thumbnail_uri =  props.thumbnail_uri; 
    const logo_uri = props.logo_uri;
    const channel_name = props.channel_name;
    const channel_view = props.channel_view;
    const time = props.time;
    const id = props.id;  
    // const params = useParams();
    // const id = params.id;   
    // we have only prop , and we will pass it like above 
    // console.log(id);

    return(
        
        <div className="box">
                <div className="content">
                <Link to={"/videos/"
                +id}>
                    <img src={thumbnail_uri} alt=""></img>
                    </Link>
                    <div className="caption">
                        <img className="channel-logo" src={logo_uri} alt="user"></img>
                        <div className="text">
                            <div className="Title">{vid_title}</div>
                            <div className="channeldata">{channel_name}<br></br> {channel_view} Views • {time} ago</div>
                        </div>
                    </div>
                </div>
            </div>
            





    );


}

export default Videocard;