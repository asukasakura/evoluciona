import { Component, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { Interface } from "readline";
import { I18nServiceService } from "../../i18n-service/i18n-service.service";
import { AnalyticsService } from "@shared/services/analytics.service";

@Component({
  selector: "app-transformation-operational-excellence",
  templateUrl: "./transformation-operational-excellence.component.html",
  styleUrls: ["./transformation-operational-excellence.component.sass"],
})
export class TransformationOperationalExcellenceComponent implements OnInit {
  gridCols = "grid-cols-1 md:grid-cols-6";
  spanCol1 = "md:col-span-3";
  spanCol2 = "md:col-span-4";
  startCol2 = "md:col-start-4";

  services = [
    {
      key: "STRATEGIC_PLANNING",
      image:
        "./assets/images/transformacion-excelencia/planificacion-estrategica.jpg",
    },
    {
      key: "CHANGE_MANAGEMENT",
      image: "./assets/images/transformacion-excelencia/gestion-cambio.jpg",
    },
    {
      key: "AGILE_COACHING",
      image: "./assets/images/transformacion-excelencia/coach-agil.jpg",
    },
    {
      key: "AI_AUTOMATION",
      image: "./assets/images/transformacion-excelencia/automatizacion-ai.jpg",
    },
  ];

  approachSteps = [
    { key: "START", image: "./assets/images/transformacion-excelencia/modelo-inicio.png" },
    { key: "DISCIPLINE", image: "./assets/images/transformacion-excelencia/modelo-disciplina.png" },
    { key: "ADHERENCE", image: "./assets/images/transformacion-excelencia/modelo-adherencia.png" },
    { key: "HABIT", image: "./assets/images/transformacion-excelencia/modelo-habito.png" },
    { key: "CULTURE", image: "./assets/images/transformacion-excelencia/modelo-cultura.png" },
  ];

  hasText(key: string, part: string): boolean {
    const path = `SERVICES.${key}.${part}`;
    const value = this.translate.instant(path);
    return !!value && value !== path && value.trim() !== "";
  }

  hasApproachText(key: string, part: string): boolean {
    const path = `APPROACH_MODEL.STEPS.${key}.${part}`;
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
