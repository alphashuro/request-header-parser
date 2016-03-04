module.exports = function(request) {
  const headers = request.headers;
  return {
    software: headers["user-agent"].match(/\((.*?)\)/m)[1],
    language: headers['accept-language'].split(',')[0],
    ipaddress: request.ip
  };
}
