<!-- @format -->

[![codecov](https://codecov.io/gh/fac20/Week12-DOPE/branch/master/graph/badge.svg?token=25TXY3QH4Q)](undefined)

[![fac20](https://circleci.com/gh/fac20/Week12-DOPE.svg?style=svg)](https://app.circleci.com/pipelines/github/fac20/Week12-DOPE)

## Local Setup

- Clone
- Run ` npm i`
- `npm start` to start the live server and view our app locally.

## Team:

- My Hoa - DevOps
- Jihyun - QA
- Terrence - UX Lead
- Shaya - Scrum Facilitator

## Problem

#### Problem Statement

It can be difficult to keep track of your prescribed medication, especially if you are taking many different types a day (e.g 5+ pills).

Its easy to lose track of what does what, what it looks like and when you are supposed to take it even if they are in labeled containers.

Those with more complex medication plans are given dosette boxes by their pharmacists to help ensure they are taking the pills correctly.

This definitely helps people take the right medication at the right time but it does not explain what each medication actually does.

#### Who are the stakeholders?

- People taking medication themselves
- Carers who are looking after those on more complex prescriptions

#### What is currently being done to solve this problem?

There are currently many apps out there that let you set reminders to take pills and can give you overviews of the week, and month etc.

Most let you type in whatever you want, only a few actually auto-complete medication names but they were all US based so names of medication are using the US brand names instead of the generic names we are used to here in the UK.

We could not find any that actually held any information on the use of the drug or visual descriptions of them which we think are vital in helping people be more aware of their own prescriptions.

## Our Initial Vision

We wanted to create a platform that lets people organise and track all their medications with reminders along with a short description of what it does and what it looks like.

This would help people take ownership of their medications more so they are better informed of what they are taking and are less likely to forget or make mistakes when handling them.

## Our 2-Week Sprint Results

- Developed with user research and user testing feedback
- Allows users to add medication information to a database
- Pulls all medication data from the database and generates a daily
  view with time points
- Fully functional login and sign up authentication
- Search page that fetches medication information from a NHS API

### Tech Stack

- React
  - Switch, Link, Router, RTL
- npm packages: Husky, Commitizen,
- Styling: Styled-components, Custom fonts, CSS
- Deployment: Firebase
- CI: CircleCI
- Testing: Jest, CodeCov & Cypress
- Issue Management: Jira
- Other tools: Firebase Auth, Firestore DB, NHS Api

<!-- ### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/). -->
