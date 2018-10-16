# unit

> 工具类

## 项目目录
```
.
├── src                     -- 源代码
│   ├── debounce.js         -- 防止重复提交, 阻止连点
│   ├── typeOf.js           -- 判断类型
│   ├── deepClone.js        -- 深拷贝，返回新对象
│   ├── node-extend.js      -- node的extend方法
│   ├── stopPoint.js        -- 阻止连点
│   └── extend.js           -- 两个对象合并
│
├── test                    -- 测试
├── index.js                -- 入口
├── package.json            -- npm包配置文件
├── README.md               -- 配置文件
└── yarn.lock               -- yarn锁版本文件

```

## 依赖包

```
├── dependencies -- 生产环境依赖项
│   │
│   ├── mocha   -- 测试框架
│   └── chai -- 断言库
│
└── devDependencies -- 开发环境依赖项

```

## 项目介绍
* `debounce
* U.debounce(() => {
    return new Promise(function(resolve){
      resolve(getTableData().then((data) => {
        console.log('1');
      }));
    })
  })

* `stopPoint
* U.stopPoint([() => {
    this.setState({ loading: true })
  }, getTableData().then((data) => {
    console.log('1');
  }), () => {
    this.setState({ loading: false })
  }]) 