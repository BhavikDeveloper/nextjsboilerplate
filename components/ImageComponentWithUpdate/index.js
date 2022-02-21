import React, { useEffect, useState } from "react"

import { AltUrlType, staticImagesUrl } from "../../utils/Constant"

const ImageComponentWithUpdate = (props) => {
  const [url, setUrl] = useState(props.url || staticImagesUrl.ff_Logo_white)
  const [isError, setIsError] = useState(props.url ? false : true)
  // const [isFirstTime, setIsFirstTime] = useState(true)

  useEffect(() => {
    if (props?.url?.trim().length > 0) {
      checkImageUrl(props.url)
    } else {
      setIsError(false)
      onError(props.url)
    }
  }, [])

  useEffect(() => {
    if (props?.url?.trim().length > 0) {
      if (props.url !== url) {
        // setUrl(props.url)
        checkImageUrl(props.url)
        // setIsFirstTime(true)
        setIsError(false)
      }
    }
  }, [props])

  const checkImageUrl = async (urlData) => {
    if (urlData && urlData?.length > 0) {
      let image = new Image()
      setUrl(urlData)
      image.onload = function () {
        image = null
      }
      image.onerror = function () {
        // image.onerror = function (e, source, no, col, error) {
        onError(urlData)
        image = null
      }
      image.src = urlData
    } else {
      onError(urlData)
    }
  }

  const onError = (imageUrl) => {
    if (props.isOriginalCheck) {
      if (imageUrl.includes("/thumb/")) {
        const newURL = imageUrl.replace("/thumb/", "/original/")
        setUrl(newURL)
        // setIsFirstTime(false)
      } else {
        setDefaultImage()
      }
    } else {
      setDefaultImage()
    }
  }

  const setDefaultImage = () => {
    const { altUrlType } = props
    if (altUrlType === AltUrlType.user) {
      setIsError(true)
      setUrl(staticImagesUrl.ff_Logo_white)
    } else if (altUrlType === AltUrlType.userNewLogo) {
      setIsError(true)
      setUrl(staticImagesUrl.FFLogo)
    } else if (altUrlType === AltUrlType.ffLogo) {
      setIsError(true)
      setUrl(staticImagesUrl.ff_logo_small)
    }
  }

  return (
    <img
      alt=""
      src={url}
      className={`img-fluid   ${isError ? "ff_no_profile_img" : ""} ${
        props?.isSellerProfile ? "seller-profile-pic" : ""
      }`}
      onContextMenu={(e) => e.preventDefault()}
      onMouseDown={(e) => e.preventDefault()}
    />
  )
}

export default ImageComponentWithUpdate
