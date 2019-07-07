exports.handler = function(event, context, callback) {
  const { user } = context.clientContext;
  if (!user) {
    return callback(null, {
      statusCode: 401,
      body: `woops, you shouldn't be here!`,
    });
  }

  return callback(null, {
    statusCode: 200,
    body: JSON.stringify(user),
  });
};
