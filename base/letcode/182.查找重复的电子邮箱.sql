SELECT email AS Email FROM  Person 
group by  email
having count(id)>1