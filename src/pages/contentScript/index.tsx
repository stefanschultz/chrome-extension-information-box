import React from "react";
import { createRoot } from "react-dom/client";
import InformationBox from "./components/InformationBox";
import { Configuration } from "./constants/Config";

const initApplication = () => {
    if (document.getElementById(Configuration.EXTENSION_ID)) {
        // hide/unhide react component
        const rootElement = document.getElementById(Configuration.EXTENSION_ID);

        if (rootElement.style.display === "none") {
            rootElement.style.display = "";
        } else {
            rootElement.style.display = "none";
        }
    } else {
        // create react component
        const rootElement = document.createElement("div");
        rootElement.id = Configuration.EXTENSION_ID;

        const body = document.querySelector("body");

        if (body) {
            body.prepend(rootElement);

            const container = document.getElementById(
                Configuration.EXTENSION_ID,
            );
            const root = createRoot(container!);
            root.render(
                <React.StrictMode>
                    <InformationBox />
                </React.StrictMode>,
            );
        }
    }
};

initApplication();
