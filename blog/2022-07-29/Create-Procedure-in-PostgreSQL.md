---
title: PostgreSQL 프로시저 생성
authors: [wallybum]
tags: [Database, PostgreSQL, Function, Procedure]
---

PostgreSQL DBMS 여러 버전에서 Function과 Procedure를 생성하는 작업을 할 일이 있었다. 
Function과 Procedure 생성은 공식문서를 통해 생성 방법을 쉽게 확인할 수 있었다.
중요한 점은 PostgreSQL 11버전부터 **Create Procedure** 구문을 통해 Procedure 생성을 지원한다는 문구가 이목을 끌었다.

**'그러면 PostgreSQL 11 이전 버전에서는 Procedure를 어떻게 생성하지? 설마 지원을 안 했나?'** 

라는 생각에서 확인하고 기록을 남기려고 한다.

<!--truncate-->

## 데이터베이스 환경
- Postgresql 9.2, PostgreSQL 11 이상


## Function과 Procedure
Function과 Procedure에 대한 차이를 조사하다 보면, **Function은 반환 값이 있으며, Procedure는 반환 값이 없다.** 라는 글을 자주 접할 수 있는데, 결론부터 말하면 이 내용은 완전히 잘못된 정의이다. **Function과 Procedure 둘 다 반환 값을 가질 수 있다.**

### Function 생성 예제
```sql
-- 새 펑션
CREATE FUNCTION addfunc(a INTEGER, b INTEGER)
RETURNS INTEGER AS
$$ BEGIN
    RETURN a+b;
END; $$
LANGUAGE PLPGSQL;

-- 새 펑션
COMMENT ON FUNCTION public.addfunc(INTEGER, INTEGER) IS '펑션 주석';
```
### Procedure 생성 예제 (반환 값이 없는 경우)
```sql
CREATE TABLE TB_PROCEDURE(
     COL VARCHAR NULL
);

CREATE PROCEDURE insert_data(a integer, b integer)
LANGUAGE SQL
AS $$
INSERT INTO TB_PROCEDURE VALUES (a);
INSERT INTO TB_PROCEDURE VALUES (b);
$$
```
### Procedure 생성 예제 (반환 값이 있는 경우, PostgreSQL 11 이후)
```sql
create procedure increase(inout i integer )
LANGUAGE 'plpgsql'
AS $$
begin
    i = i+1;
    return;
end ;
$$;

call increase(1);
```

위 예시를 통해 Procedure도 반환값을 가질 수 있다.

## Function과 Procedure의 차이
그렇다면 왜 사람들은 **Function은 반환 값이 있으며, Procedure는 반환 값이 없다.** 라는 결론을 낸 것일까? 라는 생각을 해보았다. 사람들이 이러한 결론에 도달하게 된 어떠한 게시물을 기반으로 검증 없이 Copy & Paste를 했을 것이라고 생각하진 않는다. 추측 하건대, 아래의 두 이유라고 생각한다.

### Create Procedure 구문의 부재
다른 RDBMS들은 과거부터 Create Function 구문과 Create Procedure 구문을 각각 지원하였다.
하지만 PostgreSQL의 경우 PostgreSQL 11버전부터 Create Procedure를 지원하였다.

### Trigger Procedure를 이용한 절차 수행
PostgreSQL 11 이전에는 공식적으로 Function만 존재하였다. 하지만 어떠한 절차를 수행하고자 할 때, PostgreSQL에서는 트리거 프로시저(Trigger Procedure)라는 기능을 제공하였다.

트리거 프로시저는 PL/pgSQL을 사용하며, **CREATE FUNCTION** 키워드를 사용하며, 반환 값이 trigger인 함수로 선언한다고 안내되어있다. 기능상으로는 다른 RDBMS와 같이 절차(Procedure)를 수행하지만, **CREATE FUNCTION** 문법을 사용한다는 점, 그리고 일반적인 FUNCTION을 생성하는 구문의 문법적인 차이가 없다.

PostgreSQL 공식문서에서도 이러한 내용은 다루고 있지 않으며, 트랜잭션 처리를 제외하고는 Function과 Procedure의 차이가 없기 때문에 PostgreSQL을 사용하는 유저들은 Function = Procedure라고 생각 하였을 것이라고 추측한다.

이와 관련해서 조금 더 찾아본 결과, [여기](https://dba.stackexchange.com/questions/2357/what-are-the-differences-between-stored-procedures-and-stored-functions)에서는 이 주제와 관련하여 저명성이 높은 사람들의 여러 의견을 확인할 수 있었고, 과거에는 Function과 Procedure를 동의어로 취급했다는 내용도 확인할 수 있었다.

## 결론
PostgreSQL 11 이전 / 이후 버전에서 펑션과 프로시저를 조회하는 쿼리를 작성하고자 한다.
PostgreSQL 11 이후부터는 pg_proc 테이블에 **prokind**라는 컬럼이 추가되었는데, 사용자가 **CREATE FUNCTION**을 사용하였다면 'f'가 **Create Procedure**를 사용하였다면 'p' 값이 추가된다.
즉, prokind 컬럼에 조건을 걸어 펑션, 프로시저를 명확히 필터링하여 조회할 수 있다.
### PostgreSQL 11 이상버전에서 펑션 조회
```sql
select
		ns.nspname as schemaName
	,	proc.proname as routine_name
	,	pg_get_functiondef(proc.oid) as definition
	,	pg_get_function_arguments(proc.oid) as arguments
	,	lang.lanname as lang_name
	,	obj_description(proc.oid) as comment
	,	proc.prokind -- 추가됨
	,	provolatile
	,	procost
	,	prorows
	,	prosecdef
	,	proleakproof
	,	proisstrict
	,	proretset
	,	type.typname as retuntype
from pg_proc as proc
join pg_namespace as ns on proc.pronamespace = ns.oid
join pg_language as lang on proc.prolang = lang.oid
join pg_type as type on proc.prorettype = type.oid
where nspname='{스키마 명}'
and proc.prokind = 'f' -- 프로시저 조회 시 prokind 값이 f
```
### PostgreSQL 11 이상버전에서 프로시저 조회
```sql
select
		ns.nspname as schemaName
	,	proc.proname as routine_name
	,	pg_get_functiondef(proc.oid) as definition
	,	pg_get_function_arguments(proc.oid) as arguments
	,	lang.lanname as lang_name
	,	obj_description(proc.oid) as comment
	,	proc.prokind -- 추가됨
	,	provolatile
	,	procost
	,	prorows
	,	prosecdef
	,	proleakproof
	,	proisstrict
	,	proretset
	,	type.typname as retuntype
from pg_proc as proc
join pg_namespace as ns on proc.pronamespace = ns.oid
join pg_language as lang on proc.prolang = lang.oid
join pg_type as type on proc.prorettype = type.oid
where nspname='{스키마 명}'
and proc.prokind = 'p' -- 프로시저 조회 시 prokind 값이 p
```

하지만, PostgreSQL 11 이전에는 prokind 컬럼도 없고, **Create Procedure** 구문도 없었기 때문에 prokind 통해 명확히 Function과 Procedure를 구분할 수는 없으나, 많은 사람들이 PostgreSQL 11 이전에서는 **Create Function** 구문을 이용하여 반환 값이 trigger인 트리거 프로시저를 사용하였다는 점을 통해 다음의 조회 쿼리를 통해 프로시저 정보를 조회할 수 있을 것이라 생각한다. (단, 기준 점 자체가 모호하였던 과거이기에 100% 확실하지는 않다.)

### PostgreSQL 11 이전 버전에서 펑션 조회
```sql
select
		ns.nspname as schemaName
	,	proc.proname as routine_name
	,	pg_get_functiondef(proc.oid) as definition
	,	pg_get_function_arguments(proc.oid) as arguments
	,	lang.lanname as lang_name
	,	obj_description(proc.oid) as comment
	,	proiswindow -- 11이상 버전에서는 사라진 컬럼
	,	provolatile
	,	procost
	,	prorows
	,	prosecdef
	,	proleakproof
	,	proisstrict
	,	proretset
	,	type.typname as returntype
from pg_proc as proc
join pg_namespace as ns on proc.pronamespace  = ns.oid
join pg_language as lang on proc.prolang = lang.oid
join pg_type as type on proc.prorettype = type.oid
where nspname ='{스키마 명}'
and proc.proisagg = false
```

### PostgreSQL 11 이전 버전에서 프로시저 조회
```sql
select
		ns.nspname  as schemaName
	,	proc.proname  as routine_name
	,	pg_get_functiondef(proc.oid) as definition
	,	pg_get_function_arguments(proc.oid) as arguments
	,	lang.lanname as lang_name
	,	obj_description(proc.oid) as comment
	,	proiswindow
	,	provolatile
	,	procost
	,	prorows
	,	prosecdef
	,	proleakproof
	,	proisstrict
	,	proretset
	,	type.typname as returntype
from pg_proc as proc
join pg_namespace as ns on proc.pronamespace  = ns.oid
join pg_language as lang on proc.prolang = lang.oid
join pg_type as type on proc.prorettype = type.oid
where nspname = '{스키마 명}'
and type.typname in ('trigger')
```
