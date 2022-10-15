import React from "react";

function Video() {
  return (
    <div className="bg-black">
      <video
        autoplay="false"
        controls="true"
        poster="/static/media/video.6da95078.png"
        height="600"
        width='100%'
        src="https://povoneww.s3.ap-southeast-1.amazonaws.com/cs.mp4"
        __idm_id__="16385"
      ></video>
    </div>
  );
}

export default Video;
