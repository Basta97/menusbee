import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-auth',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './auth.html',
    styleUrl: './auth.css',
})
export class Auth {
    /** Active tab: 'login' | 'register' */
    activeTab = signal<'login' | 'register'>('login');

    /** Form fields */
    loginForm = signal({ email: '', password: '' });
    registerForm = signal({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

    /** Loading state */
    isLoading = signal(false);

    switchTab(tab: 'login' | 'register') {
        this.activeTab.set(tab);
    }

    updateLogin<K extends keyof ReturnType<typeof this.loginForm>>(key: K, value: string) {
        this.loginForm.update(f => ({ ...f, [key]: value }));
    }

    updateRegister<K extends keyof ReturnType<typeof this.registerForm>>(key: K, value: string) {
        this.registerForm.update(f => ({ ...f, [key]: value }));
    }

    onLogin() {
        this.isLoading.set(true);
        setTimeout(() => this.isLoading.set(false), 1500);
    }

    onRegister() {
        this.isLoading.set(true);
        setTimeout(() => this.isLoading.set(false), 1500);
    }
}
