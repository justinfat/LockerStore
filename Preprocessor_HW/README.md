# Preprocessor_HW
## Automation with parcel
```
$ ../node_modules/.bin/parcel ./parcel/index.pug --port [port]
```
In the above command, please replace **[port]** to an appropriate value.  
Then, open http://luffy.ee.ncku.edu.tw:[port] in your browser.  
  
For example, if you replace [port] to 9876,   
then please open http://luffy.ee.ncku.edu.tw:9876 in the browser.

## If you want to compile pug, sass, and ts files separately
### Step 1: pug to html
```
$ ../node_modules/.bin/pug ./src -o ./dst/ --pretty
```
### Step 2: sass to css
```
$ ../node_modules/.bin/node-sass ./src -o ./dst
```
### Step 3: ts to js
```
$ tsc [file name]
```
### Step 4: Run server
```
$ node ./server.js [port]
```
In the above command, please replace **[port]** to an appropriate value.  
Then, open http://luffy.ee.ncku.edu.tw:[port] in your browser.
