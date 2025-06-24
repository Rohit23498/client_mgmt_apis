const express = require('express');
const router = express.Router();
const pool = require('../db');

// Get all clients
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM client_management');
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get client by ID
router.get('/:id', async (req, res) => {
  try {
    const [rows] = await pool.query('SELECT * FROM client_management WHERE id = ?', [req.params.id]);
    if (rows.length === 0) return res.status(404).json({ error: 'Client not found' });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Create new client
router.post('/', async (req, res) => {
  try {
    const data = req.body;
    const [result] = await pool.query(
      'INSERT INTO client_management (client_name, client_email, client_phone, client_address, project_name, project_description, project_start_date, project_end_date, project_status) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [data.client_name, data.client_email, data.client_phone, data.client_address, data.project_name, data.project_description, data.project_start_date, data.project_end_date, data.project_status || 'Open']
    );
    res.status(201).json({ id: result.insertId, ...data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Update client
router.put('/:id', async (req, res) => {
  try {
    const data = req.body;
    const [result] = await pool.query(
      'UPDATE client_management SET client_name=?, client_email=?, client_phone=?, client_address=?, project_name=?, project_description=?, project_start_date=?, project_end_date=?, project_status=? WHERE id=?',
      [data.client_name, data.client_email, data.client_phone, data.client_address, data.project_name, data.project_description, data.project_start_date, data.project_end_date, data.project_status, req.params.id]
    );
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Client not found' });
    res.json({ id: req.params.id, ...data });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Delete client
router.delete('/:id', async (req, res) => {
  try {
    const [result] = await pool.query('DELETE FROM client_management WHERE id = ?', [req.params.id]);
    if (result.affectedRows === 0) return res.status(404).json({ error: 'Client not found' });
    res.json({ message: 'Client deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router; 