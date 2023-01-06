import styles from '../../styles/components/pages/NavBar.module.css'
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { setUserData } from '../../redux/action/actionCreate';
import { useEffect, useState } from "react";
import store from '../../redux/store'
import classNames from 'classnames';
import axios from 'axios';
const JsonWebToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWI2NDA2YTA4M2NjYTQxODY3Zjc4YSIsInV1aWQiOjE2NzIxNzY2NDY2MDIsInVzZXJuYW1lIjoiR0dHIiwiaWF0IjoxNjcyNzg2MTcwLCJleHAiOjE2NzMzOTA5NzB9._j0uu0dUiIBCijYwaMjCiHx1aJm7MWZ_acvbeM9bTAY'

const NavBar = ({children}) => {
    const dispatch = useDispatch();

const [isLoading, setIsLoading] = useState(true);
const [isAuthST, setIsAuthST] = useState(true);
const getData = async () => {
    if(JsonWebToken) {
        const response = await fetch("http://localhost:4000/auth/jwtcheck", {
            headers: {
                'Authorization': `Bearer ${JsonWebToken}`  
            } 
        })
        const data = await response.json()
        if (data._id) {
            setIsAuthST(false)
        }
        return data
    }
}

useEffect(() => {
    (async () => {
      const data = await getData()
      setIsLoading(false)
      dispatch(setUserData({
          type: setUserData,
          token: JsonWebToken,
          rank: data.rank,
          uuid: data.uuid,
          mail: data.mail,
          username: data.username,
          avatar: data.avatar,
          bio: data.bio,
          country: data.country,
          datareg: data.datareg,
          money: data.money,
          ip: data.ip,
          avg_rating: data.avg_rating,
          isAuth: true
        }))  
    })()
  }, [])
        
function OpenMenuUser() {
    const menu1 = document.querySelector("#domenu");
    const ButtonMenu = document.querySelector("#buttonMenu");
    menu1.classList.toggle('NavBar_activeMenu__PDp5F');
    ButtonMenu.classList.toggle('NavBar_activeMenuButton__UyY84');
}
function OpenMenuNotoffication() {
    const chatmenu = document.querySelector("#chatmenu");
    const notmenu = document.querySelector("#notmenu");
    const ButtonMenu = document.querySelector("#ButtonMenuNotoffication");
    notmenu.classList.toggle('NavBar_activeMenu__PDp5F');
    chatmenu.classList.add('NavBar_activeMenu__PDp5F');
    ButtonMenu.classList.toggle('NavBar_activeMenuButton__UyY84');
}
function OpenMenuChat() {
    const chatmenu = document.querySelector("#chatmenu");
    const notmenu = document.querySelector("#notmenu");
    const ButtonMenu = document.querySelector("#ButtonMenuChat"); 
    notmenu.classList.add('NavBar_activeMenu__PDp5F');
    chatmenu.classList.toggle('NavBar_activeMenu__PDp5F');
    ButtonMenu.classList.toggle('NavBar_activeMenuButton__UyY84');
}

function leave() {
    Cookies.remove('token');
}

    return (<>
        <header className={styles.nav}>
            <div className={styles.lefticon}> 
                <img className={styles.IconGame} src='csgo.png' alt='Cs:Go'/>
                <a>CS:GO</a>
            </div>
            {
            isAuthST 
            ?                     
            <a className={styles.Auth} href='/auth'>
                <div className={styles.ButtonAuth}>
                    Авторизуйтесь
                </div>
            </a> 
            : 
            <div className={styles.nain}>
                <div className={styles.Money}>
                    <div className={styles.MoneyBal}>
                        <a className={styles.BalanceText}>Баланс</a>                    
                        <a href='/' className={styles.Plus}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="19.5" height="19.5" fill="#787878" viewBox="0 0 16 16">
                                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3a.5.5 0 0 1 1 0z"/>
                            </svg>
                        </a>
                    </div>
                    <a className={styles.BalanceUser}>{isLoading ? "Loading" : store.getState().userdata.money} BC</a>                    
                </div>
                <div className={styles.messager}>
                    <div onClick={OpenMenuChat} id='ButtonMenuChat' className={styles.chat}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#F8F8F8" viewBox="0 0 16 16">
                            <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H4.414a1 1 0 0 0-.707.293L.854 15.146A.5.5 0 0 1 0 14.793V2zm3.5 1a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 2.5a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5z"/>
                        </svg>
                    </div>
                    <div className={styles.m}><a>4</a></div>
                    <div onClick={OpenMenuNotoffication} id='ButtonMenuNotoffication' className={styles.message}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22.75px" height="19.5px" fill="#F8F8F8" viewBox="0 0 16 16">
                            <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.995-14.901a1 1 0 1 0-1.99 0A5.002 5.002 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901z"/>
                        </svg>
                    </div>
                    <div className={styles.m}><a>4</a></div>
                </div>
                <div onClick={OpenMenuUser} id="buttonMenu" className={styles.name}>
                    <div className={styles.avatardiv}>
                        <img className={styles.avatar} src={isLoading ? "Loading" : store.getState().userdata.avatar} alt='Аватар'/>
                    </div>
                    <div className={styles.UsernameAndRank}>
                        <a className={styles.nam}>
                            {isLoading ? "Loading" : store.getState().userdata.username}
                        </a>
                        <a className={styles.rank}>
                            Ранг: {isLoading ? "Loading" : store.getState().userdata.avg_rating}
                        </a>
                    </div>
                    <div className={styles.dow}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" fill="#F8F8F8" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div>
            </div>   

            }
        </header>

        <div className={styles.parmenu}>        
            <div id='chatmenu' className={classNames(styles.domenu3, styles.activeMenu)}>

            </div>    
            <div id='notmenu' className={classNames(styles.domenu2, styles.activeMenu)}>

            </div>
            <div id='domenu' className={classNames(styles.domenu, styles.activeMenu)}>
                <div className={styles.dowmenu}>
                    <a href='/settings' className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../Stats.svg' alt='1' />
                            Статистика
                        </div>
                        <hr/>
                    </a>
                    <a href="/settings" className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../HistoryMatchs.svg' alt='1' />
                            История матчей
                        </div>                    
                        <hr/>
                    </a>
                    <a href={`/user/${store.getState().userdata.uuid}`} className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../Profile.svg' alt='1' />
                            Профиль
                        </div>
                        <hr/>
                    </a>
                    <a href='/settings' className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../Money.svg' alt='1' />
                            Кошелёк
                        </div>
                        <hr/>
                    </a>
                    <a href='/settings' className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../Settings.svg' alt='1' />
                            Параметры
                        </div>
                        <hr/>
                    </a>
                    <a href='/settings' className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../BlackList.svg' alt='1' />
                            Черный список
                        </div>
                        <hr/>
                    </a>
                    <a onClick={leave} href='/' className={styles.setc}>
                        <div className={styles.settings}>
                            <img className={styles.ImgSettings} src='../../Leave.svg' alt='1' />
                            Выйти из аккаунта
                        </div>
                    </a>
                </div>
            </div>
        </div>
        <div className={styles.menu}>
            <img className={styles.logo} src="/../logo.png" alt="" />
            <a href="/" className={styles.gb}>
                <div className={styles.BlY}>
                    <img className={styles.gla} src="/../main.png" alt="" />
                </div>
            </a>
            <a href="/matchs">
                <div className={classNames(styles.mat, styles.BlY)}>
                    <img className={styles.matc} src="/../match.png" alt="" />
                </div>
            </a> 
            <a href="/tournaments">
                <div className={classNames(styles.tyrnir, styles.BlY)}>
                    <img className={styles.ty} src="/../Tyr.png" alt="" />
                </div>
            </a>
            <a href="/teams">
                <div className={classNames(styles.comm, styles.BlY)}>
                    <img className={styles.com} src="/../team.png" alt="" />
                </div>
            </a>
            <a href="/friends/users">
                <div className={classNames(styles.fri, styles.BlY)} >
                    <img className={styles.fr} src="/../friend.png" alt="" />   
                </div>
            </a>
        </div> 
        <div>
            {children}
        </div>
    </>);
};

export default NavBar;