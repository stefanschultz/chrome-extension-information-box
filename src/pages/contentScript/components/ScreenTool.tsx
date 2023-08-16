import React, { useEffect, useState } from "react";
import {
    PanelContainerAsGrid1x,
    PanelContainerAsGrid2x,
    PanelContainerAsGridGroupColumn,
    PanelItem,
} from "../styles/Panels.styled";

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
        <PanelContainerAsGridGroupColumn>
            <PanelContainerAsGrid2x>
                <PanelItem>{`Screen Width: ` + screenSize.width} px</PanelItem>
                <PanelItem>
                    {`Screen Height: ` + screenSize.height} px
                </PanelItem>
            </PanelContainerAsGrid2x>
            <PanelContainerAsGrid2x>
                <PanelItem>{`Pixel Density: ` + pixelDensity}</PanelItem>
                <PanelItem>{`Color Depth: ` + colorDepth}</PanelItem>
            </PanelContainerAsGrid2x>
            <PanelContainerAsGrid1x>
                <PanelItem>
                    {`Screen Orientation: ` + screenOrientation}
                </PanelItem>
            </PanelContainerAsGrid1x>
            <PanelContainerAsGrid1x>
                <PanelItem>
                    {`Screen Resolution: ` +
                        screenResolution.width +
                        ` x ` +
                        screenResolution.height +
                        ` px`}
                </PanelItem>
            </PanelContainerAsGrid1x>
            <PanelContainerAsGrid1x>
                <PanelItem>
                    {`Available Screen Space: ` +
                        availableScreenSpace.width +
                        ` x ` +
                        availableScreenSpace.height +
                        ` px`}
                </PanelItem>
            </PanelContainerAsGrid1x>
            <PanelContainerAsGrid1x>
                <PanelItem>
                    {`Wide Color Gamut: ` + (wideColorGamut ? "Yes" : "No")}
                </PanelItem>
            </PanelContainerAsGrid1x>
        </PanelContainerAsGridGroupColumn>
    );
};

export default ScreenTool;
