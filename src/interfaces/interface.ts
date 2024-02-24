export interface IStats {
    categories:string
    launchedProjects: string
    totalDollars:string
    successfulDollars:string
    unsuccessfulDollars:string
    liveDollars:string
    liveProjects:string
    successRate:string
}

export interface IUser {
    id:string
    name:string
    email: string
    priority:string
    phone:string
    address:string
    city:string
    country:string
    avatar:string
    active:string
    lastLogin:string
}

export interface IProject {
    mainType:string
    subType: string
    customType:string
    title:string
    description:string
    funding:number
    startDate:string
    endDate:string
    reward:string
    location:string
    image:any
    video:string
    collaborators:string
    story:string
    minimumValue:number
}

export type ISignInState = {
    email:string,
    password:string
}

export type IPeriod = {
    type:string,
    period:string
}

