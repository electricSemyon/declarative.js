# declarative.js
Javascript library, that contains cool declarative features from other languages.

## How to develop?
`git clone https://github.com/electricSemyon/declarative.js.git`

`npm install`

## Already done

### run
```javascript 
run(n).times((n) => console.log(n)); //will run callback with current iterator as argument
```
Declarative loop from ruby. 

### humanize
```javascript 
humanize('sample_text'); //will return 'Sample text'
```
This function allows you to make `Some fancy text` from `some_fancy_text`.
