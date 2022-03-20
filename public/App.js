"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var dateRegex = new RegExp('^\\d\\d\\d\\d-\\d\\d-\\d\\d');

function jsonDateReviver(key, value) {
  if (dateRegex.test(value)) return new Date(value);
  return value;
}

var ReservationRow = /*#__PURE__*/function (_React$Component) {
  _inherits(ReservationRow, _React$Component);

  var _super = _createSuper(ReservationRow);

  function ReservationRow() {
    _classCallCheck(this, ReservationRow);

    return _super.call(this);
  }

  _createClass(ReservationRow, [{
    key: "render",
    value: function render() {
      var _this = this;

      var reservation = this.props.reservation;
      var idx = this.props.idx;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, idx), /*#__PURE__*/React.createElement("td", null, reservation.name), /*#__PURE__*/React.createElement("td", null, reservation.phone), /*#__PURE__*/React.createElement("td", null, reservation.created.toDateString()), this.props.handleDelete && /*#__PURE__*/React.createElement("td", null, /*#__PURE__*/React.createElement("a", {
        href: "#",
        onClick: function onClick() {
          return _this.props.handleDelete(reservation.id);
        }
      }, "delete")));
    }
  }]);

  return ReservationRow;
}(React.Component);

var BlacklistRow = /*#__PURE__*/function (_React$Component2) {
  _inherits(BlacklistRow, _React$Component2);

  var _super2 = _createSuper(BlacklistRow);

  function BlacklistRow() {
    _classCallCheck(this, BlacklistRow);

    return _super2.call(this);
  }

  _createClass(BlacklistRow, [{
    key: "render",
    value: function render() {
      var blacklist = this.props.blacklist;
      var idx = this.props.idx;
      return /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", null, idx), /*#__PURE__*/React.createElement("td", null, blacklist.name), /*#__PURE__*/React.createElement("td", null, blacklist.phone), /*#__PURE__*/React.createElement("td", null, blacklist.created.toDateString()));
    }
  }]);

  return BlacklistRow;
}(React.Component);

var ReservationTable = /*#__PURE__*/function (_React$Component3) {
  _inherits(ReservationTable, _React$Component3);

  var _super3 = _createSuper(ReservationTable);

  function ReservationTable() {
    _classCallCheck(this, ReservationTable);

    return _super3.apply(this, arguments);
  }

  _createClass(ReservationTable, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var idx = 1;
      var reservationRows = this.props.reservations.map(function (reservation) {
        return /*#__PURE__*/React.createElement(ReservationRow, {
          key: reservation.id,
          reservation: reservation,
          idx: idx++,
          handleDelete: _this2.props.handleDelete
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Created"), this.props.handleDelete && /*#__PURE__*/React.createElement("th", null, "Delete"))), /*#__PURE__*/React.createElement("tbody", null, reservationRows));
    }
  }]);

  return ReservationTable;
}(React.Component);

var BlacklistTable = /*#__PURE__*/function (_React$Component4) {
  _inherits(BlacklistTable, _React$Component4);

  var _super4 = _createSuper(BlacklistTable);

  function BlacklistTable() {
    _classCallCheck(this, BlacklistTable);

    return _super4.apply(this, arguments);
  }

  _createClass(BlacklistTable, [{
    key: "render",
    value: function render() {
      var idx = 1;
      var blacklistRows = this.props.blacklist.map(function (blacklistcustomer) {
        return /*#__PURE__*/React.createElement(BlacklistRow, {
          key: blacklistcustomer.id,
          blacklist: blacklistcustomer,
          idx: idx++
        });
      });
      return /*#__PURE__*/React.createElement("table", {
        className: "bordered-table"
      }, /*#__PURE__*/React.createElement("thead", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("th", null, "ID"), /*#__PURE__*/React.createElement("th", null, "Name"), /*#__PURE__*/React.createElement("th", null, "Phone"), /*#__PURE__*/React.createElement("th", null, "Created"))), /*#__PURE__*/React.createElement("tbody", null, blacklistRows));
    }
  }]);

  return BlacklistTable;
}(React.Component);

var ReservationAdd = /*#__PURE__*/function (_React$Component5) {
  _inherits(ReservationAdd, _React$Component5);

  var _super5 = _createSuper(ReservationAdd);

  function ReservationAdd() {
    var _this3;

    _classCallCheck(this, ReservationAdd);

    _this3 = _super5.call(this);
    _this3.handleSubmit = _this3.handleSubmit.bind(_assertThisInitialized(_this3));
    return _this3;
  }

  _createClass(ReservationAdd, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.reservationAdd;
      var reservation = {
        name: form.name.value,
        phone: form.phone.value
      };
      var namere = /^([a-zA-Z ]){2,30}$/;

      if (!namere.test(reservation.name)) {
        alert("Please enter a valid name (at least 2 characters long without numbers)");
        return;
      }

      var phonere = /^\d{8}$/;
      ;

      if (!phonere.test(reservation.phone)) {
        alert("Please Enter a valid 8 digit phone number)");
        return;
      }

      this.props.createReservation(reservation);
      form.name.value = "";
      form.phone.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Create Reservation"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("form", {
        name: "reservationAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "phone",
        placeholder: "Phone"
      }), /*#__PURE__*/React.createElement("button", null, "Add")));
    }
  }]);

  return ReservationAdd;
}(React.Component);

var ReservationList = /*#__PURE__*/function (_React$Component6) {
  _inherits(ReservationList, _React$Component6);

  var _super6 = _createSuper(ReservationList);

  function ReservationList() {
    _classCallCheck(this, ReservationList);

    return _super6.call(this);
  }

  _createClass(ReservationList, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, this.props.handleDelete ? /*#__PURE__*/React.createElement("h1", null, "Delete Reservation") : /*#__PURE__*/React.createElement("h1", null, "Reservations"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(ReservationTable, {
        reservations: this.props.reservations,
        handleDelete: this.props.handleDelete
      }));
    }
  }]);

  return ReservationList;
}(React.Component);

var BlacklistList = /*#__PURE__*/function (_React$Component7) {
  _inherits(BlacklistList, _React$Component7);

  var _super7 = _createSuper(BlacklistList);

  function BlacklistList() {
    var _this4;

    _classCallCheck(this, BlacklistList);

    _this4 = _super7.call(this);
    _this4.handleSubmit = _this4.handleSubmit.bind(_assertThisInitialized(_this4));
    return _this4;
  }

  _createClass(BlacklistList, [{
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      var form = document.forms.blacklistAdd;
      var blacklistCustomer = {
        name: form.name.value,
        phone: form.phone.value
      };
      var namere = /^([a-zA-Z ]){2,30}$/;

      if (!namere.test(blacklistCustomer.name)) {
        alert("Please enter a valid name (at least 2 characters long without numbers)");
        return;
      }

      var phonere = /^\d{8}$/;
      ;

      if (!phonere.test(blacklistCustomer.phone)) {
        alert("Please Enter a valid 8 digit phone number)");
        return;
      }

      this.props.createBlacklist(blacklistCustomer);
      form.name.value = "";
      form.phone.value = "";
    }
  }, {
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Blacklisted Customers"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(BlacklistTable, {
        blacklist: this.props.blacklist
      }), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement("form", {
        name: "blacklistAdd",
        onSubmit: this.handleSubmit
      }, /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "name",
        placeholder: "Name"
      }), /*#__PURE__*/React.createElement("input", {
        type: "text",
        name: "phone",
        placeholder: "Phone"
      }), /*#__PURE__*/React.createElement("button", null, "Add")));
    }
  }]);

  return BlacklistList;
}(React.Component);

var SeatGrid = /*#__PURE__*/function (_React$Component8) {
  _inherits(SeatGrid, _React$Component8);

  var _super8 = _createSuper(SeatGrid);

  function SeatGrid() {
    _classCallCheck(this, SeatGrid);

    return _super8.call(this);
  }

  _createClass(SeatGrid, [{
    key: "render",
    value: function render() {
      return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h2", null, "Free Seats"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, this.props.seatmap.map(function (rows, rowidx) {
        return /*#__PURE__*/React.createElement("tr", {
          key: rowidx
        }, rows.map(function (row, colidx) {
          return /*#__PURE__*/React.createElement("td", {
            className: row == 1 ? 'occupied' : 'unoccupied',
            key: colidx
          });
        }));
      }))), /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("h4", null, "Legend"), /*#__PURE__*/React.createElement("table", null, /*#__PURE__*/React.createElement("tbody", null, /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        className: "legend"
      }, /*#__PURE__*/React.createElement("div", {
        className: 'occupied'
      })), /*#__PURE__*/React.createElement("td", {
        className: "legend"
      }, /*#__PURE__*/React.createElement("div", null, "Occupied"))), /*#__PURE__*/React.createElement("tr", null, /*#__PURE__*/React.createElement("td", {
        className: "legend"
      }, /*#__PURE__*/React.createElement("div", {
        className: 'unoccupied'
      })), /*#__PURE__*/React.createElement("td", {
        className: "legend"
      }, /*#__PURE__*/React.createElement("div", null, "Free"))))));
    }
  }]);

  return SeatGrid;
}(React.Component);

var Home = /*#__PURE__*/function (_React$Component9) {
  _inherits(Home, _React$Component9);

  var _super9 = _createSuper(Home);

  function Home() {
    var _this5;

    _classCallCheck(this, Home);

    _this5 = _super9.call(this);
    _this5.generateSeatmap = _this5.generateSeatmap.bind(self.generateSeatmap);
    return _this5;
  }

  _createClass(Home, [{
    key: "generateSeatmap",
    value: function generateSeatmap(rows, cols, totalBookings) {
      var seatmap = [];

      for (var i = 0; i < rows; i++) {
        var row = [];

        for (var j = 0; j < cols; j++) {
          totalBookings > 0 ? row.push(1) : row.push(0);
          totalBookings -= 1;
        }

        seatmap.push(row);
      }

      return seatmap;
    }
  }, {
    key: "render",
    value: function render() {
      var seatmap = this.generateSeatmap(this.props.rows, this.props.cols, this.props.totalBookings);
      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Welcome to Reservation System"), /*#__PURE__*/React.createElement("hr", null), /*#__PURE__*/React.createElement(SeatGrid, {
        seatmap: seatmap
      }));
    }
  }]);

  return Home;
}(React.Component);

var ReservationsApp = /*#__PURE__*/function (_React$Component10) {
  _inherits(ReservationsApp, _React$Component10);

  var _super10 = _createSuper(ReservationsApp);

  function ReservationsApp() {
    var _this6;

    _classCallCheck(this, ReservationsApp);

    _this6 = _super10.call(this);
    _this6.state = {
      name: "ReservationsApp",
      showCreateReservation: false,
      showReservationList: false,
      showHome: true,
      showDeleteReservation: false,
      showBlackListedCustomers: false,
      reservations: [],
      blacklist: []
    };
    _this6.activateComponent = _this6.activateComponent.bind(_assertThisInitialized(_this6));
    _this6.createReservation = _this6.createReservation.bind(_assertThisInitialized(_this6));
    _this6.createBlacklist = _this6.createBlacklist.bind(_assertThisInitialized(_this6));
    _this6.handleDelete = _this6.handleDelete.bind(_assertThisInitialized(_this6));
    return _this6;
  }

  _createClass(ReservationsApp, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.loadData();
    }
  }, {
    key: "loadReservationData",
    value: function () {
      var _loadReservationData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var query, response, body, result;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                query = "query {\n      reservationList {\n        id\n        name\n        phone\n        created\n      }\n    }";
                _context.next = 3;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                response = _context.sent;
                _context.next = 6;
                return response.text();

              case 6:
                body = _context.sent;
                result = JSON.parse(body, jsonDateReviver);
                console.log(result.data.reservationList);
                return _context.abrupt("return", result.data.reservationList);

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function loadReservationData() {
        return _loadReservationData.apply(this, arguments);
      }

      return loadReservationData;
    }()
  }, {
    key: "loadBlacklistData",
    value: function () {
      var _loadBlacklistData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var query, response, body, result;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                query = "query {\n      blacklist {\n        id\n        name\n        phone\n        created\n      }\n    }";
                _context2.next = 3;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query
                  })
                });

              case 3:
                response = _context2.sent;
                _context2.next = 6;
                return response.text();

              case 6:
                body = _context2.sent;
                result = JSON.parse(body, jsonDateReviver);
                console.log(result.data.blacklist);
                return _context2.abrupt("return", result.data.blacklist);

              case 10:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function loadBlacklistData() {
        return _loadBlacklistData.apply(this, arguments);
      }

      return loadBlacklistData;
    }()
  }, {
    key: "loadData",
    value: function () {
      var _loadData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.t0 = this;
                _context3.next = 3;
                return this.loadReservationData();

              case 3:
                _context3.t1 = _context3.sent;
                _context3.next = 6;
                return this.loadBlacklistData();

              case 6:
                _context3.t2 = _context3.sent;
                _context3.t3 = {
                  reservations: _context3.t1,
                  blacklist: _context3.t2
                };

                _context3.t0.setState.call(_context3.t0, _context3.t3);

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function loadData() {
        return _loadData.apply(this, arguments);
      }

      return loadData;
    }()
  }, {
    key: "activateComponent",
    value: function activateComponent(component) {
      switch (component) {
        case "showCreateReservation":
          this.setState({
            showCreateReservation: true,
            showReservationList: false,
            showDeleteReservation: false,
            showHome: false,
            showBlackListedCustomers: false
          });
          break;

        case "showReservationList":
          this.setState({
            showReservationList: true,
            showCreateReservation: false,
            showDeleteReservation: false,
            showHome: false,
            showBlackListedCustomers: false
          });
          break;

        case "showDeleteReservation":
          this.setState({
            showDeleteReservation: true,
            showCreateReservation: false,
            showHome: false,
            showReservationList: false,
            showBlackListedCustomers: false
          });
          break;

        case "showHome":
          this.setState({
            showHome: true,
            showCreateReservation: false,
            showDeleteReservation: false,
            showReservationList: false,
            showBlackListedCustomers: false
          });
          break;

        case "showBlackListedCustomers":
          this.setState({
            showBlackListedCustomers: true,
            showHome: false,
            showCreateReservation: false,
            showDeleteReservation: false,
            showReservationList: false
          });

        default:
          null;
      }
    }
  }, {
    key: "createReservation",
    value: function () {
      var _createReservation = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(reservation) {
        var newReservationList, query, response;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                reservation.id = Date.now().toString();
                reservation.created = new Date();
                newReservationList = this.state.reservations.slice();

                if (!(newReservationList.length <= 24)) {
                  _context4.next = 11;
                  break;
                }

                query = "mutation {\n        createReservation( reservation: {\n          id: \"".concat(reservation.id, "\",\n          name: \"").concat(reservation.name, "\",\n          phone: \"").concat(reservation.phone, "\",\n          created: \"").concat(reservation.created, "\"\n        }) {\n          id,\n          name,\n          phone,\n          created,\n        }\n      }");
                _context4.next = 7;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      reservation: reservation
                    }
                  })
                });

              case 7:
                response = _context4.sent;
                this.loadData();
                _context4.next = 12;
                break;

              case 11:
                alert("Overflow");

              case 12:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      function createReservation(_x) {
        return _createReservation.apply(this, arguments);
      }

      return createReservation;
    }()
  }, {
    key: "createBlacklist",
    value: function () {
      var _createBlacklist = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(customer) {
        var query, response;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                customer.id = Date.now().toString();
                customer.created = new Date();
                query = "mutation {\n      createBlacklist( customer: {\n        id: \"".concat(customer.id, "\",\n        phone: \"").concat(customer.phone, "\",\n        name: \"").concat(customer.name, "\",\n        created: \"").concat(customer.created, "\"\n      }) {\n        id,\n        name,\n        phone,\n        created,\n      }\n    }");
                _context5.next = 5;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      customer: customer
                    }
                  })
                });

              case 5:
                response = _context5.sent;
                this.loadData();

              case 7:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function createBlacklist(_x2) {
        return _createBlacklist.apply(this, arguments);
      }

      return createBlacklist;
    }()
  }, {
    key: "handleDelete",
    value: function () {
      var _handleDelete = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(id) {
        var query, response;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                query = "mutation {\n      deleteReservation (id: \"".concat(id.toString(), "\") {\n        id,\n        name,\n        phone,\n        created\n      }\n    }");
                _context6.next = 3;
                return fetch('/graphql', {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify({
                    query: query,
                    variables: {
                      id: id
                    }
                  })
                });

              case 3:
                response = _context6.sent;
                this.loadData();

              case 5:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6, this);
      }));

      function handleDelete(_x3) {
        return _handleDelete.apply(this, arguments);
      }

      return handleDelete;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this7 = this;

      return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this7.activateComponent("showHome");
        }
      }, "Home"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this7.activateComponent("showCreateReservation");
        }
      }, "Create Reservation"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this7.activateComponent("showDeleteReservation");
        }
      }, "Delete Reservation"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this7.activateComponent("showReservationList");
        }
      }, "View Reservations"), /*#__PURE__*/React.createElement("button", {
        onClick: function onClick() {
          return _this7.activateComponent("showBlackListedCustomers");
        }
      }, "Blacklist Customer")), this.state.showHome && /*#__PURE__*/React.createElement(Home, {
        rows: 5,
        cols: 5,
        totalBookings: this.state.reservations.length
      }), this.state.showReservationList && /*#__PURE__*/React.createElement(ReservationList, {
        reservations: this.state.reservations
      }), this.state.showCreateReservation && /*#__PURE__*/React.createElement(ReservationAdd, {
        createReservation: this.createReservation
      }), this.state.showDeleteReservation && /*#__PURE__*/React.createElement(ReservationList, {
        reservations: this.state.reservations,
        handleDelete: this.handleDelete
      }), this.state.showBlackListedCustomers && /*#__PURE__*/React.createElement(BlacklistList, {
        blacklist: this.state.blacklist,
        createBlacklist: this.createBlacklist
      }));
    }
  }]);

  return ReservationsApp;
}(React.Component);

var app = /*#__PURE__*/React.createElement(ReservationsApp, null);
ReactDOM.render(app, document.getElementById('contents'));