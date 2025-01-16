// 로그인 사용자 정보 타입 정의
export interface UserStore {
    userInfo: UserInfo;
}

// UserInfo 타입 정의
export type UserInfo = {
    userId: string;
    userName: string;
    adminYn: string;
};
