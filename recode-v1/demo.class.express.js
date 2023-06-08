class Express {
  constructor(
    req = {
      params: {},
      query: {},
      body: {
        name: 'thiengg'
      }
    },
    res = {},
    next = {}
  ) {
    this.request = req
    this.response = res
    this.nextFunc = next
  }

  use(callback) {
    try {
      if (this.request.body.name === 'thieng') {
        callback(this.request, this.response, this.nextFunc)
      } else {
        callback({ error: 'error' }, this.request, this.response, this.nextFunc)
      }
    } catch (error) {
      callback(error, this.request, this.response, this.nextFunc)
    }
  }
}

const app = new Express()
app.use((req, res, next) => {
  console.log(req.body)
})

app.use((error, req, res, next) => {
  console.log('error', error)
  console.log(req.body)
})
