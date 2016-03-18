# buildkite-node
A buildkite nodejs sdk

### Install

```sh
$ npm i buildkite-node --save
```

### Usage

Please check [buidkite api documnetaion](https://buildkite.com/docs/api) for more information

```JavaScript
var Buildkite = require('buildkite-node')

var buildkite = new Buildkite('api-token')
var buildkite = new Buildkite({
  accessToken: 'api-token',
  apiUrl: 'https://api.buildkite.com/v2/' // default
})

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
```

### APIs

#### Overview

ping()

user()

#### Organizations

listOrgs()

getOrg()

#### Pipelines

listPipelines()

getPipeline()

createPipeline()

deletePipelline()

#### Builds

listBuilds()

listOrgBuilds()

listPipelineBuilds()

getBuild()

createBuild()

cancelBuild()

rebuildBuild()

#### Jobs

unblockJob()

getJobLog()

#### Agents

listAgents()

getAgent()

stopAgent()

#### Artifacts

listArtifacts()

getJobArtifacts()

getBuildArtifacts()

getArtifacts()

downloadArtifacts()

#### Emojis

listEmojis()

### License
MIT
