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
  // popupIframe: 'http://localhost:3003/surveys/popup',
  // api: 'http://localhost:8080/api/',
  popupIframe: 'https://surveys.usequalli.com/surveys/popup',
  api: 'https://api.usequalli.com/api/'
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
    var _performTrigger = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3(apiKey, userSessionKey, trigger) {
      var url, headers, jsonResponse;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (trigger !== null && trigger !== void 0 && trigger.name) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            url = "".concat(API_BASE_PATH, "app-user-events/trigger");
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
              url: url,
              method: 'POST',
              headers: headers,
              body: {
                trigger: trigger,
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
    function performTrigger(_x7, _x8, _x9) {
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
    function trackScreen(_x10, _x11, _x12) {
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
    function logSurveyAction(_x13, _x14, _x15, _x16, _x17) {
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
    function logEvent(_x18, _x19, _x20) {
      return _logEvent.apply(this, arguments);
    }
    return logEvent;
  }()
};

// large screen styles
var largeScreenStyles = {
  position: 'fixed',
  width: '400px',
  height: '250px',
  bottom: '-100%',
  'border-radius': '12px',
  border: 'none',
  opacity: 1,
  transition: 'all 400ms ease-in-out'
};
var largeScreenLeftStyles = {
  left: '24px'
};
var largeScreenCentertStyles = {
  left: '50%',
  transform: 'translate(-50%, 0)'
};
var largeScreenRightStyles = {
  right: '24px'
};

// Styles for smaller screens
var smallScreenStyles = {
  position: 'fixed',
  left: '0',
  bottom: '-100%',
  // start off screen
  width: '100%',
  height: '200px',
  border: 'none',
  'max-height': '100%',
  'border-top-left-radius': '16px',
  'border-top-right-radius': '16px',
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

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
var QualliSDK = /*#__PURE__*/function () {
  function QualliSDK() {
    var _this = this;
    _classCallCheck(this, QualliSDK);
    _defineProperty(this, "popupId", 'qualli-survey-popup-iframe');
    _defineProperty(this, "company", {});
    _defineProperty(this, "ready", false);
    _defineProperty(this, "userSessionKey", '');
    _defineProperty(this, "userKey", '');
    _defineProperty(this, "apiKey", '');
    _defineProperty(this, "popupInFrame", false);
    _defineProperty(this, "previousUrl", '');
    _defineProperty(this, "postMessage", function (message, data) {
      var iframe = document.getElementById(_this.popupId);
      if (iframe) {
        iframe.contentWindow.postMessage({
          message: {
            type: message,
            data: data
          }
        }, '*');
      }
    });
    this.handleIframeMessages = this.handleIframeMessages.bind(this);
  }
  _createClass(QualliSDK, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee(apiKey, options) {
        var userKey, userSessionKey, response;
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // check out cookies for a use session key
              // if no key, create one
              // save the key in cookies
              userKey = api.get('qualli_user_key');
              userSessionKey = api.get('qualli_user_session_key');
              this.apiKey = apiKey;
              _context.next = 5;
              return ApiManager.identify(apiKey, userKey, userSessionKey);
            case 5:
              response = _context.sent;
              if (!(!(response !== null && response !== void 0 && response.success) || !(response !== null && response !== void 0 && response.app_user_key) || !(response !== null && response !== void 0 && response.session_key))) {
                _context.next = 8;
                break;
              }
              return _context.abrupt("return");
            case 8:
              api.set('qualli_user_session_key', response.session_key);
              api.set('qualli_user_key', response.app_user_key);
              this.userSessionKey = response.session_key;
              this.userKey = response.app_user_key;
              this.company = response.company_info;
              this.ready = true;
              if (options !== null && options !== void 0 && options.trackScreens || !options) {
                this.trackScreenChange();
                this.setupScreenTracking();
              }
            case 15:
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
    key: "performTrigger",
    value: function () {
      var _performTrigger = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee2(trigger) {
        var res, _res$data, surveys;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return ApiManager.performTrigger(this.apiKey, this.userSessionKey, {
                name: trigger
              });
            case 2:
              res = _context2.sent;
              if (!(res !== null && res !== void 0 && res.success)) {
                _context2.next = 9;
                break;
              }
              // see if we have any open surveys
              surveys = res === null || res === void 0 || (_res$data = res.data) === null || _res$data === void 0 || (_res$data = _res$data.surveys) === null || _res$data === void 0 ? void 0 : _res$data.data;
              if (!((surveys === null || surveys === void 0 ? void 0 : surveys.length) > 0)) {
                _context2.next = 9;
                break;
              }
              if (this.popupInFrame) {
                _context2.next = 9;
                break;
              }
              this.showPopup(surveys[0]);
              return _context2.abrupt("return");
            case 9:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this);
      }));
      function performTrigger(_x3) {
        return _performTrigger.apply(this, arguments);
      }
      return performTrigger;
    }()
  }, {
    key: "setAttributes",
    value: function () {
      var _setAttributes = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee3() {
        var attributes,
          _args3 = arguments;
        return _regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              attributes = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : {};
              _context3.next = 3;
              return ApiManager.setUserAttributes(this.apiKey, this.userSessionKey, attributes);
            case 3:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this);
      }));
      function setAttributes() {
        return _setAttributes.apply(this, arguments);
      }
      return setAttributes;
    }()
  }, {
    key: "reset",
    value: function reset() {
      var _this2 = this;
      if (this.popupInFrame) {
        this.closePopup();
      }

      // clear cookies
      api.remove('qualli_user_session_key');
      api.remove('qualli_user_key');
      this.ready = false;
      this.userSessionKey = '';
      this.userKey = '';
      this.surveyToComplete = undefined;
      this.popupInFrame = false;
      this.previousUrl = '';

      // re-init
      setTimeout(function () {
        _this2.init(_this2.apiKey);
      }, 1 * 1000);
    }
  }, {
    key: "setupScreenTracking",
    value: function setupScreenTracking() {
      var _this3 = this;
      var originalPushState = history.pushState;
      var originalReplaceState = history.replaceState;
      history.pushState = function () {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        originalPushState.apply(history, args);
        _this3.trackScreenChange();
      };
      history.replaceState = function () {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }
        originalReplaceState.apply(history, args);
        _this3.trackScreenChange();
      };
      window.addEventListener('popstate', function () {
        _this3.trackScreenChange();
      });
    }
  }, {
    key: "trackScreenChange",
    value: function () {
      var _trackScreenChange = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee4() {
        var fulllURL, path, res, _res$data2, surveys;
        return _regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) switch (_context4.prev = _context4.next) {
            case 0:
              fulllURL = window.location.href; // remove query params
              path = fulllURL.split('?')[0];
              if (!(path === this.previousUrl)) {
                _context4.next = 4;
                break;
              }
              return _context4.abrupt("return");
            case 4:
              this.previousUrl = path;
              _context4.next = 7;
              return ApiManager.trackScreen(this.apiKey, this.userSessionKey, {
                url: path
              });
            case 7:
              res = _context4.sent;
              if (!(res !== null && res !== void 0 && res.success)) {
                _context4.next = 14;
                break;
              }
              // see if we have any open surveys
              surveys = res === null || res === void 0 || (_res$data2 = res.data) === null || _res$data2 === void 0 || (_res$data2 = _res$data2.surveys) === null || _res$data2 === void 0 ? void 0 : _res$data2.data;
              if (!((surveys === null || surveys === void 0 ? void 0 : surveys.length) > 0)) {
                _context4.next = 14;
                break;
              }
              if (this.popupInFrame) {
                _context4.next = 14;
                break;
              }
              this.showPopup(surveys[0]);
              return _context4.abrupt("return");
            case 14:
            case "end":
              return _context4.stop();
          }
        }, _callee4, this);
      }));
      function trackScreenChange() {
        return _trackScreenChange.apply(this, arguments);
      }
      return trackScreenChange;
    }()
  }, {
    key: "showPopup",
    value: function showPopup(survey) {
      this.surveyToComplete = survey;
      this.popupInFrame = true;
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
      var borderColor = survey.theme.popup_border_color || '#000000';
      var borderWidth = survey.theme.popup_border_width + 'px' || 0 + 'px';

      // Check screen size and apply styles
      var popupPlacementHorizontalStyles = PopupStyles.styles.popupPlacement.left;
      if (placement === 'bottom_right') {
        popupPlacementHorizontalStyles = PopupStyles.styles.popupPlacement.right;
      } else if (placement === 'bottom_center') {
        popupPlacementHorizontalStyles = PopupStyles.styles.popupPlacement.center;
      }
      if (window.innerWidth < 600) {
        Object.assign(iframe.style, _objectSpread(_objectSpread({}, PopupStyles.styles.screens.small), {}, {
          borderTopLeftRadius: borderRadius,
          borderTopRightRadius: borderRadius,
          zIndex: 999
        }));
      } else {
        Object.assign(iframe.style, _objectSpread(_objectSpread(_objectSpread({}, PopupStyles.styles.screens.large), popupPlacementHorizontalStyles), {}, {
          borderRadius: borderRadius,
          borderColor: borderColor,
          borderWidth: borderWidth,
          border: 'solid',
          zIndex: 999
        }));
      }
      iframe.src = "".concat(urls.popupIframe, "?").concat(queryParmasString);
      iframe.id = this.popupId; // An identifier for the iframe

      // Append the iframe to the body
      document.body.appendChild(iframe);

      // Start the animation
      setTimeout(function () {
        if (window.innerWidth < 600) {
          iframe.style.bottom = '0';
        } else {
          iframe.style.bottom = '24px';
        }
      }, 100);

      // Event listener for messages from the iframe
      window.addEventListener('message', this.handleIframeMessages, false);
    }
  }, {
    key: "handleIframeMessages",
    value: function handleIframeMessages(event) {
      var _event$data;
      // Ensure the message is from the expected source

      if (!(event !== null && event !== void 0 && (_event$data = event.data) !== null && _event$data !== void 0 && _event$data.message)) return;
      var message = event.data.message;
      if (message.type === 'close') {
        // save the answers we have
        this.closePopup();
      }
      if (message.type === 'ready') {
        var _this$company;
        // send the survey data
        this.postMessage('survey_to_complete', this.surveyToComplete);
        this.postMessage('auth', {
          userSessionKey: this.userSessionKey,
          apiKey: this.apiKey,
          companyPlan: (_this$company = this.company) === null || _this$company === void 0 ? void 0 : _this$company.plan
        });
      }
      if (message.type === 'survey_completed') {
        this.closePopup();
      }
      if (message.type === 'survey_aborted') {
        this.closePopup();
      }
      if (message.type === 'window_height_request') {
        var height = message.data.height;
        this.resizePopup(height);
      }
    }
  }, {
    key: "resizePopup",
    value: function resizePopup(height) {
      if (!isNaN(height)) {
        var iframe = document.getElementById(this.popupId);
        if (iframe) {
          iframe.style.height = height + 'px';
        }
      }
    }
  }, {
    key: "closePopup",
    value: function closePopup() {
      this.popupInFrame = false;
      window.removeEventListener('message', this.handleIframeMessages);
      var iframe = document.getElementById(this.popupId);
      if (iframe) {
        iframe.style.bottom = '-100%';
        iframe.style.opacity = '0';
        setTimeout(function () {
          iframe.remove();
        }, 1 * 1000); // wait long enough for the API calls to finish
      }
    }
  }]);
  return QualliSDK;
}(); // Initialize and export the SDK instance
var Qualli = new QualliSDK();

export { Qualli as default };
//# sourceMappingURL=index.esm.js.map
