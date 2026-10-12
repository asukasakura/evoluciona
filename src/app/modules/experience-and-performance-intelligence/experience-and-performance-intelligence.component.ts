import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Interface } from 'readline';
import { I18nServiceService } from "../../i18n-service/i18n-service.service";
import { AnalyticsService } from "@shared/services/analytics.service";

@Component({
  selector: 'app-experience-and-performance-intelligence',
  templateUrl: './experience-and-performance-intelligence.component.html',
  styleUrls: ['./experience-and-performance-intelligence.component.sass']
})
export class ExperienceAndPerformanceIntelligenceComponent implements OnInit {

  gridCols = "grid-cols-1 md:grid-cols-6";
  spanCol1 = "md:col-span-3";
  spanCol2 = "md:col-span-4";
  startCol2 = "md:col-start-4";

  services = [
    {
      key: "EXPERIENCE_FRICTION_MONITOR",
      image:
        "./assets/images/experience-performance-intelligence/experience-friction-monitor.jpg",
    },
    {
      key: "CLAIMS_CUSTOMER_INTELLIGENCE",
      image: "./assets/images/experience-performance-intelligence/claims-customer-intelligence.jpg",
    },
    {
      key: "EMPLOYEE_EXPERIENCE",
      image: "./assets/images/experience-performance-intelligence/employee-experience.jpg",
    },
    {
      key: "MARKET_RESEARCH",
      image: "./assets/images/experience-performance-intelligence/market-research.jpg",
    },
  ];

  hasText(key: string, part: string): boolean {
    const path = `SERVICES.${key}.${part}`;
    const value = this.translate.instant(path);
    return !!value && value !== path && value.trim() !== "";
  }

  constructor(
    public translate: TranslateService,
    private i18nService: I18nServiceService,
    private analytics: AnalyticsService,
  ) {
    let lang = localStorage.getItem("currentLang") || "en";
    translate.setDefaultLang(lang);
    translate.use(lang);
  }

  ngOnInit(): void {
    this.i18nService.localeEvent.subscribe((locale) =>
      this.translate.use(locale),
    );
  }

}
