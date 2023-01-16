![CI logo](https://codeinstitute.s3.amazonaws.com/fullstack/ci_logo_small.png)

Welcome ADD-Faun,

This is the Code Institute student template for Gitpod. We have preinstalled all of the tools you need to get started. It's perfectly ok to use this template as the basis for your project submissions.

You can safely delete this README.md file, or change it for your own project. Please do read it at least once, though! It contains some important information about Gitpod and the extensions we use. Some of this information has been updated since the video content was created. The last update to this file was: **September 1, 2021**

# Widnes Climbers

Widnes Climbers is a site to help people in Widnes come together and go climbing together in the surrounding area both indoors and outdoors.
The puspose is to be simple in informing people that there is a group of people who welcome others to join them.

Its aim is for climbers of Widnes to join the social medias or sign up to the newsletter if they wish.
The site is designed to present the opurtunity to join a group that is simple and friendly.
The site will target new and experienced climbers who would like company while they climb or just want to get into the sport and need encouragement.

Widnes Climbers will explain the different types of climbing the group does and when they meet. 
It will have a sign up newsletter with questions about what type of climbing the visitor is interested in, so they can be informed on when and where that type is 
and be notified of changes.
 

![Responsice Mockup](assets/images/responsiveness-readme.jpg)

## Features 

### Existing Features

- __Game Area__

  - Displays images to show the user and computer choices.
  - Cycles through images of rock, paper and scissors to imitate what people say when they play in real life.
  - Images are cycled through with a final question mark image for suspence before showing the choices.
  - Player & computer choices are displayed and an alert tells the if they won, lost or drew.
  - Alert tells them what choices they made and if they lost tells them which choice could of won.
  
- __Game text__
    - Text starts as "What will you choose?" to make the game seem more personable.
    - This text changes when players have selected a choice to indicate they have successfully made a choice.
    It changes to "you have chosen:" and says the choice they made.
    - Text changes at the end of the turn to indicate it is over by telling the player they either won, lost 
    or drew and telling them the choice they had made.

![Nav Bar](assets/images/navigation-mock-up.png)

- __Score__
    - The wins, loses and draws of the player are tracked & displayed here for players enjoyment
    - Wins, loses and draws are coloured green, red and orange respectively so player can easily see which
    is good, bad and neutral.

- __Instructions__
    - Instructions for how to play are displayed to help users interact with the page.
    - A checkbox is used to add additional choices or lizard and spock. This gives players the choice of 
    playing the simple game or a questionably more difficult version.

- __Controls__
    - Each choices can be selected by clicking images of that option. This is more enjoyable than selecting 
    words.
    - Choices have different coloured, rounded boarders to make them identifiable from each other and to 
    feel more fun.
    - Choices are highlighted on hover to make it easier to know which you are choosing and to identify them
    as buttons to be clicked.
    - Controls disable to stop multiple inputs during turn.
    - Choices for lizard and spock are hidden when not viable to prevent confusion 

------

### Validator Testing 

- HTML
  - Image height & width has units. Units removed.
   No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Fadd-faun.github.io%2FrpsTest%2F)
- CSS
  - background-color none is not a background-color. Removed.
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fadd-faun.github.io%2FrpsTest%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Unfixed Bugs

  - Uncaught (in promise) DOMException: play() failed because the user didn't interact with the document first.
  - Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received.

**Anything more?**

Yes! We'd strongly encourage you to look at the source code of the `uptime.sh` file so that you know what it's doing. As future software developers, it will be great practice to see how these shell scripts work.

---

Happy coding!
