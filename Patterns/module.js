var ridesoft = ridesoft || {};

    (function ( ridesoft) {
        ridesoft.module = (function() {
            var module = {};
            module.info = {
                name: "Base Module",
                version : "1.0",
                author: "Maurizio Brioschi"
                
            };

            module.showInfo = function() {
                var result = "";
                for (key in this.info) {
                    result += key + ": " + this.info[key] + "<br>"
                }
                return(result);
            }

            module.log = function(data) {
                console.log(data);
            };

            module.extend = function() {
                var sonModule = {};
                components = [this].concat([].slice.call(arguments));
                for (var i=0; i<components.length; i++) {
                    for (key in components[i]) {
                        sonModule[key] = components[i][key];
                    }
                }
                return sonModule;
            };

            module.init = function() {};

            return module;
        })();

    }(ridesoft));