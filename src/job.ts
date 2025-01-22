import { Selectors, Styles } from "./constants";

export class Job {
    name: string;
    company: string;
    location: string;
    element: Element;
    _closeButton: HTMLElement | null;

    constructor(element: Element) {
        this.name = element.querySelector(Selectors.JOB_NAME)?.textContent?.trim() || "";
        this.company = element.querySelector(Selectors.JOB_COMPANY)?.textContent?.trim() || "";
        this.location = element.querySelector(Selectors.JOB_LOCATION)?.textContent?.trim() || element.querySelector(Selectors.JOB_LOCATION_ALT)?.textContent?.trim() || "";
        this.element = element;
        this._closeButton = element.querySelector(Selectors.CLOSE_JOB_BUTTON);

        // TODO display a message clearly informing that some of the jobs has not been parsed correctly

        this.checkParsingErrors();
    }

    hide(): void {
        this.element.setAttribute("style", Styles.EXCLUDED_JOB);
    }

    dismiss(): void {
        // todo show error if close button is null
        if (!this.isDismissed()) {
            this._closeButton?.click();
        } else {
            console.log("job already dismissed");
        }
    }

    checkParsingErrors(): void {
        if (this.name === "" || this.company === "" || this.location === "" || this._closeButton === null) {
            console.log(this.name);
            console.log(this.company);
            console.log(this.location);
            console.log(this._closeButton);
            this.element.setAttribute("style", Styles.UNPARSED_JOB);
        }
    }

    isDismissed(): boolean {
        const buttonLabel = (this.element.querySelector(Selectors.CLOSE_JOB_BUTTON)?.ariaLabel?.trim() || "").slice(0, 7);

        return buttonLabel !== "Dismiss";
    }
}