import { Component, OnInit } from '@angular/core';
import { MenuOption } from './side-bar';
import { Pipe } from '@angular/core';
import { PipeTransform } from '@angular/core';
import * as $ from 'jquery';
import { concat } from 'rxjs/internal/observable/concat';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  submenuOptions;
  menuOptions;
  menusetUp;
  menuItems;
  constructor() { }

  ngOnInit() {
   this.menuOptions = [
    {
      'formalName': 'IDMIMaintenance',
      'displayName': 'IDMI_Maint',
      'link': null,
      'helpName': null,
      'helplink': null

  }, {
        'formalName': 'Financial',
        'displayName': 'Financial',
        'link': null,
        'helpName': 'Financial',
        'helplink': 'financial.cfm',
    },
    {
        'formalName': 'Payments',
        'displayName': 'Payments',
        'link': null,
        'helpName': 'Payments',
        'helplink': 'payments.cfm',
    },
    {
        'formalName': 'Coverage',
        'displayName': 'Coverages',
        'link': '/coverages/coverage.cfm?module=coverage',
        'helpName': null,
        'helplink': null,
    }
  ];
  this.submenuOptions =  {
    'ImportPayments': {
      'formalName': 'Import',
      'displayName': 'Import',
      'link': '/payments/ImportPayments/paymentsImportMaint.cfmmodule=ImportPayments',
      'helpName': null,
      'helplink': null,
    },
    'SinglePayments': {
      'formalName': 'Single Pay',
      'displayName': 'Single Pay',
      'link': '/policySearch/policySearch_v30.cfm?module=payments&actionType=singlePay',
      'helpName': 'Single Pay',
      'helplink': 'payments.cfm',
     },
    'Adj': {
      'formalName': 'Adjustments',
      'displayName': 'Adjustments',
      'link': '/policy/policy.cfm?module=adjustment',
      'helpName': null,
      'helplink': null
    },
    'CompanyFinancial' : {
      'formalName': 'CompanyFinancial',
      'displayName': 'Financials',
      'link': '/company/financials/companyFinancialsLayout.cfm?module=payments',
      'helpName': null,
      'helplink': null
    },
    'PaymentPlan' : {
      'formalName': 'PaymentPlan',
      'displayName': 'Pay Plans',
      'link': '/paymentPlan/paymentPlanLayout.cfm',
      'helpName': null,
      'helplink': null
    }
  };

  this.menusetUp = {
    'Payments': ['ImportPayments', 'SinglePayments', 'Adj'],
    'IDMIMaintenance' :  ['CompanyFinancial', 'PaymentPlan']
  };
  }
  openNav = function() {
    $('.main_sidebar').toggle();
  };
  toggleSubMenu = function(e) {
    $('.list-item').eq(e).children('ul').toggle();
  };
  closeNav = function() {
    $('.main_sidebar').toggle();
  };
}

