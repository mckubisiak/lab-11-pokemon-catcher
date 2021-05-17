## Making a plan
1) Make a drawing of your app. Simple "wireframes"
2) Once you have a drawing, name the HTML elements you'll need to realize your vision
3) For each HTML element ask: Why do I need this?
4) Once we know _why_ we need each element, think about how to implement the "Why" as a "How"
5) Is there some state we need to initialize?
6) Find all the 'events' (user clicks, form submit, etc) in your app. Ask one by one, "What happens when" for each of these events.
7) Think about how to validate each of your steps
8) Consider your data model. What objects will you be using? What are the key/value pairs? What arrays do you need? What needs to live in local storage?
9) Consider what features _depend_ on what other features. Use this dependency logic to figure out what order to complete tasks.


-html
    button
    3+random pokemon radios 

events 
    page on load in
        get pokedex  edged case! 
        render random pokemon 
        update pokedex 

    on click
        increment captured
        random  new pokemon
            while loop prevent dupes  
        increment encounterd 



utils.js functions 
    get tracker
    set tracker 
    encounter tracker 
    captured tracker




1) Generate 3 imgs with radio buttons
    1) Create a randomNumber generator 
    2) import rawPokeMonData from data
    3) get random pokenmon with duplicating display
    4) use a while loop and reassign string to achieve it
    **function increment the encounter by 1** 

2) Create a button that allows users to capture pokemon
    1) cache the button from html 
    2) addEvenLisnterner to the button
    **function capture** 

3) Events
3) ``` function encounteredPokemon() {} ``` 
    1) Load the page
        1) Get a list =>  **edge case:** ```else return []; ``` 
        2) Set the first Random PokeMon
        3) Return the imgs of PokeMon and increment the pokeDex Array of ecountering. 
        

    2) Button click
     ``` function capturedPokeMon() {} ```

        1) Increment the caputured pokemon
        2) render a new set of pokemons
            *Edge Case* => account for duplicates
        3) Increment the encouter 
        4) Return the new set of imgs to the DOM

           
