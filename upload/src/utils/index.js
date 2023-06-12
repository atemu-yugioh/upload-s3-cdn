const { Types } = require('mongoose')
const _ = require('lodash')

const convertToMongodbObjectId = (id) => new Types.ObjectId(id)

const getInfoData = ({ object = {}, fields = [] }) => {
  // return _.pick(object,fields)
  const final = {}

  fields = new Set(fields)

  const keysToCopy = Object.keys(object).filter((key) => fields.has(key))
  for (const key of keysToCopy) {
    final[key] = object[key]
  }
  return final
}

const unGetInfoData = ({ object = {}, fields = [] }) => {
  // return _.omit(object,fields)
  const final = {}
  fields = new Set(fields)

  const keysToCopy = Object.keys(object).filter((key) => !fields.has(key))
  for (const key of keysToCopy) {
    final[key] = object[key]
  }

  return final
}

const getSelectFields = ({ selectFields = [] }) => {
  return Object.fromEntries(selectFields.map((el) => [el, 1]))
}

const unGetSelectFields = ({ unSelectFields = [] }) => {
  return Object.fromEntries(unSelectFields.map((el) => [el, 0]))
}

const removeObjectUndefine = (obj) => {
  // return _.omit(obj, _.isNil)

  Object.keys(obj).forEach(() => {
    if (obj[key] === undefined || obj[key] === null) {
      delete obj[key]
    }
  })
  return obj
}

module.exports = {
  convertToMongodbObjectId,
  getInfoData,
  unGetInfoData,
  getSelectFields,
  unGetSelectFields,
  removeObjectUndefine
}
