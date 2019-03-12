import { takeLatest, all } from 'redux-saga/effects'
import BustongAPI from '../Services/BustongApi'
import DebugConfig from '../Config/DebugConfig'

/* ------------- Types ------------- */

import { StartupTypes } from '../Redux/StartupRedux'
import { DatabaseTypes } from '../Redux/DatabaseRedux'
import { BabatongTypes } from '../Redux/BabatongRedux'

/* ------------- Sagas ------------- */

import { startup } from './StartupSagas'
import { getCandidates, getBabatong } from './BabatongSagas'

/* ------------- API ------------- */

// The API we use is only used from Sagas, so we create it here and pass along
// to the sagas which need it.
// const api = DebugConfig.useFixtures ? FixtureAPI : API.create()

/* ------------- Connect Types To Sagas ------------- */

export default function * root () {
  yield all([
    // some sagas only receive an action
    //takeLatest(StartupTypes.STARTUP, startup),

    // some sagas receive extra parameters in addition to an action
    //takeLatest(GithubTypes.USER_REQUEST, getUserAvatar, api)
    takeLatest(DatabaseTypes.LIST_REQUEST, getCandidates, BustongAPI.create()),
    takeLatest(BabatongTypes.BABATONG_REQUEST, getBabatong, BustongAPI.create())
  ])
}
