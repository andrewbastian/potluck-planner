

# Potluck Planner

Components: 11

1 - Home/Login page
created the design of the home page. did not apply any working function until other component are done.


2 - Edit / Create new potluck

    2.A Edit/Create Home (date and location on this component)

    2.B Items

    2.C Guests

3 - MyPotlucks

  3.A MyPotlucks

  3.B Admin card
    Date/time
    location
    Forcast -API ?
    Role
    RSVP
    Items List?
    Edit Event

  3.C Guest card
    Date/time
    location
    Forcast -API ?
    Role
    Dish
    Items List?
    RSVP



4 - RSVP
    Checkboxes
    <p> select Items
    Dropdown of items list

5- Items List


6 - Register
    <h1>
    username
    Email
    password
    Checkbox
    Button

7 - NavBar
    -username
    -page title
    -create new potluck button



# Front-End

Proposal

- What problem does your app solve?

Client wants to have an application that allows the user to login and manage potlucks. 

- Be as specific as possible; how does your app solve the problem?

This app will allow:
The user to login
Manage their own potluck event
Invite friends to attend the potluck event 
Adjust dates, location, and times of their own events
Has a list feature to add food items
Guests should be able to confirm they are going to the event
Guests should be able to select items to bring.

- What is the mission statement?

Help organizers and attendees plan potluck scheduling and food items.
Features

- What features are required for your minimum viable product?

1 As an organizer I can create an upcoming potluck and invite my friends to attend.
2. As an organizer I can adjust dates, times and locations of the potluck.
3.As an organize I can use the list feature in my app to add food items that we'd like to see at the potluck.
4. As a guest to a potluck I want to be able to confirm that I'm going to the upcoming event.
5. As a guest I'd like to be able to select which items I'd like to be responsible for bringing.
NOTE: All of the user stories above should only require a single user type. Users can create "potlucks" and add other users to them.


- What features may you wish to put in a future release?

Any updates is emailed to anyone signed up on the event.
Ability to export the date and time to a calendar.
Admin can choose if guests can invite other guests

- What do the top 3 similar apps do for their users?

Reviewing: thingtobring.com, mealtrain.com/learn/potluck, and signupgenius.com

Track who is bringing what to the party
Email invites to friends
RSVP
Themes potlucks
Ability to list meal preferences and allergies.
Portion Calculator
Add multiple administrators to your account
Group messaging
Option for Prebuilt Potlucks or Custom Potlucks
Option to link recipes
Frameworks - Libraries

- What 3rd party frameworks/libraries are you considering using?
-Styled-components, Formik,react-router-dom, npm, axios

- Do APIs require you to contact its maintainer to gain access?

Start out with no, may require token in future.

- Are you required to pay to use the API?
- Have you considered using Apple Frameworks? (MapKit, Healthkit, ARKit?)
For Data Scientists


- Describe the Established data source with at least rough data able to be provided on day 1. 
- You can gather information about the data set you’ll be working with from the project description. Be sure to collaborate with your PM, and your Backend Architect to chat about the resources you have.
- Write a description for what the DS problem is (what uncertainty/prediction are we trying to do here? Sentiment analysis? Why is this a useful solution to a problem?)
- A target (e.g. JSON format or such) for output that DS students can deliver to web/other students for them to ingest and use in the app

Target Audience

- Who is your target audience? Be specific.
Anyone who is planning or attending a potluck.

- What feedback have you gotten from potential users?
Past potlucks had people bringing mostly drinks and there was not enough food.
Having people coming but not bring anything
Waiting until the last minute to say they are coming and randomly bring something.
Having people sign up others and say they are bringing something without the guest knowing about it.

- Have you validated the problem and your solution with your target audience? How?
Sign up list for items to bring
List of Maximum amounts of items, have categories that have limits of the number of items that can be signup under the category
RVSP date and time, emails guests to remind them to reply with “going”, “not going”, “don’t know”
Guests can create a login to secure what they sign up for. 

Research

- Research thoroughly before writing a single line of code. Solidify the features of your app conceptually before implementation. Spend the weekend researching so you can hit the ground running on Monday.
Prototype Key Feature(s)

- This is the “bread and butter” of the app, this is what makes your app yours. Calculate how long it takes to implement these features and triple the time estimated. That way you’ll have plenty of time to finish. It is preferred to drop features and spend more time working on your MVP features if needed. g


styles:
Fonts added:

> --Salvation Regular--
> >
> > font-family: salvation, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;

> Fira Sans Hair Italic
> 
> > font-family: fira-sans-2, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: italic;


> Fira Sans Heavy
> 
> > font-family: fira-sans-2, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: normal;


> Fira Sans Heavy Italic
> 
> > font-family: fira-sans-2, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: italic;


> Fira Sans Hair
> 
> > font-family: fira-sans-2, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;


> Fira Sans Regular
> 
> > font-family: fira-sans, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;


> Fira Sans Italic
> 
> > font-family: fira-sans, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: italic;


> Fira Sans Bold
> 
> > font-family: fira-sans, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: normal;


> Fira Sans Bold Italic
> 
> > font-family: fira-sans, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: italic;


> Fira Sans Condensed Hair
> 
> > font-family: fira-sans-condensed-2, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;


> Fira Sans Condensed Hair Italic
> 
> > font-family: fira-sans-condensed-2, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: italic;


> Fira Sans Condensed ExtraLight Italic
> 
> > font-family: fira-sans-condensed-2, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: italic;


> Fira Sans Condensed ExtraLight
> 
> > font-family: fira-sans-condensed-2, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: normal;


> Fira Sans Condensed Medium Italic
> 
> > font-family: fira-sans-condensed, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: italic;


> Fira Sans Condensed Medium
> 
> > font-family: fira-sans-condensed, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;


> Fira Sans Condensed Extrabold Italic
> 
> > font-family: fira-sans-condensed, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: italic;


> Fira Sans Condensed ExtraBold
> 
> > font-family: fira-sans-condensed, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: normal;


> Fira Sans Compressed Hair Italic
> 
> > font-family: fira-sans-compressed-2, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: italic;


> Fira Sans Compressed Hair
> 
> > font-family: fira-sans-compressed-2, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;


> Fira Sans Compressed ExtraLight Italic
> 
> > font-family: fira-sans-compressed-2, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: italic;


> Fira Sans Compressed ExtraLight
> 
> > font-family: fira-sans-compressed-2, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: normal;


> Fira Sans Compressed Bold Italic
> 
> > font-family: fira-sans-compressed, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: italic;


> Fira Sans Compressed Bold
> 
> > font-family: fira-sans-compressed, sans-serif;
> > 
> > font-weight: 700;
> > 
> > font-style: normal;


> Fira Sans Compressed Regular
> 
> > font-family: fira-sans-compressed, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: normal;


> Fira Sans Compressed Italic
> 
> > font-family: fira-sans-compressed, sans-serif;
> > 
> > font-weight: 400;
> > 
> > font-style: italic;

