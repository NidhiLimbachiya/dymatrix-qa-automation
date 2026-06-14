# QA Automation Assignment

## Prerequisites

* Node.js installed
* Git installed

## Project Setup

Install dependencies:

```bash
npm install
```

## Run Tests in Cypress UI

```bash
npx cypress open
```

## Run Tests in Headless Mode

```bash
npx cypress run
```

## Test Coverage

### Login

* Validate successful login
* Validate invalid credentials
* Validate empty credentials error

### Sidebar Navigation

* Verify sidebar is hidden before login
* Verify sidebar is visible after login

### Transactions

* Verify transactions table is displayed
* Verify page indicator changes when navigating pages
* Verify transaction data changes across pages

### Favourite Fruit

* Move fruit to favourite container
* Verify source and destination containers update

### Settings

* Verify logo toggle functionality
* Verify logo preference persists after refresh
* Verify logo visibility across application pages

### Logout

* Verify session is cleared after logout
* Verify user is redirected to login page
* Verify protected navigation is no longer visible
