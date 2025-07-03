# SchoolManagement_Educase

This is a Node.js + Express + MySQL backend API that allows you to add schools and get nearby schools based on location.

## 📦 Routes

- `GET /schools?latitude=..&longitude=..` → Returns schools sorted by distance  
- `POST /schools` → Adds a new school with name, latitude, longitude, and address

## 🚀 How to Run

```bash
git clone https://github.com/Atulkhiyani0909/SchoolManagment_Educase.git
cd SchoolManagment_Educase
npm install
node index.js
