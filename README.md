# huli-metrics-nodejs

Hello dear Huli developer!

This node package is a tool for monitoring the usage of the application you make.

First you have to download it to your project folder

```
npm install huli-metrics --save
```

to get it simply require it like any other node package

```
const metrics = require(huli-metrics);
```
Call this function in those you want to use in it, for example eventlisteners and so on.
```
metrics.send(<the name of your project>, <the name of the feature, you want to be monitored>);
```



This will send a json with the current time and the information you gave it to, and send it to the internal metrics backend application, we store it in a database and create some fancy charts out of it to see what features are the most used or not used at all!
