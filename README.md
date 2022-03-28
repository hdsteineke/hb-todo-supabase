# Supabase Todo App

## Live Example:

https://alchemycodelab.github.io/web-01-todo-supabase/

## Getting Started

Use [this template](https://github.com/alchemycodelab/half-baked-web-01-todo-supabase) to get started.

## Learning Objectives

-   Perform CRUD actions on user data in supabase

## Description

Here is the schema for the `todos` table:

![](./todos-model.png)

You will be creating a to do list using Supabase. Users should only be able to perform operations on todos associated with their user. You will be using an existing supabase database for this deliverable. Authentication has already been provided for you.

## Acceptance Criteria

-   Users should be able to add a to do item to their list
-   Users should be able to "complete" items on their to do list
-   Users should be able to delete all of their todos

| Task                                                  | Points |
| ----------------------------------------------------- | ------ |
| **Deploy Requirements**                               |        |
| Main branch deployed to Netlify                       | 0      |
| Open PR from `dev` branch with Netlify deploy preview | 0      |
| **Code Requirments**                                  |        |
| Users see a list of all their todos                   | 2.5    |
| Users can add todos to the database                   | 2.5    |
| Users can complete todos                              | 2.5    |
| Users can delete all todos                            | 2.5    |



MAKE A PLAN:

- HTML already set up
- List events (refer to demo notes): 
    -on load, fetch and display list items
        -window.eventListener('load)
        -fetch shopping items from Supabase
        -loop through items, render and append
            -make each list item clickable
            -decide how item is rendered (bought or not) with 'data'

    -Submit form:
        -(clear DOM?)
        -get data from form
        -call createItem function
        -refetch and reaapend

    -Buy item:
        -crosses it out and makes it un-clickable 
            -update  'is_bought' to true
            -(add classList for display change)
        -refetch and reappend

    -Delete List Button
        -clear DOM
        -Delete every item in Supabase

- fill out fetch-utils for necessary functions:
        -createItem
        -getItems
        -deleteItems
        -buyItem

- Add event listeners to todos.js

- Write fetchAndDisplay function (async) on todos.js

- Add Loading Spinner