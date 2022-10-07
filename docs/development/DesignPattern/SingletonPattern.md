---
authors: [wallybum]
tags: [디자인 패턴, 싱글톤 패턴]
sidebar_position: 2
---
# 싱글톤 패턴(Singleton Pattern)

## 개요
오직 1개의 인스턴스만을 생성하여 사용하는 디자인 패턴이다.

## 사용이유
- 싱글톤으로 생성된 객체는 전역성을 띄기 때문에 다른 객체와 공유가 쉽다. 
- 불필요한 인스턴스를 생성하지 않아도 되기 때문에 메모리 자원 소모가 적다.
- 다음과 같은 경우에 사용할 수 있다.
> 어떤 애플리케이션에서 사용자가 여러 환경설정 정보를 설정하려고 할 때, 설정하려는 정보수 만큼 '환경설정' 이라는 인스턴스가 존재하면 관리도 어렵고, 불필요한 메모리 자원을 사용하게 된다. 이때 '환경설정' 이라는 인스턴스를 단 한 번만 생성하여, 이 인스턴스에 여러 정보를 저장하는 방식으로 사용한다.

## 싱글톤  패턴 적용 전 

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = new Settings();
        Settings settings1 = new Settings();
        System.out.println(settings == settings1); // false
    }
}
```

- Settings.java
```java
public class Settings {
}
```
위와 같이 new를 이용하여 만든 인스턴스들은 서로 같지 않다.

## 싱글톤 패턴 적용 예제
### Static 메서드를 이용한 싱글톤 패턴 적용
Settings에 대한 Static 필드를 만들고, 외부에서 해당 생성자에 접근할 수 있는 Static 메서드를 만든다.

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        Settings settings1 = Settings.getInstance();
        System.out.println(settings == settings1); // true
    }
}  
```

- Settings.java
```java
public class Settings {

    private static Settings instance;

    /*
       instance가 null일 경우 새로운 인스턴스를 생성하여 반환하고,
       이미 있다면 기존의 인스턴스를 반환한다.
    */ 
    public static Settings getInstance() {
        if (instance == null) {
            instance = new Settings();
        }
        return instance; 
    }
}
```

하지만 위 방법은 **멀티 쓰레드 환경에서 안전하지 않다.**


### synchronized를 이용하여 멀티 쓰레드 환경에서 안전하게 싱글톤 패턴 구현
![img1](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/Synchronized.png)

위 그림과 같이 **쓰레드 1번**이 빨간색 1번의 if절을 만난 뒤, instance가 null 이여서 빨간색 2번 내부로 들어갔을 때, **쓰레드 2번**이 파란색의 1번의 if절을 만난 뒤, instance가 null 이여서 파란색 2번 내부로 들어갈 수 도 있다.

이렇게 하면, 각 쓰레드 별로 각각의 인스턴스가 생성되기 때문에, 각 인스턴스는 같다는 것을 보장할 수 없다.

하지만, **synchronized 키워드를 사용**하여 **getInstance()** 메서드에 한번에 딱 하나의 쓰레드만 들어오도록 하면, 하나의 인스턴스가 생성되는것을 보장할 수 있다.

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        Settings settings1 = Settings.getInstance();
        System.out.println(settings == settings1); // true
    }
}
```

- Settings.java
```java
public class Settings {
​
    private static Settings instance;
​
       public static synchronized Settings getInstance() {
        if (instance == null) {
            instance = new Settings();
        }
        return instance;
    }
}
```

Synchronized의 단점은 getInstance()를 호출할 때 마다 동기화를 처리하는 작업 때문에 성능 상의 저하가 될 수 있다.

### 이른 초기화(eager initialization)를 이용하여 멀티 쓰레드 환경에서 안전하게 싱글톤 패턴 구현
만약 synchronized에 대한 사용이 부담 된다면, 이른 초기화 방법을 이용할 수 있다.

Settings 클래스가 로딩되는 시점에서 static 필드가 초기화 되기 때문에 Thread-Safe 하다.

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        Settings settings1 = Settings.getInstance();
        System.out.println(settings == settings1); // true
    }
}
```


- Settings.java
```java
public class Settings {
    /* Settings 클래스가 로드되는 시점에 INSTANCE 변수가 초기화 되면서 미리 만들어 놓았기 때문에, 멀티 쓰레드 환경에서도 안전하다.*/
    private static final Settings INSTNACE = new Settings();

    private static Settings() { }
    
    public static Settings getInstance() {
        return INSTNACE;
    }
}
```

### Double Checked Locking을 이용하여 멀티 쓰레드 환경에서 안전하게 싱글톤 패턴 구현
이른 초기화 방식(eager initialization)의 경우 인스턴스를 미리 만들어 놓는데, 이 인스턴스가 로드될 때 많은 리소스를 소모하는(비용이 비싼) 인스턴스 이거나, 애플리케이션 실행 시점에서 사용하지 않는 인스턴스일 경우, 당장 사용하지도 않는 리소스를 소모하는 것이 부담될 수 있다.

또한 앞에서 작성된 Synchronized 키워드를 사용하면 **동기화** 를 처리하는데 비용이 신경이 쓰인다면, instance가 없을 경우 Settings 클래스에 대한 Synchronized 블럭을 생성하고, 
Synchronized 블럭 내에서 instance를 생성하도록 한다. 아래와 같이 check를 2번 하기 때문에
Double Checked locking이라고 한다.

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        Settings settings1 = Settings.getInstance();
        System.out.println(settings == settings1); // true
    }
}
```

- Settings.java

```java
public class Settings {

    private static volatile Settings instance;

    public static Settings getInstance() {
        if (instance == null) {
            synchronized (Settings.class) {
                if (instance == null) {
                    instance = new Settings();
                }
            }
        }
        return instance;
    }
}
```

쓰레드 동작은 아래 그림과 같다.  
빨간색 쓰레드가 1번에서 if 문을 만나고, instance가 null이기 때문에 2번을 수행한다.  
이때, 파란색 쓰레드가 1번의 if 문을 만나고, 파란색의 2번을 만나게 되면, 빨간색 쓰레드가 먼저 synchronized를 만났기 때문에 수행이 종료될 때 까지 대기를 하게된다. 파란색 쓰레드가 대기를 하는 동안, 빨간색 쓰레드는 3번을 수행하고, Settings 인스턴스를 생성하게 되고, 파란색 쓰레드가 그 다음 작업을 수행하려고 할 때, 이미 instance는 null이 아니기 때문에 if문을 수행하지 않는다.  
이렇게 함으로써 Thread-Safe가 된다.

![img2](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/DoubleCheckingLocking.png)


Double Checked Locking이 **synchronized getInstance()**보다 성능이 좋은 이유는 다음과 같다.

(1) 자원소모적 측면
멀티쓰레드가 매우 빈번하게 일어나는 많은 트래픽을 처리하는 경우에 if문 안에 여러 쓰레드가 접근할 수 있다. 이 경우, 이미 인스턴스가 있는 경우에는 인스턴스를 즉시 반환하고, 없는 경우에만 Synchronized 블럭에 대한 자원을 소모하기 때문에 getInstance() 메서드를 호출하는 모든 쓰레드에 대해 Synchronized 자원을 소모하지 않는다. 

(2) 필요로 하는 시점 선택
인스턴스를 필요로 하는 시점에 만들 수 있다.

하지만, Double Checked Locking은 복잡한 방법에 속한다. 왜 **volatile** 라는 키워드를 사용해야 하는지, **Volatile**를 사용함으로 써 Java가 메모리를 관리하는 방법을 알아야한다.

그러므로 조금 더 안전한 방법으로 싱글톤 방법을 구현한다.

### Static Inner 클래스를 사용하여 멀티 쓰레드 환경에서 안전하게 싱글톤 패턴 구현
Double Checking locking 방식이 좋기는 하지만 volatile 등 고려 해야할 것들이 많다.  
아래의 Settings 클래스를보면 Inner Class를 이용하여 싱글톤 패턴을 구현하였다.

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        Settings settings1 = Settings.getInstance();
        System.out.println(settings == settings1); // true
    }
}
```

- Settings.java
```java
public class Settings {

    private Settings() {
    }

    private static class SettingsHolder {
        private static final Settings INSTANCE = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.INSTANCE;
    }
}
```
위 코드를 사용하면, **getInstance()** 를 호출 할때 SettingsHolder가 가지고 있는 인스턴스를 반환하게 된다.

## 싱글톤 패턴을 무력화 시키는 방법

### 리플렉션
리플렉션을 이용하여 싱글톤패턴을 이용하였다 하더라도, 이를 무력화 시킬 수 있다.

- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Settings settings1 = Settings.getInstance(); // 의도한대로 SettingsHolder를 통해 만들어진 인스턴스
​
        Constructor<Settings> constructor = Settings.class.getDeclaredConstructor();
        constructor.setAccessible(true);
        Settings settings2 = constructor.newInstance(); // new를 이용하여 새로만든 인스턴스
​
        System.out.println(settings1 == settings2); // false
    }
}
```

- Settings.java
```java
public class Settings {
    private Settings() {
    }
​
    private static class SettingsHolder {
        private static final Settings INSTANCE = new Settings();
    }
​
    public static Settings getInstance() {
        return SettingsHolder.INSTANCE;
    }
​
}
```

### 직렬화 & 역직렬화
Java에는 Object를 파일 형태로 디스크에 저장(직렬화) 하고, 다시 읽어들이는 것(역직렬화)이 가능하다.  
만약, 직렬화, 역직렬화를 위한 **Serializable** 인터페이스를 implements 하고, 이 객체를 읽어들인다면, 생성자를 이용하여 인스턴스를 다시 만들기 때문에 서로 다른 객체가 된다.

- Singleton.java
```java
public class Singleton {
        public static void main(String[] args) throws IOException, ClassNotFoundException {
        Settings settings = Settings.getInstance();
        Settings settings1 = null;
        try (ObjectOutput out = new ObjectOutputStream(new FileOutputStream("settings.obj"))) {
            out.writeObject(settings);
        }
 
        try (ObjectInput in = new ObjectInputStream(new FileInputStream("settings.obj"))) {
            settings1 = (Settings) in.readObject();
        }
        // 역직렬화를 하게 되면 반드시 생성자를 이용하여 인스턴스를 다시 만들기 때문에 서로 다른객체가 된다.
        System.out.println(settings == settings1); // false
    }
}
```

- Settings.java
```java
public class Settings implements Serializable {
    private Settings() {
    }

    private static class SettingsHolder {
        private static final Settings INSTANCE = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.INSTANCE;
    }

}
```

단, **Serializable** 인터페이스를 implements 하였다고 하더라도, 동일한 인스턴스로 유지하는 방법이 있긴한데, 그 방법은 아래와 같다. 아래와 같이 readResolve 메서드를 호출한다.

- Settings.java
```java
public class Settings implements Serializable {
    private Settings() {
    }

    private static class SettingsHolder {
        private static final Settings INSTANCE = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.INSTANCE;
    }

    /**
     * Serializable 인터페이스에 명시적인 Override 메서드는 아니지만,
     * 이 이름으로 된 메서드가 있을 경우, 역 직렬화를 할 때 이 메서드를 사용하게 된다.
     */
    protected Object readResolve() {
        return getInstance();
    }
}
```

위 직렬화 & 역직렬화는 **readResolve()** 메서드를 통해 싱글톤을 보장할 수 있지만, 리플렉션의 경우 Native 코드를 이용한것이기 때문에 방어가 싱글톤 패턴을 무력화 시킬 수 있다.

### Enum을 이용한 싱글톤 객체 보장
**Enum**을 이용하면 리플렉션에서도 싱글톤 객체를 보장할 수 있다.

- Singleton.java

```java
public class Singleton {
    public static void main(String[] args) throws NoSuchMethodException, InvocationTargetException, InstantiationException, IllegalAccessException {
        Settings settings1 = Settings.INSTANCE;
        Settings settings2 = null;

        Constructor<?>[] declaredConstructors = Settings.class.getDeclaredConstructors();
        for (Constructor<?> constructor : declaredConstructors) {
            constructor.setAccessible(true);
            settings2 = (Settings) constructor.newInstance("INSTANCE");
        }

        System.out.println(settings1 == settings2);
    }
}
```

- Settings.java

```java
public enum Settings {
    INSTANCE;
}
```

Settings 클래스가 엄청 간단해졌다. 그리고 위 Singleton클래스를 run 하게되면 다음과 같은 오류가 발생하는데, 이유는 Enum은 DeclaredConstructors를 통한 리플렉션은 적용되지 않기 때문이다. 
![img3](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/EnumTypeError.png)

Constructors의 newInstance() 메서드에 다음과 같이 Enum은 리플렉션을 허용하지 않도록 되어있다. 
**(Modifier.ENUM)문구**

![img4](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/NotAllowReflectionAsEnum.png)

## 정리
1. Java에서 Enum을 사용하지 않고 싱글톤 패턴을 구현하는 방법은?
- **static 메서드**를 이용한 싱글톤 패턴 구현
- **Synchronized 키워드를 이용**하여 멀티쓰레드 환경에서 안전한 방법으로 싱글톤 패턴 구현
- **이른 초기화(eager initialization)을 이용**하여 멀티 쓰레드 환경에서 안전한 방법으로 싱글톤 패턴 구현
- Synchronized와 이른 초기화 방식을 대신하여 **Double Checked Locking** 방법을 이용
- 복잡한 Double Checked Locking방법 대신 **Static Inner 클래스 사용**하기

2. private 생성자와 static 메서드를 사용하는 방법의 단점은?
- private 생성자와 static 메서드를 사용할 경우, 멀티쓰레드에 안전하지 않다.

3. Enum을 사용해 싱글톤 패턴을 사용하는 방법의 장점과 단점은?

- 장점 : Enum으로는 리플렉션을 이용한 방법으로도 인스턴스를 생성할 수 없기 때문에 유일한 인스턴스임이 보장된다. 또한 Enum클래스는 내부적으로 Serializable를 구현하기 때문에 직렬화와 역직렬화 방법에도 안전하다.

- 단점 : Enum은 클래스가 로딩되는 순간 인스턴스가 미리 생성된다.

4. static inner 클래스를 사용해 싱글톤 패턴을 구현해보자.
- Singleton.java
```java
public class Singleton {
    public static void main(String[] args) {
        Settings settings = Settings.getInstance();
        Settings settings1 = Settings.getInstance();
        System.out.println(settings == settings1); // true
    }
}
```

- Settings.java
```java
public class Settings {

    private Settings() {
    }

    private static class SettingsHolder {
        private static final Settings INSTANCE = new Settings();
    }

    public static Settings getInstance() {
        return SettingsHolder.INSTANCE;
    }
}
```