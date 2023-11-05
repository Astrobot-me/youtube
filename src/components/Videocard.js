function Videocard(props) {
    const vid_title = props.vid_title;
    const thumbnail_uri =  props.thumbnail_uri; 
    const logo_uri = props.logo_uri;
    const channel_name = props.channel_name;
    const channel_view = props.channel_view;
    const time = props.time;      
    // we have only prop , and we will pass it like above 


    return(

        <div className="box">
                <div className="content">
                    <img src={thumbnail_uri} alt=""></img>
                    <div className="caption">
                        <img className="channel-logo" src={logo_uri} alt="user"></img>
                        <div className="text">
                            <div className="Title">{vid_title}</div>
                            <div className="channeldata"><i>{channel_name}</i><br></br> {channel_view} • {time} ago</div>
                        </div>
                    </div>
                </div>
            </div>





    );


}

export default Videocard;