import { create } from 'zustand';

import { ResponseLogin } from '../services/type';
import { UserType } from '@/features/user';

type AuthStore = {
  token?: string;
  user?: ResponseLogin['user'];
  loginUser: (_: ResponseLogin) => void;
  logout: () => void;
  setUser: (_: UserType) => void;
};

const useAuthStore = create<AuthStore>()((set) => ({
  token: localStorage.getItem('token') || undefined,
  loginUser: (dataLogin) => {
    localStorage.setItem('token', dataLogin.access_token);
    set({
      token: dataLogin.access_token,
      user: dataLogin.user,
    });
  },
  logout: () => {
    localStorage.removeItem('token');
    set({ token: undefined, user: undefined });
  },
  setUser: (data: UserType) => {
    set({ user: data });
  },
}));

export default useAuthStore;
