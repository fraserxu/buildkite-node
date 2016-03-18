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

// var buildkite = new Buildkite('api-token')
var buildkite = new Buildkite({
  accessToken: 'api-token',
  apiUrl: 'https://api.buildkite.com/v2/' // default
})

buildkite.ping().then(function (res) {
  console.log('ping', res.body)
}).catch(function (err) {
  console.log('err', err)
})
```

### APIs

To create a new instance `var buildkite = new Buildkite(opts)`

* `opts` - String accessToken
* `opts` - Object
  - accessToken
  - apiUrl, default to 'https://api.buildkite.com/v2/'

#### Overview

ping()

user()

#### Organizations

listOrgs()

getOrg(org)

#### Pipelines

listPipelines(org)

getPipeline(org, pipeline)

createPipeline()

deletePipelline()

#### Builds

listBuilds()

listOrgBuilds(org)

listPipelineBuilds(org, pipeline)

getBuild(org, pipeline, build)

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

listEmojis(org)

### License
MIT
