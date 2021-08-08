import { observable, autorun } from '@formily/reactive'

function testObservable1() {
  // 将一个对象变化可观察的，就是倾听它的set操作
  const obs = observable({
    aa: {
      bb: 123,
    },
    cc: {
      dd: 123,
    },
  })
  autorun(() => {
    // 首次的时候会触发，变化的时候也会触发
    // 总共触发2次
    console.log('normal1', obs.aa.bb)
  })

  //数据进行set操作的时候，就会触发
  obs.aa.bb = 44

  autorun(() => {
    // 当值相同的时候，不会重复触发
    // 这里只会触发1次
    console.log('normal2', obs.cc.dd)
  })

  obs.cc.dd = 123
}

testObservable1()