---
authors: [wallybum]
tags: [디자인 패턴, 싱글톤 패턴]
sidebar_position: 2
---
# 싱글톤 패턴(Singleton Pattern)

## 개요
오직 1개의 인스턴스를 만들어 제공하는 클래스가 필요할때 사용한다.
예를 들어 응용프로그램에서 환경설정 1, 환경설정 2가 있다면 사용자는 자신이 설정한 값이 어느 환경설정에 값을 지정하였는지 해깔릴 수 있다.
그렇기 때문에 환경설정이라는 것은 오직 1개만 있어야 하며, 이러한 경우에 싱글톤 패턴을 사용한다.

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
위와같이 new를 이용하여 만든 인스턴스들은 서로 같지 않다.

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

위 그림과 같이 쓰레드 1번이 빨간색 1번의 if절을 만난 뒤, instance가 null 이여서 빨간색 2번 내부로 들어갔을 때, 쓰레드 2번이 파란색의 1번의 if절을 만난 뒤, instance가 null 이여서 파란색 2번 내부로 들어갈 수 도 있다.

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

    private static Settings instance;

      private static final Settings INSTNACE = new Settings();

      public static Settings getInstance() {
          return INSTNACE;
      }
}
```

### Double Checking locking을 이용하여 멀티 쓰레드 환경에서 안전하게 싱글톤 패턴 구현
Synchronized를 사용하자니, 동기화를 처리하는 작업이 부담되고, 그렇다고 이른 초기화를 하자니 비싼 비용의 인스턴스가 부담될 수 있다.

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
빨간색 쓰레드가 1번에서 if문을 만나고, instance가 null 이기 때문에 2번을 수행한다.  
이때, 파란색 쓰레드가 1번의 if문을 만나고, 파란색의 2번을 만나게 되면, 빨간색 쓰레드가 먼저 synchronized를 만났기 떄문에 수행이 종료될 때 까지 대기를 하게된다. 파란색 쓰레드가 대기를 하는동안, 빨간색 스레드는 3번을 수행하고, Settings 인스턴스를 생성하게되고, 파란색 스레드가 그 다음작업을 수행하려고 할 때, 이미 instance는 null이 아니기 때문에 if문을 수행하지 않는다.  
이렇게 함으로써 Thread-Safe가 된다.

![img2](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/DoubleCheckingLocking.png)

또한 이 방법을 수행하기 위해서는 **volatile** 라는 키워드를 사용해야하는데, 이 키워드는 JDK 1.5 이상부터 지원하며, Java변수를 Main Memory에 저장함으로써 변수 값 불일치 문제를 해결할 수 있고, 멀티 쓰레드 환경에서 하나의 쓰레드만 read & write를 하게된다.

### Static Inner 클래스를 사용하여 멀티 쓰레드 환경에서 안전하게 싱글톤 패턴 구현
Double Checking locking 방식이 좋기는 하지만 volatile 등 고려 해야할것들이 많다.  
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

## 싱글톤 패턴 사용 시 주의점

### 직렬화 & 역직렬화
Java에는 Object를 파일 형태로 디스크에 저장(직렬화) 하고, 다시 읽어들이는(역직렬화)가 가능하다.  
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
     * readObject가 만들어낸 인스턴스를 대체할 수 있다.
     */
    protected Object readResolve() {
        return getInstance();
    }
}
```

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

위 직렬화 & 역직렬화는 **readResolve()** 메서드를 통해 싱글톤을 보장할 수 있지만, 리플렉션의 경우 Native 코드를 이용한것이기 때문에 방어가 싱글톤 패턴을 무력화 시킬 수 있다.

하지만, **Enum**을 이용하면 리플렉션에서도 싱글톤 객체를 보장할 수 있다.

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

Settings 클래스가 엄청 간단해졌다. 그리고 위 Singleton클래스를 run 하게되면 다음과 같은 오류가 발생한다.
![img3](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/EnumTypeError.png)

Enum은 DeclaredConstructors를 통한 리플렉션은 적용되지 않는데, Constructors의 newInstance() 메서드에 다음과 같이 enum은 리플렉션을 허용하지 않도록 되어있다.

![img4](../../../static/img/docs/development/Design%20Pattern/SingletonPattern/NotAllowReflectionAsEnum.png)
