import styled, { createGlobalStyle, css } from "styled-components"

import { mediaQueries } from "../utils/mediaQuery"

// Global Styles
const GlobalStyle = createGlobalStyle`
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrLPTucXtAOvWDSHFF.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrLPTufntAOvWDSHFF.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiGyp8kv8JHgFVrLPTucHtAOvWDSA.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJbecnFHGPezSQ.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJnecnFHGPezSQ.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiEyp8kv8JHgFVrJJfecnFHGPc.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z11lFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1JlFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 500;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLGT9Z1xlFd2JQEk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z11lFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1JlFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 600;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLEj6Z1xlFd2JQEk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
/* devanagari */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z11lFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0900-097F, U+1CD0-1CF6, U+1CF8-1CF9, U+200C-200D, U+20A8, U+20B9, U+25CC, U+A830-A839, U+A8E0-A8FB;
}
/* latin-ext */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1JlFd2JQEl8qw.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 700;
  font-display: swap;
  src: url(https://fonts.gstatic.com/s/poppins/v15/pxiByp8kv8JHgFVrLCz7Z1xlFd2JQEk.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}

  html,
  body {
    height: 100%;
  }
  body {
  font-family: "Poppins" !important;
  font-weight: 500;
  background-color:  ${(props) => props.theme.color.backgroundColor} !important;
  position: relative;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
  .container-fluid {
    padding-right: 60px;
    padding-left: 60px;
    @media (max-width: 1024px) {
      padding-right: 30px;
      padding-left: 30px;
    }
    @media (max-width: 768px) {
      padding-right: 15px;
      padding-left: 15px;
    }
  }
  .bg_grey {
  background-color: ${(props) => props.theme.color.sectionBgColor};
  }
  .bg_white {
    background-color: ${(props) => props.theme.color.backgroundColor};
  }
  
.howitwork_section {
  margin-top: -175px;
  &.remove_margin {
    margin-top: 0 !important ;
  }
  @media (max-width: 991px) {
    margin-top: -250px;
    &.remove_margin {
      margin-top: 0 !important ;
    }
  }
  @media (max-width: 576px) {
    margin-top: -170px;
  }
}

.ff_live_cam_section {
  margin-top: -100px;
  &.remove_margin {
    margin-top: 0 !important ;
  }
  @media (max-width: 991px) {
    margin-top: -250px;
    &.remove_margin {
      margin-top: 0 !important ;
    }
  }
  @media (max-width: 576px) {
    margin-top: -170px;
  }
}

  /* Seo Title tag */
  .ff_page_title {
    display: flex;
    justify-content: center;
    margin: 0 !important;
    color: transparent;
    line-height: 0;
  }
  .ff_page_title_blogs {
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
    color:  ${(props) => props.theme.color.primaryColor};
   }
  .ff_titleHeader {
    ${mediaQueries("lg")`
      margin: 30px 0 15px 0 !important;
    `}
  }

  // error screen style
  .ff_error_wrapper {
    width: 100%;
    height: 100vh !important;
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    text-align: center !important;
    justify-content: center;
    align-items: center;
    h1 {
      font-size: 7.5em;
      margin: 15px 0px;
      font-weight: bold;
    }
    h2 {
      font-weight: bold;
    }
    p {
      font-size: 24px;
    }
    .logo_err {
      width: 300px !important;
      margin: 0 auto;
      ${mediaQueries("lg")`
        width: 200px !important;
      `}
    }
  }

  .ff_input {
    background-color:  ${(props) =>
      props.theme.color.inputFieldBGColor} !important;
    color:  ${(props) => props.theme.color.textFieldText} !important;

    &::placeholder {
      color:  #aaaaaa!important;
    }
  }

  // Button
  .ff_btn_purple {
    border-radius: 50px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    width: 213px;
    height: 41px;
    box-shadow: 0 2px 4px 0  ${(props) => props.theme.color.primaryColor};
    background-color:  ${(props) => props.theme.color.primaryColor};
    color:  ${(props) => props.theme.color.colorWhite} !important;
    border: none;
    margin-bottom: 20px;
    &:hover {
      outline: none !important;
      box-shadow: none !important;
      background-color:  ${(props) => props.theme.color.secondaryColor};
      color: ${(props) => props.theme.color.colorWhite} !important;
    }

    transition: all 0.3s ease-in-out;;

    cursor: pointer;

    &:focus {
      outline: none !important;
      box-shadow: none !important;
      background-color:  ${(props) => props.theme.color.secondaryColor};
      border-color:  ${(props) => props.theme.color.secondaryColor};
      color: ${(props) => props.theme.color.colorWhite};
    }
    ${mediaQueries("md")`
      font-size: 16px !important;
      min-width: 180px;
      height: 38px !important;
    `}

    &.ff_button_active {
      color:  ${(props) => props.theme.color.colorWhite} !important;
      background-color:  ${(props) =>
        props.theme.color.secondaryColor} !important;
    }
  }
  .ff_btn_white {
    border-radius: 50px !important;
    font-size: 14px !important;
    font-weight: 600 !important;
    width: 213px;
    height: 41px;
    box-shadow: 0 2px 4px 0  ${(props) => props.theme.color.primaryColor};
    color:  ${(props) => props.theme.color.colorWhite} !important;
    background-color:  ${(props) => props.theme.color.primaryColor};
    border: none;
    margin-bottom: 20px;
    &:focus,
    &:active,
    &:hover,
    &:active:focus {
      border: none;
      outline: none !important;
      box-shadow: none !important;
      background-color:  ${(props) => props.theme.color.secondaryColor};
      color: ${(props) => props.theme.color.colorWhite} !important;
    }
  }

  .ff_new_alert_btn {
    font-style: normal;
    font-weight: 600 !important;
    font-size: 24px !important;
    line-height: 20px !important;
    // width: max-content;
    background:  ${(props) => props.theme.color.ButtonBGColor} !important;
    border: 2px solid  ${(props) => props.theme.color.primaryColor} !important;
    border-radius: 100px !important;
    box-sizing: border-box;
    color:  ${(props) => props.theme.color.primaryColor} !important;
    -webkit-transition: unset;
    transition: unset;
    padding: 18px 0px !important;
    text-align: center;
    width: 360px;
    ${mediaQueries("xxl")`
      font-size: 22px !important;
      line-height: 30px !important;
      width: 300px !important;
    `}
    ${mediaQueries("xl")`
      font-size: 20px !important;
      line-height: 28px !important;
    `}
    ${mediaQueries("md")`
      font-size: 16px !important;
      line-height: 24px !important;
      width: 280px !important;
      padding: 15px 0px !important;
    `}

    &:focus {
      outline: none;
    }
    &:hover {
      background:  ${(props) => props.theme.color.primaryColor} !important;
      color:  ${(props) => props.theme.color.whiteTextColor} !important;
    }
    transition: all 0.3s ease-in-out;;
  }

  .ff_alert_btn {
    border-radius: 30px !important;
    color: ${(props) => props.theme.color.colorWhite} !important;
    border: none !important;
    // box-shadow: unset !important;
    box-shadow: 0 2px 4px 0  ${(props) => props.theme.color.primaryColor};

    margin: 0 10px;
    min-width: 130px;
    height: 44px;
    font-weight: 600;
    transition: all 0.3s ease-in-out;
    ${mediaQueries("md")`
      height: 34px;
      padding: 7px 0;
      min-width: 100px;
      font-size: 14px !important;
    `}
    &:hover {
      outline: none !important;
      box-shadow: none !important;
      background-color:  ${(props) => props.theme.color.secondaryColor};
      color: ${(props) => props.theme.color.colorWhite} !important;
    }
    transition: all 0.3s ease-in-out;;

    cursor: pointer;
    &:focus {
      outline: none !important;
      box-shadow: none !important;
      background-color:  ${(props) => props.theme.color.secondaryColor};
      color: ${(props) => props.theme.color.colorWhite} !important;
    }
  }

  .ff_alert_title {
    font-weight: 500 !important;
    color: $input-placeholder !important;
    line-height: 1.4;
    ${mediaQueries("md")`
      font-size: 14px;
    `}
  }

  .ff_confirm_button {
    background-color:  ${(props) => props.theme.color.primaryColor} !important;
    color:  ${(props) => props.theme.color.backgroundColor} !important;
  }

  .ff_cancel_button {
    background-color: $dark-grey !important;

    &:hover {
      opacity: 0.8;
    }
  }

  .ff_icon_warning {
    color: #dc3545 !important;
    border-color: #dc3545 !important;
  }

  .ff_icon_info {
    color:  ${(props) => props.theme.color.primaryColor} !important;
    border-color:  ${(props) => props.theme.color.primaryColor} !important;
  }
  .subscriptionmodal {
      .modal-dialog {
        max-width: 600px;
      }
      .modal-content {
        padding: 54px 0 30px;
      }
      .modal-header {
        border-bottom: 0;
        text-align: center;
        padding: 0;
        .modal-title {
          font-size: 30px;
          line-height: 38px;
          color:  ${(props) => props.theme.color.primaryColor};
          text-align: center;
          flex: 1;

          @media (max-width: 640px) {
            font-size: 20px;
          }
        }

        .close {
          display: none;
        }
      }
      .modal-body {
        text-align: center;
        padding: 40px 0;

        input {
          width: 280px;
          height: 48px;
          background-color: #f0f0f0;
          border: 1px solid #979797;
          text-align: center;
          font-size: 22px;
          border-radius: 4px;
          color:  ${(props) => props.theme.color.primaryColor};
          @media (max-width: 640px) {
            width: 200px;
            font-size: 14px !important;
          }
        }
      }
      .modal-footer {
        border-top: 0;
        padding: 0;
        text-align: center;
        display: block;

        button {
          margin: 0 auto;
          margin-bottom: 22px;
        }
      }
    }
    @media (max-width: 768px) {
      input[type="color"],
      input[type="date"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="email"],
      input[type="month"],
      input[type="number"],
      input[type="password"],
      input[type="search"],
      input[type="tel"],
      input[type="text"],
      input[type="time"],
      input[type="url"],
      input[type="week"],
      select:focus,
      textarea {
        font-size: 16px;
      }
    }

    input,
    textarea {
      &:focus {
        outline: none;
        box-shadow: none !important;
        border-color:  ${(props) => props.theme.color.primaryColor} !important;
      }

      &:disabled {
        cursor: not-allowed;
      }
    }

    textarea {
      width: 100%;
      resize: none !important;
      background-color:  ${(props) =>
        props.theme.color.inputFieldBGColor} !important;
      color:  ${(props) => props.theme.color.textFieldText} !important;

      &:focus {
        outline: none !important;
        box-shadow: none !important;
        border-color: ${(props) => props.theme.color.primaryColor} !important;
      }

      &::placeholder,
      &::-webkit-input-placeholder {
        color: $input-placeholder !important;
        opacity: 1 !important;
      }
    }

     a {
        color:  ${(props) => props.theme.color.primaryColor};
        transition: all 0.3s ease-in-out;
        &:hover {
          color:  ${(props) => props.theme.color.secondaryColor};
          text-decoration: none !important;
        }
      }
    /* blogs pagination */
    .pagination {
      margin: 20px 15px;
      .page-item {
        margin-right: 10px;
        .page-link {
          color:  ${(props) => props.theme.color.primaryColor} !important;
          span {
            color:  ${(props) => props.theme.color.primaryColor} !important;
          }
          .visually-hidden{
            display: none;
          }
        }
        &.active {
          .page-link {
            color: #fff !important;
            span {
              color: #fff !important;
            }
            background-color:  ${(props) =>
              props.theme.color.primaryColor} !important;
            border-color:  ${(props) =>
              props.theme.color.primaryColor} !important;
            color: #fff;
          }
        }
      }
    }

    /* the slider  */
    .ff_slider_wrappersModel .slick-slide {
      margin: -10px 0px;
    }

    .ff_slider_wrappersModel .slick-active.slick-current {
      transform: scale(1.05);
    }
    .ff_slider_wrappersModel .slick-next:before,
    .slick-prev:before {
      content: unset !important;
    }

    .ff_slider_wrappersModel .slick-next {
      @media (max-width: 1024px) {
        width: 41px !important;
        height: 45px !important;
        z-index: 1;
        right: -10px;
      }
    }

    .ff_slider_wrappersModel .slick-prev {
      @media (max-width: 1024px) {
        width: 41px !important;
        height: 45px !important;
        z-index: 1;
        left: -10px;
      }
    }

    .ff_testimonialslider .slick-dots li {
      @media (max-width: 768px) {
        width: 14px;
        height: 14px;
        margin: 0 2px;
      }
    }

    .ff_testimonialslider .slick-dots li button:before {
      color:  ${(props) => props.theme.color.primaryColor};
      font-size: 16px;
      opacity: 1;
      @media (max-width: 768px) {
        font-size: 12px;
      }
    }

    .ff_testimonialslider .slick-dots li.slick-active button:before {
      color:  ${(props) => props.theme.color.secondaryColor} !important;
    }
  
    /* Info modal  */
    .signupmodelmain {
      padding-right: 0;
      .modal-dialog {
        ${mediaQueries("md")`
          max-width: 630px !important;
        `}
      }
      .modal-content {
        border-radius: 20px;
        max-width: 890px;
        margin: 0 auto;
        width: 100%;
        ${mediaQueries("xxl")`
          max-width: 740px;
        `}
      }
      .modal-header {
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 37px;
        color:  ${(props) => props.theme.color.textDarkGreyColor};
        margin: 47px auto 0;
        border: none;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        ${mediaQueries("xxl")`
          font-size: 22px;
          line-height: 30px;
        `}
        ${mediaQueries("xl")`
          font-size: 20px;
          line-height: 28px;
        `}
        
        .closebutton {
          position: absolute;
          right: 15px;
          top: -35px;
          svg {
            width: 32px;
            height: 32px;
          }
        }
      }
      .ff_btn_wrappermain {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        ${mediaQueries("xxl")`
          justify-content: space-around;
        `}
        &.ff_agreebtn {
          justify-content: center;
          .ff_btn_wrapper {
            .buttonblock {
              font-size: 20px;
              line-height: 28px;
              width: 280px;
              padding: 18px 0px;
            }
          }
        }
        .ff_btn_wrapper {
          display: flex;
          flex-direction: column;
          margin: 0 7px;
          .buttonblock {
            border-radius: 100px;
            font-style: normal;
            font-weight: 600;
            font-size: 25px;
            line-height: 37px;
            // width: max-content;
            background:  ${(props) => props.theme.color.ButtonBGColor};
            border: 2px solid  ${(props) => props.theme.color.primaryColor};
            box-sizing: border-box;
            color:  ${(props) => props.theme.color.primaryColor};
            -webkit-transition: unset;
            transition: unset;
            padding: 25px 0px;
            text-align: center;
            width: 360px;
            ${mediaQueries("xxl")`
              font-size: 22px;
              line-height: 30px;
              width: 300px;
              padding: 18px 0px;
            `}
            ${mediaQueries("xl")`
              font-size: 20px;
              line-height: 28px;
            `}
            ${mediaQueries("lg")`
              width: 200px;
              font-size: 18px;
            `}
            ${mediaQueries("sm")`
              font-size: 16px;
              line-height: 24px;
              width: 170px;
              padding: 15px 0px;
            `}
            ${mediaQueries("xss")`
              width: 140px;
              font-size: 14px;
            `}
            ${mediaQueries("xsss")`
              width: 110px;
            `}
            &:focus {
              outline: none;
            }
            &:hover {
              background: linear-gradient(
                87.84deg,
                ${(props) => props.theme.color.firstColor},
                ${(props) => props.theme.color.lastColor}
              );
              color:  ${(props) => props.theme.color.whiteTextColor};
            }
          }
        }
        span {
          font-style: normal;
          font-weight: normal;
          font-size: 25px;
          line-height: 37px;
          color:  ${(props) => props.theme.color.textTitleColor} !important;
        }
      }
      .mobilemodal {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .ff_btn_wrapper {
          align-items: center;
        }
        span {
          margin-bottom: 20px;
        }
      }
      .modelcontentmain {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        padding: 0 10px;
        gap: 50px;
      }
      .modelcontent {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 33px;
        text-align: left;
        color:  ${(props) => props.theme.color.textDarkGreyColor};
        margin: 30px 0;
        padding: 0 15px;
        text-align: center;
        
        ${mediaQueries("xxl")`
          font-size: 18px;
          line-height: 24px;
        `}
        ${mediaQueries("sm")`
          margin: 10px 0 30px;
          font-size: 14px;
          line-height: 24px;
          padding: 0 8px 0 0;
        `}
      }
      .modal-body {
        display: flex;
        align-items: center;
        flex-direction: column;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          text-align: center;
          color:  ${(props) => props.theme.color.textDarkGreyColor};
          margin: 30px 0;
          padding: 0 15px;
        }
      }
    }

    .signIn_model_main {
      padding-right: 0;
      .modal-dialog {
        ${mediaQueries("md")`
          max-width: 630px !important;
        `}
      }
      .modal-content {
        border-radius: 20px;
        max-width: 890px;
        margin: 0 auto;
        width: 100%;
        ${mediaQueries("xxl")`
          max-width: 740px;
        `}
      }
      .modal-header {
        text-align: center;
        font-style: normal;
        font-weight: bold;
        font-size: 25px;
        line-height: 10px;
        color:  ${(props) => props.theme.color.textDarkGreyColor};
        margin: 47px auto 0;
        border: none;
        position: relative;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        ${mediaQueries("xxl")`
          font-size: 22px;
          line-height: 30px;
        `}
        ${mediaQueries("xl")`
          font-size: 20px;
          line-height: 28px;
        `}
        
        .closebutton {
          position: absolute;
          right: 15px;
          top: -35px;
          svg {
            width: 32px;
            height: 32px;
          }
        }
      }
      .ff_btn_wrappermain {
        margin: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        ${mediaQueries("xxl")`
          justify-content: space-around;
        `}
        &.ff_agreebtn {
          justify-content: center;
          .ff_btn_wrapper {
            .buttonblock {
              font-size: 20px;
              line-height: 28px;
              width: 280px;
              padding: 18px 0px;
            }
          }
        }
        .ff_btn_wrapper {
          display: flex;
          flex-direction: column;
          margin: 0 7px;
          .buttonblock {
            border-radius: 100px;
            font-style: normal;
            font-weight: 600;
            font-size: 25px;
            line-height: 37px;
            // width: max-content;
            background:  ${(props) => props.theme.color.ButtonBGColor};
            border: 2px solid  ${(props) => props.theme.color.primaryColor};
            box-sizing: border-box;
            color:  ${(props) => props.theme.color.primaryColor};
            -webkit-transition: unset;
            transition: unset;
            padding: 25px 0px;
            text-align: center;
            width: 360px;
            ${mediaQueries("xxl")`
              font-size: 22px;
              line-height: 30px;
              width: 300px;
              padding: 18px 0px;
            `}
            ${mediaQueries("xl")`
              font-size: 20px;
              line-height: 28px;
            `}
            ${mediaQueries("lg")`
              width: 200px;
              font-size: 18px;
            `}
            ${mediaQueries("sm")`
              font-size: 16px;
              line-height: 24px;
              width: 170px;
              padding: 15px 0px;
            `}
            ${mediaQueries("xss")`
              width: 140px;
              font-size: 14px;
            `}
            ${mediaQueries("xsss")`
              width: 110px;
            `}
            &:focus {
              outline: none;
            }
            &:hover {
              background: linear-gradient(
                87.84deg,
                ${(props) => props.theme.color.firstColor},
                ${(props) => props.theme.color.lastColor}
              );
              color:  ${(props) => props.theme.color.whiteTextColor};
            }
          }
        }
        span {
          font-style: normal;
          font-weight: normal;
          font-size: 25px;
          line-height: 37px;
          color:  ${(props) => props.theme.color.textTitleColor} !important;
        }
      }
      .mobilemodal {
        flex-direction: column;
        align-items: center;
        justify-content: center;
        .ff_btn_wrapper {
          align-items: center;
        }
        span {
          margin-bottom: 20px;
        }
      }
      .modelcontentmain {
        display: flex;
        justify-content: space-between;
        width: 100%;
        flex-direction: row;
        padding: 0 10px;
        gap: 50px;
      }
      .modelcontent {
        font-style: normal;
        font-weight: normal;
        font-size: 22px;
        line-height: 33px;
        text-align: left;
        color:  ${(props) => props.theme.color.textDarkGreyColor};
        margin: 30px 0;
        padding: 0 15px;
        text-align: center;
        
        ${mediaQueries("xxl")`
          font-size: 18px;
          line-height: 24px;
        `}
        ${mediaQueries("sm")`
          margin: 10px 0 30px;
          font-size: 14px;
          line-height: 24px;
          padding: 0 8px 0 0;
        `}
      }
      .modal-body {
        display: flex;
        align-items: center;
        flex-direction: column;
        p {
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 26px;
          text-align: center;
          color:  ${(props) => props.theme.color.textDarkGreyColor};
          margin: 30px 0;
          padding: 0 15px;
        }
      }
    }

    /* Profile image with radious */
    .ff_profile_pic {
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background-color:  ${(props) => props.theme.color.backgroundColor};
      box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);
      display: inline-block;
      overflow: hidden;
      ${mediaQueries("md")`
        width: 38px;
        height: 38px;
      `}

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        object-position: center;
        max-width: 100%;
        object-fit: cover;
      }
    }

    /* Loder components  */
    .ff_fullView {
      position: fixed;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      z-index: 9999;
    }

    .ff_circleView {
      justify-content: center;
      align-items: center;
      display: flex;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.5);
      svg {
        fill:  ${(props) => props.theme.color.primaryColor} !important;
        ${mediaQueries("md")`
          width: 40px;
        `}
      }
    }
    /* Load more  */
    .ff_fullView_loadMore {
      width: 100%;
      height: 100%;
      margin-bottom: 30px;
    }

    .ff_circleView_loadMore {
      justify-content: center;
      align-items: center;
      display: flex;
      height: -webkit-stretch;
      svg {
        fill:  ${(props) => props.theme.color.primaryColor} !important;
      }
      &.ff_pink_loader {
        svg {
        fill:  ${(props) => props.theme.color.secondaryColor} !important;
        }
      }
    }

    /* Alert Style */

    .ff_alert_danger {
      color: ${(props) => props.theme.color.alertErrorColor};
      background-color: ${(props) => props.theme.color.alertErrorBg};
      border-color: ${(props) => props.theme.color.alertErrorBorder};
      position: relative;
      padding: 0.75rem 1.25rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      text-align: center;
    }

    .ff_alert_success {
      color: ${(props) => props.theme.color.alertSuccessColor};
      background-color: ${(props) => props.theme.color.alertSuccessBg};
      border-color: ${(props) => props.theme.color.alertSuccessBorder};
      position: relative;
      margin-top: 1rem;
      padding: 0.75rem 1.25rem;
      margin-bottom: 1rem;
      border: 1px solid transparent;
      border-radius: 0.25rem;
      text-align: center;
    }

    .ff_popup_bg {
      background-color: ${(props) =>
        props.theme.color.ButtonBGColor} !important;
      border-radius: 20px !important;
      &.ff_top_right {
        max-height: 73px !important;
        padding: 0 25px !important;
      }
      ${mediaQueries("md")`
          max-width: 336px;
      `}
    }

    .ff_popup_title {
      color: ${(props) => props.theme.color.textColor} !important;
      font-size: 18px;
    }
  }
  /* feetfinder logo color */
  .ff_header_logo {
    display: block;

    path,
    image {
      fill: ${(props) => props.theme.color.logoColor1};

      &:last-child {
        fill: ${(props) => props.theme.color.logoColor2};
      }
      &#path0 {
        fill: white;
      }
      &#path1 {
        fill: ${(props) => props.theme.color.logoColor1};
      }
      &#path2 {
        fill: ${(props) => props.theme.color.logoColor2};
      }
    }
  }

.ff_filter_cat_box {
  .ff_blog_categories {
    display: flex;
    justify-content: space-between;
    span {
      margin-bottom: 40px;
    }
  }
  .modal-dialog {
    margin: 0;
    // margin-top: 90px;
    max-width: 100%;
    min-height: calc(100vh - 90px);
    height: calc(100vh - 90px);
    position: absolute;
    bottom: 0;
    overflow-x: hidden;
    width: 100%;
  }
  .modal-content {
    height: 100vh;
    border: unset;
    border-radius: unset;
    h2 {
      font-style: normal;
      font-weight: bold;
      font-size: 24px;
      line-height: 33px;
      color: #5d5b5f;
      margin-bottom: 40px;
    }
    ul {
      border: 0;
      padding: 0;

      li {
        width: 100%;
        margin: 0;
        list-style: none;
        padding: 10px;
        display: flex;
        align-items: center;
        @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
          padding: 10px 25px;
        }

        a {
          position: relative;
          border: 0;
          font-style: normal;
          font-weight: normal;
          font-size: 16px;
          line-height: 30px;
          color: #5d5b5f;
          display: flex;
          justify-content: space-between;
          align-items: center;
          cursor: pointer;
          @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
            font-size: 16px;
          }
        }
        span {
          position: absolute;
          right: 30px;
          padding-top: 5px;
          color: #5d5b5f;
          @media only screen and (min-width: 1024px) and (max-height: 1366px) and (-webkit-min-device-pixel-ratio: 1.5) {
            right: 5px;
          }
        }
      }
    }
  }
}
.ff_filter_cat_box .modal-lg {
  -webkit-transform: translateX(20%);
  -moz-transform: translateX(20%);
  -ms-transform: translateX(20%);
  transform: translateX(20%);
  opacity: 0;
  -webkit-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  -moz-transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
  transition: all 0.3s cubic-bezier(0.25, 0.5, 0.5, 0.9);
}

.modal-open .ff_filter_cat_box .modal-lg {
  -webkit-transform: translateX(0);
  -moz-transform: translateX(0);
  -ms-transform: translateX(0);
  transform: translateX(0);
  opacity: 1;
}

.category_modal_opacity.modal-open .modal-backdrop.show {
  opacity: 0;
}
.ff_filter_cat_box .modal-content {
  height: calc(100vh - 90px);
}

`
export default GlobalStyle

// Global tag styles
export const Image = styled.img``
export const Para = styled.p``
export const Label = styled.label``
export const Input = styled.input``
export const Button2 = styled.button``
export const Icon = styled.i``
export const Div = styled.div`
  .ff_not_found {
    text-align: center;
  }
`
export const NavBarTogglerDiv = styled.div`
  /* margin: 7px 0 0 0; */
  button {
    border: none;
    &:focus {
      outline: none;
    }
    &:hover {
      outline: none;
    }
    &:active {
      outline: none;
    }
  }
`
export const HeaderMenuUl = styled.ul`
  display: flex;
  /* padding: 10px 0 0;
  margin: 0; */
  margin: 0px 0px 0px 80px;
  padding: 10px 16px;
  /* Media query */
  ${mediaQueries("lg")`
    display: block;
    margin: 0;
    padding: 18px 30px;
  `}
  ${mediaQueries("md")`
    padding: 20px 30px;
  `}
  ${mediaQueries("xl")`
      margin: 0px 0px 0px 20px;
  `}
  li {
    list-style: none;
    padding: 10px 0px;
    span {
      font-weight: 500;
      color: ${(props) => props.theme.color.whiteTextColor};
    }
  }
`
export const HeaderMenuLi = styled.li`
  display: inline-block;
  padding: 10px;
  margin: 0;
  align-items: center;
  /* Media query */
  ${mediaQueries("lg")`
    display: block;
  `}
`
export const CollapseMenuDiv = styled.div`
  /* Media query */
  @media (max-width: 1200px) {
    position: absolute;
    width: 100%;
    left: 0px;
    background-color: ${(props) => props.theme.color.primaryColor} !important;
    top: 60px;
  }
`
export const HeaderTitleWrapper = styled.div`
  display: none;
  position: absolute;
  bottom: -24px;
  left: 0;
  right: 0;
  text-align: center;
  background-color: ${(props) => props.theme.color.primaryColor};
  color: ${(props) => props.theme.color.whiteTextColor};
  padding: 0 24px;
  margin: 0 auto;

  /* media query */
  ${mediaQueries("lg")`
      display: block;
  `}
  ${mediaQueries("md")`
    padding: 0;
  `}
`

export const BackIconWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 24px;
  align-items: center;

  /* media query */
  ${mediaQueries("lg")`
        padding-top: 0;
  `}

  ${Icon} {
    display: none;
    /* media query */
    ${mediaQueries("lg")`
        display: block;
  `}
  }

  h1 {
    flex: 1;
    margin: 0 auto;
    font-size: 20px;
    line-height: 1.2;
    /* media query */
    ${mediaQueries("lg")`
        font-size: 18px;
        margin:0 !important;
  `}
  }
`
export const Span = styled.span`
  ${(props) =>
    props.isActive &&
    css`
      color: ${(props) => props.theme.color.primaryColor} !important;
      border-bottom: 1px solid ${(props) => props.theme.color.secondaryColor} !important;
    `}
`
