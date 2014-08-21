Every pattern derived from the basic js pattern: Module pattern. This pattern give you the possibility to modulized your code and make your script indipendent from others script.
[From Learning Javascript Pattern by Addy Osmani, O'Reilly]
Module pattern is used to further emulate the concept of classes in
such a way that we're able to include both public/private methods and variables inside
a single object, thus shielding particular parts from the global scope. What this results
in is a reduction in the likelihood of your function names conflicting with other func-
tions defined in additional scripts on the page. 

- module.js is the example from the root Patterns.

Observer
========
[From Learning Javascript Pattern by Addy Osmani, O'Reilly]
The Observer pattern is more popularly known these days as the Publish/Subscribe
pattern. It is a design pattern which allows an object (known as a subscriber) to watch
another object (the publisher), where we provide a means for the subscriber and pub-
lisher form a listen and broadcast relationship.

- observer.js 
- auth.js is a concrete example of observer, useful for centralize authentication process
