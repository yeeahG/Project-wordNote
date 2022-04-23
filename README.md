## 🖥️
![front](https://user-images.githubusercontent.com/97449025/164912521-764ce472-1381-4efd-ae16-ad1efdf4002e.png)
![front2](https://user-images.githubusercontent.com/97449025/164912523-4824c376-7389-4ff4-8416-f3f6b7f90b3d.png)



## 개선사항
- 맞힌 문제의 개수가 업데이트 되지 않음
handleSubmit부분에서 setMaxStreak에 +1을 해주지 않아서 발생한 결과  

- 개수를 업데이트 하니까 개수가 01/11 이런식으로 제대로 출력되지 않음
localstorage에서 숫자가 String으로 인식되어 있었음  
그래서 string으로 변환해줌  
이때 pareInt()를 사용  

- menu click시 다른 component로 구성된 Hiragana의 화면이 100%로 전환시키고 싶음
