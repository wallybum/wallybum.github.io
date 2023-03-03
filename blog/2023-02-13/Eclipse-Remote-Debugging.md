---
title: Eclipse 원격 디버깅
authors: [wallybum]
tags: [Eclipse, Debug, Remote]
---

# Eclipse Remote Debugging

## 개요
Eclipse IDE를 사용하면 다른 JVM(Java Virtual Machine) 또는 다른 시스템에서 실행되는 애플리케이션을 디버그할 수 있다.

<!--truncate-->
## 사용 이유
본인의 경우 Local 개발 환경에서 발견하지 못한 버그가 다른 시스템에서 발견 되었을 때, Local 개발 환경을 변경하기에 많은 비용이 발생 하거나, 테스트 케이스가 정확하지 않아 재현하기 어려울 때 사용하였다. 

## 설정

### 원격지 Listing