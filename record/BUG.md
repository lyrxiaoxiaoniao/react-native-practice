## react-naitve 开发填坑

### 1. 错误代码-------解决办法one tab（`react-native start --reset-cache`）,one tab (`react-native run-android`)
```
  error: bundling failed: Error: Unable to resolve module ./../react-transform-hmr/lib/index.js from /Users/andrariztyan/MyProject/mobile/myapp/App.js: The module ./../react-transform-hmr/lib/index.js

```


### 2. Tab切换 react-native-scrollable-tab-view, 使用ScrollableTabBar时候首次默认tab下划线无法显示

```
// 在node_modules 里面的去修改 ScrollableTabBar文件
this.updateView({value: this.props.scrollValue.Value(), });
this.updateView({value: this.props.scrollValue.__getValue(), });

```

### 3. react-native-app-intro 引导页 出现红屏报错 `undefined is not an object(evaluating '_react.default.Proptypes.bool')`

```
// 解决bug 
yarn add https://github.com/merryjs/react-native-app-intro

```

### 4.

```


```