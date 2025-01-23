# Welcome

This extension adds a widget to the LinkedIn Jobs search page https://www.linkedin.com/jobs/search/. The widget allows you to highlight and automatically close job search results that match the criteria described in the `src/constants.ts file`. This enables you to exclude job postings based on a specific company name, role, location, or a combination of these fields.

Please note that before using the extension, you must manually scroll to the bottom of the page. Currently, the extension cannot process search results that have not yet been rendered by the browser.

![image](https://github.com/user-attachments/assets/6e7016cd-f050-4c97-a48d-a7f3f1c7e3db)

**Process** button changes opacity and size all the results that match one or more criteria described in `src/constants.ts`:
![image](https://github.com/user-attachments/assets/940aedcc-f03b-4580-8b06-964d72a3ee06)

**Close Excluded Jobs** button closes all results that were highlighted after clicking **Process** button
**Close All Jobs** button closes all jobs on the current page

If a role is highlighted with red like in picture below, it indicates that you didn't scroll to the bottom of the page before clicking **Process** button and the extension weren't able to process all the search results. It is recommended to reload page and scroll to the bottom of the search results before clicking **Process** button.
![image](https://github.com/user-attachments/assets/d4e127f0-05e9-4272-a635-ccbcc03de6fc)


## Prerequisites for build
- Node.js v20+
- NPM v10+

## Installation
Run the following command to install dependencies:
>npm install

## Usage
- Configure your filter preferences in `src/constants.ts`.
- Build the extension by running `npm run build`
- Open the Chrome extensions page [chrome://extensions/](chrome://extensions/) and load your custom extension from the `dist` folder (loading custom extension requires Chrome Developer mode enabled)
> **Note:** The extension needs to be rebuilt and reloaded in chrome each time when changes are made to `src/constants.ts`
