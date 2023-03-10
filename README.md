# Email Campaigns System

For this project I want to implement an entire email campaigns system with Node.

This project is currently in a very early development stage, so feel free to raise an issue to propose anything you have in mind.

## Main usage idea:

- Users will be able to store information of their "Clients"
- Users will only have acces to their Clients data.
- Users will be able to send mails to certain groups of clients choosing between different email templates
- Users should be able to track analytics of their campaigns through a dashboard.

## Implementation

An API handles the services

- Endpoints for user access (Registering, Login, Email verification)
- Endpoints for manage clients (Basic CRUD)
- Endpoints for starting and track campaings

A client app that feeds from the API.

- Register and login page
- Main dashboard:
  - Analytics
  - Users
  - Campaign creation

## Stack

API: Node.js + Express.js
DB: Mongo for users and clients, not sure how to handle campaigns.
Client: React
Hosting: Not decided yet
