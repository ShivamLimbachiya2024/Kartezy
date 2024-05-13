const getCookies = () => {
  let cookies = document.cookie;
  cookies = cookies.split("; ");
  cookies = cookies.map(cookie=>cookie.split("="));
  let result = {};
  cookies.forEach(cookie => {
    result[cookie[0]] = cookie[1]
  });
  return result;
}

const cookies = getCookies();