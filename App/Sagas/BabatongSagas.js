import { call, put } from 'redux-saga/effects'
import { path } from 'ramda'
import DatabaseActions from '../Redux/DatabaseRedux'
import BabatongActions from '../Redux/BabatongRedux'

import I18n from '../I18n'

export function * getCandidates (api, action) {
  const response = yield call(api.getGuide)

  if (response.ok) {
    const candidates = JSON.parse(response.data.match(/data.*?=.*?(\[[\s\S]*?\])/)[1]);
    yield put(DatabaseActions.listSuccess(candidates))
  } else {
    yield put(DatabaseActions.listFailure())
  }
}

export function * getBabatong (api, action) {
  const { line } = action
  const response1 = yield call(api.getDeparture, line)
  const response2 = yield call(api.getStations, line)
  const response3 = yield call(api.getGps, line)
  console.log(response1, response2, response3)
  if (response1.ok && response2.ok && response3.ok) {
    const departure = []
    const stations = [[],[]]
    const gps = [[],[]]
    let error = false
    if(response1.data == undefined || response1.data == null || response1.data.length == 0 || response1.data.data.length == 0) {
      error = true
    } else {
      if(response1.data.data[0]) {
        departure.push({
          estimatedInterval: response1.data.data[0].yjjg || "",
          launched: {
            name: response1.data.data[0].VEHICLENUMBERING || "",
            time: response1.data.data[0].PLANTIME || ""
          }
        })
      }
      if(response1.data.data[1]) {
        departure.push({
          estimatedInterval: response1.data.data[1].yjjg || "",
          launched: {
            name: response1.data.data[1].VEHICLENUMBERING || "",
            time: response1.data.data[1].PLANTIME || ""
          }
        })
      } else {
        departure.push({
          estimatedInterval: "0",
          launched: {
            name: "",
            time: ""
          }
        })
      }
    }
    if(response2.data == undefined || response2.data == null || response2.data.length == 0 || response2.data.data.length == 0) {
      error = true
    } else {
      for(let i = 0; i < response2.data.data.length; i++) {
        if(response2.data.data[i]["Downstream"] == true || response2.data.data[i]["Downstream"] == "true") {
          stations[0].push({
            name: response2.data.data[i].LevelName,
            to: response2.data.data[i].ToDirection,
          })
        }
        if(response2.data.data[i]["Upstream"] == true || response2.data.data[i]["Upstream"] == "true") {
          stations[1].push({
            name: response2.data.data[i].LevelName,
            to: response2.data.data[i].ToDirection,
          })
        }
      }
    }
    if(response3.data == undefined || response3.data == null || response3.data.length == 0 || response3.data.data.length == 0) {
      error = true
    } else {
      for(let i = 0; i < response3.data.data.length; i++) {
        if(response3.data.data[i].todir != undefined) {
          let next = (response3.data.data[i].nextlevel == undefined) ? 0 : (response3.data.data[i].nextlevel - 1)
          if(gps[response3.data.data[i].todir][next] == undefined) gps[response3.data.data[i].todir][next] = []
          gps[response3.data.data[i].todir][next].push({
            codename: response3.data.data[i].vnumber,
            license: response3.data.data[i].vid,
            speed: response3.data.data[i].Speed,
            status: response3.data.data[i].RunStatus
          })
        }
      }
    }
    if(!error) {
      yield put(BabatongActions.babatongSuccess(departure, stations, gps))
    } else {
      yield put(BabatongActions.babatongFailure(I18n.t("error.data")))
    }
  } else {
    yield put(BabatongActions.babatongFailure(I18n.t("error.connection")))
  }
}
