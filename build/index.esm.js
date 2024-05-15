function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }
  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}
function _asyncToGenerator(fn) {
  return function () {
    var self = this,
      args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);
      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }
      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }
      _next(undefined);
    });
  };
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _typeof$1(o) {
  "@babel/helpers - typeof";

  return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof$1(o);
}

function toPrimitive(t, r) {
  if ("object" != _typeof$1(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof$1(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof$1(i) ? i : String(i);
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, toPropertyKey(descriptor.key), descriptor);
  }
}
function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

function _defineProperty(obj, key, value) {
  key = toPropertyKey(key);
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
}

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

_typeof.exports;

(function (module) {
	function _typeof(o) {
	  "@babel/helpers - typeof";

	  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	    return typeof o;
	  } : function (o) {
	    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(o);
	}
	module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports; 
} (_typeof));

var _typeofExports = _typeof.exports;

regeneratorRuntime$1.exports;

(function (module) {
	var _typeof = _typeofExports["default"];
	function _regeneratorRuntime() {
	  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
	    return e;
	  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
	  var t,
	    e = {},
	    r = Object.prototype,
	    n = r.hasOwnProperty,
	    o = Object.defineProperty || function (t, e, r) {
	      t[e] = r.value;
	    },
	    i = "function" == typeof Symbol ? Symbol : {},
	    a = i.iterator || "@@iterator",
	    c = i.asyncIterator || "@@asyncIterator",
	    u = i.toStringTag || "@@toStringTag";
	  function define(t, e, r) {
	    return Object.defineProperty(t, e, {
	      value: r,
	      enumerable: !0,
	      configurable: !0,
	      writable: !0
	    }), t[e];
	  }
	  try {
	    define({}, "");
	  } catch (t) {
	    define = function define(t, e, r) {
	      return t[e] = r;
	    };
	  }
	  function wrap(t, e, r, n) {
	    var i = e && e.prototype instanceof Generator ? e : Generator,
	      a = Object.create(i.prototype),
	      c = new Context(n || []);
	    return o(a, "_invoke", {
	      value: makeInvokeMethod(t, r, c)
	    }), a;
	  }
	  function tryCatch(t, e, r) {
	    try {
	      return {
	        type: "normal",
	        arg: t.call(e, r)
	      };
	    } catch (t) {
	      return {
	        type: "throw",
	        arg: t
	      };
	    }
	  }
	  e.wrap = wrap;
	  var h = "suspendedStart",
	    l = "suspendedYield",
	    f = "executing",
	    s = "completed",
	    y = {};
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	  var p = {};
	  define(p, a, function () {
	    return this;
	  });
	  var d = Object.getPrototypeOf,
	    v = d && d(d(values([])));
	  v && v !== r && n.call(v, a) && (p = v);
	  var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p);
	  function defineIteratorMethods(t) {
	    ["next", "throw", "return"].forEach(function (e) {
	      define(t, e, function (t) {
	        return this._invoke(e, t);
	      });
	    });
	  }
	  function AsyncIterator(t, e) {
	    function invoke(r, o, i, a) {
	      var c = tryCatch(t[r], t, o);
	      if ("throw" !== c.type) {
	        var u = c.arg,
	          h = u.value;
	        return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) {
	          invoke("next", t, i, a);
	        }, function (t) {
	          invoke("throw", t, i, a);
	        }) : e.resolve(h).then(function (t) {
	          u.value = t, i(u);
	        }, function (t) {
	          return invoke("throw", t, i, a);
	        });
	      }
	      a(c.arg);
	    }
	    var r;
	    o(this, "_invoke", {
	      value: function value(t, n) {
	        function callInvokeWithMethodAndArg() {
	          return new e(function (e, r) {
	            invoke(t, n, e, r);
	          });
	        }
	        return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
	      }
	    });
	  }
	  function makeInvokeMethod(e, r, n) {
	    var o = h;
	    return function (i, a) {
	      if (o === f) throw new Error("Generator is already running");
	      if (o === s) {
	        if ("throw" === i) throw a;
	        return {
	          value: t,
	          done: !0
	        };
	      }
	      for (n.method = i, n.arg = a;;) {
	        var c = n.delegate;
	        if (c) {
	          var u = maybeInvokeDelegate(c, n);
	          if (u) {
	            if (u === y) continue;
	            return u;
	          }
	        }
	        if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) {
	          if (o === h) throw o = s, n.arg;
	          n.dispatchException(n.arg);
	        } else "return" === n.method && n.abrupt("return", n.arg);
	        o = f;
	        var p = tryCatch(e, r, n);
	        if ("normal" === p.type) {
	          if (o = n.done ? s : l, p.arg === y) continue;
	          return {
	            value: p.arg,
	            done: n.done
	          };
	        }
	        "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg);
	      }
	    };
	  }
	  function maybeInvokeDelegate(e, r) {
	    var n = r.method,
	      o = e.iterator[n];
	    if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y;
	    var i = tryCatch(o, e.iterator, r.arg);
	    if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y;
	    var a = i.arg;
	    return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y);
	  }
	  function pushTryEntry(t) {
	    var e = {
	      tryLoc: t[0]
	    };
	    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e);
	  }
	  function resetTryEntry(t) {
	    var e = t.completion || {};
	    e.type = "normal", delete e.arg, t.completion = e;
	  }
	  function Context(t) {
	    this.tryEntries = [{
	      tryLoc: "root"
	    }], t.forEach(pushTryEntry, this), this.reset(!0);
	  }
	  function values(e) {
	    if (e || "" === e) {
	      var r = e[a];
	      if (r) return r.call(e);
	      if ("function" == typeof e.next) return e;
	      if (!isNaN(e.length)) {
	        var o = -1,
	          i = function next() {
	            for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next;
	            return next.value = t, next.done = !0, next;
	          };
	        return i.next = i;
	      }
	    }
	    throw new TypeError(_typeof(e) + " is not iterable");
	  }
	  return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", {
	    value: GeneratorFunctionPrototype,
	    configurable: !0
	  }), o(GeneratorFunctionPrototype, "constructor", {
	    value: GeneratorFunction,
	    configurable: !0
	  }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
	    var e = "function" == typeof t && t.constructor;
	    return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name));
	  }, e.mark = function (t) {
	    return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t;
	  }, e.awrap = function (t) {
	    return {
	      __await: t
	    };
	  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () {
	    return this;
	  }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) {
	    void 0 === i && (i = Promise);
	    var a = new AsyncIterator(wrap(t, r, n, o), i);
	    return e.isGeneratorFunction(r) ? a : a.next().then(function (t) {
	      return t.done ? t.value : a.next();
	    });
	  }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () {
	    return this;
	  }), define(g, "toString", function () {
	    return "[object Generator]";
	  }), e.keys = function (t) {
	    var e = Object(t),
	      r = [];
	    for (var n in e) r.push(n);
	    return r.reverse(), function next() {
	      for (; r.length;) {
	        var t = r.pop();
	        if (t in e) return next.value = t, next.done = !1, next;
	      }
	      return next.done = !0, next;
	    };
	  }, e.values = values, Context.prototype = {
	    constructor: Context,
	    reset: function reset(e) {
	      if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t);
	    },
	    stop: function stop() {
	      this.done = !0;
	      var t = this.tryEntries[0].completion;
	      if ("throw" === t.type) throw t.arg;
	      return this.rval;
	    },
	    dispatchException: function dispatchException(e) {
	      if (this.done) throw e;
	      var r = this;
	      function handle(n, o) {
	        return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o;
	      }
	      for (var o = this.tryEntries.length - 1; o >= 0; --o) {
	        var i = this.tryEntries[o],
	          a = i.completion;
	        if ("root" === i.tryLoc) return handle("end");
	        if (i.tryLoc <= this.prev) {
	          var c = n.call(i, "catchLoc"),
	            u = n.call(i, "finallyLoc");
	          if (c && u) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          } else if (c) {
	            if (this.prev < i.catchLoc) return handle(i.catchLoc, !0);
	          } else {
	            if (!u) throw new Error("try statement without catch or finally");
	            if (this.prev < i.finallyLoc) return handle(i.finallyLoc);
	          }
	        }
	      }
	    },
	    abrupt: function abrupt(t, e) {
	      for (var r = this.tryEntries.length - 1; r >= 0; --r) {
	        var o = this.tryEntries[r];
	        if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) {
	          var i = o;
	          break;
	        }
	      }
	      i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null);
	      var a = i ? i.completion : {};
	      return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a);
	    },
	    complete: function complete(t, e) {
	      if ("throw" === t.type) throw t.arg;
	      return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y;
	    },
	    finish: function finish(t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y;
	      }
	    },
	    "catch": function _catch(t) {
	      for (var e = this.tryEntries.length - 1; e >= 0; --e) {
	        var r = this.tryEntries[e];
	        if (r.tryLoc === t) {
	          var n = r.completion;
	          if ("throw" === n.type) {
	            var o = n.arg;
	            resetTryEntry(r);
	          }
	          return o;
	        }
	      }
	      throw new Error("illegal catch attempt");
	    },
	    delegateYield: function delegateYield(e, r, n) {
	      return this.delegate = {
	        iterator: values(e),
	        resultName: r,
	        nextLoc: n
	      }, "next" === this.method && (this.arg = t), y;
	    }
	  }, e;
	}
	module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports; 
} (regeneratorRuntime$1));

var regeneratorRuntimeExports = regeneratorRuntime$1.exports;

// TODO(Babel 8): Remove this file.

var runtime = regeneratorRuntimeExports();
var regenerator = runtime;

// Copied from https://github.com/facebook/regenerator/blob/main/packages/runtime/runtime.js#L736=
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var _regeneratorRuntime = /*@__PURE__*/getDefaultExportFromCjs(regenerator);

/*! js-cookie v3.0.5 | MIT */
/* eslint-disable no-var */
function assign (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      target[key] = source[key];
    }
  }
  return target
}
/* eslint-enable no-var */

/* eslint-disable no-var */
var defaultConverter = {
  read: function (value) {
    if (value[0] === '"') {
      value = value.slice(1, -1);
    }
    return value.replace(/(%[\dA-F]{2})+/gi, decodeURIComponent)
  },
  write: function (value) {
    return encodeURIComponent(value).replace(
      /%(2[346BF]|3[AC-F]|40|5[BDE]|60|7[BCD])/g,
      decodeURIComponent
    )
  }
};
/* eslint-enable no-var */

/* eslint-disable no-var */

function init (converter, defaultAttributes) {
  function set (name, value, attributes) {
    if (typeof document === 'undefined') {
      return
    }

    attributes = assign({}, defaultAttributes, attributes);

    if (typeof attributes.expires === 'number') {
      attributes.expires = new Date(Date.now() + attributes.expires * 864e5);
    }
    if (attributes.expires) {
      attributes.expires = attributes.expires.toUTCString();
    }

    name = encodeURIComponent(name)
      .replace(/%(2[346B]|5E|60|7C)/g, decodeURIComponent)
      .replace(/[()]/g, escape);

    var stringifiedAttributes = '';
    for (var attributeName in attributes) {
      if (!attributes[attributeName]) {
        continue
      }

      stringifiedAttributes += '; ' + attributeName;

      if (attributes[attributeName] === true) {
        continue
      }

      // Considers RFC 6265 section 5.2:
      // ...
      // 3.  If the remaining unparsed-attributes contains a %x3B (";")
      //     character:
      // Consume the characters of the unparsed-attributes up to,
      // not including, the first %x3B (";") character.
      // ...
      stringifiedAttributes += '=' + attributes[attributeName].split(';')[0];
    }

    return (document.cookie =
      name + '=' + converter.write(value, name) + stringifiedAttributes)
  }

  function get (name) {
    if (typeof document === 'undefined' || (arguments.length && !name)) {
      return
    }

    // To prevent the for loop in the first place assign an empty array
    // in case there are no cookies at all.
    var cookies = document.cookie ? document.cookie.split('; ') : [];
    var jar = {};
    for (var i = 0; i < cookies.length; i++) {
      var parts = cookies[i].split('=');
      var value = parts.slice(1).join('=');

      try {
        var found = decodeURIComponent(parts[0]);
        jar[found] = converter.read(value, found);

        if (name === found) {
          break
        }
      } catch (e) {}
    }

    return name ? jar[name] : jar
  }

  return Object.create(
    {
      set,
      get,
      remove: function (name, attributes) {
        set(
          name,
          '',
          assign({}, attributes, {
            expires: -1
          })
        );
      },
      withAttributes: function (attributes) {
        return init(this.converter, assign({}, this.attributes, attributes))
      },
      withConverter: function (converter) {
        return init(assign({}, this.converter, converter), this.attributes)
      }
    },
    {
      attributes: { value: Object.freeze(defaultAttributes) },
      converter: { value: Object.freeze(converter) }
    }
  )
}

var api = init(defaultConverter, { path: '/' });

var urls = {
  popupIframe: 'https://surveys.usequalli.com/surveys/popup',
  api: 'https://api.usequalli.com/api/'

  // popupIframe: 'http://localhost:3001/surveys/popup',
  // api: 'http://localhost:8080/api/',
};

function ownKeys$1(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread$1(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys$1(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys$1(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var ApiRequest = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(props) {
    var apiKey, url, method, headers, body, deviceMetaData, options, response, jsonResponse;
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) switch (_context.prev = _context.next) {
        case 0:
          apiKey = props.apiKey, url = props.url, method = props.method, headers = props.headers, body = props.body;
          deviceMetaData = {};
          _context.prev = 2;
          options = {
            method: method,
            headers: _objectSpread$1({
              Authorization: "Bearer ".concat(apiKey),
              'Content-Type': 'application/json',
              platform: 'web'
            }, headers),
            body: body ? JSON.stringify(_objectSpread$1(_objectSpread$1({}, body), {}, {
              event_metadata: deviceMetaData
            })) : JSON.stringify({
              event_metadata: deviceMetaData
            })
          };
          _context.next = 6;
          return fetch(url, options);
        case 6:
          response = _context.sent;
          if (response.ok) {
            _context.next = 9;
            break;
          }
          throw new Error("API request failed: ".concat(response.statusText));
        case 9:
          _context.next = 11;
          return response.json();
        case 11:
          jsonResponse = _context.sent;
          return _context.abrupt("return", jsonResponse);
        case 15:
          _context.prev = 15;
          _context.t0 = _context["catch"](2);
          console.error("API request error: ".concat(_context.t0.message));
          throw _context.t0;
        case 19:
        case "end":
          return _context.stop();
      }
    }, _callee, null, [[2, 15]]);
  }));
  return function ApiRequest(_x) {
    return _ref.apply(this, arguments);
  };
}();

var API_BASE_PATH = urls.api;
var ApiManager = {
  identify: function () {
    var _identify = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(apiKey, userKey, userSessionKey) {
      var url, headers, jsonResponse;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            url = "".concat(API_BASE_PATH, "app-user/start-session");
            headers = {};
            if (userSessionKey) {
              headers['user_key'] = userKey;
            }
            if (userSessionKey) {
              headers['user_session_key'] = userSessionKey;
            }
            _context.prev = 4;
            _context.next = 7;
            return ApiRequest({
              apiKey: apiKey,
              url: url,
              method: 'POST',
              body: {},
              headers: headers
            });
          case 7:
            jsonResponse = _context.sent;
            if (!jsonResponse.success) {
              _context.next = 10;
              break;
            }
            return _context.abrupt("return", jsonResponse);
          case 10:
            console.error('QUALLI: Failed to identify user');
            _context.next = 17;
            break;
          case 13:
            _context.prev = 13;
            _context.t0 = _context["catch"](4);
            console.error('QUALLI: Failed to identify user: ', _context.t0);
            return _context.abrupt("return", {
              success: false
            });
          case 17:
          case "end":
            return _context.stop();
        }
      }, _callee, null, [[4, 13]]);
    }));
    function identify(_x, _x2, _x3) {
      return _identify.apply(this, arguments);
    }
    return identify;
  }(),
  setUserAttributes: function () {
    var _setUserAttributes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(apiKey, userSessionKey, attributes) {
      var url, headers;
      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            if (!(Object.keys(attributes).length === 0)) {
              _context2.next = 2;
              break;
            }
            return _context2.abrupt("return");
          case 2:
            url = "".concat(API_BASE_PATH, "app-user/set-attributes");
            if (userSessionKey) {
              _context2.next = 6;
              break;
            }
            console.error('QUALLI: No session ID available');
            return _context2.abrupt("return");
          case 6:
            headers = {
              'user-session-key': userSessionKey
            };
            _context2.prev = 7;
            _context2.next = 10;
            return ApiRequest({
              apiKey: apiKey,
              url: url,
              method: 'POST',
              headers: headers,
              body: {
                attributes: attributes,
                timestamp: new Date()
              }
            });
          case 10:
            _context2.next = 15;
            break;
          case 12:
            _context2.prev = 12;
            _context2.t0 = _context2["catch"](7);
            console.error('QUALLI: Error setting user attributes: ', _context2.t0);
          case 15:
          case "end":
            return _context2.stop();
        }
      }, _callee2, null, [[7, 12]]);
    }));
    function setUserAttributes(_x4, _x5, _x6) {
      return _setUserAttributes.apply(this, arguments);
    }
    return setUserAttributes;
  }(),
  performTrigger: function () {
    var _performTrigger = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(apiKey, userSessionKey, trigger, url) {
      var _url, headers, jsonResponse;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(!(trigger !== null && trigger !== void 0 && trigger.name) && !(trigger !== null && trigger !== void 0 && trigger.unique_id))) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            _url = "".concat(API_BASE_PATH, "app-user-events/trigger");
            if (userSessionKey) {
              _context3.next = 6;
              break;
            }
            console.error('QUALLI: No session ID available');
            return _context3.abrupt("return");
          case 6:
            headers = {
              'user-session-key': userSessionKey
            };
            _context3.prev = 7;
            _context3.next = 10;
            return ApiRequest({
              apiKey: apiKey,
              url: _url,
              method: 'POST',
              headers: headers,
              body: {
                trigger: trigger,
                url: url,
                timestamp: new Date()
              }
            });
          case 10:
            jsonResponse = _context3.sent;
            if (!jsonResponse.success) {
              _context3.next = 13;
              break;
            }
            return _context3.abrupt("return", jsonResponse);
          case 13:
            console.error('QUALLI: Error performing trigger');
            _context3.next = 19;
            break;
          case 16:
            _context3.prev = 16;
            _context3.t0 = _context3["catch"](7);
            console.error('QUALLI: Error performing trigger: ', _context3.t0);
          case 19:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[7, 16]]);
    }));
    function performTrigger(_x7, _x8, _x9, _x10) {
      return _performTrigger.apply(this, arguments);
    }
    return performTrigger;
  }(),
  trackScreen: function () {
    var _trackScreen = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(apiKey, userSessionKey, screen) {
      var url, headers, jsonResponse;
      return _regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            if (screen !== null && screen !== void 0 && screen.url) {
              _context4.next = 2;
              break;
            }
            return _context4.abrupt("return");
          case 2:
            url = "".concat(API_BASE_PATH, "app-user-events/screen");
            if (userSessionKey) {
              _context4.next = 6;
              break;
            }
            console.error('QUALLI: No session ID available');
            return _context4.abrupt("return");
          case 6:
            headers = {
              'user-session-key': userSessionKey
            };
            _context4.prev = 7;
            _context4.next = 10;
            return ApiRequest({
              apiKey: apiKey,
              url: url,
              method: 'POST',
              headers: headers,
              body: {
                screen: screen,
                timestamp: new Date()
              }
            });
          case 10:
            jsonResponse = _context4.sent;
            if (!jsonResponse.success) {
              _context4.next = 13;
              break;
            }
            return _context4.abrupt("return", jsonResponse);
          case 13:
            console.error('QUALLI: Error performing track screen');
            _context4.next = 19;
            break;
          case 16:
            _context4.prev = 16;
            _context4.t0 = _context4["catch"](7);
            console.error('QUALLI: Error performing track screen: ', _context4.t0);
          case 19:
          case "end":
            return _context4.stop();
        }
      }, _callee4, null, [[7, 16]]);
    }));
    function trackScreen(_x11, _x12, _x13) {
      return _trackScreen.apply(this, arguments);
    }
    return trackScreen;
  }(),
  logSurveyAction: function () {
    var _logSurveyAction = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5(apiKey, userSessionKey, uniqueId, action, data) {
      var url, headers;
      return _regeneratorRuntime.wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            url = "".concat(API_BASE_PATH, "surveys/").concat(uniqueId, "/action");
            if (userSessionKey) {
              _context5.next = 4;
              break;
            }
            console.error('QUALLI: No session ID available');
            return _context5.abrupt("return");
          case 4:
            headers = {
              'user-session-key': userSessionKey
            };
            _context5.prev = 5;
            _context5.next = 8;
            return ApiRequest({
              apiKey: apiKey,
              url: url,
              method: 'POST',
              headers: headers,
              body: {
                action: action,
                data: data,
                timestamp: new Date()
              }
            });
          case 8:
            _context5.next = 13;
            break;
          case 10:
            _context5.prev = 10;
            _context5.t0 = _context5["catch"](5);
            // logger(error?.response || '');
            console.error('QUALLI: Error logging the survey action: ', _context5.t0);
          case 13:
          case "end":
            return _context5.stop();
        }
      }, _callee5, null, [[5, 10]]);
    }));
    function logSurveyAction(_x14, _x15, _x16, _x17, _x18) {
      return _logSurveyAction.apply(this, arguments);
    }
    return logSurveyAction;
  }(),
  logEvent: function () {
    var _logEvent = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(apiKey, userSessionKey, action) {
      var url, headers;
      return _regeneratorRuntime.wrap(function _callee6$(_context6) {
        while (1) switch (_context6.prev = _context6.next) {
          case 0:
            url = "".concat(API_BASE_PATH, "app-user-events/store");
            if (userSessionKey) {
              _context6.next = 4;
              break;
            }
            console.error('QUALLI: No session ID available');
            return _context6.abrupt("return");
          case 4:
            headers = {
              'user-session-key': userSessionKey
            };
            _context6.prev = 5;
            _context6.next = 8;
            return ApiRequest({
              apiKey: apiKey,
              url: url,
              method: 'POST',
              headers: headers,
              body: {
                action: action,
                event_name: action,
                timestamp: new Date()
              }
            });
          case 8:
            _context6.next = 13;
            break;
          case 10:
            _context6.prev = 10;
            _context6.t0 = _context6["catch"](5);
            // logger(error?.response || '');
            console.error('QUALLI: Error logging the action: ', _context6.t0);
          case 13:
          case "end":
            return _context6.stop();
        }
      }, _callee6, null, [[5, 10]]);
    }));
    function logEvent(_x19, _x20, _x21) {
      return _logEvent.apply(this, arguments);
    }
    return logEvent;
  }()
};

// large screen styles
var largeScreenStyles = {
  position: 'fixed',
  width: '350px',
  height: '250px',
  bottom: '-100%',
  'border-radius': '12px',
  border: 'none',
  opacity: 1,
  transition: 'all 400ms ease-in-out'
};
var largeScreenLeftStyles = {
  left: '16px'
};
var largeScreenCentertStyles = {
  left: '50%',
  transform: 'translate(-50%, 0)'
};
var largeScreenRightStyles = {
  right: '16px'
};

// Styles for smaller screens
var smallScreenStyles = {
  position: 'fixed',
  left: '16px',
  right: '16px',
  bottom: '-100%',
  // start off screen
  width: 'calc(100% - 32px)',
  height: '200px',
  'border-radius': '12px',
  border: 'none',
  'max-height': '100%',
  transition: 'all 400ms ease-in-out'
};
var PopupStyles = {
  styles: {
    screens: {
      large: largeScreenStyles,
      small: smallScreenStyles
    },
    popupPlacement: {
      left: largeScreenLeftStyles,
      center: largeScreenCentertStyles,
      right: largeScreenRightStyles
    },
    person: {
      base: {
        small: {
          position: 'fixed',
          opacity: 0,
          transition: 'all 400ms ease-in-out',
          cursor: 'pointer',
          bottom: '16px',
          background: 'none',
          overflow: 'hidden'
        },
        large: {
          position: 'fixed',
          opacity: 0,
          transition: 'all 400ms ease-in-out',
          cursor: 'pointer',
          bottom: '16px',
          background: 'none',
          overflow: 'hidden'
        }
      },
      type: {
        circle: {
          small: {
            width: '60px',
            height: '60px',
            'border-radius': '50%'
          },
          large: {
            width: '75px',
            height: '75px',
            'border-radius': '50%'
          }
        },
        rectangle: {
          small: {
            width: '60px',
            height: '90px',
            'border-radius': '6px'
          },
          large: {
            width: '60px',
            height: '90px',
            'border-radius': '6px'
          }
        }
      },
      position: {
        small: {
          bottom_left: {
            left: '16px'
          },
          bottom_center: {
            left: '50%',
            transform: 'translate(-50%, 0)'
          },
          bottom_right: {
            right: '16px'
          }
        },
        large: {
          bottom_left: {
            left: '16px'
          },
          bottom_center: {
            left: '50%',
            transform: 'translate(-50%, 0)'
          },
          bottom_right: {
            right: '16px'
          }
        }
      }
    }
  }
};

// DIFFERENT TYPES
var SurveyThemePopupRoundedCorners = /*#__PURE__*/function (SurveyThemePopupRoundedCorners) {
  SurveyThemePopupRoundedCorners["none"] = "none";
  SurveyThemePopupRoundedCorners["small"] = "small";
  SurveyThemePopupRoundedCorners["medium"] = "medium";
  SurveyThemePopupRoundedCorners["large"] = "large";
  return SurveyThemePopupRoundedCorners;
}({});

var SurveyEvents = /*#__PURE__*/function (SurveyEvents) {
  SurveyEvents["SURVEY_COMPLETED"] = "survey_completed";
  SurveyEvents["SURVEY_SHOWN"] = "survey_shown";
  SurveyEvents["SURVEY_CLOSED"] = "survey_closed";
  return SurveyEvents;
}({});

var mapPopupBorderRadiusToPx = function mapPopupBorderRadiusToPx(borderRadius) {
  switch (borderRadius) {
    case SurveyThemePopupRoundedCorners.none:
      return 0;
    case SurveyThemePopupRoundedCorners.small:
      return 10;
    case SurveyThemePopupRoundedCorners.medium:
      return 18;
    case SurveyThemePopupRoundedCorners.large:
      return 24;
    default:
      return 10;
    // default
  }
};

var EventEmitter = /*#__PURE__*/function () {
  function EventEmitter() {
    _classCallCheck(this, EventEmitter);
    _defineProperty(this, "events", {});
  }
  _createClass(EventEmitter, [{
    key: "on",
    value: function on(event, listener) {
      var _this = this;
      if (!this.events[event]) {
        this.events[event] = [];
      }
      this.events[event].push(listener);
      return function () {
        return _this.off(event, listener);
      };
    }
  }, {
    key: "off",
    value: function off(event, listener) {
      if (!this.events[event]) return;
      this.events[event] = this.events[event].filter(function (l) {
        return l !== listener;
      });
    }
  }, {
    key: "emit",
    value: function emit(event) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      if (!this.events[event]) return;
      this.events[event].forEach(function (listener) {
        return listener.apply(void 0, args);
      });
    }
  }]);
  return EventEmitter;
}();
var eventEmitterInstance = new EventEmitter();

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var QualliSDK = /*#__PURE__*/function () {
  function QualliSDK() {
    var _this = this;
    _classCallCheck(this, QualliSDK);
    _defineProperty(this, "company", {});
    _defineProperty(this, "ready", false);
    _defineProperty(this, "_popupId", 'qualli-survey-popup-iframe');
    _defineProperty(this, "_personId", 'qualli-survey-person');
    _defineProperty(this, "_userSessionKey", '');
    _defineProperty(this, "_userKey", '');
    _defineProperty(this, "_apiKey", '');
    _defineProperty(this, "_popupInFrame", false);
    _defineProperty(this, "_previousUrl", '');
    _defineProperty(this, "_triggerQueue", []);
    _defineProperty(this, "_attributesQueue", []);
    _defineProperty(this, "_activeTriggers", []);
    _defineProperty(this, "_trackScreens", false);
    _defineProperty(this, "_canTrackScrollDepthAgain", true);
    _defineProperty(this, "_postMessage", function (message, data) {
      var iframe = document.getElementById(_this._popupId);
      if (iframe) {
        // @ts-ignore
        iframe.contentWindow.postMessage({
          message: {
            type: message,
            data: data
          }
        }, '*');
      }
    });
    this._handleIframeMessages = this._handleIframeMessages.bind(this);
  }
  _createClass(QualliSDK, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(apiKey, options) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this._apiKey = apiKey;
              _context.next = 3;
              return this.identify();
            case 3:
              this.ready = true;
              if (options !== null && options !== void 0 && options.trackScreens || !options) {
                this._trackScreens = true;
                this._trackScreenChange();
              }
              this._setupScreenTracking();
              this._checkQueueAfterInit();
            case 7:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init(_x, _x2) {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "identify",
    value: function () {
      var _identify = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2() {
        var userKey, userSessionKey, response;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              // check out cookies for a use session key
              // if no key, create one
              // save the key in cookies
              userKey = api.get('qualli_user_key');
              userSessionKey = api.get('qualli_user_session_key');
              _context2.next = 4;
              return ApiManager.identify(this._apiKey, userKey, userSessionKey);
            case 4:
              response = _context2.sent;
              if (!(!(response !== null && response !== void 0 && response.success) || !(response !== null && response !== void 0 && response.app_user_key) || !(response !== null && response !== void 0 && response.session_key))) {
                _context2.next = 7;
                break;
              }
              return _context2.abrupt("return");
            case 7:
              api.set('qualli_user_session_key', response.session_key);
              api.set('qualli_user_key', response.app_user_key);
              this._userSessionKey = response.session_key;
              this._userKey = response.app_user_key;
              this.company = response.company_info;
              this._activeTriggers = response.triggers;
              this._setupActiveTriggerTracking();
            case 14:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function identify() {
        return _identify.apply(this, arguments);
      }
      return identify;
    }()
  }, {
    key: "_checkQueueAfterInit",
    value: function () {
      var _checkQueueAfterInit2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee5() {
        var _this2 = this;
        return _regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) switch (_context5.prev = _context5.next) {
            case 0:
              if (!(this._attributesQueue.length > 0)) {
                _context5.next = 3;
                break;
              }
              _context5.next = 3;
              return Promise.all(this._attributesQueue.map( /*#__PURE__*/function () {
                var _ref = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(attributes) {
                  return _regeneratorRuntime.wrap(function _callee3$(_context3) {
                    while (1) switch (_context3.prev = _context3.next) {
                      case 0:
                        _context3.next = 2;
                        return _this2.setAttributes(attributes);
                      case 2:
                      case "end":
                        return _context3.stop();
                    }
                  }, _callee3);
                }));
                return function (_x3) {
                  return _ref.apply(this, arguments);
                };
              }()));
            case 3:
              // see if we have any triggers to perform
              if (this._triggerQueue.length > 0) {
                this._triggerQueue.forEach( /*#__PURE__*/function () {
                  var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4(trigger) {
                    return _regeneratorRuntime.wrap(function _callee4$(_context4) {
                      while (1) switch (_context4.prev = _context4.next) {
                        case 0:
                          if (!trigger.key) {
                            _context4.next = 5;
                            break;
                          }
                          _context4.next = 3;
                          return _this2._performTrigger(trigger.key, null);
                        case 3:
                          _context4.next = 8;
                          break;
                        case 5:
                          if (!trigger.uniqueId) {
                            _context4.next = 8;
                            break;
                          }
                          _context4.next = 8;
                          return _this2._performTrigger(null, trigger.uniqueId);
                        case 8:
                        case "end":
                          return _context4.stop();
                      }
                    }, _callee4);
                  }));
                  return function (_x4) {
                    return _ref2.apply(this, arguments);
                  };
                }());
              }
            case 4:
            case "end":
              return _context5.stop();
          }
        }, _callee5, this);
      }));
      function _checkQueueAfterInit() {
        return _checkQueueAfterInit2.apply(this, arguments);
      }
      return _checkQueueAfterInit;
    }()
  }, {
    key: "performTrigger",
    value: function () {
      var _performTrigger2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee6(trigger) {
        return _regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) switch (_context6.prev = _context6.next) {
            case 0:
              this._performTrigger(trigger, null);
            case 1:
            case "end":
              return _context6.stop();
          }
        }, _callee6, this);
      }));
      function performTrigger(_x5) {
        return _performTrigger2.apply(this, arguments);
      }
      return performTrigger;
    }()
  }, {
    key: "setAttributes",
    value: function () {
      var _setAttributes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee7() {
        var attributes,
          _args7 = arguments;
        return _regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) switch (_context7.prev = _context7.next) {
            case 0:
              attributes = _args7.length > 0 && _args7[0] !== undefined ? _args7[0] : {};
              if (this.ready) {
                _context7.next = 4;
                break;
              }
              this._attributesQueue.push(attributes);
              return _context7.abrupt("return");
            case 4:
              _context7.next = 6;
              return ApiManager.setUserAttributes(this._apiKey, this._userSessionKey, attributes);
            case 6:
            case "end":
              return _context7.stop();
          }
        }, _callee7, this);
      }));
      function setAttributes() {
        return _setAttributes.apply(this, arguments);
      }
      return setAttributes;
    }()
  }, {
    key: "reset",
    value: function reset() {
      var _this3 = this;
      if (this._popupInFrame) {
        this._closePopup();
      }

      // clear cookies
      api.remove('qualli_user_session_key');
      api.remove('qualli_user_key');
      this.ready = false;
      this._userSessionKey = '';
      this._userKey = '';
      this._surveyToComplete = undefined;
      this._popupInFrame = false;
      this._previousUrl = '';

      // re-init
      setTimeout(function () {
        _this3.init(_this3._apiKey);
      }, 1 * 1000);
    }
  }, {
    key: "on",
    value: function on(event, listener) {
      eventEmitterInstance.on(event, listener);

      // Return an unsubscribe function
      return function () {
        eventEmitterInstance.off(event, listener);
      };
    }
  }, {
    key: "_setupScreenTracking",
    value: function _setupScreenTracking() {
      var _this4 = this;
      var originalPushState = history.pushState;
      var originalReplaceState = history.replaceState;
      history.pushState = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        originalPushState.apply(history, args);
        _this4._trackScreenChange();
      };
      history.replaceState = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        originalReplaceState.apply(history, args);
        _this4._trackScreenChange();
      };
      window.addEventListener('popstate', function () {
        _this4._trackScreenChange();
      });
    }

    // key is the unique_key created by the user
    // uniqueId is the unique_identifier created by Qualli
  }, {
    key: "_performTrigger",
    value: function () {
      var _performTrigger3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee8(key, uniqueId) {
        var _res;
        var res, _res2, surveys, _surveys$, delay, _res3;
        return _regeneratorRuntime.wrap(function _callee8$(_context8) {
          while (1) switch (_context8.prev = _context8.next) {
            case 0:
              if (this.ready) {
                _context8.next = 3;
                break;
              }
              if (key) {
                this._triggerQueue.push({
                  key: key
                });
              } else if (uniqueId) {
                this._triggerQueue.push({
                  uniqueId: uniqueId
                });
              }
              return _context8.abrupt("return");
            case 3:
              if (!key) {
                _context8.next = 9;
                break;
              }
              _context8.next = 6;
              return ApiManager.performTrigger(this._apiKey, this._userSessionKey, {
                name: key
              }, window.location.href);
            case 6:
              res = _context8.sent;
              _context8.next = 13;
              break;
            case 9:
              if (!uniqueId) {
                _context8.next = 13;
                break;
              }
              _context8.next = 12;
              return ApiManager.performTrigger(this._apiKey, this._userSessionKey, {
                unique_id: uniqueId
              }, window.location.href);
            case 12:
              res = _context8.sent;
            case 13:
              if (!((_res = res) !== null && _res !== void 0 && _res.success)) {
                _context8.next = 23;
                break;
              }
              // see if we have any open surveys
              surveys = (_res2 = res) === null || _res2 === void 0 || (_res2 = _res2.data) === null || _res2 === void 0 || (_res2 = _res2.surveys) === null || _res2 === void 0 ? void 0 : _res2.data;
              if (!((surveys === null || surveys === void 0 ? void 0 : surveys.length) > 0)) {
                _context8.next = 23;
                break;
              }
              if (this._popupInFrame) {
                _context8.next = 23;
                break;
              }
              // check if the survey has a delay set (in seconds)
              // the data will contain the timestamp of the last time the survey was shown in this format "2024-01-23T16:50:13.830Z"
              // if the timestamp is more than the delay, show the survey
              // if not -> queue the survey to be shown when the delay is over
              delay = (_surveys$ = surveys[0]) === null || _surveys$ === void 0 ? void 0 : _surveys$.delay;
              if (!delay) {
                _context8.next = 21;
                break;
              }
              this._handleSurveyDelay(surveys[0], (_res3 = res) === null || _res3 === void 0 || (_res3 = _res3.data) === null || _res3 === void 0 ? void 0 : _res3.timestamp);
              return _context8.abrupt("return");
            case 21:
              this._showPopup(surveys[0]);
              return _context8.abrupt("return");
            case 23:
            case "end":
              return _context8.stop();
          }
        }, _callee8, this);
      }));
      function _performTrigger(_x6, _x7) {
        return _performTrigger3.apply(this, arguments);
      }
      return _performTrigger;
    }()
  }, {
    key: "_trackScreenChange",
    value: function () {
      var _trackScreenChange2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee9() {
        var fulllURL, path, res, _res$data, surveys, _surveys$2, delay, _res$data2;
        return _regeneratorRuntime.wrap(function _callee9$(_context9) {
          while (1) switch (_context9.prev = _context9.next) {
            case 0:
              // every new page the scroll depth should be tracked again
              this._canTrackScrollDepthAgain = true;
              if (this._trackScreens) {
                _context9.next = 3;
                break;
              }
              return _context9.abrupt("return");
            case 3:
              fulllURL = window.location.href; // remove query params
              path = fulllURL.split('?')[0];
              if (!(path === this._previousUrl)) {
                _context9.next = 7;
                break;
              }
              return _context9.abrupt("return");
            case 7:
              this._previousUrl = path;
              _context9.next = 10;
              return ApiManager.trackScreen(this._apiKey, this._userSessionKey, {
                url: path
              });
            case 10:
              res = _context9.sent;
              if (!(res !== null && res !== void 0 && res.success)) {
                _context9.next = 21;
                break;
              }
              // see if we have any open surveys
              surveys = res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.surveys) === null || _res$data === void 0 ? void 0 : _res$data.data;
              if (!((surveys === null || surveys === void 0 ? void 0 : surveys.length) > 0)) {
                _context9.next = 21;
                break;
              }
              if (this._popupInFrame) {
                _context9.next = 21;
                break;
              }
              delay = (_surveys$2 = surveys[0]) === null || _surveys$2 === void 0 ? void 0 : _surveys$2.delay;
              if (!delay) {
                _context9.next = 19;
                break;
              }
              this._handleSurveyDelay(surveys[0], res === null || res === void 0 || (_res$data2 = res.data) === null || _res$data2 === void 0 ? void 0 : _res$data2.timestamp);
              return _context9.abrupt("return");
            case 19:
              this._showPopup(surveys[0]);
              return _context9.abrupt("return");
            case 21:
            case "end":
              return _context9.stop();
          }
        }, _callee9, this);
      }));
      function _trackScreenChange() {
        return _trackScreenChange2.apply(this, arguments);
      }
      return _trackScreenChange;
    }()
  }, {
    key: "_showPopup",
    value: function _showPopup(survey) {
      this._surveyToComplete = survey;
      this._popupInFrame = true;
      var islarge = window.innerWidth > 600;
      var iframe = document.createElement('iframe');
      var queryParams = {
        survey_id: survey.unique_identifier,
        popup: 'true'
      };
      var queryParmasString = Object.keys(queryParams)
      // @ts-ignore-next-line
      .map(function (key) {
        return key + '=' + queryParams[key];
      }).join('&');
      var placement = (survey === null || survey === void 0 ? void 0 : survey.popup_placement) || 'bottom_right';
      var borderRadius = mapPopupBorderRadiusToPx(survey.theme.popup_rounded_corners || SurveyThemePopupRoundedCorners.medium);
      var borderColor = '#000000';
      var borderWidth = survey.theme.popup_border_width + 'px' || 0 + 'px';

      // Check screen size and apply styles
      var popupPlacementHorizontalStyles = PopupStyles.styles.popupPlacement.left;
      if (placement === 'bottom_right') {
        popupPlacementHorizontalStyles = PopupStyles.styles.popupPlacement.right;
      } else if (placement === 'bottom_center') {
        popupPlacementHorizontalStyles = PopupStyles.styles.popupPlacement.center;
      }
      var popupStyles = {};
      if (!islarge) {
        Object.assign(popupStyles, _objectSpread({}, PopupStyles.styles.screens.small));
      } else {
        Object.assign(popupStyles, _objectSpread(_objectSpread({}, PopupStyles.styles.screens.large), popupPlacementHorizontalStyles));
      }
      Object.assign(popupStyles, {
        borderRadius: borderRadius,
        borderColor: borderColor,
        borderWidth: borderWidth,
        backgroundColor: survey.theme.background_color,
        border: 'solid',
        zIndex: 999
      });
      Object.assign(iframe.style, popupStyles);
      iframe.src = "".concat(urls.popupIframe, "?").concat(queryParmasString);
      iframe.id = this._popupId; // An identifier for the iframe

      // Append the iframe to the body
      document.body.appendChild(iframe);
      var person = survey === null || survey === void 0 ? void 0 : survey.person;
      if (!!person && person.video_url) {
        var show_survey = function show_survey() {
          setTimeout(function () {
            if (person.style.type === 'circle') {
              iframe.style.bottom = '100px';
            } else {
              iframe.style.bottom = '115px';
            }
          }, person.logic === '2-step' ? 0 : 800);
        };
        this._addPerson(person, show_survey, islarge, survey);
      } else {
        // start the animation immediately
        // Start the animation
        setTimeout(function () {
          if (window.innerWidth < 600) {
            iframe.style.bottom = '16px';
          } else {
            iframe.style.bottom = '24px';
          }
        }, 100);
      }

      // Event listener for messages from the iframe
      window.addEventListener('message', this._handleIframeMessages, false);
      this._emitSurvetShown(survey);
    }
  }, {
    key: "_emitSurvetShown",
    value: function _emitSurvetShown(survey) {
      var _this$_surveyToComple;
      eventEmitterInstance.emit(SurveyEvents.SURVEY_SHOWN, {
        survey_unique_identifier: (_this$_surveyToComple = this._surveyToComplete) === null || _this$_surveyToComple === void 0 ? void 0 : _this$_surveyToComple.unique_identifier
      });
    }
  }, {
    key: "_handleSurveyDelay",
    value: function _handleSurveyDelay(survey, timestamp) {
      var _this5 = this;
      // block from loading new surveys
      this._surveyToComplete = survey;
      this._popupInFrame = true;
      var delayInSeconds = survey.delay;
      // calculate the time with delay
      var delayedTime = new Date(timestamp);
      delayedTime.setSeconds(delayedTime.getSeconds() + delayInSeconds);

      // run a timer to check if the delay is over
      var interval = setInterval(function () {
        var now = new Date();
        if (now >= delayedTime) {
          // delay is over -> show the survey
          _this5._showPopup(survey);
          clearInterval(interval);
        }
      }, 200);
    }
  }, {
    key: "_handleIframeMessages",
    value: function _handleIframeMessages(event) {
      var _event$data;
      // Ensure the message is from the expected source

      if (!(event !== null && event !== void 0 && (_event$data = event.data) !== null && _event$data !== void 0 && _event$data.message)) return;
      var message = event.data.message;
      if (message.type === 'close') {
        this._closePopup();
      }
      if (message.type === 'ready') {
        var _this$company;
        // send the survey data
        this._postMessage('survey_to_complete', this._surveyToComplete);
        this._postMessage('auth', {
          userSessionKey: this._userSessionKey,
          apiKey: this._apiKey,
          companyPlan: (_this$company = this.company) === null || _this$company === void 0 ? void 0 : _this$company.plan
        });
      }
      if (message.type === 'survey_completed') {
        var _this$_surveyToComple2;
        // this._closePopup();

        eventEmitterInstance.emit(SurveyEvents.SURVEY_COMPLETED, {
          survey_unique_identifier: (_this$_surveyToComple2 = this._surveyToComplete) === null || _this$_surveyToComple2 === void 0 ? void 0 : _this$_surveyToComple2.unique_identifier,
          answers: message.data.answers
        });
      }
      if (message.type === 'survey_aborted') {
        this._closePopup();
      }
      if (message.type === 'window_height_request') {
        var height = message.data.height;
        this._resizePopup(height);
      }
    }
  }, {
    key: "_resizePopup",
    value: function _resizePopup(height) {
      if (!isNaN(height)) {
        var _iframe$style;
        var iframe = document.getElementById(this._popupId);
        var totalHeight = height;

        // if the popup has a border set, we should detract this from the total height
        var borderWidth = iframe === null || iframe === void 0 || (_iframe$style = iframe.style) === null || _iframe$style === void 0 ? void 0 : _iframe$style.borderWidth; // this is given as '2px' -> we need to remove the 'px' and parse it to an int
        // create a regex checking if it is the correct format
        var regex = new RegExp('^\\d+(px)?$');
        if (borderWidth && regex.test(borderWidth)) {
          totalHeight -= parseInt(borderWidth);
        }
        if (iframe) {
          iframe.style.height = totalHeight + 'px';
        }
      }
    }
  }, {
    key: "_closePopup",
    value: function _closePopup() {
      var _this$_surveyToComple3;
      this._popupInFrame = false;
      window.removeEventListener('message', this._handleIframeMessages);
      eventEmitterInstance.emit(SurveyEvents.SURVEY_CLOSED, {
        survey_unique_identifier: (_this$_surveyToComple3 = this._surveyToComplete) === null || _this$_surveyToComple3 === void 0 ? void 0 : _this$_surveyToComple3.unique_identifier
      });
      var iframe = document.getElementById(this._popupId);
      var person = document.getElementById(this._personId);
      if (iframe) {
        iframe.style.bottom = '-100%';
        iframe.style.opacity = '0';
        setTimeout(function () {
          iframe.remove();
        }, 1 * 1000); // wait long enough for the API calls to finish
      }
      if (person) {
        person.style.opacity = '0';
        person.remove();
      }
    }
  }, {
    key: "_addPerson",
    value: function _addPerson(person, showSurvey, isLarge, survey) {
      var personContainer = document.createElement('div');
      var personVideo = document.createElement('video');
      personVideo.src = person.video_url; // Assuming 'person' now has a 'video' property
      personVideo.loop = true;
      personVideo.muted = true;
      personVideo.autoplay = true; // Ensure autoplay is enabled
      personVideo.playsInline = true; // Ensure the video plays inline on mobile
      personContainer.id = this._personId;
      var personPositioningStyles = {};
      var personTypeStyles = {};
      var personBaseStyles = {};

      // Positioning styles
      var screenPositioningStyles = PopupStyles.styles.person.position.large;
      if (!isLarge) {
        screenPositioningStyles = PopupStyles.styles.person.position.small;
      }
      switch (survey.popup_placement || 'bottom_right') {
        case 'bottom_left':
          Object.assign(personPositioningStyles, _objectSpread({}, screenPositioningStyles.bottom_left));
          break;
        case 'bottom_center':
          Object.assign(personPositioningStyles, _objectSpread({}, screenPositioningStyles.bottom_center));
          break;
        case 'bottom_right':
          Object.assign(personPositioningStyles, _objectSpread({}, screenPositioningStyles.bottom_right));
          break;
      }

      // Type styles
      if (person.style.type === 'circle') {
        Object.assign(personTypeStyles, _objectSpread({}, PopupStyles.styles.person.type.circle.large));
      } else {
        Object.assign(personTypeStyles, _objectSpread({}, PopupStyles.styles.person.type.rectangle.large));
      }

      // Base styles
      Object.assign(personBaseStyles, _objectSpread({}, PopupStyles.styles.person.base.large));

      // Apply combined styles to the container
      Object.assign(personContainer.style, _objectSpread(_objectSpread(_objectSpread(_objectSpread({}, personBaseStyles), personTypeStyles), personPositioningStyles), {}, {
        border: "solid ".concat(person.style.border_width, "px ").concat(person.style.border_color)
      }));

      // Video styles to cover the container
      personVideo.style.width = '100%';
      personVideo.style.height = '100%';
      personVideo.style.objectFit = 'cover';

      // Logic for showing the survey
      if (person.logic === '2-step') {
        personContainer.onclick = showSurvey;
      }

      // Append the video to the container and the container to the body
      document.body.appendChild(personContainer);
      personContainer.appendChild(personVideo);

      // Fade in the container
      setTimeout(function () {
        personContainer.style.opacity = '1';
        if (person.logic === '1-step') {
          showSurvey();
        }
      }, 400);
    }
  }, {
    key: "_setupActiveTriggerTracking",
    value: function _setupActiveTriggerTracking() {
      var _this6 = this,
        _this$_activeTriggers,
        _this$_activeTriggers2;
      var throttle = function throttle(func, limit) {
        var inThrottle;
        return function () {
          var args = arguments;
          // @ts-ignore
          var context = this;
          if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(function () {
              return inThrottle = false;
            }, limit);
          }
        };
      };
      var checkScrollDepth = throttle(function () {
        if (!_this6._canTrackScrollDepthAgain) return;
        var scrollDepth = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
        _this6._activeTriggers.forEach(function (trigger) {
          if (trigger.scroll_depth && scrollDepth >= trigger.scroll_depth) {
            _this6._canTrackScrollDepthAgain = false;
            _this6._performTrigger(null, trigger.unique_identifier);
          }
        });
      }, 200);
      if ((_this$_activeTriggers = this._activeTriggers) !== null && _this$_activeTriggers !== void 0 && _this$_activeTriggers.some(function (t) {
        return t.scroll_depth !== null;
      })) {
        window.addEventListener('scroll', checkScrollDepth);
      }
      var checkElementInteraction = function checkElementInteraction(event) {
        var _this6$_activeTrigger;
        (_this6$_activeTrigger = _this6._activeTriggers) === null || _this6$_activeTrigger === void 0 || _this6$_activeTrigger.forEach(function (trigger) {
          // Handle non-scroll triggers
          var targetElement = event.target;
          if (trigger.css_selector && targetElement.matches(trigger.css_selector)) {
            _this6._performTrigger(null, trigger.unique_identifier);
          } else if (trigger.inner_text && targetElement.innerText === trigger.inner_text) {
            _this6._performTrigger(null, trigger.unique_identifier);
          }
        });
      };
      if ((_this$_activeTriggers2 = this._activeTriggers) !== null && _this$_activeTriggers2 !== void 0 && _this$_activeTriggers2.some(function (t) {
        return t.unique_key || t.css_selector || t.inner_text;
      })) {
        document.body.addEventListener('click', checkElementInteraction);
      }
    }
  }]);
  return QualliSDK;
}(); // Initialize and export the SDK instance
var Qualli = new QualliSDK();

export { Qualli as default };
//# sourceMappingURL=index.esm.js.map
