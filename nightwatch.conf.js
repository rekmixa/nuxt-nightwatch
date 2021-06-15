const chromePath = '/usr/bin/google-chrome-unstable'
const Services = {}
loadServices()

module.exports = {
  src_folders: [],
  page_objects_path: '',
  custom_commands_path:  '',
  custom_assertions_path: '',
  globals_path : '',
  webdriver: {},

  test_settings: {
    default: {
      disable_error_log: false,
      launch_url: 'https://nightwatchjs.org',

      screenshots: {
        enabled: false,
        path: 'screens',
        on_failure: true
      },

      desiredCapabilities: {
        browserName : 'chrome'
      },

      webdriver: {
        start_process: true,
        server_path: chromePath
      }
    },

    chrome: {
      desiredCapabilities : {
        browserName : 'chrome',
        'goog:chromeOptions' : {
          args: [
            //'--no-sandbox',
            //'--ignore-certificate-errors',
            //'--allow-insecure-localhost',
            //'--headless'
          ]
        }
      },

      webdriver: {
        start_process: true,
        port: 9515,
        server_path: chromePath,
        cli_args: [
          // '--verbose'
        ]
      }
    },
  }
}

function loadServices() {
  try {
    Services.chromedriver = require('chromedriver')
  } catch (err) {}
}
