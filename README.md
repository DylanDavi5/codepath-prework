# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Dylan Davis

Time spent: 4 hours spent in total

Link to project: https://glitch.com/edit/#!/memory-mania (insert your link here, should start with https://glitch.com...)

## Required Functionality

The following **required** functionality is complete:

* [x] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [x] "Start" button toggles between "Start" and "Stop" when clicked. 
* [x] Game buttons each light up and play a sound when clicked. 
* [x] Computer plays back sequence of clues including sound and visual cue for each button
* [x] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [x] User wins the game after guessing a complete pattern
* [x] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [x] Playback speeds up on each turn
* [x] Computer picks a different pattern each time the game is played
* [x] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)
Basic functionality:

![](https://user-images.githubusercontent.com/26559265/160478536-e5bb7a3b-0124-480a-829e-b57011eb1069.gif)

Losing after 3 strikes:

![](https://user-images.githubusercontent.com/26559265/160478888-74e485ff-8973-451a-9350-fa1496716d6e.gif)

Winning the game even with 1 strike:

![](https://user-images.githubusercontent.com/26559265/160479297-fc93c4a2-e2a7-4a4b-8201-20521bb1d632.gif)

(Note framerate on the GIFs was not ideal so video quality is not fantastic)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

Only briefly looked at some Javascript documentation for Math.random and for pushing to an array. 

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

I think that the most challenging part of the project for me was implementing the 3 strikes system. I think part of what made this part challenging is that I had to introduce new HTML and CSS elements for the strike tracker as well as changing the logic of the game in the JavaScript file to make the strike system work. While there was no one part that I was particularly stuck on I think that it was challenging to think about how the HTML, CSS and JavaScript files all needed to work together. For example, when considering how to make the x’s appear each time the player made a mistake, I had to think about how to introduce new HTML elements that I could make appear and disappear using CSS and JavaScript. I initially tried to use different <p> tags for each x but this led to them appearing on different lines. I then realized I could use a single <p> tag and use <span> tags to give each x its own CSS styling within the same paragraph tag. There were a number of other small challenges that I faced and in some cases like the example above I had to consider different potential solutions to each problem. In general, when facing a challenge, I would try to take a step back and think about the broad picture of how different pieces needed to change in response to different inputs. I think that thinking about a higher-level picture of the program often helped me to organize my ideas and think about how to solve the problem.

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

I would really love to learn more about how a website can interface with databases to give it more dynamic functionality. While I thought this project was interesting, I think it would be interesting to take on a larger project and such a project would almost certainly have to deal with storing and retrieving data in order to complete different tasks. I would also love to know more about different web development frameworks work and how web development is really done in a professional setting. I am also curious to learn how APIs get used and in what ways websites are able to communicate with each other in dynamics ways.

4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

Originally, when considering which optional features to include I wanted to add an additional endless mode where a player keeps guessing until they finally mess up. I also think it would have been interesting to add a scoreboard that kept track of a player’s high score. Ultimately, I decided that implementing this was going to take more time than I had. That being said I do not think it would be overly difficult to implement it would probably just take a little bit of time to make decisions about the design and implement all of the desired features. I would have also liked to spend a bit more time working on the button speed up as I think it could be made a little smoother. Finally, I would have done some work to make it look a little nicer by playing with the HTML layout as well as the CSS styling. I also noticed a slight bug where if someone made an incorrect guess while the hint was playing then a second hint would start playing at the same time as the original hint. This bug was introduced when I allowed the player to make more than one mistake. I would have liked to either prevent the player from making a guess while the hint was playing or stop the original hint and play a new hint on its own. While I am happy with how my project turned out these are definitely some things that I would have liked to work on if I had more time.



## Interview Recording URL Link

[My 5-minute Interview Recording](your-link-here)


## License

    Copyright [YOUR NAME]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
