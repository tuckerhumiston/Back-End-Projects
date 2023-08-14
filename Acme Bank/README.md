# ACME Bank Website Security

## Description
 This project is a completed assignment designed to demonstrate my abilities to integrate modern web security practices to full stack applications. The application is a simple mock banking website that allows users to login, transfer funds between accounts, download records, download public ledger, and chat in a public forum. 
 For the assignment I was given the completed front and back code with many security vulnerabilities. My task was to identify and fix the vulnerabilities.

### Found Vulnerabilities

- SQL Injection
- Cross Site Scripting
- Path Traversal

### Methods Used to Fix Vulnerabilities
1. Secured headers using helmet middleware
2. Sanitized user input using express-validator
3. Used prepared statements to prevent SQL injection
4. Restricted path traversal using path module


Date Completed: 08/14/2023