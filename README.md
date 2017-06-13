## Compare

###Description

Compare two text files

* in case if line has changed
– in case if line exists in the first file but does not exist in the second one
+ in case if line does not exist in the first file but exists in the second one
Nothing if line has not changed.

For example:

File1
Some
Simple
Text
File

File2
Another
Text
File
With
Additional
Lines

Result

1. -
2. -
3. *
4. *
5. +
6. +
7. +
8. +




###Install

    yarn install
    
###Run application on localhost

    1) check that port 3000 is available
    2) yarn start
    3) in browser go to http://localhost:3000

###Try it online

http://akaravsky.github.io/compare
