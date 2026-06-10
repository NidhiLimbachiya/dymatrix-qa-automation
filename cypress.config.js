const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://qa-case-study-env-e8acgpfpgzegf2dv.westeurope-01.azurewebsites.net/#/login"
  }
});
