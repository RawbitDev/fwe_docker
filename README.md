# FWE Docker
Just a simple docker with MySQL and Node.js!

### To start the docker use:
```
make start
```
NOTE: If you're getting a timeout the first time running it, try starting it again ;)

### To stop the docker use:
```
make stop
```
Have fun :)



## Known issues:

- Disable "Use the WSL 2 based engine (requires Win 10 build 19018+)" and use the Hyper-V backend, otherwise **nodemen** wont work, so you would have to restart your container every time you make change
