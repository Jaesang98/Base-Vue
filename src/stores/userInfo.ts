import { defineStore } from 'pinia';
import type { UserStore, UserInfo } from '@/type/userInfo';

export const useUserInfoStore = defineStore('userInfo', {
    state: (): UserStore => ({
        //로그인한 사용자의 정보
        userInfo: {
            userId: '',
            userName: '',
            adminYn: ''
        }
    }),

    getters: {
        //관리자 유무
        isAdmin(state) {
            return state.userInfo.adminYn === 'Y';
        }
    },

    actions: {
        setUser(user: UserInfo) {
            this.userInfo = user;
        },
        logout() {
            this.userInfo = {
                userId: '',
                userName: '',
                adminYn: ''
            };
            window.location.href = '/';
        }
    }
});
