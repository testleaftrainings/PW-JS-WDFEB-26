import mysql from 'mysql2/promise';

export async function getConnection() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'orangehrm',
        port: 3306
    });
}

// Generic query function
export async function executeQuery(query: string, values: any[] = []) {
    const connection = await getConnection();

    const [rows, fields] = await (connection as any).execute(query, values);
    
    console.log(fields);
    
    
    await connection.end();

    return rows;
}


/* Notes :
.execute(query, values)
Method from mysql2 library

👉 It runs:

query + values
Example:
query  = "SELECT * FROM users WHERE id = ?"
values = [10]

👉 Internally becomes:

SELECT * FROM users WHERE id = 10

✔ Safe (prevents SQL injection)

🔹 4. await
.execute() is asynchronous
Returns a Promise

👉 So:

await connection.execute(...)

means:

“Wait until DB returns result”

🔹 5. What .execute() returns

This is the MOST IMPORTANT part:

It returns an array with 2 elements:

[rows, fields]

🔸 rows
Actual data from DB

Example:

[
  { employee_id: '1234' }
]
🔸 fields
Metadata about columns (rarely used)

🔹 6. const [rows] = ... (Destructuring)

This is array destructuring

👉 Instead of:

const result = await connection.execute(query, values);
const rows = result[0];

👉 We write:

const [rows] = await connection.execute(query, values);

✔ Cleaner
✔ Directly extracts first element

🔹 Final Flow
Execute SQL query

DB returns:

[rows, fields]

Destructuring picks:

rows = first element
Ignore fields
🔹 One-Line Meaning

👉
“Run the query on DB, wait for the result, extract only the data (rows), and store it in rows.”


Frequently asked:

👉 Why [rows] and not just rows?

Answer:

Because .execute() returns an array [rows, fields], and we use destructuring to extract only the first element (rows). */