import {AfterViewInit, Component, HostListener} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-valentines-day',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './valentines-day.component.html',
    styleUrls: ['./valentines-day.component.scss']
})
export class ValentinesDayComponent implements AfterViewInit {
    section1: HTMLElement;
    cool1: HTMLElement;

    section3: HTMLElement;
    sb1: HTMLElement;
    sb2: HTMLElement;
    sb3: HTMLElement;
    sb4: HTMLElement;
    s31: HTMLElement;
    s32: HTMLElement;
    s33: HTMLElement;
    s34: HTMLElement;
    s35: HTMLElement;

    seconds = 0;
    hours = 0;
    minutes = 0;
    days = 0;

    constructor() {
        const t1 = new Date();
        const t2 = new Date(2022,11,18);
        const dif = t1.getTime() - t2.getTime();
        const seconds = dif / 1000;
        this.seconds = Math.round(Math.abs(seconds));
        this.minutes = Math.round(this.seconds / 60);
        this.hours = Math.round(this.minutes / 60);
        this.days = Math.round(this.hours / 24);
        setInterval(() => {
            this.seconds+=1;
        }, 1000);
        setInterval(() => {
            this.minutes+=1;
        }, 1000*60);
        setInterval(() => {
            this.hours+=1;
        }, 1000*60*60);
        setInterval(() => {
            this.days+=1;
        }, 1000*60*60*24);
    }

    @HostListener("window:scroll", []) onWindowScroll() {
        const verticalOffset = window.pageYOffset
            || document.documentElement.scrollTop
            || document.body.scrollTop || 0;
        const documentWidth = document.body.clientWidth;
        const documentHeight = document.body.clientHeight;

        if (verticalOffset > 0 && verticalOffset < this.section1.offsetHeight) {
            const percentage = verticalOffset/this.section1.offsetHeight;
            const width = (documentWidth * percentage)*2 + 'px';
            this.cool1.style.left = width;
        }

        const section3top = this.section3.offsetTop - documentHeight;
        if (verticalOffset > section3top && verticalOffset < (section3top + this.section3.offsetHeight + documentHeight)) {
            const percentage = (verticalOffset-section3top)/(this.section3.offsetHeight);
            this.sb1.style.left = (documentWidth * percentage * 2/3) + 'px';
            this.sb1.style.top = (documentHeight * percentage * 1/2) + 'px';
            this.sb1.style.transform = `scale(${(1+percentage)})`;
            this.sb2.style.right = (documentWidth * percentage * 3/5) + 'px';
            this.sb2.style.top = (documentHeight * percentage * 2/5) + 'px';
            this.sb2.style.transform = `scale(${(1.5-percentage)})`;
            this.sb3.style.left = 200 + (documentWidth * percentage * 1/4) + 'px';
            this.sb3.style.bottom = (documentHeight * percentage) + 'px';
            this.sb3.style.transform = `scale(${(percentage)})`;
            this.sb4.style.right = 200 + (documentWidth * percentage * 1/3) + 'px';
            this.sb4.style.bottom = (documentHeight * percentage * 4/9) + 'px';
            this.sb4.style.transform = `scale(${(1+percentage)})`;

            if (verticalOffset > (section3top + 100) && verticalOffset < (section3top + this.section3.offsetHeight + documentHeight - 400)) {
                this.s31.style.top = (documentHeight * percentage * 16/20) + 'px';
                this.s32.style.top = (documentHeight * percentage * 16/21) + 'px';
                this.s33.style.top = (documentHeight * percentage * 16/22) + 'px';
                this.s34.style.top = (documentHeight * percentage * 16/23) + 'px';
                this.s35.style.top = (documentHeight * percentage * 16/24) + 'px';
            }

            // console.log(this.sb1.style);
        }
    }

    ngAfterViewInit() {
        this.section1 = document.getElementById('section-1');
        this.cool1 = document.getElementById('cool-1');

        this.section3 = document.getElementById('section-3');
        this.sb1 = document.getElementById('sb-1');
        this.sb2 = document.getElementById('sb-2');
        this.sb3 = document.getElementById('sb-3');
        this.sb4 = document.getElementById('sb-4');
        this.s31 = document.getElementById('s31');
        this.s32 = document.getElementById('s32');
        this.s33 = document.getElementById('s33');
        this.s34 = document.getElementById('s34');
        this.s35 = document.getElementById('s35');
    }
}
