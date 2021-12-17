# XPassKey🔑
***🔒 Password management made simpler. Generate a secure passkey instantly from your command line.***

<!-- PROJECT LOGO -->

<!-- ABOUT THE PROJECT -->

## Built With

<p align="left">
   <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img alt="MongoDB" src="https://img.shields.io/badge/mongodb-%23404d59.svg?style=for-the-badge&logo=mongodb"/>
</p>

## Notable Features

- *Supports **CRUD** functionality for passkeys on MongoDB Atlas*
- *User choice to save passkeys to **local text file**.*
- *Generated passkeys are hashed and stored in MongoDB.*
- ***User-based filters** on numeric and symbolic characters.*
- *Generated passskeys are automatically saved to user clipboard.*.
- *Support for password validation inside the interface.*

## How to Install Locally

**1. Fork and clone this repository using**

   ```
   git clone https://github.com/sandip2224/XPassKey.git
   cd XPassKey/
   ```  
   
**2. Install required dependencies using**  

   ```
   npm install
   ```  

**3. Create a global symlink using**  

  ```
  npm link
  ```

**4. Create an environment variable (.env) inside root directory and set the following:**  

  ```
  MONGO_URI=<Your_Unique_MongoDB_Cluster_URI>
  ```

## Commands

| **Short** | **Long**              | **Description**                     | **Preview Images**|
| ----- | ----------------- | ------------------------------- | -- |
| gen    | generate | ➕ Generate a new passkey for an account | [Preview](media/1.PNG) |
| f    | find            | 🔍 Search for an existing account passkey  | [Preview](media/2.PNG) |
| u   | update      | 📝 Update an account passkey                | [Preview](media/3.PNG) |
| del   | delete      | 🚩 Delete a passkey from database                  | [Preview](media/4.PNG) |
| l    | list            | 🔑 Display all existing passkeys in database      | [Preview](media/5.PNG) |
| auth    | authenticate            | 🔍 Do you remember your account passkey? Check here      | [Preview](media/7.PNG) |
| -h    | --help         | 🚀 Display help for command                | [Preview](media/6.PNG) |


---

## :man: Project Maintained By-
  - [Sandipan Das](https://linkedin.com/in/sandipan0164/)

<div align="center">
  <img src="https://img.shields.io/badge/Please%20star%20if%20you%20like%20it-lightcoral?logo=Starship&style=for-the-badge" width="300" height="35"/>
</div>
