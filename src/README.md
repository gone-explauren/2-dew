# To-Do List

## Phase One

* In Phase 1, we’re going to perform some refactoring of a To-Do application built by another team. This application mixes application state and user settings at the top level and passes things around. It was a good proof of concept, but we need to make this production ready.
* ![lab-31-uml](https://github.com/gone-explauren/2-dew/assets/123340286/835304fb-aa0f-470b-92bf-6fd3b7323771)

## Phase Two

* In Phase 2, we’re going to extend the functionality of our application by allowing the user to make some decisions on how they would like the application to function. Specifically, we’ll let them make changes to 2 settings.
* ![lab-32-uml](https://github.com/gone-explauren/2-dew/assets/123340286/a09a8db0-dda4-402e-a9f6-16d086afd0a8)

## Phase Three

* In Phase 3, we’d like to extend the functionality of the application by requiring users be logged in to view items and also restrict access based on user type. The user stories from Phases 1, and 2 remain unchanged. For this phase, we are now adding the following new user stories:

    * As a user, I want to provide a way for other users to create new accounts.
    * As a user, I want to provide a way for all users to login to their account.
    * As a user, I want to make sure that my To Do items are only viewable to users that have logged in with a valid account.
    * As a user, I want to ensure that only fellow users that are allowed to “create”, based on their user type, can add new To Do Items.
    * As a user, I want to ensure that only fellow users that are allowed to “update”, based on their user type, can mark To Do Items complete.
    * As a user, I want to ensure that only fellow users that are allowed to “delete”, based on their user type, can delete new To Do Items.

## Phase Four

* In Phase 4, we will finalize the functionality of the application by connecting to live servers for login, authorization, and data access.
* To-Do List App Complete
