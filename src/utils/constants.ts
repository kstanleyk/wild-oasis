//dev
export const devConfig = {
    apiUrl: 'https://localhost:44380',
}

//prod
export const prodConfig = {
    apiUrl: 'https://api.damafin.net',
}

export const appConfig =
    process.env.NODE_ENV === 'development' ? devConfig : prodConfig
