import psycopg2
conn= psycopg2.connect(host='localhost',dbname="postgres",user="postgres",password="password",port=5432)
cur = conn.cursor()
def createTable():
    createTable="""CREATE TABLE IF NOT EXISTS userTable (
                id  int PRIMARY KEY,
                name varchar(60) NOT NULL,
                email varchar(60) NOT NULL,
                password varchar(100) NOT NULL
                );"""
    cur.execute(createTable)
    conn.commit()
def createUser(name,email,password):
    insertScript="""INSERT INTO userTable (name, email, password) VALUES (%s,%s,%s)"""
    values=(name,email,password)
    cur.execute(insertScript,values)
    conn.commit()
def selectUser(email,password):
    selectScript="""SELECT * FROM userTable WHERE email=%s AND password=%s"""
    cur.execute(selectScript,(email,password))
    for record in cur.fetchall():
        print(record)
    conn.commit()

# createUser("John","john@gmail.com","john123")
selectUser("john@gmail.com","john123")

conn.commit()
cur.close()
conn.close()