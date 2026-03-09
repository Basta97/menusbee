import { Component } from '@angular/core';
import { QrCto } from "../../shared/common/qr-cto/qr-cto";

@Component({
  selector: 'app-footer',
  imports: [QrCto],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
})
export class Footer {
  isChatOpen: boolean = false;

  toggleChat(event?: Event) {
    if (event) {
      event.preventDefault();
      event.stopPropagation();
    }
    this.isChatOpen = !this.isChatOpen;
  }

  sendMessage(message: string) {
    if (!message.trim()) return;
    const url = `https://wa.me/2010104099525?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
    this.isChatOpen = false;
  }
}
