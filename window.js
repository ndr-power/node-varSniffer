 require('browser-env')();
 const proxyHandler = {
    get: function(obj, name){
        console.log("you're getting property " + name);
        return obj[name];
    },
    set: function(obj, name, value) {
        console.log("you're setting property " + name);
        obj[name] = value;
    }
}
let window1 = global.window
let window = new Proxy(window1, proxyHandler)
// list all new window vars
Object.keys(window).filter(x => typeof(window[x]) !== 'function' &&
  Object.entries(
    Object.getOwnPropertyDescriptor(window, x)).filter(e =>
      ['value', 'writable', 'enumerable', 'configurable'].includes(e[0]) && e[1]
    ).length === 4)
