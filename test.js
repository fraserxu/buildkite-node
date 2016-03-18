var Buildkite = require('./')

var buildkite = new Buildkite('xxxxxx')

// console.log('buildkite', buildkite)

buildkite.ping().then(function (res) {
  console.log('ping', res.body)
}).catch(function (err) {
  console.log('err', err)
})

buildkite.user().then(function (res) {
  console.log('user', res.body)
}).catch(function (err) {
  console.log('err', err)
})

buildkite.listOrgs().then(function (res) {
  console.log('list orgs', res.body)
}).catch(function (err) {
  console.log('err', err)
})

buildkite.listPipelines('envato-marketplaces').then(function (res) {
  console.log('list pipelines', res.body)
}).catch(function (err) {
  console.log('err', err)
})
