---
id: 2
title: "NextJS에서 react portal을 사용하여 모달 컴포넌트 만들기"
date: "2023-06-18"
category: "dev"
tags: ["#NextJS"]
---

모달은 사용자와의 상호작용을 하는 UI 요소로 웹앱에서 없어서는 안 될 중요한 기능입니다.

NextJS 환경에서 재사용성, UX에 중점을 맞춰 개발한 모달 컴포넌트에 대해 설명하겠습니다.

## 📌 구현 목표

1. [x] **재사용성**: 재사용이 가능하도록 구현합니다.

2. [x] **열기, 닫기**: UI 요소를 클릭하여 모달을 열거나, 닫을 수 있도록 구현합니다.

3. [x] **백그라운드 클릭 닫기**: 사용자가 모달 배경을 클릭하여 모달을 닫을 수 있도록 합니다.

4. [x] **키보드 이벤트 처리**: ESC 키를 사용하여 모달이 닫히도록 합니다.

5. [ ] **포커스 관리**: 모달이 열려 있을 때는 모달 내부의 요소에 포커스가 이동하도록 하며, 모달이 닫힐 때는 이전에 포커스가 위치한 곳으로 포커스가 이동되도록 처리합니다.

6. [x] **모달 외부 스크롤 막기**: 모달이 열려 있을 때는 모달 외부의 스크롤을 막아 사용자가 모달 내용 이외의 부분을 스크롤 할 수 없도록 합니다. 이는 모달이 사용자에게 포커스를 유지하고 모달 외부의 컨텐츠에 영향을 주지 않도록 도와줍니다.

7. [ ] **애니메이션 효과**: 모달의 열기/닫기 시에 애니메이션 효과를 추가하여 사용자 경험을 향상시킬 수 있습니다.

8. [ ] **접근성**: 모달이 접근성 요구사항을 충족하도록 구현해야 합니다. 이는 포커스 관리, 키보드 이벤트 처리, 스크린 리더와 같은 보조 기술 지원 등을 포함합니다. 모달 내부의 텍스트 컨텐츠는 읽기 순서와 접근성 관련 속성을 올바르게 설정해야 합니다.

## 📌 컴포넌트 설명

```tsx
// Modal.tsx

"use client";

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";

interface IProps {
  children: React.ReactNode;
  onClose: () => void;
  isOpen: boolean;
}

const Modal: React.FC<IProps> = ({ children, isOpen, onClose }) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  const overlayClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === overlayRef.current) {
      onClose();
    }
  };

  useEffect(() => {
    const escKeyDownHandler = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.addEventListener("keydown", escKeyDownHandler);
    } else {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", escKeyDownHandler);
    }

    return () => {
      document.removeEventListener("keydown", escKeyDownHandler);
    };
  }, [isOpen, onClose]);

  if (typeof window === "undefined" || !isOpen) return null;

  let portalElement = document.querySelector(`#overlays`);
  if (!portalElement) {
    portalElement = document.createElement("div");
    portalElement.setAttribute("id", "overlays");
    document.body.insertBefore(portalElement, document.body.firstChild);
  }

  return ReactDOM.createPortal(
    <>
      <div
        className="fixed top-0 left-0 w-full h-screen z-40 bg-black bg-opacity-75"
        ref={overlayRef}
        onClick={overlayClickHandler}
      >
        <div className="fixed z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 bg-white rounded-lg shadow-md">
          {children}
        </div>
      </div>
    </>,
    portalElement
  );
};

export default Modal;
```

### 1. Props

해당 모달은 children, onClose, isOpen props로 전달 받습니다.

**children**: 모달 내부에 표시할 컨텐츠를 전달합니다.

**isOpen**: 모달의 상태를 나타내는 boolean 값입니다. 모달의 on/off를 결정합니다.

**onClose**: 모달을 닫는 동작을 처리하는 함수를 전달받습니다. 해당 함수는 isOpen 상태를 false로 변경하는 역할을 수행합니다.

이렇게 전달되는 props들을 통해 모달 컴포넌트는 동적으로 열리고 닫히며, 내부 컨텐츠를 동적으로 변경할 수 있습니다.

이러한 구조적인 설계를 통해 모달 컴포넌트는 재사용성이 높아지며, 다양한 상황에서 일관된 모달 경험을 제공할 수 있습니다.

### 2. 스타일링

모달은 두 개의 div 요소로 구성됩니다. 첫 번째 div는 백그라운드로 클릭하면 모달이 닫히는 역할을 합니다. 두 번째 div는 모달 컨텐츠를 감싸고 있으며, children 속성을 통해 전달된 컨텐츠를 렌더링 합니다. Tailwind CSS 클래스를 사용하여 스타일링을 적용했습니다.

### 3. 백그라운드 클릭시 모달 닫기

```tsx
const overlayRef = useRef<HTMLDivElement>(null);

const overlayClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
  if (event.target === overlayRef.current) {
    onClose();
  }
};
```

모달은 두 개의 div 요소로 구성되어 있습니다. 첫 번째 div는 모달의 배경을 담당하며, 두 번째 div는 모달의 컨텐츠를 담고 있습니다. 해당 모달은 사용자가 배경 부분을 클릭할 때에만 닫혀야 합니다. 만약 위의 if문이 없고 onClose 함수만 호출한다면 배경뿐만 아니라 컨텐츠를 클릭할 경우에도 모달이 닫혀버리는 문제가 발생합니다.

이를 해결하기 위해 `useRef`를 사용하여 참조를 생성하고, 참조를 백그라운드 div에 할당합니다. 그리고 overlayClickHandler에서는 이벤트가 발생한 요소와 참조한 요소가 동일한지 비교하여, 동일할 경우에만 모달을 닫는 함수를 실행합니다.

### 4. React Portal과 NextJS

```tsx
ReactDOM.createPortal(전송할 요소, 전송될 곳)
```

ReactDOM.createPortal 메서드를 사용하여 모달을 렌더링 할 독립적인 DOM 요소를 지정합니다. 이러한 방식은 모달의 접근성 요구사항(포커스 관리, 키보드 이벤트 처리, 스크린 리더 등)을 충족시킬 수 있습니다.

```tsx
if (typeof window === "undefined") return null;
```

`ReactDOM.createPortal` 메서드를 사용하여 모달을 렌더링 할 DOM 요소를 지정해야 합니다. 그러기 위해서는 DOM 객체에 접근해야 하는데 NextJS에서는 서버 측에서 사전렌더링을 실행합니다. 이때 서버 측에서 DOM 요소에 접근을 할 수 없어 에러가 발생하게 됩니다. 이를 방지하기 위해 `typeof window === "undefined"`를 사용하여 서버 측에서 렌더링 할 때는 모달을 숨깁니다.

```jsx
// layout.tsx

<html lang="en">
  <body className={`${inter.className}`}>
    <div id="overlays" /> // here
    <Header />
    <main className="max-w-3xl mx-auto py-5">{children}</main>
    <Footer />
  </body>
</html>

// Modal.tsx
const portalElement = document.getElementById(portalElId) as Element;
```

기존에는 layout에 미리 `<div id="overlays" />`과 같은 포탈될 요소를 생성하였습니다. 그리고 모달 컴포넌트에 포탈 요소 아이디를 props로 전달하였습니다. 하지만 이와 같은 방법은 미리 요소를 직접 만들어야 하는 번거로움이 있습니다. 또한 재사용성을 고려하여 모달 컴포넌트 내에서 직접 포탈될 요소를 생성되도록 구현하였습니다.

```tsx
let portalElement = document.querySelector(`#overlays`);
if (!portalElement) {
  portalElement = document.createElement("div");
  portalElement.setAttribute("id", "overlays");
  document.body.insertBefore(portalElement, document.body.firstChild);
}
```

### 5. 모달 외부 스크롤 막기, ESC 키를 통해 모달 닫기

useEffect hook을 사용하여 isOpen의 상태에 따라 ESC 키 이벤트를 처리하고 외부 스크롤을 막습니다.

### 6. useModal custom hook

useModal 커스텀 훅은 useState 훅을 사용하여 모달의 열기와 닫기 상태를 관리합니다. 모달이 열리고 닫히는 데 필요한 함수도 제공됩니다. 이 훅을 사용하면 모달을 보다 쉽게 제어할 수 있으며 재사용이 가능합니다.

```tsx
"use client";

import { useState } from "react";

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const showModalHandler = () => {
    setIsOpen(true);
  };

  const closeModalHandler = () => {
    setIsOpen(false);
  };

  return { isOpen, showModalHandler, closeModalHandler };
};
```

## 📌 사용 예시

```tsx
const Test = () => {
  const { isOpen, showModalHandler, closeModalHandler } = useModal();

  return (
    <section>
      <Modal isOpen={isOpen} onClose={closeModalHandler}>
        <div className="p-5">모달 동작</div>
      </Modal>
      <button onClick={showModalHandler}>모달ON</button>
    </section>
  );
};
```

## 📌 후기

다른 프로젝트에서도 바로 재사용이 가능하고, 모달의 기능을 충실히 하는 컴포넌트를 만들어보았습니다. 하지만 개발 과정에서 DOM을 직접 조작하는 코드가 많이 작성되었습니다. 리액트는 공식 문서에 따르면 DOM을 직접 조작하는 것을 권장하지 않습니다. 그렇기 때문에 현재 만든 모달 컴포넌트를 개선해야 할 필요가 있다고 생각하여 리팩토링을 할 예정입니다.
