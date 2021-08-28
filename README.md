# XPassKey🔑
*🔒Generate a secure passkey directly from your command line.*

<p align="center">
   <img src="media/banner1.gif" alt="Logo"/>
</p>
<!-- PROJECT LOGO -->

[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://GitHub.com/Naereen/StrapDown.js/graphs/commit-activity)

<!-- ABOUT THE PROJECT -->

## Built With

<p align="left">
   <img alt="NodeJS" src="https://img.shields.io/badge/node.js-%2343853D.svg?style=for-the-badge&logo=node.js&logoColor=white"/>
   <img alt="ExpressJS" src="https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB"/>
   <img alt="MongoDB" src="https://img.shields.io/badge/mongodb-%23404d59.svg?style=for-the-badge&logo=mongodb"/>
</p>

## Notable Features

- *Option to save passwords to local text file.*
- *Generated passkeys are hashed and stored in MongoDB.*
- *User-based filters on numeric and symbolic characters.*
- *Generated passskeys are automatically saved to user clipboard.*
---

## 🔥 Screenshots

| **xpasskey** | **xpasskey -ns** |
| - | - |
| <img src="media/1.PNG"  width="1000"/> | <img src="media/2.PNG"  width="1000"/> |

| **xpasskey -nn** | **xpasskey --list** |
| - | - |
| <img src="media/3.PNG"  width="1000"/> | <img src="media/4.PNG"  width="1000"/> |


<!-- BUILT WITH -->  

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

## Commands

**1. Generate passkey of custom length using**

   ```
   xpasskey --length=<number>
   ```  
   
**2. Generate passkey without numeric characters**  

   ```
   xpasskey --no-numbers
   ```  
   
**3. Generate passkey without symbolic characters**  

   ```
   xpasskey --no-symbols
   ```  
   
**4. Save generated passkey to local text file**  

   ```
   xpasskey --save
   ```  
   
**5. Display hashed passwords in database**  

   ```
   xpasskey --list
   ```  

**6. Clear contents of local passkey text file**  

   ```
   xpasskey --clear
   ```  
---

## Contributing

If you'd like to contribute, please **fork** the repository and then raise a PR with necessary changes. Thank you.

---

## 🤎 Found this project interesting?

If you found this project useful, then please leave a :star: on Github💔.

---

## :man: Project Maintained By-
  - [Sandipan Das](https://linkedin.com/in/sandipan0164/)
