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

unblockJob(org, pipeline, build, job)

getJobLog(org, pipeline, build, job)

getJobEnv(org, pipeline, build, job)

#### Agents

listAgents(org)

getAgent(org, agent)

stopAgent(org, agent)

#### Artifacts

listBuildArtifacts(org, pipeline, build)

getJobArtifacts(org, pipeline, build, job)

getArtifact(org, pipeline, build, artifact)

downloadArtifact(org, pipeline, build, artifact)

#### Emojis

listEmojis(org)

### License
MIT
