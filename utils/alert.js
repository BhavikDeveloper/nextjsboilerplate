import SweetAlert from "sweetalert2"

import config from "../config"
const alertOptions = {
  toast: true,
  position: "top-end",
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: false,
}

const successAlertOptions = {
  ...alertOptions,
  imageUrl: `${config.LIVE_URL}/assets/successAlert.png`,
}

const errorAlertOption = {
  ...alertOptions,
  imageUrl: `${config.LIVE_URL}/assets/dangerAlert.png`,
}

export const errorAlert = (message) => {
  SweetAlert.mixin(errorAlertOption).fire({
    title: message,
    customClass: {
      popup: `ff_popup_bg ff_top_right`,
      title: `ff_popup_title`,
    },
  })
}

export const successAlert = (message) => {
  SweetAlert.mixin(successAlertOptions).fire({
    title: message,
    customClass: {
      popup: `ff_popup_bg ff_top_right`,
      title: `ff_popup_title`,
    },
  })
}

export const newInfoAlert = (
  title,
  message,
  actionButtonText,
  icon,
  isCancelBtn = false
) => {
  return new Promise((resolve, reject) => {
    SweetAlert.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: false,
      confirmButtonText: actionButtonText,
      customClass: {
        confirmButton: isCancelBtn
          ? `ff_cancel_btn_info w-50`
          : `ff_new_alert_btn mb-1`,
        icon: `ff_icon_warning`,
        popup: `ff_popup_bg`,
        title: `ff_popup_title`,
        actions: `ff_action`,
      },
    }).then((result) => {
      if (result.value) {
        resolve("action button press")
      } else {
        reject("cancel Press")
      }
    })
  })
}

export const dangerTitleConfirmAlert = (
  title = "",
  message,
  actionButtonText,
  cancelButtonText = "Dismiss",
  icon,
  allowOutsideClick = true
) => {
  return new Promise((resolve, reject) => {
    SweetAlert.fire({
      title: title,
      text: message,
      showCancelButton: true,
      confirmButtonText: actionButtonText,
      cancelButtonText: cancelButtonText,
      allowOutsideClick: allowOutsideClick,
      customClass: {
        confirmButton: `ff_ok_button`,
        popup: `ff_popup_bg`,
        title: `ff_ok_title`,
        actions: `ff_action_ok`,
        cancelButton: `ff_cancelbtn`,
      },
    }).then((result) => {
      if (result.value) {
        resolve("action button press")
      } else {
        if (result?.dismiss === "backdrop") {
          reject("Background press")
          return
        }
        reject("cancel Press")
      }
    })
  })
}

export const newConfirmAlert = (
  title = "",
  message,
  actionButtonText,
  cancelButtonText = "Dismiss",
  icon,
  allowOutsideClick = true
) => {
  return new Promise((resolve, reject) => {
    SweetAlert.fire({
      title: title,
      text: message,
      icon: icon,
      showCancelButton: true,
      allowOutsideClick: allowOutsideClick,
      confirmButtonText: actionButtonText,
      cancelButtonText: cancelButtonText,
      customClass: {
        confirmButton: `ff_new_alert_btn mb-1 w-50`,
        cancelButton: `ff_cancel_btn_new w-50`,
        icon: `ff_icon_warning`,
        popup: `ff_popup_bg`,
        title: `ff_popup_title`,
        actions: `ff_action`,
      },
    }).then((result) => {
      if (result.value) {
        resolve("action button press")
      } else {
        if (result?.dismiss === "backdrop") {
          reject("Background press")
          return
        }
        reject("cancel Press")
      }
    })
  })
}
export const messageAlert = (message) => {
  return new Promise((resolve) => {
    SweetAlert.fire({
      icon: "info",
      text: message,
      allowOutsideClick: false,
      customClass: {
        confirmButton: `ff_new_alert_btn`,
        icon: `ff_icon_info`,
        popup: `ff_popup_bg`,
        title: `ff_popup_title`,
        content: `ff_popup_title`,
      },
    }).then((result) => {
      if (result.value) {
        resolve(true)
      } else {
        resolve(false)
      }
    })
  })
}

// export const confirmAlert = (
//   title,
//   message,
//   actionButtonText,
//   cancelButtonText = "Cancel",
//   icon
// ) => {
//   return new Promise((resolve, reject) => {
//     SweetAlert.fire({
//       title: title,
//       text: message,
//       icon: icon,
//       showCancelButton: true,
//       confirmButtonText: actionButtonText,
//       cancelButtonText: cancelButtonText,
//       customClass: {
//         confirmButton: `${"ff_alert_btn"} ${"ff_confirm_button"}`,
//         cancelButton: `${"ff_alert_btn"} ${"ff_cancel_button"}`,
//         icon: `${"ff_icon_warning"}`,
//         popup: `${"ff_popup_bg"}`,
//         title: `${"ff_popup_title"}`,
//       },
//     }).then((result) => {
//       if (result.value) {
//         resolve("action button press")
//       } else {
//         reject("cancel Press")
//       }
//     })
//   })
// }

// export const infoAlert = (icon, message) => {
//   return new Promise((resolve, reject) => {
//     SweetAlert.fire({
//       icon: icon,
//       text: message,
//       allowOutsideClick: false,
//       customClass: {
//         content: `${"ff_alert_title"}`,
//         confirmButton: `${"ff_alert_btn"} ${"ff_confirm_button"}`,
//         icon: `${"ff_icon_info"}`,
//         popup: `${"ff_popup_bg"}`,
//         title: `${"ff_popup_title"}`,
//         content: `${"ff_popup_title"}`,
//       },
//     }).then((result) => {
//       if (result.value) {
//         resolve(true)
//       } else {
//         resolve(false)
//       }
//     })
//   })
// }
