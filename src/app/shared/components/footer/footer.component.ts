import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { Observable, map } from 'rxjs';
import { OrganizationService } from '../../../features/organizations/services/organization.service';
import { Organization } from '../../../core/models/organization.model';
import { ThemeService } from '../../../core/services/theme.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  currentYear: number;
  parentOrg$!: Observable<Organization | undefined>;

  constructor(
    public themeService: ThemeService,
    private organizationService: OrganizationService,
  ) {
    this.currentYear = new Date().getFullYear();
  }

  ngOnInit(): void {
    this.parentOrg$ = this.organizationService
      .getOrganizationsByRelation('parent')
      .pipe(map((orgs) => orgs[0]));
  }
}
