class central {
  constructor() {
    console.log('parent class constructer menthod')
  }
}
class KA_GOVT extends central {
  constructor() {
    super()
    console.log('child class constructer method')
  }
}
new KA_GOVT()

//2nd example

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
