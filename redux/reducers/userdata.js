import { SET_USERDATA } from "../constants";

const initialState = {
    token: "",
    rank: "",
    uuid: "",
    mail: "",
    username: "",
    avatar: "",
    country: "",
    bio: "",
    datareg: "",
    money: "",
    ip: "",
    avg_rating: "",
    isAuth: false
};

const userdata = (state = initialState, {type, token, rank, uuid, mail, username, avatar, country, bio, datareg, money, ip, avg_rating, isAuth}) => {
    switch (type) {
        case SET_USERDATA:
            return {
                ...state,
                token,
                rank,
                uuid,
                mail,
                username,
                avatar,
                country,
                bio,
                datareg,
                money,
                ip,
                avg_rating,
                isAuth
            };
        default: return state;
 }
}
export default userdata;