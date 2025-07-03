# SchoolManagement_Educase

This is a Node.js + Express + MySQL backend API that allows you to add schools and get nearby schools based on location.

Live Deployment Link   : https://schoolmanagment-educase.onrender.com/
-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
Postman Collection URL : [https://web.postman.co/workspace/df8f9947-55c4-47ae-8ed3-197680cdc76b/collection/41685784-f0d16ff0-b208-4917-96e5-43eb8431b32a?action=share&source=copy-link&creator=41685784](https://www.postman.com/flight-observer-15567659/school-management/collection/41685784-f0d16ff0-b208-4917-96e5-43eb8431b32a/?action=share&creator=41685784)

## 📦 Routes

- `GET /listSchools?latitude=..&longitude=..` → Returns schools sorted by distance  
- `POST /addSchool` → Adds a new school with name, latitude, longitude, and address

## 🚀 How to Run

```bash
git clone https://github.com/Atulkhiyani0909/SchoolManagment_Educase.git
cd SchoolManagment_Educase
npm install
node index.js
