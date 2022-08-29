class central {
    constructor() {
      console.log('parents control method')
    }
  }
  class KA_GOV extends central {
    constructor() {
      super()
      console.log('childs class method')
    }
  }
  new KA_GOV()