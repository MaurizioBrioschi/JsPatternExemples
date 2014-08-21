var ridesoft = ridesoft || {};
ridesoft.observer = ridesoft.observer || {};

(function(module, $) {
    ridesoft.observer = module.extend(
            (function(parent) {
                
                /**
                 * Topics are used for subscribers to events
                 * @param {type} id
                 * @returns {topic.Topic.topic|_L7.observers.Topic.topic}
                 */
                observers.topic = function(id) {
                    var callbacks;
                    if (!(id && observers[ id ])) {
                        callbacks = jQuery.Callbacks();
                        result = {
                            publish: callbacks.fire,
                            subscribe: callbacks.add,
                            unsubscribe: callbacks.remove
                        };
                        if (id) {
                            observers[ id ] = result;
                        }
                    }
                    return result;
                };
                return observers;
            })(module)
            );
}(ridesoft.module, jQuery));