import React from "react";
import { createRoot } from "react-dom/client";

import InformationBox from "./components/InformationBox";

const initApplication = () => {
    const ID = "application-extension-stansz-information-box";

    if (document.getElementById(ID)) {
        // hide/unhide react component
        const rootElement = document.getElementById(ID);

        if (rootElement.style.display === "none") {
            rootElement.style.display = "";
        } else {
            rootElement.style.display = "none";
        }
    } else {
        // create react component
        const rootElement = document.createElement("div");
        rootElement.id = ID;

        const body = document.querySelector("body");

        if (body) {
            body.prepend(rootElement);

            const container = document.getElementById(ID);
            console.log("container", container);
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
