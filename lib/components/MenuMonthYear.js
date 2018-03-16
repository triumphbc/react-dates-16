Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MenuMonthYear = function (_React$Component) {
  _inherits(MenuMonthYear, _React$Component);

  function MenuMonthYear(props) {
    _classCallCheck(this, MenuMonthYear);

    var _this = _possibleConstructorReturn(this, (MenuMonthYear.__proto__ || Object.getPrototypeOf(MenuMonthYear)).call(this, props));

    _this.renderMonths = _this.renderMonths.bind(_this);
    _this.renderYears = _this.renderYears.bind(_this);
    _this.onYearChange = _this.onYearChange.bind(_this);
    _this.onMonthChange = _this.onMonthChange.bind(_this);
    _this.goToToday = _this.goToToday.bind(_this);
    return _this;
  }

  _createClass(MenuMonthYear, [{
    key: 'onYearChange',
    value: function () {
      function onYearChange(e) {
        var value = e.target.value;
        if (value.length !== 4 || isNaN(value)) {
          e.preventDefault();
          return;
        }
        this.props.onMenuChangeYearMonth({ 'year': e.target.value });
      }

      return onYearChange;
    }()
  }, {
    key: 'onMonthChange',
    value: function () {
      function onMonthChange(e) {
        this.props.onMenuChangeYearMonth({ 'month': e.target.value });
      }

      return onMonthChange;
    }()
  }, {
    key: 'goToToday',
    value: function () {
      function goToToday() {
        this.refs.year.value = null;
        this.props.onMenuChangeYearMonth({
          'month': (0, _moment2['default'])().format('M'),
          'year': (0, _moment2['default'])().format('YYYY')
        });
      }

      return goToToday;
    }()
  }, {
    key: 'renderMonths',
    value: function () {
      function renderMonths(value) {

        var options = [];

        var selectStyles = {
          width: '90px',
          marginRight: '5px'
        };

        for (var month = 1; month <= 12; month++) {
          var monthName = (0, _moment2['default'])(month, "M").format("MMMM");
          options.push(_react2['default'].createElement(
            'option',
            { key: month, value: month },
            monthName
          ));
        }
        return _react2['default'].createElement(
          'select',
          { style: selectStyles, onChange: this.onMonthChange, ref: 'month', value: value, name: 'month' },
          options
        );
      }

      return renderMonths;
    }()
  }, {
    key: 'renderYears',
    value: function () {
      function renderYears(value) {
        var inputStyles = {
          width: '40px',
          marginRight: '5px'
        };

        return _react2['default'].createElement('input', { style: inputStyles, onChange: this.onYearChange, ref: 'year', name: 'year' });
      }

      return renderYears;
    }()
  }, {
    key: 'render',
    value: function () {
      function render() {
        var _props = this.props,
            month = _props.month,
            year = _props.year;


        var styles = {
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          padding: '0 20px 10px'
        };

        var months = this.renderMonths(month);
        var years = this.renderYears(year);

        return _react2['default'].createElement(
          'span',
          { style: styles },
          months,
          years
        );
      }

      return render;
    }()
  }]);

  return MenuMonthYear;
}(_react2['default'].Component);

exports['default'] = MenuMonthYear;


MenuMonthYear.propTypes = {
  month: _propTypes2['default'].string,
  year: _propTypes2['default'].string,
  onMenuChangeYearMonth: _propTypes2['default'].func
};