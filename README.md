# coding-project-template


Final  project by Vampeyer 
1 / 7 / 2024 , 

This is a Node Application , for a backend framesork that is working. 

to test and run ,

1. first clone the repository and  
2. Test out the endpoints , provided in  final_project/router/general.js , by first installing npm , then running the nodemon server. 
This can be done by ,  first  , opening up the terminal using vscodium , or a similar IDE , and type  

 - npm install         
                        - this will install all the dependencies needed for the node application , from the package.json  file , under - dependencies.  

3. -  npm start    //in the terminal will not start the terminal , and start a server on localhost:5000    // PORT = 5000  //  where the port is set to port 5000. 

4. with the nodemon server running , you can now visit the following end points in the browser , to view the book data and their reviews. 

 - http://localhost:5000   for the endpoint "/"
  
  - http://localhost:5000/isbn/:isbn   for the endpoint "/isbn/:isbn "  
      ( replace isbn with the books isbn # , ex http://localhost:5000/isbn/99  )


   - http://localhost:5000/author/:author   for the endpoint "/author/:author"
     replacing :author with the authors name again in the url , like 
        http://localhost:5000/author/:unknown


 - http://localhost:5000/title/:title   for the endpoint "/title/:title" 
        replacing :author with the authors name again in the url , like 
        http://localhost:5000/title/TheEpicofGilgamesh

    
/review/:isbn

   - http://localhost:5000/review/:isbn   for the endpoint "/review/:isbn" 

   -- Too view the review of a movie only , based on its isbn #. 

      ( replace isbn with the books isbn # , ex http://localhost:5000/review/99  ) 

---------------------------------------------------------------------

- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 
Async Await functionality was built into the existing framework , and can be kept or removed in each endpoint , both achieving the desired result. 
- - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - 

----------------------------------------------------------------------
- Authentication can also be found ,  short circuited , by using a get request  too  - http://localhost:5000/register


(  Username and JWT hand shake , from a put request  , for authenticated logon to be validated at a later date.    )  
------------------------------------------------------------------------


# End Notes  ------------------------------------------------------

--- I really liked this project , it took me a bit more time than I had originally planned , but I would like to thank IBM for this coursework and framework , as it was exceptionally useful , and spot on. 



I will certinly implement the routing I have learned here , and most of all I actually really like my own little book store.  
------------------------------------------------------------------------




