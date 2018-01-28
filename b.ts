function saySomeThing1({ x , y } = {x : 0, y: 0}) {
  console.log(x, y)
}

function saySomeThing2({ x = 0 , y = 0 }) {
  console.log(x, y)
}

function saySomeThing3({ x = 0 , y = 0 } = {x:2,y : 2}) {
  console.log(x, y)
}

saySomeThing1()
saySomeThing1({ x: 3 , y: 3 })

saySomeThing2({})
saySomeThing2({ x: 3 , y: 3 })

saySomeThing3()
saySomeThing3({})