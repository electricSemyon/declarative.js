[![Build Status](https://travis-ci.org/electricSemyon/declarative.js.svg?branch=master)](https://travis-ci.org/electricSemyon/declarative.js)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

# declarative.js
Javascript library, that contains cool declarative features from other languages.

## How to develop?
`git clone https://github.com/electricSemyon/declarative.js.git`

`npm install`

## Already done

* [run()](#run)
* [humanize()](#humanize)
* [keys()](#keys)
* [range()](#range)

### run
```javascript 
run(5).times((n) => console.log(n));
0
1
2
3
4
=> undefined
```
Declarative loop from ruby. 

### humanize
```javascript 
humanize('sample_text');
=> 'Sample text'
```
This function allows you to make `Some fancy text` from `some_fancy_text`.

### keys
```javascript 
keys(
  {
    1: 'test',
    2: 'test',
    3: 'test'
  }
)
=> [1, 2, 3]
```
Returns an array of object keys.

### range
```javascript 
range(0, 10, 1);
=> [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
```
Returns an array, which begins from "start" argument, ends with "end" argument. Step = "step".
