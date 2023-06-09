const _ = require('lodash')
const { Types } = require('mongoose')

convertToObjectIdMongodb = (id) => new Types.ObjectId(id)

const getInFoData = ({ object = {}, fields = [] }) => {
  // return _.pick(object, fields)
  let final = {}
  fields = new Set(fields)
  const keyToCopy = Object.keys(object).filter((key) => fields.has(key))
  for (const key of keyToCopy) {
    final[key] = object[key]
  }

  return final
}

const unGetInfoData = ({ object = {}, fields = [] }) => {
  // return _.omit(object, fields)
  let final = {}
  fields = new Set(fields)
  const keyToCopy = Object.keys(object).filter((key) => !fields.has(key))
  for (const key of keyToCopy) {
    final[key] = object[key]
  }
  return final
}

const getSelectData = ({ selectFields = [] }) => {
  return Object.fromEntries(selectFields.map((el) => [el, 1]))
}

const unGetSelectData = ({ unGetSelectFields = [] }) => {
  return Object.fromEntries(unGetInfoData.map((el) => [el, 0]))
}

const removeFieldUndefine = (obj) => {
  Object.keys(obj).forEach((key) => {
    if (obj[key] === undefined || obj[key] === null) {
      delete obj[key]
    }
  })
  return obj
}

const removeUndefineKeyByLodash = (obj) => {
  return _.omitBy(obj, _.isNil)
}

module.exports = {
  convertToObjectIdMongodb,
  getInFoData,
  unGetInfoData,
  getSelectData,
  unGetSelectData,
  removeFieldUndefine
}
