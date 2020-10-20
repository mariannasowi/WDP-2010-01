module.exports = {
  settings: {
    'import/resolver': {
      'my-awesome-npm-module': { someConfig: value }
    }
  }
}

module.exports = {
  settings: {
    'import/resolver': {
      [path.resolve('../../../my-resolver')]: { someConfig: value }
    }
  }
}