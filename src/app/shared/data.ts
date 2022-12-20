export const User = {
  name: 'Alex',
  secondName: 'Alexeyev',
  position: 'front-end',
  city: 'Kiev',
  country: 'Ukraine',
  foo: function () {
    console.log('foo:', this.name);
    console.log('foo THIS:', this);
  },
  arrFoo: () => {
    console.log('arrFoo:', name);
    console.log('arrFoo THIS:', this);
  },
  greetings: function () {
    console.log('Privet', this.name)
  }
}

export const Fruits = {
  name: 'banana',
  price: 20,
}
export const Goods = {
  commodity: 'sofa',
  weight: 50,
}

export let BestCityEver: string = 'London'

export let testArr = new Array(10)
  .fill(1)
  .map(() => Math.round(Math.random()*1000))

