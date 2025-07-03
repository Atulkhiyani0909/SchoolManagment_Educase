// controllers/school.controllers.js
import db from '../db.js';

export const getAllSchools = async (req, res) => {
  const { latitude, longitude } = req.query;

  if (!latitude || !longitude) {
    return res.status(400).json({ error: 'latitude and longitude are required as query parameters' });
  }
// Haversine Formula in MySQL
  try {
    const [rows] = await db.query(
      `SELECT 
         *,
         (
           6371 * acos(
             cos(radians(?)) * cos(radians(latitude)) *
             cos(radians(longitude) - radians(?)) +
             sin(radians(?)) * sin(radians(latitude))
           )
         ) AS distance
       FROM schools
       ORDER BY distance ASC`,
      [latitude, longitude, latitude]
    );

    res.status(200).json(rows);
  } catch (error) {
    console.error('Error fetching schools:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


export const addSchool = async (req, res) => {
  const { name, latitude, longitude, address } = req.body;
  if (!name || !latitude || !longitude || !address) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    const [result] = await db.query(
      'INSERT INTO schools (name, latitude, longitude, address) VALUES (?, ?, ?, ?)',
      [name, latitude, longitude, address]
    );
    res.status(201).json({ message: 'School added', id: result.insertId });
  } catch (error) {
    console.error('Error adding school:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};
