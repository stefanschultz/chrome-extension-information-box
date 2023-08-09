import React, { useEffect, useState } from "react";

const ScreenTool = () => {
    const [screenSize, setScreenSize] = useState({ width: 0, height: 0 });
    const [screenOrientation, setScreenOrientation] = useState("");
    const [pixelDensity, setPixelDensity] = useState(0);
    const [colorDepth, setColorDepth] = useState(0);
    const [screenResolution, setScreenResolution] = useState({
        width: 0,
        height: 0,
    });
    const [availableScreenSpace, setAvailableScreenSpace] = useState({
        width: 0,
        height: 0,
    });
    const [wideColorGamut, setWideColorGamut] = useState(false);

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        // Call handleResize once to set initial screen size
        handleResize();

        // Remove event listener on cleanup
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        setScreenOrientation(window.screen.orientation.type);
        setPixelDensity(window.devicePixelRatio);
        setColorDepth(window.screen.colorDepth);
        setScreenResolution({
            width: window.screen.width,
            height: window.screen.height,
        });
        setAvailableScreenSpace({
            width: window.screen.availWidth,
            height: window.screen.availHeight,
        });
        setWideColorGamut(window.matchMedia("(color-gamut: wide)").matches);
    }, []);

    const handleResize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    return (
        <div className="panel-container-as-grid-group-column">
            <div className="panel-container-as-grid-2x">
                <div>{`Screen Width: ` + screenSize.width} px</div>
                <div>{`Screen Height: ` + screenSize.height} px</div>
            </div>
            <div className="panel-container-as-grid-2x">
                <div>{`Pixel Density: ` + pixelDensity}</div>
                <div>{`Color Depth: ` + colorDepth}</div>
            </div>
            <div className="panel-container-as-grid-1x">
                <div>{`Screen Orientation: ` + screenOrientation}</div>
            </div>
            <div className="panel-container-as-grid-1x">
                <div>
                    {`Screen Resolution: ` +
                        screenResolution.width +
                        ` x ` +
                        screenResolution.height +
                        ` px`}
                </div>
            </div>
            <div className="panel-container-as-grid-1x">
                <div>
                    {`Available Screen Space: ` +
                        availableScreenSpace.width +
                        ` x ` +
                        availableScreenSpace.height +
                        ` px`}
                </div>
            </div>
            <div className="panel-container-as-grid-1x">
                <div>
                    {`Wide Color Gamut: ` + (wideColorGamut ? "Yes" : "No")}
                </div>
            </div>
        </div>
    );
};

export default ScreenTool;
