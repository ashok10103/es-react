import React, { Component } from 'react'
import Aux from '../Hoc/Aux';

class Hits extends Component {
  state={
    data:{
      "took": 7,
      "timed_out": false,
      "_shards": {
        "total": 5,
        "successful": 5,
        "skipped": 0,
        "failed": 0
      },
      "hits": {
        "total": 252,
        "max_score": 1,
        "hits": [
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "api-thumbor-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://api-thumbor-uat-04.privaliacloud-test.com/manage/health",
              "service_name": "api-thumbor",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "api-thumbor-uat-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-checkout-gateway-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-checkout-gateway-int-01.privalia.aws/manage/health",
              "service_name": "sf-checkout-gateway",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-checkout-gateway-int-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-mkp-orderflow-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://oms-mkp-orderflow-int-01-it.privalia.aws/manage/health",
              "service_name": "oms-mkp-orderflow",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-mkp-orderflow-int-it",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-auth-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-auth-uat-04.privaliacloud-test.com/manage/health",
              "service_name": "mpsf-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-auth-uat-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-workers-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-workers-pre-01.privalia.aws/manage/health",
              "service_name": "mpsf-search-workers",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-workers-pre-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-oauth-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-int-it",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "excelreader-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://excelreader-pro.privaliapro.aws/health",
              "service_name": "excelreader",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "excelreader-pro-es",
              "subprocess_name": "campaign_production",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:55"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-consumer-search-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-consumer-search-pre-01.privalia.aws/manage/health",
              "service_name": "msg-consumer-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-consumer-search-pre-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-uc-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-pre-01.privalia.aws/manage/health",
              "service_name": "frontend-uc",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-uc-pre-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-consumer-order-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-consumer-order-int-01.privalia.aws/manage/health",
              "service_name": "msg-consumer-order",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-consumer-order-int-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-filestorage-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-filestorage-int-01.privalia.aws/manage/health",
              "service_name": "oms-common-filestorage",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-filestorage-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "gato-auth-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://es-gato-auth-pre-01.privaliacloud-test.com/manage/health",
              "service_name": "gato-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "gato-auth-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-facade-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-facade-int-01.privalia.aws/manage/health",
              "service_name": "uc-facade",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-facade-int-es",
              "subprocess_name": "cross_production",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-basket-reservation-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-basket-reservation-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-basket-reservation",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-basket-reservation-int-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:03"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-oms-int-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-oms-int-int-01.privalia.aws/manage/health",
              "service_name": "uc-mirakl-oms-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-oms-int-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-sso01-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-sso01-uat-04.privaliacloud-test.com/manage/health",
              "service_name": "mpsf-sso01",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-sso01-uat-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-sso-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-int-it",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-sso01-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-sso01.privalia.com/manage/health",
              "service_name": "mpsf-sso01",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privalia.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-sso01-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-api-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-api.privaliapro.aws/manage/health",
              "service_name": "msg-api",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "msg-api-pro-es",
              "subprocess_name": "cross_sales",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-pre-01.privalia.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-pre-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-babel-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://oms-common-babel-int-01-it.privalia.aws/manage/health",
              "service_name": "oms-common-babel",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-babel-int-it",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://mpsf-search-int-01-it.privalia.aws/manage/health",
              "service_name": "mpsf-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-int-it",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:57"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-int-01.privalia.aws/manage/health",
              "service_name": "mpsf-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-int-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:55"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-babel-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-babel-pre-01.privalia.aws/health",
              "service_name": "oms-common-babel",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-babel-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-payment-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-payment-pre-01.privalia.aws/manage/health",
              "service_name": "oms-common-payment",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-payment-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-checkout-gateway-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-checkout-gateway-pre-01.privalia.aws/manage/health",
              "service_name": "sf-checkout-gateway",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-checkout-gateway-pre-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-oms-int-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://uc-mirakl-oms-int-int-01-it.privalia.aws/manage/health",
              "service_name": "uc-mirakl-oms-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-oms-int-int-it",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-checkout-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-checkout-uat-04.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-checkout-uat-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-oms-int-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-oms-int-pre-01.privalia.aws/manage/health",
              "service_name": "uc-mirakl-oms-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-oms-int-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-checkout-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-checkout-uat-04-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-checkout-uat-it",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-sso-pre-01.privalia.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-workers-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-workers-uat-04.privalia.aws/manage/health",
              "service_name": "mpsf-search-workers",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-workers-uat-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-checkout-gateway-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-checkout-gateway-uat-04.privalia.aws/manage/health",
              "service_name": "sf-checkout-gateway",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-checkout-gateway-uat-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-sso.privaliapro.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-oauth-uat-04-it.privalia.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-uat-it",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:18"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-adtech-mgm-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-adtech-mgm.privaliapro.aws/health",
              "service_name": "sf-adtech-mgm",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "traffic_generation",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-adtech-mgm-pro-es",
              "subprocess_name": "traffic_source",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-catalog-ipq-consumer-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-catalog-ipq-consumer-uat-04-it.privalia.aws/manage/health",
              "service_name": "sf-catalog-ipq-consumer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-catalog-ipq-consumer-uat-it",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:16"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-payment-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-payment.privaliapro.aws/manage/health",
              "service_name": "oms-common-payment",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-payment-pro-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:06"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-babel-int-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://uc-babel-int-int-01-it.privalia.aws/manage/health",
              "service_name": "uc-babel-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-babel-int-int-it",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:06"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-catalog-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-catalog.privaliapro.aws/manage/health",
              "service_name": "uc-catalog",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "uc-catalog-pro-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:10"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-facade-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-facade.privaliapro.aws/manage/health",
              "service_name": "uc-facade",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "uc-facade-pro-es",
              "subprocess_name": "cross_production",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-catalog-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-catalog-uat-04.privalia.aws/manage/health",
              "service_name": "uc-catalog",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-catalog-uat-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-email-int-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-email-int-uat-04.privalia.aws/manage/health",
              "service_name": "uc-email-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-email-int-uat-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucherfcsync-pre-01-it.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pre-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:19"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-sso-uat-04.privalia.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-uat-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:19"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-adtech-mgm-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-adtech-mgm-uat-04.privaliacloud-test.com/health",
              "service_name": "sf-adtech-mgm",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "traffic_generation",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-adtech-mgm-uat-es",
              "subprocess_name": "traffic_source",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:20"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-uat-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://self-care-uat-04-br.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-uat-br",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:23"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucherfcsync-it.privaliapro.aws/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pro-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:27"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "address-recommender-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://address-recommender-int-01.privaliacloud-test.com/health",
              "service_name": "address-recommender",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "address-recommender-int-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:51"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-workers-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://mpsf-search-workers-int-01-it.privalia.aws/manage/health",
              "service_name": "mpsf-search-workers",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-workers-int-it",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-int-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://self-care-int-01-br.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-int-br",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-consumer-order-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-consumer-order-pre-01.privalia.aws/manage/health",
              "service_name": "msg-consumer-order",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-consumer-order-pre-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-api-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-api-int-01.privalia.aws/manage/health",
              "service_name": "msg-api",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-api-int-es",
              "subprocess_name": "cross_sales",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "address-recommender-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://address-recommender-uat-04.privaliacloud-test.com/health",
              "service_name": "address-recommender",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "address-recommender-uat-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-basket-core-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-basket-core-int-01.privalia.aws/manage/health",
              "service_name": "sf-basket-core",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-basket-core-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-emailcustomer-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-core-emailcustomer-pre-01.privalia.aws/manage/health",
              "service_name": "oms-core-emailcustomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-emailcustomer-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-basket-integration-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-basket-integration-uat-04.privalia.aws/health",
              "service_name": "sf-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-basket-integration-uat-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fileuploader-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://fileuploader-pre.privalia.aws/health",
              "service_name": "fileuploader",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "fileuploader-pre-es",
              "subprocess_name": "campaign_production",
              "status": "error",
              "timestamp": "2018-07-31T22:54:53"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-account-int-01.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "issue process",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-int-es",
              "subprocess_name": "customer_support",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "excelreader-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://excelreader-pre.privalia.aws/health",
              "service_name": "excelreader",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "excelreader-pre-es",
              "subprocess_name": "campaign_production",
              "status": "error",
              "timestamp": "2018-07-31T22:54:53"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-catalog-ipq-consumer-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-catalog-ipq-consumer-int-01.privalia.aws/manage/health",
              "service_name": "sf-catalog-ipq-consumer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-catalog-ipq-consumer-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-identity-int-01.privalia.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-int-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-auth-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-auth-int-01.privaliacloud-test.com/manage/health",
              "service_name": "mpsf-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-auth-int-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-basket-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-basket-int-01.privalia.aws/manage/health",
              "service_name": "mpsf-basket",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-basket-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-orders-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-orders-pre-01.privaliacloud-test.com/health",
              "service_name": "sc-vpi-orders",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-orders-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-sso-int-01.privalia.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-int-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-int-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucher-int-01-br.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-int-br",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-pre-01-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-pre-it",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucherfcsync-int-01.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-consumer-order-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-consumer-order.privaliapro.aws/manage/health",
              "service_name": "msg-consumer-order",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "msg-consumer-order-pro-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf.privaliapro.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-pro-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-email-int-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-email-int-pre-01.privalia.aws/manage/health",
              "service_name": "uc-email-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-email-int-pre-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-catalog-ipq-consumer-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-catalog-ipq-consumer-pre-01.privalia.aws/manage/health",
              "service_name": "sf-catalog-ipq-consumer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-catalog-ipq-consumer-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-oauth-pre-01-it.privalia.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-pre-it",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-babel-int-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-babel-int-pre-01.privalia.aws/manage/health",
              "service_name": "uc-babel-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-babel-int-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:10"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-adtech-mgm-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-adtech-mgm-pre-01.privaliacloud-test.com/health",
              "service_name": "sf-adtech-mgm",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "traffic_generation",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-adtech-mgm-pre-es",
              "subprocess_name": "traffic_source",
              "status": "error",
              "timestamp": "2018-07-31T22:55:10"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-basket-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-basket.privalia.com/manage/health",
              "service_name": "mpsf-basket",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privalia.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-basket-pro-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-account-it.privaliapro.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "issue process",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-pro-it",
              "subprocess_name": "customer_support",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-it.privaliapro.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-pro-it",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://mpsf-search-uat-04-it.privalia.aws/manage/health",
              "service_name": "mpsf-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-uat-it",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:12"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-frontend-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-oms.privaliapro.aws/manage/health",
              "service_name": "oms-core-frontend",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-frontend-pro-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-filestorage-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-filestorage-uat-04.privalia.aws/manage/health",
              "service_name": "oms-common-filestorage",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-filestorage-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:06"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-oms-int-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-oms-int-uat-04.privalia.aws/manage/health",
              "service_name": "uc-mirakl-oms-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-oms-int-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:16"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucherfcsync-pre-01.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:16"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-sso-it.privaliapro.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-pro-it",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:17"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucherfcsync.privaliapro.aws/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pro-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:25"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-uat-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucher-uat-04-br.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-uat-br",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:35"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-int-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucher-int-01-mx.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-int-mx",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pre-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucher-pre-01-mx.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pre-mx",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:23"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-oms-int-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-oms-int.privaliapro.aws/manage/health",
              "service_name": "uc-mirakl-oms-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-oms-int-pro-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-uat-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://self-care-uat-04-mx.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-uat-mx",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:28"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://self-care-uat-04.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-uat-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:25"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-uat-04-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-uat-it",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucherfcsync-uat-04-it.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-uat-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:36"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucher-uat-04-it.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-uat-it",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:39"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "crml-oms-ordstatnotif-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://crml-oms-ordstatnotif-int-01.privaliacloud-test.com/health",
              "service_name": "crml-oms-ordstatnotif",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "crml-oms-ordstatnotif-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:52"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fc-basket-integration-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://fc-basket-integration-pre-01.privalia.aws/manage/health",
              "service_name": "fc-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "fc-basket-integration-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:59:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fc-basket-integration-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://fc-basket-integration-it.privaliapro.aws/manage/health",
              "service_name": "fc-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "fc-basket-integration-pro-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:59:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-admin-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-admin-int-01.privaliacloud-test.com/health",
              "service_name": "sc-vpi-admin",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-admin-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-account-pre-01.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "issue process",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-pre-es",
              "subprocess_name": "customer_support",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-api-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-api-pre-01.privalia.aws/manage/health",
              "service_name": "msg-api",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-api-pre-es",
              "subprocess_name": "cross_sales",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "api-thumbor-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://imgservice.prvstatic.com/manage/health",
              "service_name": "api-thumbor",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "prvstatic.com",
              "team_mail": "",
              "healthcheck_name": "api-thumbor-pro-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "privalia-api-payments-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://privalia-api-payments-pre-01.privaliacloud-test.com/health",
              "service_name": "privalia-api-payments",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "privalia-api-payments-pre-es",
              "subprocess_name": "payments",
              "status": "error",
              "timestamp": "2018-07-31T22:54:57"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-int-01-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-int-it",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-babel-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-babel-int-01.privalia.aws/manage/health",
              "service_name": "oms-common-babel",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-babel-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-frontend-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-oms-int-01.privalia.aws/manage/health",
              "service_name": "oms-core-frontend",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-frontend-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-identity-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-identity-pre-01.privalia-test.com/manage/health",
              "service_name": "mpsf-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-identity-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:55"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-payment-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://oms-common-payment-int-01-it.privalia.aws/manage/health",
              "service_name": "oms-common-payment",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-payment-int-it",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-filestorage-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-filestorage-pre-01.privalia.aws/manage/health",
              "service_name": "oms-common-filestorage",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-filestorage-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "gato-auth-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://es-gato-auth-pro-01.privaliacloud.com/manage/health",
              "service_name": "gato-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliacloud.com",
              "team_mail": "",
              "healthcheck_name": "gato-auth-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-frontend-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-oms-pre-01.privalia.aws/manage/health",
              "service_name": "oms-core-frontend",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-frontend-pre-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-marketpay-sellers-int-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-marketpay-sellers-int-int-01.privalia.aws/manage/health",
              "service_name": "uc-marketpay-sellers-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-marketpay-sellers-int-int-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:03"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-int-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-int-int-01.privalia.aws/manage/health",
              "service_name": "uc-mirakl-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-int-int-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:03"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search.privaliapro.aws/manage/health",
              "service_name": "mpsf-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-pro-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-basket-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-basket-pre-01.privalia.aws/manage/health",
              "service_name": "mpsf-basket",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-basket-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "privalia-api-payments-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://privalia-api-payments.privaliacloud.com/health",
              "service_name": "privalia-api-payments",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliacloud.com",
              "team_mail": "",
              "healthcheck_name": "privalia-api-payments-pro-es",
              "subprocess_name": "payments",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-pre-01.privalia.aws/manage/health",
              "service_name": "mpsf-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-pre-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-int-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-int-pre-01.privalia.aws/manage/health",
              "service_name": "uc-mirakl-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-int-pre-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-identity-pre-01.privalia.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-filestorage-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-filestorage.privaliapro.aws/manage/health",
              "service_name": "oms-common-filestorage",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-filestorage-pro-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-basket-core-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-basket-core-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-basket-core",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-basket-core-int-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-int-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucherfcsync-int-01-br.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-int-br",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-account.privaliapro.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "issue process",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-pro-es",
              "subprocess_name": "customer_support",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucher-int-01-it.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-int-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-emailcustomer-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-core-emailcustomer-uat-04.privalia.aws/manage/health",
              "service_name": "oms-core-emailcustomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-emailcustomer-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:06"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucher-pre-01-it.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pre-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:20"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-identity-uat-04-it.privalia.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-uat-it",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:21"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pre-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucherfcsync-pre-01-mx.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pre-mx",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:21"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-pro-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://self-care-mx.privaliapro.aws/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "self-care-pro-mx",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:21"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-babel-int-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-babel-int.privaliacloud.com/manage/health",
              "service_name": "uc-babel-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliacloud.com",
              "team_mail": "",
              "healthcheck_name": "uc-babel-int-pro-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-catalog-ipq-consumer-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-catalog-ipq-consumer-uat-04.privalia.aws/manage/health",
              "service_name": "sf-catalog-ipq-consumer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-catalog-ipq-consumer-uat-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-identity.privaliapro.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-identity-uat-04.privalia.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-uat-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:18"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-oms-int-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://uc-mirakl-oms-int-uat-04-it.privalia.aws/manage/health",
              "service_name": "uc-mirakl-oms-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-oms-int-uat-it",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:18"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://self-care.privaliapro.aws/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "self-care-pro-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:19"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://self-care-pre-01.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-pre-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:12"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-account-uat-04.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "issue process",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-uat-es",
              "subprocess_name": "customer_support",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-uat-04.privalia.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-uat-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-int-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-int.privaliapro.aws/manage/health",
              "service_name": "uc-mirakl-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-int-pro-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-images-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-images.privaliapro.aws/manage/health",
              "service_name": "uc-images",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "uc-images-pro-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-marketpay-sellers-int-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-marketpay-sellers-int-uat-04.privalia.aws/manage/health",
              "service_name": "uc-marketpay-sellers-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-marketpay-sellers-int-uat-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-account-uat-04-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "issue process",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-uat-it",
              "subprocess_name": "customer_support",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pro-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucherfcsync-br.privaliapro.aws/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pro-br",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:23"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pro-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucherfcsync-mx.privaliapro.aws/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pro-mx",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:29"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucherfcsync-uat-04.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-uat-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:34"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-uat-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucher-uat-04-mx.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-uat-mx",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:41"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "api-thumbor-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://api-thumbor-int-01.privaliacloud-test.com/manage/health",
              "service_name": "api-thumbor",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "api-thumbor-int-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:52"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fc-basket-integration-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://fc-basket-integration-int-01.privalia.aws/manage/health",
              "service_name": "fc-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "fc-basket-integration-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:59:03"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "gato-integrator-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://es-gato-integrator-pro-01.privaliacloud.com/manage/health",
              "service_name": "gato-integrator",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliacloud.com",
              "team_mail": "",
              "healthcheck_name": "gato-integrator-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-checkout-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-checkout-int-01-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-checkout-int-it",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-mkp-orderflow-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-mkp-orderflow-int-01.privalia.aws/manage/health",
              "service_name": "oms-mkp-orderflow",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-mkp-orderflow-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-basket-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://mpsf-basket-int-01-it.privalia.aws/manage/health",
              "service_name": "mpsf-basket",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-basket-int-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:57"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-auth-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-auth-pre-01.privalia-test.com/manage/health",
              "service_name": "mpsf-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-auth-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:57"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-identity-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-identity.privalia.com/manage/health",
              "service_name": "mpsf-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privalia.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-identity-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:57"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-checkout-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-checkout.privalia.com/manage/health",
              "service_name": "mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privalia.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-checkout-pro-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:55"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "crml-oms-ordstatnotif-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://crml-oms-ordstatnotif-int-01-it.privaliacloud-test.com/health",
              "service_name": "crml-oms-ordstatnotif",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "crml-oms-ordstatnotif-int-it",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:55"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-sso01-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-sso01-int-01.privaliacloud-test.com/manage/health",
              "service_name": "mpsf-sso01",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-sso01-int-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-emailcustomer-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-core-emailcustomer-int-01.privalia.aws/manage/health",
              "service_name": "oms-core-emailcustomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-emailcustomer-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "address-recommender-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://address-recommender-pre-01.privaliacloud-test.com/health",
              "service_name": "address-recommender",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "address-recommender-pre-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "tracking-ingest-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://tracking-ingest-pre-01.privaliacloud-test.com/health",
              "service_name": "tracking-ingest",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "internal_services",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "tracking-ingest-pre-es",
              "subprocess_name": "internal_services",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "tracking-scdf-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://tracking-scdf-pre-01.privaliacloud-test.com/health",
              "service_name": "tracking-scdf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "internal_services",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "tracking-scdf-pre-es",
              "subprocess_name": "internal_services",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-babel-int-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-babel-int-int-01.privalia.aws/manage/health",
              "service_name": "uc-babel-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-babel-int-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-emailcustomer-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-core-emailcustomer.privaliapro.aws/manage/health",
              "service_name": "oms-core-emailcustomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-emailcustomer-pro-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-email-int-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-email-int-int-01.privalia.aws/manage/health",
              "service_name": "uc-email-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-email-int-int-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "gato-auth-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://es-gato-auth-uat-04.privaliacloud-test.com/manage/health",
              "service_name": "gato-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "gato-auth-uat-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-oauth-pre-01.privalia.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-identity-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-int-it",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-operations-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-operations.privaliapro.aws/health",
              "service_name": "sc-vpi-operations",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-operations-pro-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-int-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://self-care-int-01-mx.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-int-mx",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-sso01-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://mpsf-sso01-pre-01.privalia-test.com/manage/health",
              "service_name": "mpsf-sso01",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "mpsf-sso01-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-orders-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-orders-int-01.privaliacloud-test.com/health",
              "service_name": "sc-vpi-orders",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-orders-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-images-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-images-int-01.privalia.aws/manage/health",
              "service_name": "uc-images",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-images-int-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:03"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-checkout-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-checkout.privaliapro.aws/manage/health",
              "service_name": "frontend-mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-checkout-pro-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-checkout-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-checkout-pre-01.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-checkout-pre-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-basket-reservation-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-basket-reservation-int-01.privalia.aws/manage/health",
              "service_name": "sf-basket-reservation",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-basket-reservation-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://self-care-int-01.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-int-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-api-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-api-uat-04.privalia.aws/manage/health",
              "service_name": "msg-api",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-api-uat-es",
              "subprocess_name": "cross_sales",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-babel-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-babel-uat-04.privalia.aws/manage/health",
              "service_name": "oms-common-babel",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-babel-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-checkout-gateway-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-checkout-gateway.privaliapro.aws/manage/health",
              "service_name": "sf-checkout-gateway",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-checkout-gateway-pro-es",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:12"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-sso-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-sso-pre-01-it.privalia.aws/manage/health",
              "service_name": "sf-customer-sso",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-sso-pre-it",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:12"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-workers-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://mpsf-search-workers-uat-04-it.privalia.aws/manage/health",
              "service_name": "mpsf-search-workers",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-workers-uat-it",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-uat-04.privalia.aws/manage/health",
              "service_name": "mpsf-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-uat-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-basket-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://mpsf-basket-uat-04.privalia.aws/manage/health",
              "service_name": "mpsf-basket",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-basket-uat-it",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-pre-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://self-care-pre-01-br.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-pre-br",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-mirakl-int-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-mirakl-int-uat-04.privalia.aws/manage/health",
              "service_name": "uc-mirakl-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-mirakl-int-uat-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-oauth-it.privaliapro.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-pro-it",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-pre-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://self-care-pre-01-mx.privaliacloud-test.com/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "self-care-pre-mx",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-images-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-images-uat-04.privalia.aws/manage/health",
              "service_name": "uc-images",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-images-uat-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-oauth-uat-04.privalia.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-uat-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:16"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-identity-it.privaliapro.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-pro-it",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:16"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-catalog-ipq-consumer-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-catalog-ipq-consumer.privaliapro.aws/manage/health",
              "service_name": "sf-catalog-ipq-consumer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-catalog-ipq-consumer-pro-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-oauth-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-oauth.privaliapro.aws/manage/health",
              "service_name": "sf-customer-oauth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-oauth-pro-es",
              "subprocess_name": "login",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-core-frontend-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-oms-uat-04.privalia.aws/manage/health",
              "service_name": "oms-core-frontend",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-core-frontend-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-images-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-images-pre-01.privalia.aws/manage/health",
              "service_name": "uc-images",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-images-pre-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-catalog-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-catalog-pre-01.privalia.aws/manage/health",
              "service_name": "uc-catalog",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-catalog-pre-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:06"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-babel-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://oms-common-babel-uat-04-it.privalia.aws/manage/health",
              "service_name": "oms-common-babel",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-babel-uat-it",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "self-care-pro-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://self-care-br.privaliapro.aws/health",
              "service_name": "self-care",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "self-care-pro-br",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:16"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-checkout-gateway-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-checkout-gateway-uat-04-it.privalia.aws/manage/health",
              "service_name": "sf-checkout-gateway",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-checkout-gateway-uat-it",
              "subprocess_name": "checkout",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:17"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-uat-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucherfcsync-uat-04-mx.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-uat-mx",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:38"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-uat-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucherfcsync-uat-04-br.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-uat-br",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:32"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucher-pre-01.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:17"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "1",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://api-thumbor-uat-04.privaliacloud-test.com/manage/health",
              "service_name": "api-thumbor",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "api-thumbor-int-canada",
              "subprocess_name": "campaign_navigation",
              "status": "critical",
              "timestamp": "2018-07-31T22:54:59"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pro-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucher-br.privaliapro.aws/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pro-br",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:25"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pro-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucher-mx.privaliapro.aws/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pro-mx",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:32"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucher.privaliapro.aws/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pro-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:28"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-uc-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc.privaliapro.aws/manage/health",
              "service_name": "frontend-uc",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-uc-pro-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-uc-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-int-01.privalia.aws/manage/health",
              "service_name": "frontend-uc",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-uc-int-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-int-01.privalia.aws/manage/health",
              "service_name": "frontend-mpsf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-int-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "gato-auth-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://es-gato-auth-int-01.privaliacloud-test.com/manage/health",
              "service_name": "gato-auth",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "gato-auth-int-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "api-thumbor-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://api-thumbor-pre-01.privaliacloud-test.com/manage/health",
              "service_name": "api-thumbor",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "api-thumbor-pre-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "gato-integrator-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://es-gato-integrator-pre-01.privaliacloud-test.com/manage/health",
              "service_name": "gato-integrator",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "gato-integrator-pre-es",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-checkout-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-mpsf-checkout-int-01.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-checkout",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-checkout-int-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:54:54"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-consumer-search-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://msg-consumer-search.privaliapro.aws/manage/health",
              "service_name": "msg-consumer-search",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "msg-consumer-search-pro-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-operations-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-operations-int-01.privaliacloud-test.com/health",
              "service_name": "sc-vpi-operations",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-operations-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:54:58"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-account-int-01-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "issue process",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-int-it",
              "subprocess_name": "customer_support",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-payment-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-payment-int-01.privalia.aws/manage/health",
              "service_name": "oms-common-payment",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-payment-int-es",
              "subprocess_name": "oms",
              "status": "error",
              "timestamp": "2018-07-31T22:54:56"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-workers-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-workers-int-01.privalia.aws/manage/health",
              "service_name": "mpsf-search-workers",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-workers-int-es",
              "subprocess_name": "campaign_navigation",
              "status": "error",
              "timestamp": "2018-07-31T22:54:55"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "payments-pay-bancomer-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://payments-pay-bancomer-int-01-mx.privalia.aws/health",
              "service_name": "payments-pay-bancomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "payments-pay-bancomer-int-es",
              "subprocess_name": "payments",
              "status": "error",
              "timestamp": "2018-07-31T22:54:57"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-catalog-ipq-consumer-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-catalog-ipq-consumer-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-catalog-ipq-consumer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-catalog-ipq-consumer-int-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:03"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-checkout-gateway-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-checkout-gateway-int-01-it.privalia.aws/manage/health",
              "service_name": "sf-checkout-gateway",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-checkout-gateway-int-it",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "payments-pay-bancomer-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "https://payments-pay-bancomer-mx.privaliacloud.com/health",
              "service_name": "payments-pay-bancomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliacloud.com",
              "team_mail": "",
              "healthcheck_name": "payments-pay-bancomer-pro-es",
              "subprocess_name": "payments",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-orders-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-orders-uat-04.privaliacloud-test.com/health",
              "service_name": "sc-vpi-orders",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-orders-uat-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "mpsf-search-workers-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://mpsf-search-workers.privaliapro.aws/manage/health",
              "service_name": "mpsf-search-workers",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "mpsf-search-workers-pro-es",
              "subprocess_name": "campaign_navigation",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-operations-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-operations-pre-01.privaliacloud-test.com/health",
              "service_name": "sc-vpi-operations",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-operations-pre-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-mpsf-account-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://frontend-mpsf-account-pre-01-it.privalia.aws/manage/health",
              "service_name": "frontend-mpsf-account",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "issue process",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-mpsf-account-pre-it",
              "subprocess_name": "customer_support",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "msg-consumer-order-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://msg-consumer-order-pre-01-it.privalia.aws/manage/health",
              "service_name": "msg-consumer-order",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "msg-consumer-order-pre-it",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:01"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "payments-pay-bancomer-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://payments-pay-bancomer-uat-04-mx.privalia.aws/health",
              "service_name": "payments-pay-bancomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "payments-pay-bancomer-uat-es",
              "subprocess_name": "payments",
              "status": "error",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sc-vpi-operations-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sc-vpi-operations-uat-04.privaliacloud-test.com/health",
              "service_name": "sc-vpi-operations",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sc-vpi-operations-uat-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:08"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-int-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucherfcsync-int-01-it.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-int-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:09"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-catalog-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-catalog-int-01.privalia.aws/manage/health",
              "service_name": "uc-catalog",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-catalog-int-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-adtech-mgm-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-adtech-mgm-int-01.privaliacloud-test.com/health",
              "service_name": "sf-adtech-mgm",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "traffic_generation",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-adtech-mgm-int-es",
              "subprocess_name": "traffic_source",
              "status": "error",
              "timestamp": "2018-07-31T22:55:02"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-marketpay-sellers-int-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-marketpay-sellers-int-pre-01.privalia.aws/manage/health",
              "service_name": "uc-marketpay-sellers-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-marketpay-sellers-int-pre-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-facade-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-facade-pre-01.privalia.aws/manage/health",
              "service_name": "uc-facade",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-facade-pre-es",
              "subprocess_name": "cross_production",
              "status": "error",
              "timestamp": "2018-07-31T22:55:07"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "payments-pay-bancomer-pre-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://payments-pay-bancomer-pre-01-mx.privalia.aws/health",
              "service_name": "payments-pay-bancomer",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "payments-pay-bancomer-pre-es",
              "subprocess_name": "payments",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "frontend-uc-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://frontend-uc-uat-04.privalia.aws/manage/health",
              "service_name": "frontend-uc",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "frontend-uc-uat-es",
              "subprocess_name": "catalog",
              "status": "error",
              "timestamp": "2018-07-31T22:55:00"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucher-int-01.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-int-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "tracking-scdf-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://tracking-scdf.privaliacloud.com/health",
              "service_name": "tracking-scdf",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "internal_services",
              "domain": "privaliacloud.com",
              "team_mail": "",
              "healthcheck_name": "tracking-scdf-pro-es",
              "subprocess_name": "internal_services",
              "status": "error",
              "timestamp": "2018-07-31T22:55:06"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-payment-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://oms-common-payment-uat-04.privalia.aws/manage/health",
              "service_name": "oms-common-payment",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-payment-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:10"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-int-mx",
            "_score": 1,
            "_source": {
              "country": "MX",
              "healthcheck_url": "http://sf-customer-voucherfcsync-int-01-mx.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-int-mx",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:12"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "oms-common-payment-uat-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://oms-common-payment-uat-04-it.privalia.aws/manage/health",
              "service_name": "oms-common-payment",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "oms-common-payment-uat-it",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucherfcsync-pre-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucherfcsync-pre-01-br.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucherfcsync",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucherfcsync-pre-br",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:14"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pre-br",
            "_score": 1,
            "_source": {
              "country": "BR",
              "healthcheck_url": "http://sf-customer-voucher-pre-01-br.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pre-br",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://sf-customer-voucher-uat-04.privaliacloud-test.com/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-uat-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:37"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "address-integrator-int-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://address-integrator-int-01.privaliacloud-test.com/health",
              "service_name": "address-integrator",
              "deployed": "AWS",
              "team_name": "",
              "environment": "INT",
              "process_name": "sales",
              "domain": "privaliacloud-test.com",
              "team_mail": "",
              "healthcheck_name": "address-integrator-int-es",
              "subprocess_name": "checkout",
              "status": "error",
              "timestamp": "2018-07-31T22:55:50"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-identity-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-identity-pre-01-it.privalia.aws/manage/health",
              "service_name": "sf-customer-identity",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-identity-pre-it",
              "subprocess_name": "login",
              "status": "error",
              "timestamp": "2018-07-31T22:55:11"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "sf-customer-voucher-pro-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://sf-customer-voucher-it.privaliapro.aws/health",
              "service_name": "sf-customer-voucher",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "sf-customer-voucher-pro-it",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:30"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-email-int-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-email-int.privaliapro.aws/manage/health",
              "service_name": "uc-email-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "production",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "uc-email-int-pro-es",
              "subprocess_name": "catalog",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:10"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-facade-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-facade-uat-04.privalia.aws/manage/health",
              "service_name": "uc-facade",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "production",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-facade-uat-es",
              "subprocess_name": "cross_production",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:13"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "uc-babel-int-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://uc-babel-int-uat-04.privalia.aws/manage/health",
              "service_name": "uc-babel-int",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "uc-babel-int-uat-es",
              "subprocess_name": "oms",
              "status": "passing",
              "timestamp": "2018-07-31T22:55:15"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fc-basket-integration-pre-it",
            "_score": 1,
            "_source": {
              "country": "IT",
              "healthcheck_url": "http://fc-basket-integration-pre-01-it.privalia.aws/manage/health",
              "service_name": "fc-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRE",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "fc-basket-integration-pre-it",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:59:04"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fc-basket-integration-pro-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://fc-basket-integration.privaliapro.aws/manage/health",
              "service_name": "fc-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "PRO",
              "process_name": "sales",
              "domain": "privaliapro.aws",
              "team_mail": "",
              "healthcheck_name": "fc-basket-integration-pro-es",
              "subprocess_name": "basket",
              "status": "error",
              "timestamp": "2018-07-31T22:59:05"
            }
          },
          {
            "_index": "current-status",
            "_type": "health-check",
            "_id": "fc-basket-integration-uat-es",
            "_score": 1,
            "_source": {
              "country": "ES",
              "healthcheck_url": "http://fc-basket-integration-uat-04.privalia.aws/manage/health",
              "service_name": "fc-basket-integration",
              "deployed": "AWS",
              "team_name": "",
              "environment": "UAT",
              "process_name": "sales",
              "domain": "privalia.aws",
              "team_mail": "",
              "healthcheck_name": "fc-basket-integration-uat-es",
              "subprocess_name": "basket",
              "status": "passing",
              "timestamp": "2018-07-31T22:59:06"
            }
          }
        ]
      },
      "aggregations": {
        "environment.keyword": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "INT",
              "doc_count": 72
            },
            {
              "key": "PRE",
              "doc_count": 63
            },
            {
              "key": "UAT",
              "doc_count": 61
            },
            {
              "key": "PRO",
              "doc_count": 56
            }
          ]
        },
        "subprocess.keyword": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "basket",
              "doc_count": 62
            },
            {
              "key": "oms",
              "doc_count": 38
            },
            {
              "key": "login",
              "doc_count": 37
            },
            {
              "key": "checkout",
              "doc_count": 33
            },
            {
              "key": "campaign_navigation",
              "doc_count": 27
            },
            {
              "key": "catalog",
              "doc_count": 23
            },
            {
              "key": "customer_support",
              "doc_count": 8
            },
            {
              "key": "payments",
              "doc_count": 6
            },
            {
              "key": "cross_production",
              "doc_count": 4
            },
            {
              "key": "cross_sales",
              "doc_count": 4
            },
            {
              "key": "traffic_source",
              "doc_count": 4
            },
            {
              "key": "campaign_production",
              "doc_count": 3
            },
            {
              "key": "internal_services",
              "doc_count": 3
            }
          ]
        },
        "country.keyword": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "ES",
              "doc_count": 175
            },
            {
              "key": "IT",
              "doc_count": 53
            },
            {
              "key": "BR",
              "doc_count": 12
            },
            {
              "key": "MX",
              "doc_count": 12
            }
          ]
        },
        "status.keyword": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "error",
              "doc_count": 149
            },
            {
              "key": "passing",
              "doc_count": 102
            },
            {
              "key": "critical",
              "doc_count": 1
            }
          ]
        },
        "service.keyword": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "sf-customer-voucher",
              "doc_count": 16
            },
            {
              "key": "sf-customer-voucherfcsync",
              "doc_count": 16
            },
            {
              "key": "self-care",
              "doc_count": 12
            },
            {
              "key": "frontend-mpsf",
              "doc_count": 8
            },
            {
              "key": "frontend-mpsf-account",
              "doc_count": 8
            },
            {
              "key": "sf-customer-identity",
              "doc_count": 8
            },
            {
              "key": "sf-customer-oauth",
              "doc_count": 7
            },
            {
              "key": "sf-customer-sso",
              "doc_count": 7
            },
            {
              "key": "fc-basket-integration",
              "doc_count": 6
            },
            {
              "key": "frontend-mpsf-checkout",
              "doc_count": 6
            },
            {
              "key": "mpsf-search",
              "doc_count": 6
            },
            {
              "key": "mpsf-search-workers",
              "doc_count": 6
            },
            {
              "key": "oms-common-payment",
              "doc_count": 6
            },
            {
              "key": "sf-catalog-ipq-consumer",
              "doc_count": 6
            },
            {
              "key": "sf-checkout-gateway",
              "doc_count": 6
            },
            {
              "key": "uc-mirakl-oms-int",
              "doc_count": 6
            },
            {
              "key": "api-thumbor",
              "doc_count": 5
            },
            {
              "key": "mpsf-basket",
              "doc_count": 5
            },
            {
              "key": "oms-common-babel",
              "doc_count": 5
            },
            {
              "key": "uc-babel-int",
              "doc_count": 5
            },
            {
              "key": "frontend-uc",
              "doc_count": 4
            },
            {
              "key": "gato-auth",
              "doc_count": 4
            },
            {
              "key": "mpsf-sso01",
              "doc_count": 4
            },
            {
              "key": "msg-api",
              "doc_count": 4
            },
            {
              "key": "msg-consumer-order",
              "doc_count": 4
            },
            {
              "key": "oms-common-filestorage",
              "doc_count": 4
            },
            {
              "key": "oms-core-emailcustomer",
              "doc_count": 4
            },
            {
              "key": "oms-core-frontend",
              "doc_count": 4
            },
            {
              "key": "payments-pay-bancomer",
              "doc_count": 4
            },
            {
              "key": "sc-vpi-operations",
              "doc_count": 4
            },
            {
              "key": "sf-adtech-mgm",
              "doc_count": 4
            },
            {
              "key": "uc-catalog",
              "doc_count": 4
            },
            {
              "key": "uc-email-int",
              "doc_count": 4
            },
            {
              "key": "uc-facade",
              "doc_count": 4
            },
            {
              "key": "uc-images",
              "doc_count": 4
            },
            {
              "key": "uc-mirakl-int",
              "doc_count": 4
            },
            {
              "key": "address-recommender",
              "doc_count": 3
            },
            {
              "key": "mpsf-auth",
              "doc_count": 3
            },
            {
              "key": "sc-vpi-orders",
              "doc_count": 3
            },
            {
              "key": "uc-marketpay-sellers-int",
              "doc_count": 3
            },
            {
              "key": "crml-oms-ordstatnotif",
              "doc_count": 2
            },
            {
              "key": "excelreader",
              "doc_count": 2
            },
            {
              "key": "gato-integrator",
              "doc_count": 2
            },
            {
              "key": "mpsf-identity",
              "doc_count": 2
            },
            {
              "key": "msg-consumer-search",
              "doc_count": 2
            },
            {
              "key": "oms-mkp-orderflow",
              "doc_count": 2
            },
            {
              "key": "privalia-api-payments",
              "doc_count": 2
            },
            {
              "key": "sf-basket-core",
              "doc_count": 2
            },
            {
              "key": "sf-basket-reservation",
              "doc_count": 2
            },
            {
              "key": "tracking-scdf",
              "doc_count": 2
            },
            {
              "key": "address-integrator",
              "doc_count": 1
            },
            {
              "key": "fileuploader",
              "doc_count": 1
            },
            {
              "key": "mpsf-checkout",
              "doc_count": 1
            },
            {
              "key": "sc-vpi-admin",
              "doc_count": 1
            },
            {
              "key": "sf-basket-integration",
              "doc_count": 1
            },
            {
              "key": "tracking-ingest",
              "doc_count": 1
            }
          ]
        },
        "process.keyword": {
          "doc_count_error_upper_bound": 0,
          "sum_other_doc_count": 0,
          "buckets": [
            {
              "key": "sales",
              "doc_count": 207
            },
            {
              "key": "production",
              "doc_count": 30
            },
            {
              "key": "issue process",
              "doc_count": 8
            },
            {
              "key": "traffic_generation",
              "doc_count": 4
            },
            {
              "key": "internal_services",
              "doc_count": 3
            }
          ]
        }
      }
    },
  }
  render() {
    const newData = [{...this.state.data}]

    //hits

    const healthcheck_name = newData.map((item)=>(
      item.hits.hits.map((health_check,index)=>(
        <div key={index}>
         <li><a href={health_check._source.healthcheck_url}>{health_check._source.healthcheck_name}</a></li>
         </div>
         ))      
     ))
     const environment = newData.map((item)=>(
       item.hits.hits.map((environment,index)=>(
         <div key={index}>
          <li>{environment._source.environment}</li>
          </div>
          ))      
      ))
    const countries = newData.map((item)=>(
      item.hits.hits.map((countries,index)=>(
        <div key={index}>
         <li>{countries._source.country}</li>
         </div>
         ))      
     ))

     const processName = newData.map((item)=>(
      item.hits.hits.map((process,index)=>(
        <div key={index}>
         <li>{process._source.process_name}</li>
         </div>
         ))      
     ))
     const subProcess = newData.map((item)=>(
      item.hits.hits.map((subprocess,index)=>(
        <div key={index}>
         <li>{subprocess._source.subprocess_name}</li>
         </div>
         ))      
     ))

     const serviceName = newData.map((item)=>(
      item.hits.hits.map((servicename,index)=>(
        <div key={index}>
         <li>{servicename._source.service_name}</li>
         </div>
         ))      
     ))
     const status= newData.map((item)=>(
      item.hits.hits.map((status,index)=>(
        <li key={index}>{status._source.status}</li>
        // status._source.status === "passing" ? <div className="btn btn-success" style={{borderRadius:"50%",background:'green',height:'10px',width:'10px'}}></div> : <div className="btn btn-danger" style={{borderRadius:"50%",background:'red',height:'10px',width:'10px'}}></div>
         ))      
     ))
     const date= newData.map((item)=>(
      item.hits.hits.map((date,index)=>(
        <li key={index}>{date._source.timestamp}</li>       
      
         ))      
     ))    
     
    return (
       <Aux>
           <div className="col-xs-3">
                  Healthcheck_name
                  <ul>
                    {healthcheck_name}
                  </ul>
                </div>
                <div className="col-xs-2">
                  Environment
                  <ul>
                    {environment}
                  </ul>
                </div>
                <div className="col-xs-1">
                  Country
                  <ul>
                    {countries}
                  </ul>
                  </div>
                  <div className="col-xs-1">
                    Process 
                    <ul>
                      {processName}
                    </ul>
                  </div>
                  <div className="col-xs-1">
                    Sub Process 
                    <ul>
                      {subProcess}
                    </ul>
                  </div>
                  <div className="col-xs-1">
                    Service Name 
                    <ul>
                      {serviceName}
                    </ul>
                  </div>  
                  <div className="col-xs-1">
                    Status                   
                      {status}                   
                  </div>      
                  <div className="col-xs-1">
                    Last Update                   
                      {date}                   
                  </div>                   
       </Aux>  )
  }
}

export default Hits
