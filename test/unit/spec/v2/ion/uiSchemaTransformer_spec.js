import { _ } from 'okta';
import responseTransformer from 'v2/ion/responseTransformer';
import uiSchemaTransformer from 'v2/ion/uiSchemaTransformer';
import XHRFactorRequiredEmail  from '../../../../../playground/mocks/idp/idx/data/factor-verification-email.json';
import XHREnrollProfile from '../../../../../playground/mocks/idp/idx/data/enroll-profile.json';
import XHRFactorEnrollOptions from '../../../../../playground/mocks/idp/idx/data/factor-enroll-options.json';

describe('v2/ion/uiSchemaTransformer', function () {
  it('converts factor require email', () => {
    const rawFactorRequiredEmailResponse = XHRFactorRequiredEmail;
    const transformedResponse  = {
      'factors':{
        'value':[
          {
            'factorType':'password',
            'factorProfileId':'00u2j17ObFUsbGfLg0g4'
          },
          {
            'factorType':'email',
            'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
          }
        ]
      },
      'factor':{
        'factorType':'email',
        'factorProfileId':'fprt52ie7vo5m7mSO0g3',
        'factorId':'emfv6q1VxHR52T9az0g3',
        'profile':{
          'email':'inca@clouditude.net'
        },
        'resend':{
          'rel':[
            'create-form'
          ],
          'name':'resend',
          'href':'http://localhost:3000/idp/idx/challenge/resend',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'stateHandle',
              'required':true,
              'value':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible':false,
              'mutable':false,
              'method':'post'
            }
          ]
        },
        'poll':{
          'rel':[
            'create-form'
          ],
          'name':'poll',
          'href':'http://localhost:3000/idp/idx/challenge/poll',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'refresh':4000,
          'value':[
            {
              'name':'stateHandle',
              'required':true,
              'value':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible':false,
              'mutable':false,
              'method':'post'
            }
          ]
        }
      },
      'user':{
        'id':'00usip1dptbE7NiLa0g3'
      },
      '__rawResponse': rawFactorRequiredEmailResponse,
      'proceed': jasmine.any(Function),
      'neededToProceed':[
        {
          'rel':[
            'create-form'
          ],
          'name':'challenge-factor',
          'href':'http://localhost:3000/idp/idx/challenge/answer',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'credentials',
              'form':{
                'value':[
                  {
                    'name':'passcode',
                    'label':'One-time verification code',
                    'secret':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            },
            {
              'name':'stateHandle',
              'required':true,
              'value':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible':false,
              'mutable':false,
              'method':'post'
            }
          ]
        },
        {
          'rel':[
            'create-form'
          ],
          'name':'select-factor',
          'href':'http://localhost:3000/idp/idx/challenge',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'factorId',
              'type':'set',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options'
                }
              ],
              'method':'post'
            },
            {
              'name':'stateHandle',
              'required':true,
              'value':'02h50hMLvmuZUuoKCShHKZytlDeFRnn8KG-rcd8Ay5',
              'visible':false,
              'mutable':false,
              'method':'post'
            }
          ]
        }
      ],
      'actions':{

      },
      'context':{
        'stateHandle':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
        'version':'1.0.0',
        'expiresAt':'2019-09-30T22:19:25.000Z',
        'step':'AUTHENTICATE',
        'intent':'LOGIN',
        'factors':{
          'type':'array',
          'value':[
            {
              'factorType':'password',
              'factorProfileId':'00u2j17ObFUsbGfLg0g4'
            },
            {
              'factorType':'email',
              'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
            }
          ]
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'factorProfileId':'fprt52ie7vo5m7mSO0g3',
            'factorId':'emfv6q1VxHR52T9az0g3',
            'profile':{
              'email':'inca@clouditude.net'
            }
          }
        },
        'user':{
          'type':'object',
          'value':{
            'id':'00usip1dptbE7NiLa0g3'
          }
        }
      },
      'rawIdxState': rawFactorRequiredEmailResponse
    };
    const result = _.compose(uiSchemaTransformer, responseTransformer)(transformedResponse);
    expect(result).toEqual({
      '__rawResponse':rawFactorRequiredEmailResponse,
      'factors':{
        'value':[
          {
            'factorType':'password',
            'factorProfileId':'00u2j17ObFUsbGfLg0g4'
          },
          {
            'factorType':'email',
            'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
          }
        ]
      },
      'factor':{
        'factorType':'email',
        'factorProfileId':'fprt52ie7vo5m7mSO0g3',
        'factorId':'emfv6q1VxHR52T9az0g3',
        'profile':{
          'email':'inca@clouditude.net'
        },
        'resend':{
          'rel':[
            'create-form'
          ],
          'name':'resend',
          'href':'http://localhost:3000/idp/idx/challenge/resend',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'stateHandle',
              'required':true,
              'value':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible':false,
              'mutable':false,
              'method':'post'
            }
          ]
        },
        'poll':{
          'rel':[
            'create-form'
          ],
          'name':'poll',
          'href':'http://localhost:3000/idp/idx/challenge/poll',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'refresh':4000,
          'value':[
            {
              'name':'stateHandle',
              'required':true,
              'value':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
              'visible':false,
              'mutable':false,
              'method':'post'
            }
          ]
        }
      },
      'user':{
        'id':'00usip1dptbE7NiLa0g3'
      },
      'proceed': jasmine.any(Function),
      'neededToProceed':[
        {
          'rel':[
            'create-form'
          ],
          'name':'challenge-factor',
          'href':'http://localhost:3000/idp/idx/challenge/answer',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'credentials',
              'form':{
                'value':[
                  {
                    'name':'passcode',
                    'label':'One-time verification code',
                    'secret':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            },
          ]
        },
        {
          'rel':[
            'create-form'
          ],
          'name':'select-factor',
          'href':'http://localhost:3000/idp/idx/challenge',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'factorId',
              'type':'set',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options',
                  'factorType': 'password'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options',
                  'factorType': 'email'
                }
              ],
              'method':'post'
            },
          ]
        }
      ],
      'actions':{

      },
      'context':{
        'stateHandle':'02WTSGqlHUPjoYvorz8T48txBIPe3VUisrQOY4g5N8',
        'version':'1.0.0',
        'expiresAt':'2019-09-30T22:19:25.000Z',
        'step':'AUTHENTICATE',
        'intent':'LOGIN',
        'factors':{
          'type':'array',
          'value':[
            {
              'factorType':'password',
              'factorProfileId':'00u2j17ObFUsbGfLg0g4'
            },
            {
              'factorType':'email',
              'factorProfileId':'emf2j1ccd6CF4IWFY0g3'
            }
          ]
        },
        'factor':{
          'type':'object',
          'value':{
            'factorType':'email',
            'factorProfileId':'fprt52ie7vo5m7mSO0g3',
            'factorId':'emfv6q1VxHR52T9az0g3',
            'profile':{
              'email':'inca@clouditude.net'
            }
          }
        },
        'user':{
          'type':'object',
          'value':{
            'id':'00usip1dptbE7NiLa0g3'
          }
        }
      },
      'rawIdxState':rawFactorRequiredEmailResponse,
      'remediations':[
        {
          'value':[
            {
              'name':'credentials',
              'form':{
                'value':[
                  {
                    'name':'passcode',
                    'label':'One-time verification code',
                    'secret':true,
                    'method':'post'
                  },
                ],
                'method':'post'
              },
              'method':'post'
            }
          ],
          'href': 'http://localhost:3000/idp/idx/challenge/answer',
          'name':'challenge-factor',
          'method':'post',
          'uiSchema':[
            {
              'name':'credentials.passcode',
              'label':'One-time verification code',
              'secret':true,
              'method':'post',
              'type':'password',
              'params':{
                'showPasswordToggle':true
              }
            }
          ]
        },
        {
          'value':[
            {
              'name':'factorId',
              'type':'set',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options',
                  'factorType':'password'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options',
                  'factorType':'email'
                }
              ],
              'method':'post'
            }
          ],
          'href': 'http://localhost:3000/idp/idx/challenge',
          'name':'select-factor',
          'method':'post',
          'uiSchema':[
            {
              'name':'factorId',
              'type':'factorType',
              'options':[
                {
                  'label':'Password',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options',
                  'factorType':'password'
                },
                {
                  'label':'Email',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options',
                  'factorType':'email'
                }
              ],
              'method':'post'
            }
          ]
        }
      ]
    });
  });

  it('converts factor enroll options', () => {
    const rawFactorEnrollResponse = XHRFactorEnrollOptions;
    const transformedResponse  = {
      'factors':{
        'value':[
          {
            'factorType':'password',
            'factorId':'00u2j17ObFUsbGfLg0g4'
          },
          {
            'factorType':'email',
            'factorId':'emf2j1ccd6CF4IWFY0g3'
          }
        ]
      },
      'user':{
        'id':'I9bvFiq01cRFgbn',
        'passwordChanged':'2019-05-03T19:00:00.000Z',
        'profile':{
          'login':'foo@example.com',
          'firstName':'Foo',
          'lastName':'Bar',
          'locale':'en-us',
          'timeZone':'UTC'
        }
      },
      '__rawResponse':rawFactorEnrollResponse,
      'neededToProceed':[
        {
          'rel':[
            'create-form'
          ],
          'name':'select-factor',
          'href':'http://localhost:3000/idp/idx/challenge',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'factorProfileId',
              'type':'set',
              'options':[
                {
                  'label':'Password Label',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options'
                },
                {
                  'label':'Email Label',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options'
                }
              ],
              'method':'post'
            }
          ]
        }
      ],
      'actions':{

      },
      'context':{
        'version':'1.0.0',
        'stateHandle':'01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82',
        'expiresAt':'2018-09-17T23:08:56.000Z',
        'step':'ENROLL',
        'intent':'login',
        'factors':{
          'type':'array',
          'value':[
            {
              'factorType':'password',
              'factorId':'00u2j17ObFUsbGfLg0g4'
            },
            {
              'factorType':'email',
              'factorId':'emf2j1ccd6CF4IWFY0g3'
            }
          ]
        },
        'user':{
          'type':'object',
          'value':{
            'id':'I9bvFiq01cRFgbn',
            'passwordChanged':'2019-05-03T19:00:00.000Z',
            'profile':{
              'login':'foo@example.com',
              'firstName':'Foo',
              'lastName':'Bar',
              'locale':'en-us',
              'timeZone':'UTC'
            }
          }
        }
      },
      'rawIdxState':rawFactorEnrollResponse
    };
    const result = _.compose(uiSchemaTransformer, responseTransformer)(transformedResponse);
    expect(result).toEqual({
      'factors':{
        'value':[
          {
            'factorType':'password',
            'factorId':'00u2j17ObFUsbGfLg0g4'
          },
          {
            'factorType':'email',
            'factorId':'emf2j1ccd6CF4IWFY0g3'
          }
        ]
      },
      'user':{
        'id':'I9bvFiq01cRFgbn',
        'passwordChanged':'2019-05-03T19:00:00.000Z',
        'profile':{
          'login':'foo@example.com',
          'firstName':'Foo',
          'lastName':'Bar',
          'locale':'en-us',
          'timeZone':'UTC'
        }
      },
      '__rawResponse':rawFactorEnrollResponse,
      'neededToProceed':
        [
          {
            'rel':[
              'create-form'
            ],
            'name':'select-factor',
            'href':'http://localhost:3000/idp/idx/challenge',
            'method':'post',
            'accepts':'application/vnd.okta.v1+json',
            'value':[
              {
                'name':'factorProfileId',
                'type':'set',
                'options':[
                  {
                    'label':'Password Label',
                    'value':'00u2j17ObFUsbGfLg0g4',
                    'method':'options',
                    'factorType': 'password'
                  },
                  {
                    'label':'Email Label',
                    'value':'emf2j1ccd6CF4IWFY0g3',
                    'method':'options',
                    'factorType': 'email'
                  }
                ],
                'method':'post'
              }
            ]
          }
        ],
      'actions':{

      },
      'context':{
        'version':'1.0.0',
        'stateHandle':'01OCl7uyAUC4CUqHsObI9bvFiq01cRFgbnpJQ1bz82',
        'expiresAt':'2018-09-17T23:08:56.000Z',
        'step':'ENROLL',
        'intent':'login',
        'factors':{
          'type':'array',
          'value':[
            {
              'factorType':'password',
              'factorId':'00u2j17ObFUsbGfLg0g4'
            },
            {
              'factorType':'email',
              'factorId':'emf2j1ccd6CF4IWFY0g3'
            }
          ]
        },
        'user':{
          'type':'object',
          'value':{
            'id':'I9bvFiq01cRFgbn',
            'passwordChanged':'2019-05-03T19:00:00.000Z',
            'profile':{
              'login':'foo@example.com',
              'firstName':'Foo',
              'lastName':'Bar',
              'locale':'en-us',
              'timeZone':'UTC'
            }
          }
        }
      },
      'rawIdxState':rawFactorEnrollResponse,
      'remediations':[
        {
          'value':[
            {
              'name':'factorProfileId',
              'type':'set',
              'options':[
                {
                  'label':'Password Label',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options',
                  'factorType':'password'
                },
                {
                  'label':'Email Label',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options',
                  'factorType':'email'
                }
              ],
              'method':'post'
            }
          ],
          'href': 'http://localhost:3000/idp/idx/challenge',
          'name':'select-factor',
          'method':'post',
          'uiSchema':[
            {
              'name':'factorProfileId',
              'type':'factorType',
              'options':[
                {
                  'label':'Password Label',
                  'value':'00u2j17ObFUsbGfLg0g4',
                  'method':'options',
                  'factorType':'password'
                },
                {
                  'label':'Email Label',
                  'value':'emf2j1ccd6CF4IWFY0g3',
                  'method':'options',
                  'factorType':'email'
                }
              ],
              'method':'post'
            }
          ]
        }
      ]
    });
  });

  it('converts response with fields as form for ENROLL_PROFILE', () => {
    const rawUserEnrollResponse = XHREnrollProfile;
    const transformedResponse  = {
      '__rawResponse':rawUserEnrollResponse,
      'neededToProceed':[
        {
          'rel':[
            'create-form'
          ],
          'name':'enroll-profile',
          'href':'http://localhost:3000/idp/idx/enroll',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'userProfile',
              'form':{
                'value':[
                  {
                    'name':'lastName',
                    'label':'Last name',
                    'required':true,
                    'method':'post'
                  },
                  {
                    'name':'firstName',
                    'label':'First name',
                    'required':true,
                    'method':'post'
                  },
                  {
                    'name':'email',
                    'label':'Primary email',
                    'required':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            }
          ]
        },
        {
          'rel':[
            'create-form'
          ],
          'name':'select-identify',
          'href':'http://localhost:3000/idp/idx',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'identifier',
              'label':'identifier',
              'method':'post'
            }
          ]
        }
      ],
      'actions':{

      },
      'context':{
        'stateHandle':'01r2p5S9qaAjESMFuPzt7r3ZMcZZQ_vvS0Tzg56ajB',
        'version':'1.0.0',
        'expiresAt':'2019-07-24T21:25:33.000Z',
        'step':'PROFILE_REQUIRED',
        'intent':'LOGIN'
      },
      'rawIdxState':rawUserEnrollResponse
    };
    const result = _.compose(uiSchemaTransformer, responseTransformer)(transformedResponse);
    expect(result).toEqual({
      '__rawResponse':rawUserEnrollResponse,
      'neededToProceed':[
        {
          'rel':[
            'create-form'
          ],
          'name':'enroll-profile',
          'href':'http://localhost:3000/idp/idx/enroll',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'userProfile',
              'form':{
                'value':[
                  {
                    'name':'lastName',
                    'label':'Last name',
                    'required':true,
                    'method':'post'
                  },
                  {
                    'name':'firstName',
                    'label':'First name',
                    'required':true,
                    'method':'post'
                  },
                  {
                    'name':'email',
                    'label':'Primary email',
                    'required':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            }
          ]
        },
        {
          'rel':[
            'create-form'
          ],
          'name':'select-identify',
          'href':'http://localhost:3000/idp/idx',
          'method':'post',
          'accepts':'application/vnd.okta.v1+json',
          'value':[
            {
              'name':'identifier',
              'label':'identifier',
              'method':'post'
            }
          ]
        }
      ],
      'actions':{

      },
      'context':{
        'stateHandle':'01r2p5S9qaAjESMFuPzt7r3ZMcZZQ_vvS0Tzg56ajB',
        'version':'1.0.0',
        'expiresAt':'2019-07-24T21:25:33.000Z',
        'step':'PROFILE_REQUIRED',
        'intent':'LOGIN'
      },
      'rawIdxState':rawUserEnrollResponse,
      'remediations':[
        {
          'value':[
            {
              'name':'userProfile',
              'form':{
                'value':[
                  {
                    'name':'lastName',
                    'label':'Last name',
                    'required':true,
                    'method':'post'
                  },
                  {
                    'name':'firstName',
                    'label':'First name',
                    'required':true,
                    'method':'post'
                  },
                  {
                    'name':'email',
                    'label':'Primary email',
                    'required':true,
                    'method':'post'
                  }
                ],
                'method':'post'
              },
              'method':'post'
            }
          ],
          'href': 'http://localhost:3000/idp/idx/enroll',
          'name':'enroll-profile',
          'method':'post',
          'uiSchema':[
            {
              'name':'userProfile.lastName',
              'label':'Last name',
              'required':true,
              'method':'post',
              'type':'text'
            },
            {
              'name':'userProfile.firstName',
              'label':'First name',
              'required':true,
              'method':'post',
              'type':'text'
            },
            {
              'name':'userProfile.email',
              'label':'Primary email',
              'required':true,
              'method':'post',
              'type':'text'
            }
          ]
        },
        {
          'value':[
            {
              'name':'identifier',
              'label':'identifier',
              'method':'post'
            }
          ],
          'href': 'http://localhost:3000/idp/idx',
          'name':'select-identify',
          'method':'post',
          'uiSchema':[
            {
              'name':'identifier',
              'label':'identifier',
              'method':'post',
              'type':'text'
            }
          ]
        }
      ]
    });
  });
});
