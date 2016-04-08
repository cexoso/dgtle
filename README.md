# Introduction
This is a SPA._(front_end)_

--------------------------------------------------------------------------------

# how to use?
run

```
    npm install
```

and

```
    npm start
```

to start develop

--------------------------------------------------------------------------------

## Something
- Promise:bluebird

## Somethis I google
### IndexRoute,IndexRedirect

```
 <Router>
   <Route path="/" component={App}>
     <IndexRoute component={Home}/>
     <Route path="accounts" component={Accounts}/>
     <Route path="statements" component={Statements}/>
   </Route>
 </Router>
```

```
 <Route path="/" component={App}>
   <IndexRedirect to="/welcome" />
   <Route path="welcome" component={Welcome} />
   <Route path="about" component={About} />
 </Route>
```

### React.PropTypes

```
React.PropTypes.array           // 陣列
React.PropTypes.bool.isRequired // Boolean 且必要。
React.PropTypes.func            // 函式
React.PropTypes.number          // 數字
React.PropTypes.object          // 物件
React.PropTypes.string          // 字串
React.PropTypes.node            // 任何類型的: numbers, strings, elements 或者任何這種類型的陣列
React.PropTypes.element         // React 元素
React.PropTypes.instanceOf(XXX) // 某種XXX類別的實體
React.PropTypes.oneOf(['foo', 'bar']) // 其中一個字串
React.PropTypes.oneOfType([React.PropTypes.string, React.PropTypes.array]) // 其中一種格式類型
React.PropTypes.arrayOf(React.PropTypes.string)  // 某種類型的陣列(字串類型)
React.PropTypes.objectOf(React.PropTypes.string) // 具有某種屬性類型的物件(字串類型)
React.PropTypes.shape({                          // 是否符合指定格式的物件
  color: React.PropTypes.string,
  fontSize: React.PropTypes.number
});
>React.PropTypes.any.isRequired  // 可以是任何格式，且必要。
```

✓ 10003
