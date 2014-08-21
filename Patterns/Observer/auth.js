var ridesoft = ridesoft || {};
ridesoft.auth = ridesoft.auth || {};

(function(module, $, observer) {
    ridesoft.auth = ridesoftwidget.extend(
            (function(parent) {
                var auth = {};
                observer.topic('auth_check').subscribe(function(data) {
                    //todo chiamo proxy articoli per me per edizione
                    if (data.logged) {
                        console.log('here an ajax call');
                    }

                });
                observer.topic('auth_check').subscribe(function(data) {
                    //todo chiamo proxy edizioni da leggere
                    if (data.logged) {
                        console.log('here i can call a function or service');
                    }
                });
                observer.topic('auth_check').subscribe(function(data) {
                    if (data.logged) {
                        console.log('do something interesting');
                    } else {
                        console.log('learn skateboard kick flip');
                    }
                });
                auth.init = function() {
                    auth.events();
                    auth.check();
                };
                auth.check = function() {
                    console.log('call some methods to check if you are logged and notify subscribers');
                    observer.topic('auth_check').publish(data);
                };
                auth.login = function() {
                    console.log('call a method to login');
                    auth.check();
                };
                auth.logout = function() {
                    console.log('do a fucked logout');
                    auth.check();
                };
                auth.events = function() {
                    $('#login').click(function() {
                        auth.login();
                        return false;
                    });
                    $('.logout').click(function() {
                        auth.logout();
                        return false;
                    });
                };
                
                return auth;
            })(ridesoftAuth)
            );
})(ridesoft.module, jQuery, ridesoft.observer);