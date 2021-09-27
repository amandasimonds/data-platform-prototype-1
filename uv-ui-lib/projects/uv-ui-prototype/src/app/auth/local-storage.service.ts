import { Inject, Injectable } from '@angular/core';
import { AbstractSecurityStorage } from 'angular-auth-oidc-client';
import { LOCAL_STORAGE } from '../tokens/local-storage';

@Injectable()
export class LocalStorage implements AbstractSecurityStorage {
    constructor(@Inject(LOCAL_STORAGE) private localStorage: Storage) {}

    public read(key: string): any {
        return JSON.parse(this.localStorage.getItem(key) || '{}');
    }

    public write(key: string, value: any): void {
        this.localStorage.setItem(key, JSON.stringify(value ?? null));
    }

    public remove(key: string): void {
        this.localStorage.removeItem(key);
    }

    public clear(): void {
        this.localStorage.clear();
    }
}
