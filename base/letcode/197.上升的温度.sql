

SELECT a.id FROM Weather as a cross join Weather as b  on datediff(a.recordDate,b.recordDate) = 1

    WHERE  a.Temperature  > b.Temperature 

# 通过cross join 去做交叉链接，然后通过datediff函数做时间前后天数比对