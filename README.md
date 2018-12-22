# DoB_recorder_reminder
- new name can be KeepinTouch or something like this

## design note
- user local database 
    - no internet accessing
- in the main page
    - preview the coming birthdays of records in a calendar
    - also can preview in a simplified way (coming birthdays in one week)
    - nav bar on the left side
- nav bar
    - main page
    - add records
    - manage records (query by name, date, delete and update info)
    - introduction page & error reporting

## implementation
- Vue for frontend
- Electron for desktop
- Node for background
- NeDB for database

## usage
- serve with hot reload at localhost:9080  
`npm run dev`
- build electron application for production  
`npm run build`
- run unit & end-to-end tests  
`npm test`
- lint all JS/Vue component files in `src/`  
`npm run lint`

