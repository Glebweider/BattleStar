import { 
    SET_USERDATA 
} from "../constants";

export const setUserData = (payload) => ({
    type: SET_USERDATA,
    token: payload.token,
    rank: payload.rank,
    uuid: payload.uuid,
    mail: payload.mail,
    username: payload.username,
    avatar: payload.avatar,
    country: payload.country,
    bio: payload.bio,
    datareg: payload.datareg,
    money: payload.money,
    ip: payload.ip,
    avg_rating: payload.avg_rating,
    isAuth: payload.isAuth
});