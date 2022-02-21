/* eslint-disable no-console */
import Image from "next/image"
import React from "react"

import { staticImagesUrl } from "../../utils/Constant"

class ProgressiveNextImage extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      isError: false,
      src: props.isUserProfilePic
        ? staticImagesUrl.FFLogo
        : staticImagesUrl.ff_Logo_white_webp,
    }
    this.onError = this.onError.bind(this)
  }

  // Life cycle
  static getDerivedStateFromProps(props, state) {
    if (props.imageSrc && props.imageSrc.trim().length > 0) {
      if (props.imageSrc !== state.src) {
        const url = props?.imageSrc?.trim()
        let newUrl = ""
        if (props.isOriginalCheck) {
          if (url.length > 0 && url.includes("/thumb/")) {
            newUrl = url.replace("/thumb/", "/original/")
          } else {
            newUrl = props.imageSrc?.trim()
          }
        } else {
          newUrl = props.imageSrc?.trim()
        }
        //Change in props
        return {
          ...state.isError,
          src: newUrl,
        }
      }
    }

    // No change to state and set default logo when src comes with "" or return null
    // return {
    //   src: props.isUserProfilePic ? staticImagesUrl.FFLogo : staticImagesUrl.ff_Logo_white_webp,
    // }
    return null
  }

  // Event methods
  onError() {
    this.setState({
      isError: true,
    })
  }

  render() {
    const { src, isError } = this.state
    const { alt, imageQuality, srcSet, priority } = this.props
    return (
      <Image
        src={isError ? staticImagesUrl.ff_Logo_white_webp : src}
        // src={isError ? staticImagesUrl.ff_Logo_white_webp : src}
        alt={alt}
        layout="fill"
        quality={imageQuality ? imageQuality : 75}
        srcSet={srcSet ? srcSet : staticImagesUrl.ff_Logo_white_webp}
        // srcSet={staticImagesUrl.FF_FootLogo_webp}
        onError={this.onError}
        priority={priority || false}
        className={`ff-next-image img-fluid ${isError ? "ff-image-error" : ""}`}
      />
    )
  }
}

export default ProgressiveNextImage
