import psycopg2

def createTable():
    conn = psycopg2.connect(host='localhost', dbname="postgres", user="postgres", password="password", port=5432)
    cur = conn.cursor()
    createTable="""CREATE TABLE IF NOT EXISTS userTable (
                id  int PRIMARY KEY,
                name varchar(60) NOT NULL,
                email varchar(60) NOT NULL,
                password varchar(100) NOT NULL
                );"""
    cur.execute(createTable)
    conn.commit()
    cur.close()
    conn.close()

def createUser(name,email,password):
    conn = psycopg2.connect(host='localhost', dbname="postgres", user="postgres", password="password", port=5432)
    cur = conn.cursor()
    selectScript=f"""SELECT * FROM userTable WHERE email='{email}' """
    cur.execute(selectScript)
    data=cur.fetchall()
    message=""
    if len(data):
        message="user already exists"
    else:

        insertScript="""INSERT INTO userTable (name, email, password) VALUES (%s,%s,%s)"""
        values=(name,email,password)
        cur.execute(insertScript,values)
        message="user created"
    print(message)
    conn.commit()
    cur.close()
    conn.close()

    return message
def selectUser(email,password):
    conn = psycopg2.connect(host='localhost', dbname="postgres", user="postgres", password="password", port=5432)
    cur = conn.cursor()
    selectScript="""SELECT * FROM userTable WHERE email=%s AND password=%s"""
    cur.execute(selectScript,(email,password))
    message=cur.fetchall()
    conn.commit()
    cur.close()
    conn.close()
    return message

# createUser("Kate","kate@gmail.com","kate123")
# selectUser("john@gmail.com","john123")
# createUser("John","john@gmail.com","john123")

