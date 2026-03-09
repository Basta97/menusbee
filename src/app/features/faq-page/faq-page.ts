import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface FaqCategory {
  id: string;
  label: string;
  icon: string;
  bgColor: string;
  textColor: string;
}

interface FaqItem {
  id: number;
  question: string;
  answer: string;
  categoryId: string;
}

@Component({
  selector: 'app-faq-page',
  standalone: true,
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './faq-page.html',
  styleUrl: './faq-page.css'
})
export class FaqPage {
  searchQuery: string = '';
  activeCategory: string = 'all';

  categories: FaqCategory[] = [
    {
      id: 'general',
      label: 'عام',
      icon: '<path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line>',
      bgColor: 'bg-[#8CC63F]',
      textColor: 'text-white'
    },
    {
      id: 'pricing',
      label: 'الأسعار',
      icon: '<line x1="5" y1="12" x2="19" y2="12"></line>',
      bgColor: 'bg-[#F58220]',
      textColor: 'text-white'
    },
    {
      id: 'tech',
      label: 'تقني',
      icon: '<circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>',
      bgColor: 'bg-[#333333]',
      textColor: 'text-white'
    },
    {
      id: 'all',
      label: 'الكل',
      icon: '<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline>',
      bgColor: 'bg-white border-2 border-mu-primary',
      textColor: 'text-[#8CC63F]'
    }
  ];

  faqs: FaqItem[] = [
    {
      id: 1,
      categoryId: 'general',
      question: 'ما هو منيوبي؟',
      answer: 'منيوبي هو منصة متكاملة لإنشاء قوائم طعام إلكترونية (المنيو الرقمي) للمطاعم والمقاهي بسهولة وتوفير حلول للطلب والدفع عبر الإنترنت لمساعدة أصحاب الأعمال في إدارة طلباتهم بكفاءة.'
    },
    {
      id: 2,
      categoryId: 'pricing',
      question: 'ما التكلفة لإنشاء منيو عبر منيوبي؟',
      answer: 'نوفر خطة مجانية تماماً للمطاعم الناشئة يمكنك من خلالها بدء نشاطك بسلاسة. يمكنك لاحقاً الترقية إلى باقتنا المتقدمة أو باقة المؤسسات لخصائص احترافية إضافية مثل الربط مع أنظمة الدفع وإدارة الفروع المتعددة.'
    },
    {
      id: 3,
      categoryId: 'tech',
      question: 'هل أحتاج خبرة تقنية لإنشاء وإدارة المنيو الخاص بي؟',
      answer: 'بالطبع لا، لقد قمنا بتصميم لوحة التحكم في منيوبي لتكون في غاية السهولة والبساطة وتلائم جميع المستخدمين بدون الحاجة إلى أي معرفة برمجية. بمجرد التسجيل يمكنك إضافة الأقسام والمنتجات والبدء فوراً.'
    },
    {
      id: 4,
      categoryId: 'general',
      question: 'هل يمكن للعملاء الطلب مباشرة من خلال المنيو الإلكتروني؟',
      answer: 'نعم، يمكن لعملائك تصفح المنيو، إضافة المنتجات اللي السلة، وتأكيد الطلب بأنفسهم بسهولة من خلال هواتفهم، مع دعم للطلب المباشر أو التوصيل أو الاستلام من الفرع وذلك يعتمد على الباقة التي تختارها.'
    },
    {
      id: 5,
      categoryId: 'general',
      question: 'كيف يمكنني طباعة رمز الـ QR وتوزيعه على الطاولات؟',
      answer: 'يمكنك إنشاء الـ QR Code الخاص بك بسهولة، تخصيصه بألوان مطعمك وشعاره من خلال لوحة التحكم، ثم تحميله بصيغة عالية الجودة وتوجيهه للطباعة بأي شكل يناسب طاولات مطعمك أو الملصقات والبروشورات.'
    },
    {
      id: 6,
      categoryId: 'tech',
      question: 'هل يمكن تحديث المنتجات والأسعار بسهولة؟',
      answer: 'نعم، من خلال لوحة التحكم الخاصة بك يمكنك تعديل أو إضافة منتجات، تحديث الأسعار، أو تغيير الصور في أي وقت وسيتم تحديث المنيو الخاص بك للعملاء في نفس اللحظة.'
    },
    {
      id: 7,
      categoryId: 'pricing',
      question: 'ما هي وسائل الدفع المدعومة؟',
      answer: 'ندعم الدفع نقداً عند الاستلام بالإضافة إلى استقبال المدفوعات عبر البطاقات الائتمانية المحلية والدولية لتسهيل عمليات الدفع لعملائك.'
    }
  ];

  setCategory(categoryId: string) {
    this.activeCategory = categoryId;
  }

  get filteredFaqs(): FaqItem[] {
    return this.faqs.filter(faq => {
      const matchesCategory = this.activeCategory === 'all' || faq.categoryId === this.activeCategory;
      const matchesSearch = faq.question.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
        faq.answer.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }

  expandedItemId: number | null = null;

  toggleItem(id: number) {
    if (this.expandedItemId === id) {
      this.expandedItemId = null;
    } else {
      this.expandedItemId = id;
    }
  }
}
