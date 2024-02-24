let url= process.env.REACT_APP_DEVELOPMENT_API_URL
console.log(url)
if(process.env.REACT_APP_NODE_ENV === 'production')
    url = process.env.REACT_APP_PRODUCTION_API_URL
const config={
    baseURL:url+"api/",
    imageURL:url+"assets/images/",
    limit:2
}

export default config;