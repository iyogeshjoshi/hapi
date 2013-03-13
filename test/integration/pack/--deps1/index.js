// Declare internals

var internals = {};


// Plugin registration

exports.register = function (pack, options, next) {

    pack.select({ label: 'a' }).ext('onRequest', function (request, cont) {
        
        request.plugins.deps = request.plugins.deps || '|';
        request.plugins.deps += '1|'
        cont();
    });

    return next();
};