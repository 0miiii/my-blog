---
id: 0
title: "this는 함수를 호출한 객체를 가리킵니다."
date: "2023-06-03"
category: "study"
tags: ["#javascript"]
---

this는 자신이 속한 `객체` 또는 자신이 생성할 `인스턴스`를 가리키는 자기 참조 변수입니다.

자바스크립트에서 모든 함수는 this를 가지고 있으며 this 값은 함수를 호출한 방법에 따라 가리키는 객체가 결정됩니다.

이처럼 함수가 호출될 때마다 this가 동적으로 결정되는 것을 'this가 객체에 바인딩 된다'라고 표현합니다.

즉 this는 객체를 가리키는 키워드이며, 함수를 호출하는 객체에 this가 바인딩 됩니다.

# 1. 기본 바인딩 (함수 호출)

`this`는 함수를 호출한 객체를 가리킵니다.

그러므로 전역에서 함수를 호출하면 this는 전역 객체인 window 객체에 바인딩 되어 window 객체를 가리키게 됩니다.

예외적으로 엄격 모드에서 전역 객체는 바인딩 대상에서 제외되므로 this는 undefined입니다.

아래의 예시는 `whatIsThis` 함수를 전역에서 호출하면 `whatIsThis` 함수를 직접적으로 호출한 객체는 `window` 객체이므로 `this`는 `window` 객체에 바인딩 됩니다.

```js
console.log(this);
// Window {0: Window, window: Window, self: Window, document: document, …}
```

```js
function whatIsThis() {
  console.log(this);
}

whatIsThis();
// Window {0: Window, window: Window, self: Window, document: document, …}
```

# 2. 암시적 바인딩 (메서드 호출)

암시적 바인딩도 마찬가지로 `this`는 함수를 호출한 객체를 가리킵니다.

자바스크립트 함수는 단독으로 호출될 뿐만 아니라 객체의 method로서 호출될 수 있습니다.

이때 `this`는 method를 포함하고 있는 객체에 바인딩 됩니다.

```js
const apple = {
  price: "10,000",
  whatIsThis: function () {
    console.log(this);
  },
  getPrice: function () {
    console.log(this.price);
  },
};

apple.whatIsThis();
// {price: '10,000', whatIsThis: ƒ, getPrice: ƒ}
apple.getPrice();
// 10,000
```

앞서 계속 말했지만 this는 함수를 호출한 객체를 가리킵니다.

즉 함수를 정의한 위치와 this는 상관이 없습니다.

아래와 같이 새로운 변수 `test`에 `apple`의 메서드 `whatIsThis`를 할당하고, `test`를 호출을 하면 `test`는 전역 객체가 호출하므로 `this`는 `apple`객체가 아닌 `window` 객체를 가리키게 됩니다.

```js
const apple = {
  price: "10,000",
  whatIsThis: function () {
    console.log(this);
  },
  getPrice: function () {
    console.log(this.price);
  },
};

const test = apple.whatIsThis;
test();
// Window {0: Window, window: Window, self: Window, document: document, …}
```

또 다른 예시로 `obj.whatIsThis`를 호출하게 되면 `whatIsThis` 함수는 전역에서 정의되었지만, `obj` 객체에서 호출되므로 `this`는 `obj`를 가리키게 됩니다.

```js
function whatIsThis() {
  console.log(this);
}

const obj = {
  whatIsThis,
};

obj.whatIsThis();
```

# 3. 명시적 바인딩 (변수 that, apply(), call(), bind() 호출)

동적으로 바뀌는 `this`를 원하는 객체에 바인딩 하고 싶을 때가 있습니다.

그럴 때 변수 that을 사용하거나, call, bind, apply 메서드를 통해 명시적으로 `this`를 바인딩 할 수 있습니다.

### bind()

`bind`는 새로운 함수를 반환합니다. `whatIsThis` 함수에 `bind`를 붙여 인자로 객체를 전달하면 인자를 `this` 값으로 하는 새로운 함수를 반환됩니다.

그래서 `letBind` 함수를 호출할 때 `this`는 `{name: 'hi'}` 객체에 바인딩 됩니다.

주의할 점은 bind 된 것을 다시 bind 할 수는 없습니다.

```js
function whatIsThis() {
  console.log(this);
}

const letBind = whatIsThis.bind({ name: "bind" });

letBind();
// {name: 'bind'}
```

### 변수 that

변수 that은 일반적으로 현재 스코프에서 `this`를 보존하기 위해 사용되는 변수입니다.

예시로 `setTimeout`은 전역에서 실행되므로 `this`는 전역 객체를 가리키게 됩니다.

그러므로 다음과 같이 명시적으로 this 값을 저장할 수 있습니다.

```js
const obj = {
  name: "example",
  greet: function () {
    const that = this;
    setTimeout(function () {
      console.log(that.name);
    }, 1000);
  },
};

obj.greet();
// "example"
```

`bind` method를 사용하면 아래와 같습니다.

```js
const obj = {
  name: "example",
  greet: function () {
    setTimeout(
      function () {
        console.log(this.name);
      }.bind(this),
      1000
    );
  },
};

obj.greet();
// "example"
```

# 4. new 바인딩 (생성자 함수 호출)

`this`는 자신이 생성할 인스턴스에도 바인딩 됩니다.

이때 반드시 `new` 연산자를 통해 인스턴스를 만들어야 `this` 가 인스턴스에 바인딩 됩니다.

`new` 연산자를 사용하지 않는 경우 `this`는 `window` 객체에 바인딩 됩니다.

이는 `class`의 `constructor`와 원리가 같습니다.

```js
function person(){
  this.age: 20
}

let kim = new person()
console.log(kim.age)
// 20
```

# 5. 이벤트 처리에서의 this

이벤트 처리에서의 `this`는 현재 이벤트가 동작하고 있는 요소를 의미합니다.

```js
const button = document.querySelector(".btn");

button.addEventListener("click", function (event) {
  console.log(event.currentTarget === this);
});
```

# 6. 화살표 함수에서의 this

전통적인 함수 문법

- 호출 방식에 따른 this 변화
- this를 고정하기 위해 bind() 사용

화살표 함수 문법

- 화살표 함수는 함수를 선언할 때 this에 바인딩 할 객체가 정적으로 결정됩니다.
- 화살표 함수의 this는 항상 상위 this를 가리킵니다.
