/*

ClI Commands

1) ng new angular-ecommerce --inline-style --inline-template --skip-tests
2) ng generate component components/header
3) ng dev -> To start the developement server
4) Selectors in the components are used to access that component from other components
5) Signals api
-> It was introduced to manage reactivity in the angular

a) Declare signal
title = signal<initialValue>

b) Access value string ()
title()

c) Change using .set(newValue)

6) Input Signal
-> To take inputs in component constructor

7) Output
-> It is something which component gives back

8) For passing dynamic expressions such as signals we use [label] = "cart()"

9) ng generate service services/cart
Angular Service used for state management by principles of dependency injection that is
we create a service and inject it such that it is avaiable in whole project
we can also restrict it to some codebases but it is of advance concept

10) Angular Routing
-> Add out routes
-> Router Outlet
  -> Where the route component appears

-> RouterLink Directive
 -> Directives are components minus template

11) Computed Signals

-> Create reactive derived state
  -> total = computed(() -> return // add up items prices )

-> Computed updaes when signal changes

12) Fetching data from API

- Use javascript fetch
 -> Set the result to a signal

- Use component life cycle hook
 -> ngOnInit
 
*/
