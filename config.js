const apiPath = {
  v0: "/api",
  download: "/download",
}

const getEnvironment = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "production"
    case "staging":
      return "staging"
    case "development":
      return "development"
    default:
      return "testing"
  }
}

const getLiveUrl = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "https://feetfinder.com"
    case "staging":
      return "https://stage.feetfinder.com"
    case "development":
      return "https://dev.feetfinder.com"
    default:
      return "http://localhost:4000"
  }
}

const getLiveAppUrl = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "https://app.feetfinder.com"
    case "staging":
      return "https://stageapp.feetfinder.com"
    case "development":
      return "https://devapp.feetfinder.com"
    default:
      return "http://localhost:3000"
  }
}

const getRedirectUrl = (path) => {
  switch (process.env.NEXT_PUBLIC_ENV_MODE) {
    case "production":
      return `https://app.feetfinder.com${path}`
    case "staging":
      return `https://stageapp.feetfinder.com${path}`
    case "development":
      return `https://devapp.feetfinder.com${path}`
    default:
      return `http://localhost:3000${path}`
  }
}

const getSocketUrl = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "wss://west.rilladropwest.com"
    case "staging":
      return "wss://staging.feetfinder.com"
    case "development":
      return "wss://develop.feetfinder.com"
    default:
      return "ws://localhost:5002"
  }
}

const getBaseUrl = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "https://lb.feetfinder.com"
    case "staging":
      return "https://staging.feetfinder.com"
    case "development":
      return "https://develop.feetfinder.com"
    default:
      return "https://develop.feetfinder.com"
    // return "http://localhost:5002"
  }
}

const getDownloadMediaUrl = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "https://west.rilladropwest.com"
    case "staging":
      return "https://staging.feetfinder.com"
    case "development":
      return "https://develop.feetfinder.com"
    default:
      return "http://localhost:5002"
  }
}

const getImageServerUrl = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return "https://process.feetfinder.com"
    case "staging":
      return "https://process.feetfinder.com"
    case "development":
      return "https://process.feetfinder.com"
    default:
      return "https://process.feetfinder.com"
    // return "http://localhost:8081"
  }
}

const getIpInfoUrl = () => {
  return `https://ipinfo.io/json?token=043951b41f35b2`
}

const getOneSignalData = () => {
  switch (process.env.NEXT_PUBLIC_PROJECT_ENV) {
    case "production":
      return {
        appId: "b3f4176b-5124-4eaf-923b-4e7f86110a71",
        safariId: "web.onesignal.auto.0c986762-0fae-40b1-a5f6-ee95f7275a97",
      }
    case "staging":
    case "development":
      return {
        appId: "690c0bc0-e135-445e-94de-ed8b13a16437",
        safariId: "web.onesignal.auto.5d6ab6d2-4d0b-4ad8-b336-7f8ff3aff850",
      }
    default:
      return {
        appId: "b1722719-aa22-4506-aa27-33bc700c1e4a",
        safariId: "web.onesignal.auto.10bba952-d3e6-4be7-b269-bd5caae877a4",
      }
  }
}

const digitalOcean = {
  Endpoint: "nyc3.digitaloceanspaces.com",
  URL: {
    developmentURL: "https://developmentspaces.nyc3.cdn.digitaloceanspaces.com",
    productionURL: "https://productionspaces.nyc3.cdn.digitaloceanspaces.com",
  },
  Bucket: {
    developmentBucketName: "developmentspaces",
    productionBucketName: "productionspaces",
  },
  ACL: "public-read",
}

const Url = {
  baseUrl: getBaseUrl(),
  liveUrl: getLiveUrl(),
  liveAppUrl: getLiveAppUrl(),
  socketUrl: getSocketUrl(),
  imageSeverUrl: getImageServerUrl(),
  downloadMediaUrl: getDownloadMediaUrl(),
}

export default {
  BASE_URL: `${Url.baseUrl}${apiPath.v0}`,
  DOWNLOAD_MEDIA_URL: `${Url.downloadMediaUrl}${apiPath.download}`,
  LIVE_URL: `${Url.liveUrl}`,
  LIVE_APP_URL: `${Url.liveAppUrl}`,
  LIVE_URL_WWW: `https://www.feetfinder.com`,
  SOKET_URL: `${Url.socketUrl}`,
  IMAGE_SERVER_URL: `${Url.imageSeverUrl}`,
  environment: getEnvironment(),
  getBaseUrl: getBaseUrl(),
  getIpInfoUrl: getIpInfoUrl(),
  getOneSignalConfig: getOneSignalData(),
  getRedirectUrl: getRedirectUrl,
  digitalOcean,
}
