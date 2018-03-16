const core = {
  white: '#fff',
  gray: '#565a5c',
  grayLight: '#82888a',
  grayLighter: '#cacccd',
  grayLightest: '#f2f2f2',

  borderMedium: '#c4c4c4',
  border: '#dbdbdb',
  borderLight: '#e4e7e7',
  borderLighter: '#eceeee',
  borderBright: '#f4f5f5',

  primary: '#2880BA',
  primaryShade_1: '#3498DB',
  primaryShade_2: '#5cb5f1',
  primaryShade_3: '#3498DB',
  primaryShade_4: '#95D4FE',
  primary_dark: '#2880BA',

  secondary: '#2880BA',

  yellow: '#ffe8bc',
  yellow_dark: '#ffce71',
};

export default {
  reactDates: {
    zIndex: 0,
    border: {
      input: {
        border: 0,
        borderTop: 0,
        borderRight: 0,
        borderBottom: '2px solid transparent',
        borderLeft: 0,
        outlineFocused: 0,
        borderFocused: 0,
        borderTopFocused: 0,
        borderLeftFocused: 0,
        borderBottomFocused: `2px solid ${core.primary_dark}`,
        borderRightFocused: 0,
      },
    },

    color: {
      core,

      disabled: core.grayLightest,

      background: core.white,
      backgroundDark: '#f2f2f2',
      backgroundFocused: core.white,
      text: core.gray,
      textDisabled: core.border,
      textFocused: '#2880BA',
      placeholderText: '#757575',

      outside: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray,
      },

      highlighted: {
        backgroundColor: core.yellow,
        backgroundColor_active: core.yellow_dark,
        backgroundColor_hover: core.yellow_dark,
        color: core.gray,
        color_active: core.gray,
        color_hover: core.gray,
      },

      minimumNights: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLighter,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter,
      },

      hoveredSpan: {
        backgroundColor: core.primaryShade_4,
        backgroundColor_active: core.primaryShade_3,
        backgroundColor_hover: core.primaryShade_4,
        borderColor: core.primaryShade_3,
        borderColor_active: core.primaryShade_3,
        borderColor_hover: core.primaryShade_3,
        color: core.secondary,
        color_active: core.secondary,
        color_hover: core.secondary,
      },

      selectedSpan: {
        backgroundColor: core.primaryShade_2,
        backgroundColor_active: core.primaryShade_1,
        backgroundColor_hover: core.primaryShade_1,
        borderColor: core.primaryShade_1,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white,
      },

      selected: {
        backgroundColor: core.primary,
        backgroundColor_active: core.primary,
        backgroundColor_hover: core.primary,
        borderColor: core.primary,
        borderColor_active: core.primary,
        borderColor_hover: core.primary,
        color: core.white,
        color_active: core.white,
        color_hover: core.white,
      },

      blocked_calendar: {
        backgroundColor: core.grayLighter,
        backgroundColor_active: core.grayLighter,
        backgroundColor_hover: core.grayLighter,
        borderColor: core.grayLighter,
        borderColor_active: core.grayLighter,
        borderColor_hover: core.grayLighter,
        color: core.grayLight,
        color_active: core.grayLight,
        color_hover: core.grayLight,
      },

      blocked_out_of_range: {
        backgroundColor: core.white,
        backgroundColor_active: core.white,
        backgroundColor_hover: core.white,
        borderColor: core.borderLight,
        borderColor_active: core.borderLight,
        borderColor_hover: core.borderLight,
        color: core.grayLighter,
        color_active: core.grayLighter,
        color_hover: core.grayLighter,
      },
    },

    spacing: {
      captionPaddingTop: 22,
      captionPaddingBottom: 37,
      inputPadding: 0,
      displayTextPaddingVertical: undefined,
      displayTextPaddingTop: 13,
      displayTextPaddingBottom: 11,
      displayTextPaddingHorizontal: undefined,
      displayTextPaddingLeft: 12,
      displayTextPaddingRight: 12,
      displayTextPaddingVertical_small: undefined,
      displayTextPaddingTop_small: 8,
      displayTextPaddingBottom_small: 6,
      displayTextPaddingHorizontal_small: undefined,
      displayTextPaddingLeft_small: 8,
      displayTextPaddingRight_small: 8,
    },

    sizing: {
      inputWidth: 130,
      inputWidth_small: 90,
      arrowWidth: 24,
      arrowWidth_small: 19,
    },

    font: {
      size: 12,
      captionSize: 15,
      input: {
        size: 18,
        lineHeight: '24px',
        size_small: 14,
        lineHeight_small: '18px',
        styleDisabled: 'italic',
      },
    },
  },
};
