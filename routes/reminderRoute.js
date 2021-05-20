const express = require('express');
const router = express.Router();

const reminderService = require('../services/reminderService');

router.get('/',
    async (req, res) => {
        try {
            const result = await reminderService.getAllReminders();
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.post('/',
    async (req, res) => {
        try {
            //info for customer
            const firstName = req.body.first;
            const lastName = req.body.last;
            const DOB = req.body.birth;
            const primaryPhone = req.body.phone;
            const secondaryPhone = req.body.addPhone;
            const primaryEmail = req.body.email;
            const secondaryEmail = req.body.addEmail;
            //info for reminder
            const title = req.body.title;
            const notes = req.body.notes;
            const dueDateStr = req.body.due;
            const stepsID = req.body.stepsID;
            const result = await reminderService.createReminder(firstName, lastName, DOB, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail, title, notes, dueDateStr, stepsID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.put('/',
    async (req, res) => {
        try {
            //info for customer
            const firstName = req.body.first;
            const lastName = req.body.last;
            const DOB = req.body.birth;
            const primaryPhone = req.body.phone;
            const secondaryPhone = req.body.addPhone;
            const primaryEmail = req.body.email;
            const secondaryEmail = req.body.addEmail;
            //info for reminder
            const reminderID = req.body.reminderID;
            const title = req.body.title;
            const notes = req.body.notes;
            const dueDateStr = req.body.due;
            const stepsID = req.body.stepsID;
            const result = await reminderService.updateReminderByID(reminderID, firstName, lastName, DOB, primaryPhone, secondaryPhone, primaryEmail, secondaryEmail, title, notes, dueDateStr, stepsID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.delete('/',
    async (req, res) => {
        try {
            const reminderID = req.query.reminderID;
            const result = await reminderService.deleteReminderByID(reminderID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

router.get('/:reminderID',
    async (req, res) => {
        try {
            const reminderID = req.params.reminderID;
            const result = await reminderService.getReminderByID(reminderID);
            res.status(200).send(result);
        } catch (error) {
            res.status(500).json({ err: [{ msg: error.message }] });
        }
    });

module.exports = router;