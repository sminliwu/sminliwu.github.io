---
layout: project
title: Random Combination Generator
season: Spring 2022

---
![Screenshot of the student's typical view when using the web app.](./combo-screen.png)

## Summary

A classroom tool I made for students to generate novel connections between concepts from different course topics. Because the instructor (for whom I was the TA) and I couldn't find a tool that did exactly what we wanted, and I decided it was easier for me to code my own than to continue looking for one/a few to hack for our purposes.

## Instructional Use

A detailed account of how this tool was used during our class sessions, and further context on how it served the teaching goals for the course.

### The Course

During the SP2022 semester, I was the graduate TA for [ATLS2000: The Meaning of Information Technology](https://catalog.colorado.edu/courses-a-z/atls/). This introductory-level course surveys the history of information/communication technologies (ICT) and contemporary issues of ICT applications on humans such as social and political change, psychological and cognitive effects, and environmental impacts. It covers a lot of topics.

Each week focuses on a different topic, and with material covering everything from the history of computers, to the influence of algorithms on existing social biases, to the future of work -- there's not much time week-to-week for students to synthesize information between topics. Exams, like the midterm, actually offer an opportunity to "integrate" the weekly units because students are reviewing while they study anyway.

### Classroom Activity - Part 1

The planned instructional activity was part of the course midterm. Part 1 of the activity divided the students into small groups of 3-5 and assigned a weekly topic to each group. In these groups, the students recalled the terms and concepts discussed in that week's content and wrote brief definitions for each. As this part of the "in-class midterm" was designed to generate the data for the combo generator web app, we required the students to format their lists of terms and concepts like so:

> <weekly topic title>
> Idea / Key Term
> Definition
>
> <term or concept 1>
> <short definition, 1-3 sentences>
>
> <term or concept 2>
> <short definition, 1-3 sentences>
>
> <term or concept 3 and beyond...>
> <short definition, 1-3 sentences>

As an example, here is an excerpt from a student list of key terms and definitions for the weekly topic, "Black Box of Algorithms":

> Black Box of Algorithms
>
> Idea / Key Term
> Definition
>
> ADT (AWS)
> Automated decision systems, spin-off: automated weapons systems for robotic warfare technology. Often used
> because we do not want to make decisions that include many factors
>
> Black Box of Algorithms
> The idea that a company creates an algorithm for another without the end user knowing how it functions and
> what factors it uses
>
> Big Data
> The multitudes of data associated with multiple aspects of people and group’s interests, demographics, and history

Once the students had completed their lists of terms/definitions for their topics, we compiled the lists into a carefully-formatted plain-text (.TXT) file. At this point, we took a brief (10-15 minute) break for class, which gave us time to push the updated .txt file to the server, populate the random generator tool with the students' work, and troubleshoot any minor typos or glitches with the web app.

### Classroom Activity - Part 2

Here's where the students actually used the tool. With all of their combined work, all the weekly topics and every group's list of terms, the generator web app would show random combinations of two terms from different weeks, with their definitions, and ask the students to explain how they thought the two concepts were connected. This comprised the remainder of class time. Students viewed and/or filled out as many combos as they felt appropriate, until they had their top three connections to submit for the graded assessment. To give a better idea of the different topics that students were connecting, the weekly topics were:

* Week 2: "Computers and Thinking Frameworks"
* Week 3: "Internet and Net Neutrality"
* Week 4: "Black Box of Algorithms"
* Week 5: "Diversity and Representation"
* Week 6: "Digital Divides and ICTD"

More on the actual interface in the next section.

## Interface

Here's a more thorough walkthrough of the web app's interface as a student would have seen it during the classroom activity.

Because we had the class divided into two sections that would attend class on different days (and thus, two different datasets of terms and definitions), the student first selects their course section on the welcome prompt.

![Initial view of the combo generator tool. Prompt reads: "Which day are you attending class?" and the two options are Tuesday and Thursday.](./welcome.png)

Then, they are taken to the main interface, which would show a random combination of two terms from different weekly topics. The terms are shown as "cards" with the term on the top line, its definition in the center, and the week in the lower-left corner (which also lets us verify that the combinations are being properly generated).

![Same image as the first cover image. The student's typical view when using the web app, showing two terms with their definitions and a text input area for the student's connecting explanation.](./combo-screen.png)

Below the cards, the student would type their explanation for the connection between the two terms in the given text input area. Above the term cards, the student can change the displayed combo by clicking the "next" or "previous" button. Generally, the "next" button will show the student a new combo with two different terms. If the student has already seen multiple combos, the "previous" button will let them scroll back through previous combos, all the way until the first one. If they are viewing a previous combo, the "next" button will let them scroll forward within their history until they reach the most-recently generated combo, after which the "next" button will resume showing them new combos. If the student leaves the connection text blank, and goes to view a different combo, the one they were previously viewing will register as "skipped".

As the student progresses through more combinations, they can view the entire log of their session by clicking "View History" below the text input area. This will open an alternate view of the concepts and connections, displaying them in a table rather than one at a time.

![View of the lower half of the web app, below the "Connection" entry field, after the user has clicked the "Show History" button. The user's history of random combinations is displayed in a table below the button, while the button has changed to "Hide History".](./history.png)

## Technical Implementation

Because the whole reason for making this tool was 

* JavaScript (with JQuery)
* HTML/CSS
* .TXT file data
* Firebase Hosting

### .TXT File Formatting and Parsing

### Helper Classes: Item and Combo

### "Random" Generation

## Possible Improvements

## References

* https://stackoverflow.com/questions/4533018/how-to-read-a-text-file-from-server-using-javascript
