import video1 from "./videos/video-1.mp4";
import { forwardRef } from "react";
import { useImperativeHandle, useRef } from "react";

function Video(props, ref) {
    const chilRef = useRef();
    useImperativeHandle(ref, () => ({
        play() {
            chilRef.current.play();
        },
        pause() {
            chilRef.current.pause();
        },
        // Ở đây phương thức và các đối tượng được gán cho ref(được truyền từ component cha)
        // Khi ta gọi 
    }));
    return <video ref={chilRef} src={video1} width={280} />;
}

export default forwardRef(Video);
