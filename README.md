# Welcome

This extension adds a widget to the LinkedIn Jobs search page. The widget allows you to highlight and automatically close job search results that match the criteria described in the `src/constants.ts file`. This enables you to exclude job postings based on a specific company name, role, location, or a combination of these fields.

Please note that before using the extension, you must manually scroll to the bottom of the page. Currently, the extension cannot process search results that have not yet been rendered by the browser.

https://www.linkedin.com/jobs/search/

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