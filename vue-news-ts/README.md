# vue-news-ts

## vue 프로젝트에 Ts를 점진적 적용하는 방법
- Vue +ts 프로젝트 생성
- 기존 서비스 코드와 라이브러리를 새 프로젝트로 이동
- ts에러가 js에러는 아님 : 돌아는 간다
- 기본적 빌드 에러 해결(보통 tsconfig설정 변경): strict false로 엄격한 정도를 낮추고 allowJS: true로 임시적으로 js를 허용해줌
- 타입스크립트의 혜택을 볼 수 있는 주요 파일들 위주로 .js => .ts변환 적용

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
