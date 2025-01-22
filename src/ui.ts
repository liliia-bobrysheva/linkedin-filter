import { Selectors } from "./constants";

const TEMPLATE = `
    <style>
        #cjf-filter {
            position: absolute;
            z-index: 100;
            background-color: #feffc2;
            padding: 24px;
            font-weight: 700;
            box-shadow: 2px 2px black;
            top: 10px;
            left: 10px;
            border: 1px solid black;
        }
        .cjf-buttons button {
            padding: 12px 24px;
            border-radius: 12px;
            font-size: 16px;
            font-weight: bold;
            background-color: #6e7999;
            color: #feffc2;
            margin-right: 16px;
            text-shadow: 2px 2px #000000;
            box-shadow: 2px 2px black;
        }
        .cjf-buttons button:hover {
            opacity: 0.8;
        }
        #cjf-btn-process {
            background-color: #008a43;
        }
        #cjf-btn-close-excluded {
            background-color: #cc8200;
        }
        #cjf-btn-close-all {
            background-color: #a40005;
        }
        #cjf-log {
            border: 1px solid black;
            border-radius: 12px;
            padding: 8px;
            margin-top: 16px;
            max-height: 150px;
            overflow: auto;
        }
        #cjf-log:empty {
            display: none;
        }
        .cjf-message { color: #008a43; }
        .cjf-error { color: #a40005; }
    </style>
    <div id="cjf-filter">
        <div class="cjf-buttons">
            <button id="cjf-btn-process">Process Jobs</button>
            <button id="cjf-btn-close-excluded">Close Excluded Jobs</button>
            <button id="cjf-btn-close-all">Close All jobs</button>
        </div>
        
        <div id="cjf-log"></div>
    </div>
`;

export class UI {
    widget: HTMLDivElement;

    processBtn: HTMLButtonElement | null;
    closeExcludedBtn: HTMLButtonElement | null;
    closeAllBtn: HTMLButtonElement | null;

    logContainer: HTMLDivElement | null;

    constructor(document: Document) {
        const widget = document.createElement("div");
        widget.innerHTML = TEMPLATE;

        this.widget = widget;
        this.processBtn = this.widget.querySelector(Selectors.CJF_PROCESS_BTN);
        this.closeExcludedBtn = this.widget.querySelector(Selectors.CJF_CLOSE_EXCLUDED_BTN);
        this.closeAllBtn = this.widget.querySelector(Selectors.CJF_CLOSE_ALL_BTN);
        this.logContainer = this.widget.querySelector(Selectors.CJF_LOG_CONTAINER);

        if (this.processBtn === null || this.closeExcludedBtn === null || this.closeAllBtn === null || this.logContainer === null) {
            this.addMessage("ui has not been instantiated correctly");
        }

        const appOutlet = document.querySelector(Selectors.APPLICATION_OUTLET);
        document.body.insertBefore(widget, appOutlet);
    }

    addMessage(message: string, error = false): void {
        // TODO sanitize message
        const conditionalClass = error ? "cjf-error" : "";
        const messageHTML = `<div class=\"cjf-message ${conditionalClass}\">${message}</div>`;
        this.logContainer?.insertAdjacentHTML('beforeend', messageHTML);
    }

    getJobContainers(): Element[] {
        return [...document.querySelectorAll(Selectors.JOB_CONTAINER)];
    }
}