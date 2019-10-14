function networkFetch(url) {
  return `${url} - Ответ с сервера`;
}

const cache = new Set();
const proxiedFetch = new Proxy(networkFetch, {
  apply(target, thisArgs, args) {
    const [url] = args;
    if (cache.has(url)) {
      return `${url} - Ответ из кэша`;
    } else {
      cache.add(url);
      return Reflect.apply(target, thisArgs, args);
    }
  },
});

console.log(proxiedFetch('https://reactjs.org'));
console.log(proxiedFetch('https://reactjs.org'));
