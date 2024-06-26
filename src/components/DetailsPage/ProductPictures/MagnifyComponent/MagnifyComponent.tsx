"use client"
import Image from "next/image";
import { useState } from "react";

export default function ImageMagnifier({
    src = "https://www.newbeauty.com/wp-content/uploads/2021/04/extensions.png",
    // width = "735",
    // height = "735",
    magnifierHeight = 735,
    magnifieWidth = 735,
    zoomLevel = 2
}: {
    src: string;
    // width?: string;
    // height?: string;
    magnifierHeight?: number;
    magnifieWidth?: number;
    zoomLevel?: number;
}) {
    const [[x, y], setXY] = useState([0, 0]);
    const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
    const [showMagnifier, setShowMagnifier] = useState(false);
    return (
        <>
            <div
                className='min-w-[765px] min-h-[765px]'
                style={{
                    position: "relative",
                    height: 765,
                    width: 765
                }}
            // className="flex"
            >
                <Image
                    src={src}
                    width={765}
                    height={765}
                    style={{ height: 765, width: 765 }}
                    onMouseEnter={(e) => {
                        // update image size and turn-on magnifier
                        const elem = e.currentTarget;
                        const { width, height } = elem.getBoundingClientRect();
                        setSize([width, height]);
                        setShowMagnifier(true);
                    }}
                    onMouseMove={(e) => {
                        // update cursor position
                        const elem = e.currentTarget;
                        const { top, left } = elem.getBoundingClientRect();

                        // calculate cursor position on the image
                        const x = e.pageX - left - window.pageXOffset;
                        const y = e.pageY - top - window.pageYOffset;
                        setXY([x, y]);
                    }}
                    onMouseLeave={() => {
                        // close magnifier
                        setShowMagnifier(false);
                    }}
                    alt={"img"}
                />
                {/* <div
                    className="absolute top-0 -right-28 w-[400px] h-[400px] z-[99999]"
                    style={{
                        display: showMagnifier ? "" : "none",
                        // position: "absolute",

                        // prevent magnifier blocks the mousemove event of img
                        pointerEvents: "none",
                        // set size of magnifier
                        // height: `${magnifierHeight}px`,
                        // width: `${magnifieWidth}px`,

                        // move element center to cursor pos
                        // top: `${y - magnifierHeight / 2}px`,
                        // left: `${x - magnifieWidth / 2}px`,
                        opacity: "1", // reduce opacity so you can verify position
                        border: "1px solid lightgray",
                        backgroundColor: "white",
                        backgroundImage: `url('${src}')`,
                        backgroundRepeat: "no-repeat",

                        //calculate zoomed image size
                        backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                            }px`,
                        // zIndex: 99999,

                        //calculate position of zoomed image.
                        backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                        backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                    }}
                ></div> */}
            </div>
            <div
                className="absolute top-0 -right-28 w-[400px] h-[400px] z-[99999] overflow-visible"
                style={{
                    display: showMagnifier ? "" : "none",
                    // position: "absolute",

                    // prevent magnifier blocks the mousemove event of img
                    pointerEvents: "none",
                    // set size of magnifier
                    // height: `${magnifierHeight}px`,
                    // width: `${magnifieWidth}px`,

                    // move element center to cursor pos
                    // top: `${y - magnifierHeight / 2}px`,
                    // left: `${x - magnifieWidth / 2}px`,
                    opacity: "1", // reduce opacity so you can verify position
                    border: "1px solid lightgray",
                    backgroundColor: "white",
                    backgroundImage: `url('${src}')`,
                    backgroundRepeat: "no-repeat",

                    //calculate zoomed image size
                    backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel
                        }px`,
                    // zIndex: 99999,

                    //calculate position of zoomed image.
                    backgroundPositionX: `${-x * zoomLevel + magnifieWidth / 2}px`,
                    backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`
                }}
            ></div>
        </>
    );
}