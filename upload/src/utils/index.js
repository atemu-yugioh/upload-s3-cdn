const _ = require("lodash");
const { Types } = require("mongoose");

const convertToObjectIdMongodb = (id) => new Types.ObjectId(id);

const getInfoData = ({ object = {}, field = [] }) => {
  return _.pick(object, field);
};

const unGetInfoData = ({ object = {}, fields = [] }) => {
  const final = {};

  fields = new Set(fields);

  const keysToCopy = Object.keys(object).filter((key) => !fields.has(key));
  for (const key of keysToCopy) {
    final[key] = object[key];
  }

  return final;
};

const getSelectData = ({ selectField = [] }) => {
  return Object.fromEntries(selectField.map((el) => [el, 1]));
};

const unGetSelectData = ({ unSelectField = [] }) => {
  return Object.fromEntries(unSelectField.map((el) => [el, 0]));
};

const removeUndefinedObject = (obj) => {
  Object.keys(obj).forEach((k) => {
    if (obj[k] === null || obj[k] === undefined) {
      delete obj[k];
    }
  });

  return obj;
};

const updateNestedObjectParser = (obj) => {
  const final = {};
  Object.keys(obj).forEach((k) => {
    if (typeof obj[k] === "object" && !Array.isArray(obj[k])) {
      const response = updateNestedObjectParser(obj[k]);
      Object.keys(response).forEach((a) => {
        final[`${k}.${a}`] = response[a];
      });
    } else {
      final[k] = obj[k];
    }
  });

  return final;
};
