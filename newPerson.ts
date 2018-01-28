export enum Choose {
  Wife = 1,
  Mother = 2,
}

type Address = string
type Tel = number

const question = (choose: Choose): void => {
  console.log('choose: ', choose)
  console.log('你老婆和妈妈同时掉水里你先救谁？')
  console.log('你的选择是：', choose)
}

class Person {
  name: string
  age: number
  labels: Array<string> // 标签组
  wives: string[]       // 妻子们
  contact: [Address, Tel] // 元组 联系[联系地址，联系电话]
  other: any                // 备注
  saveMonth: boolean = true // 是否救妈妈
  constructor() {}
  answer(): Choose {
    if (this.saveMonth === false) {
      return Choose.Wife
    }
    return Choose.Mother
  }
  hello(): void {
    console.log(`hello~ i'm ${this.name}`)
    // return undefined;
    // return null;
  }
  empty() {}
  down(): never {
    while(true) {}
    // throw new Error('error')
  } 
}

let zhangsan = new Person()

zhangsan.name = '张三'
zhangsan.age = 28
zhangsan.labels = ["颜值逆天", "年轻多金"]
zhangsan.wives = ["一号","二号","三号"]
zhangsan.contact = ["北京xxxxxxx别墅", 2]
zhangsan.saveMonth = false
zhangsan.other = '不好不坏的人'

let len = (zhangsan.other as string).length

console.log(len)
question(zhangsan.answer())

zhangsan.hello()

console.log(zhangsan.empty())
