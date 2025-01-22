export enum Selectors {
    JOB_CONTAINER = "ul .scaffold-layout__list-item",
    CLOSE_JOB_BUTTON = ".job-card-container__action.job-card-container__action-small.artdeco-button--2",
    APPLICATION_OUTLET = ".application-outlet",
    JOB_NAME = ".artdeco-entity-lockup__title strong",
    JOB_COMPANY = ".artdeco-entity-lockup__subtitle span",
    JOB_LOCATION = ".artdeco-entity-lockup__caption.ember-view span",
    JOB_LOCATION_ALT = ".artdeco-entity-lockup__content .artdeco-entity-lockup__subtitle span",
    CJF_PROCESS_BTN = "#cjf-btn-process",
    CJF_CLOSE_EXCLUDED_BTN = "#cjf-btn-close-excluded",
    CJF_CLOSE_ALL_BTN = "#cjf-btn-close-all",
    CJF_LOG_CONTAINER = "#cjf-log"
}

export enum Styles {
    APPLY_FILTERS_BUTTON = "position: absolute;z-index: 100;background-color: #fbff00;padding: 10px 20px;font-weight: 700;",
    CLOSE_JUNK_BUTTON = "position: absolute;z-index: 100;background-color: #fbff00;padding: 10px 20px;font-weight: 700; left: 200px;",
    CLOSE_ALL_BUTTON = "position: absolute;z-index: 100;background-color: #fbff00;padding: 10px 20px;font-weight: 700; left: 400px;",
    EXCLUDED_JOB = "height: 64px; overflow: hidden; opacity: 0.2;",
    UNPARSED_JOB = "background: #ffc3c3;"
}
