var ridesoft = ridesoft || {};
ridesoft.observer = ridesoft.observer || {};

(function(module, $) {
    ridesoft.observer = module.extend(
            (function(parent) {
                var observer = {};
                /**
                 * Topics are used for subscribers to events
                 * @param {type} id
                 * 
                 */
                observer.topic = function(id) {
                    var callbacks;
                    if (!(id && observer[ id ])) {
                        callbacks = jQuery.Callbacks();
                        result = {
                            publish: callbacks.fire,
                            subscribe: callbacks.add,
                            unsubscribe: callbacks.remove
                        };
                        if (id) {
                            observer[ id ] = result;
                        }
                    }
                    return result;
                };
                return observer;
            })(module)
            );
}(ridesoft.module, jQuery));