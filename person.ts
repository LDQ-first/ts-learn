export enum Choose { 
  Wife,     
  Mother
} // 默认值为 Wife = 0，Mother = 1

const question = (choose: Choose): void => {
  console.log('choose: ', choose)
  console.log('你老婆和妈妈同时掉水里你先救谁？')
  console.log('你的选择是：', choose)
}

question(Choose.Mother)
