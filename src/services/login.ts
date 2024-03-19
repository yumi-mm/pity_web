import request from '@/utils/request';
import {CONFIG} from '@/consts/config';

export interface LoginParamsType {
  userName: string;
  password: string;
  mobile: string;
  captcha: string;
}

export async function fakeAccountLogin(params: LoginParamsType) {
  return request('/api/login/account', {
    method: 'POST',
    data: params,
  });
}

export async function login(params: LoginParamsType) {
  return request(`${CONFIG.URL}/auth/login`, {
    method: 'POST',
    data: params,
  })
}

export async function register(params: LoginParamsType) {
  return request(`${CONFIG.URL}/auth/register`, {
    method: 'POST',
    data: params,
  })
}

export async function getFakeCaptcha(mobile: string) {
  return request(`/api/login/captcha?mobile=${mobile}`);
}
