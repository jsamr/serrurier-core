/**
 * @typedef {object} security_context
 * An object that holds information about the context of the execution.
 *
 * @prop {!string} action            - The 'Class#method' Astronomy signature who built the context
 * @prop {!string} reason            - Why the access was forbidden? Recommanded format
 * is a short dot separated description, with arguments separated by columns.
 * this.is.an.example:arg1:arg2
 * @prop {!string} exceptionId       - Unique identifier of the exception
 * @prop {!string} stackTrace        - The stacktrace that generated this exception
 * @prop {!object} target            - The target of the action
 * @prop {object=} currentTarget     - The currentTarget of the action, i.e. a nested field of the target
 */

/**
 * @typedef {?string|?string[]} user_role_s
 * @desc One or many strings representing roles.
 * {@link https://github.com/alanning/meteor-roles/tree/v2.0#permissions-vs-roles--or-whats-in-a-name roles documentation}
 * @see role_partition
 */

/**
 * @typedef {?string} role_partition
 * @desc A 'scope' to apply certain rules. The 'null' partition is the global partition.
 * Conventions : for a specific Astro Class instance, its partition is composed of '[Class.getName().toLowerCase()]s.[instance._id]'
 * {@link https://github.com/alanning/meteor-roles/tree/v2.0#roles-partitions See alanning-roles partition documentation}
 * @see user_role_s
 */

/**
 * @typedef {!string} action_descriptor
 * @desc A string representing a class and his method in the following format : 'Class#method'
 *
 */

/**
 * @typedef {string} mongodb_string_id
 * @desc A string used to identify a document in mongodb
 */

/**
 * @typedef {object} error_descriptor
 * @prop {!string} reason
 * @prop {!string} exceptionId
 */

/**
 * @typedef {object|Function} meteor_match_pattern
 * @desc {@link https://docs.meteor.com/api/check.html#matchpatterns A meteor Match Pattern}
 */

/**
 * @callback Function_meteor_callback
 * @param {?Error=} error
 * @param {?*=} result
 */

/**
 * A function that returns a truthy or falsy value.
 * @callback Function_predicate
 * @param {...*} arguments
 * @return {boolean|*}
 */