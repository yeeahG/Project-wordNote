## 개선사항
- 맞힌 문제의 개수가 업데이트 되지 않음
handleSubmit부분에서 setMaxStreak에 +1을 해주지 않아서 발생한 결과  

- 개수를 업데이트 하니까 개수가 01/11 이런식으로 제대로 출력되지 않음
localstorage에서 숫자가 String으로 인식되어 있었음  
그래서 string으로 변환해줌  
이때 pareInt()를 사용