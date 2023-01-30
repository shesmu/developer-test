# Swerve Airlines Schedule App

## Getting Started

Requirements:

- Node 14
- npm v6

1. Install dependencies using `npm install`
2. Start the dev server for the API and app with `npm run dev`, you should see the following output:

```sh
npm run dev

> schedule@1.0.0 dev
> concurrently 'npm run app' 'npm run api'

[0]
[0] > schedule@1.0.0 app
[0] > parcel src/app.html
[0]
[1]
[1] > schedule@1.0.0 api
[1] > ts-node-dev src/api.ts
[1]
[1] [INFO] 17:01:41 ts-node-dev ver. 1.1.8 (using ts-node ver. 9.1.1, typescript ver. 4.3.5)
[1] API listening on http://localhost:3000
[0] ℹ️ Server running at http://localhost:1234
[0] Building...
[0] Packaging & Optimizing...
[0] ✨ Built in 2.82s
```

3. the API server is available at [http://localhost:3000](http://localhost:3000) and the app server is available at [http://localhost:1234](http://localhost:1234)

## Scripts

- `npm run dev` or `npm start` will start both the API and app
  - `npm run app` runs the React app ([src/app.html](./src/app.html), [src/app.tsx](./src/app.html)) using Parcel
  - `npm run api` run the Express/TypeScript API ([src/api.ts](./src/api.ts)) with `ts-node-dev`
- `npm run test` will run tests using Jest

## Project structure

```
.
├── README.md
├── jest.config.js
├── package-lock.json
├── package.json
├── src
│   ├── api.test.ts
│   ├── api.ts
│   ├── app.html
│   ├── app.tsx
│   ├── components
│   │   ├── Schedule.test.tsx
│   │   └── Schedule.tsx
│   └── data.js
└── tsconfig.json
```

## Test Brief

### Expected result
The goal for this test is to write a simple app that shows **all** of Swerve Airline's scheduled flight(s) for a **specific date** based on the data in `src/data.js`. 

### Time
We value your time and for that reason we think that you shouldn't spend longer than a few hours to a day writing this test. Of course, you could spend more or less time on it depending on completeness/tests/etc.

### Implementation

The project is set up for TypeScript as we like TypeScript. However, feel free to use plain old JavaScript should you prefer.
It is up to you to decide how to implement the app. For example, you could serve the data in `src/data.js` from a REST service, or you could decide to use GraphQL. 
Equally, simply importing the data into the frontend app would be acceptable.

### Evaluation criteria 
The submitted solution will be evaluated based on functionality, test coverage, and code quality. We expect very minimal styling (although it'd be good to get a bit of an insight to your React chops), and clean and readable code. 
Given the time constraint we're happy to review partial solutions, as long as you're able to explain what you would have done if you'd had more time.
The next stage of the interview process will include a discussion of your solution and potentially a pair programming session to expand on it.




  
