<p align="center">
  <img src='./src/assets/kamyroll_logo.svg' width='200'>
</p>

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)![Tauri](https://img.shields.io/badge/tauri-%2324C8DB.svg?style=for-the-badge&logo=tauri&logoColor=%23F0330A)
# Kamyroll-Tauri
[![Version](https://img.shields.io/badge/Version-v1.0.0-green.svg)](https://github.com/kamyroll/Kamyroll-Tauri/releases/tag/v1.0.0)
[![ci-build](https://github.com/kamyroll/Kamyroll-Tauri/actions/workflows/main.yml/badge.svg)](https://github.com/kamyroll/Kamyroll-Tauri/actions/workflows/main.yml/)


## Description
Kamyroll-Tauri is a computer client allowing you to view your favorite anime thanks to Kamyroll.

## Feature
Working with the [Kamyroll-API](https://github.com/kamyroll/Kamyroll-Wiki), this application will allow you access to the content of the different platforms supported by the API. It notably allows the streaming of your favorite series in the majority of available languages thanks to an auto-translation system integrated into the API. With a simple interface, getting started is quick and easy.

## How to install
#### Linux
```bash
wget https://github.com/kamyroll/Kamyroll-Tauri/releases/download/v1.0.0/kamyroll_1.0.0_amd64.deb
sudo dpkg -i kamyroll_1.0.0_amd64.deb
```
<details>
<summary>if there is an error</summary>
<br>

```bash
sudo apt update
wget http://archive.ubuntu.com/ubuntu/pool/main/o/openssl/libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb
sudo dpkg libssl1.1_1.1.1f-1ubuntu2.16_amd64.deb
sudo apt install gstreamer1.0-plugins-bad
sudo dpkg -i kamyroll_1.0.0_amd64.deb
```
  
</details>

---
*This scripts are created by __Bilnaa__.  
Find us on [discord](https://discord.com/invite/g6JzYbh) for more information on projects in development.*
