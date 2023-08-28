---
title: MANIFEST.MF 파일에 대한 고찰
authors: [wallybum]
tags: [MANIFEST, Class]
---

# MANIFEST.MF 파일에 대한 고찰

## 개요
Java 6로 Compile 되고, VM옵션을 이용하여 내장된 JRE 6 기반의 런타임에서 구동되는 Application이 있다. 

이 Application은 JarInputStream을 이용하여 외부 Jar를 로드 할 수 있다.
테스트용으로 로드한 외부 Jar는 SQLServer JDBC 파일이며, 아래의 JDBC 드라이버들을 로드 하였다.

<!--truncate-->

- sqljdbc4.jar
- mssql-jdbc-11.2.0.jre8.jar
- mssql-jdbc-11.2.0.jre11.jar
- mssql-jdbc-11.2.0.jre17.jar
- mssql-jdbc-11.2.0.jre18.jar

sqljdbc4.jar 파일을 제외하고 나머지 파일들은 jre 버전이 명시되어있어, 버전별 런타임에서 호환된다고 예측할 수 있지만, sqljdbc4.jar는 어떤 버전의 jvm에서 동작하는지 직관적으로 알 수 없었다.

그래서 sqljdbc4.jar의 META-INF/MANIFEST.MF를 참고하였다.

```
Manifest-Version: 1.0
Ant-Version: Apache Ant 1.6.2
Created-By: 1.5.0_22-b03 (Sun Microsystems Inc.)
...... 생략
```

sqljdbc4.jar는 Ant Script로 빌드 되었고, 이 sqljdbc4.jar는 JRE 1.5.0 이상에서 동작한다는 걸 확인하였다.

이 애플리케이션이 Java 6로 Compile 되었지만, 이론적으로 JRE 8 Runtime에서 구동이 안 될 이유는 없다.

그래서 Java 8 Runtime 환경에서 이 Application을 구동시키고, 
mssql-jdbc-11.2.0.jre8.jar을 로드 하였다. 

하지만 **Java Exception : Unsupported major.minor version 52.0** 오류가 발생하며, 로드할 수 없었다.


## MANIFEST.MF 정의
[Oracle 공식문서](https://docs.oracle.com/javase/tutorial/deployment/jar/manifestindex.html)에서는 MANIFEST.MF 파일을 다음과 같이 정의한다.

> The manifest is a special file that can contain information about the files packaged in a JAR file. By tailoring this "meta" information that the manifest contains, you enable the JAR file to serve a variety of purposes.

> 매니페스트는 JAR 파일에 패키지된 파일에 대한 정보를 포함할 수 있는 특수 파일입니다. 매니페스트에 포함된 이 "메타" 정보를 조정하면 JAR 파일을 다양한 용도로 사용할 수 있습니다.

### MANIFEST.MF 내용 확인
Java 8 Runtime 환경에서 Java 6 Application이 구동하는 데도 문제가 없고, MANIFEST.MF정의에 따르면 더더욱이 문제가 없을 것처럼 보였다.

하지만 로드가 안 되는 것이 이상하게 생각되어 MANIFEST.MF 파일을 열어보았다.

> mssql-jdbc-11.2.0.jre8.jar
```
// ... 
Bundle-Name: Microsoft JDBC Driver for SQL Server
Bundle-Version: 11.2.0
Bundle-Activator: com.microsoft.sqlserver.jdbc.osgi.Activator
Build-Jdk-Spec: 18
Created-By: Apache Maven Bundle Plugin
Build-Jdk: 18.0.1
// ...
```

지금까지 MANIFEST.MF 파일은 해당 JAR에 대한 메타데이터가 적혀있는 파일 이라고 생각했다.
따라서, **mssql-jdbc-11.2.0.jre8.jar** 파일의 MANIFEST.MF 파일에는 Java 8에 대한 정보가 있을 것 이라는 잘못된 확신을 하였다.

생각해보면 MANIFEST.MF는 Jar 파일마다 작성된 내용이 다르며, **메타 데이터** 관점에서 보면 얼마든지 자유롭게 작성할 수 있는 **텍스트(Text)** 그 이상이하도 아니였다.

## 결론
위 MANIFEST.MF 파일의 정보는 **mssql-jdbc-11.2.0.jre8.jar**를 빌드할 때 Maven을 통해 빌드 하였으며, 이 Maven을 구동하는데 사용한 JDK가 18.0.1 이라는 것이다.

물론 MANIFEST.MF 파일을 가지고 이 Jar파일에 대한 정보의 일부를 추측할 수는 있겠지만,
그 정보를 맹신하면 안된다.

실제로 빌드된 클래스의 버전을 확인하려면 다음 명령어를 이용하자.

> Windwos / MacOS
```
javap -verbose [클래스 명] | find "major"
```





