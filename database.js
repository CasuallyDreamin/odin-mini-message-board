const path = require('path');
const Database = require('better-sqlite3');

const dbPath = path.join(__dirname, 'messages.db');
const db = new Database(dbPath);

db.prepare(`
  CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    content TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  )
`).run();


module.exports = db;
