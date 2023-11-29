export function getConfig() {
  return {
    local: {
      BASE_API: 'http://local.example.com',
    },
    dev: {
      BASE_API: 'http://dev.example.com',
    },
    test: {
      BASE_API: 'http://test.example.com',
    },
    prod: {
      BASE_API: 'http://prod.example.com',
    },
  }[process.env.APP_ENV];
}
