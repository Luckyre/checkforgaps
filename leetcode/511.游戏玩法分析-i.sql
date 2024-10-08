## 通过Activity 表，查询player_id下的所有event_date 的最小日期，然后把最小日期作为first_login字段，最后把player_id和first_login字段查询出来

select player_id,min(event_date) as first_login
    FROM Activity
    group by player_id