import fs from 'fs';
import path from 'path';

const DB_FILE = path.join(process.cwd(), 'data', 'submissions.json');

// 确保data目录存在
if (!fs.existsSync(path.dirname(DB_FILE))) {
  fs.mkdirSync(path.dirname(DB_FILE), { recursive: true });
}

// 确保数据文件存在
if (!fs.existsSync(DB_FILE)) {
  fs.writeFileSync(DB_FILE, JSON.stringify({ submissions: [] }));
}

export interface Submission {
  id: string;
  text: string;
  mode: string;
  language: string;
  voice: string;
  backgroundVideo: string;
  backgroundMusic: string;
  email: string;
  createdAt: string;
}

export async function saveSubmission(data: Omit<Submission, 'id' | 'createdAt'>): Promise<Submission> {
  const fileContent = await fs.promises.readFile(DB_FILE, 'utf-8');
  const db = JSON.parse(fileContent);
  
  const submission: Submission = {
    ...data,
    id: Math.random().toString(36).substring(2, 15),
    createdAt: new Date().toISOString()
  };
  
  db.submissions.push(submission);
  await fs.promises.writeFile(DB_FILE, JSON.stringify(db, null, 2));
  
  return submission;
}

export async function getSubmissionById(id: string): Promise<Submission | null> {
  const fileContent = await fs.promises.readFile(DB_FILE, 'utf-8');
  const db = JSON.parse(fileContent);
  
  return db.submissions.find((s: Submission) => s.id === id) || null;
}

export async function getAllSubmissions(): Promise<Submission[]> {
  const fileContent = await fs.promises.readFile(DB_FILE, 'utf-8');
  const db = JSON.parse(fileContent);
  
  return db.submissions;
}
