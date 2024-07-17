import { Report } from "../report.model";

export const data: Report = JSON.parse(`
    {
        "data": {
            "item": {
                "patient": {
                    "name": {
                        "first": "Pal",
                        "last": "Hawkins"
                    },
                    "birthdate": "1985-10-01",
                    "age": 37
                },
                "createdDate": "2023-07-18T08:16:32.557-07:00",
                "period": {
                    "days": 7,
                    "startDate": "2022-05-29T00:01:13.000-04:00",
                    "endDate": "2022-06-04T19:56:16.001-04:00"
                },
                "dataCharacteristics": {
                    "isRecent": false,
                    "recencyCheckPeriodDays": 7,
                    "sufficiencyForSummaryCheckPeriodDays": 7,
                    "isSufficientForSummary": true
                },
                "device": {
                    "pdmDeviceClass": "omnipod5",
                    "primaryGlucoseMeasuringDeviceCategory": "continuousGlucoseMonitor",
                    "isPdmDeviceBolusCalculatorEnabled": true
                },
                "summary": {
                    "glucoseTimeInRange": {
                        "actual": {
                            "veryLow": {
                                "time": {
                                    "hours": 0,
                                    "minutes": 56
                                },
                                "percent": 3.9
                            },
                            "low": {
                                "time": {
                                    "hours": 0,
                                    "minutes": 51
                                },
                                "percent": 3.5
                            },
                            "target": {
                                "time": {
                                    "hours": 19,
                                    "minutes": 34
                                },
                                "percent": 81.5
                            },
                            "high": {
                                "time": {
                                    "hours": 0,
                                    "minutes": 49
                                },
                                "percent": 3.4
                            },
                            "veryHigh": {
                                "time": {
                                    "hours": 1,
                                    "minutes": 50
                                },
                                "percent": 7.7
                            },
                            "belowTarget": {
                                "percent": 7.4,
                                "time": {
                                    "hours": 1,
                                    "minutes": 47
                                }
                            },
                            "aboveTarget": {
                                "percent": 11.1,
                                "time": {
                                    "hours": 2,
                                    "minutes": 39
                                }
                            }
                        },
                        "target": {
                            "veryLow": {
                                "percent": 1,
                                "comparisonOperator": "lessThan"
                            },
                            "belowTarget": {
                                "percent": 4,
                                "comparisonOperator": "lessThan"
                            },
                            "target": {
                                "percent": 70,
                                "comparisonOperator": "greaterThan"
                            },
                            "aboveTarget": {
                                "percent": 25,
                                "comparisonOperator": "lessThan"
                            },
                            "veryHigh": {
                                "percent": 5,
                                "comparisonOperator": "lessThan"
                            }
                        }
                    },
                    "glucoseStatistics": {
                        "actual": {
                            "average": 138,
                            "standardDeviation": 67.2,
                            "variability": 48.9,
                            "glucoseManagementIndicator": null
                        },
                        "target": {
                            "average": {
                                "value": 154,
                                "comparisonOperator": "lessThan"
                            },
                            "variability": {
                                "value": 36,
                                "comparisonOperator": "lessThanOrEqual"
                            },
                            "glucoseManagementIndicator": {
                                "value": 7,
                                "comparisonOperator": "lessThan"
                            }
                        }
                    },
                    "continuousGlucoseMonitor": {
                        "active": {
                            "percent": 100
                        }
                    },
                    "insulinPump": {
                        "active": {
                            "percent": 97
                        },
                        "podStatistics": {
                            "period": {
                                "average": {
                                    "time": {
                                        "hours": 18,
                                        "days": null
                                    }
                                }
                            }
                        }
                    },
                    "glucoseStatisticalDay": {
                        "data": [
                            {
                                "startTime": "00:00",
                                "endTime": "01:00",
                                "pointTime": "00:00",
                                "statistics": {
                                    "fifthPercentile": 73,
                                    "twentyFifthPercentile": 98,
                                    "median": 122,
                                    "seventyFifthPercentile": 147,
                                    "ninetyFifthPercentile": 173
                                }
                            },
                            {
                                "startTime": "01:00",
                                "endTime": "02:00",
                                "pointTime": "01:00",
                                "statistics": {
                                    "fifthPercentile": 77,
                                    "twentyFifthPercentile": 105,
                                    "median": 126,
                                    "seventyFifthPercentile": 151,
                                    "ninetyFifthPercentile": 173
                                }
                            },
                            {
                                "startTime": "02:00",
                                "endTime": "03:00",
                                "pointTime": "02:00",
                                "statistics": {
                                    "fifthPercentile": 74,
                                    "twentyFifthPercentile": 97,
                                    "median": 124,
                                    "seventyFifthPercentile": 151,
                                    "ninetyFifthPercentile": 171
                                }
                            },
                            {
                                "startTime": "03:00",
                                "endTime": "04:00",
                                "pointTime": "03:00",
                                "statistics": {
                                    "fifthPercentile": 74,
                                    "twentyFifthPercentile": 95,
                                    "median": 128,
                                    "seventyFifthPercentile": 153,
                                    "ninetyFifthPercentile": 173
                                }
                            },
                            {
                                "startTime": "04:00",
                                "endTime": "05:00",
                                "pointTime": "04:00",
                                "statistics": {
                                    "fifthPercentile": 79,
                                    "twentyFifthPercentile": 104,
                                    "median": 132,
                                    "seventyFifthPercentile": 154,
                                    "ninetyFifthPercentile": 173
                                }
                            },
                            {
                                "startTime": "05:00",
                                "endTime": "06:00",
                                "pointTime": "05:00",
                                "statistics": {
                                    "fifthPercentile": 71,
                                    "twentyFifthPercentile": 93,
                                    "median": 123,
                                    "seventyFifthPercentile": 147,
                                    "ninetyFifthPercentile": 172
                                }
                            },
                            {
                                "startTime": "06:00",
                                "endTime": "07:00",
                                "pointTime": "06:00",
                                "statistics": {
                                    "fifthPercentile": 53,
                                    "twentyFifthPercentile": 70,
                                    "median": 109,
                                    "seventyFifthPercentile": 141,
                                    "ninetyFifthPercentile": 167
                                }
                            },
                            {
                                "startTime": "07:00",
                                "endTime": "08:00",
                                "pointTime": "07:00",
                                "statistics": {
                                    "fifthPercentile": 44,
                                    "twentyFifthPercentile": 63,
                                    "median": 102,
                                    "seventyFifthPercentile": 136,
                                    "ninetyFifthPercentile": 168
                                }
                            },
                            {
                                "startTime": "08:00",
                                "endTime": "09:00",
                                "pointTime": "08:00",
                                "statistics": {
                                    "fifthPercentile": 43,
                                    "twentyFifthPercentile": 65,
                                    "median": 103,
                                    "seventyFifthPercentile": 135,
                                    "ninetyFifthPercentile": 171
                                }
                            },
                            {
                                "startTime": "09:00",
                                "endTime": "10:00",
                                "pointTime": "09:00",
                                "statistics": {
                                    "fifthPercentile": 44,
                                    "twentyFifthPercentile": 66,
                                    "median": 104,
                                    "seventyFifthPercentile": 135,
                                    "ninetyFifthPercentile": 167
                                }
                            },
                            {
                                "startTime": "10:00",
                                "endTime": "11:00",
                                "pointTime": "10:00",
                                "statistics": {
                                    "fifthPercentile": 43,
                                    "twentyFifthPercentile": 66,
                                    "median": 109,
                                    "seventyFifthPercentile": 144,
                                    "ninetyFifthPercentile": 170
                                }
                            },
                            {
                                "startTime": "11:00",
                                "endTime": "12:00",
                                "pointTime": "11:00",
                                "statistics": {
                                    "fifthPercentile": 51,
                                    "twentyFifthPercentile": 74,
                                    "median": 111,
                                    "seventyFifthPercentile": 160,
                                    "ninetyFifthPercentile": 207
                                }
                            },
                            {
                                "startTime": "12:00",
                                "endTime": "13:00",
                                "pointTime": "12:00",
                                "statistics": {
                                    "fifthPercentile": 73,
                                    "twentyFifthPercentile": 111,
                                    "median": 156,
                                    "seventyFifthPercentile": 239,
                                    "ninetyFifthPercentile": 341
                                }
                            },
                            {
                                "startTime": "13:00",
                                "endTime": "14:00",
                                "pointTime": "13:00",
                                "statistics": {
                                    "fifthPercentile": 80,
                                    "twentyFifthPercentile": 115,
                                    "median": 164,
                                    "seventyFifthPercentile": 273,
                                    "ninetyFifthPercentile": 369
                                }
                            },
                            {
                                "startTime": "14:00",
                                "endTime": "15:00",
                                "pointTime": "14:00",
                                "statistics": {
                                    "fifthPercentile": 79,
                                    "twentyFifthPercentile": 115,
                                    "median": 163,
                                    "seventyFifthPercentile": 263,
                                    "ninetyFifthPercentile": 362
                                }
                            },
                            {
                                "startTime": "15:00",
                                "endTime": "16:00",
                                "pointTime": "15:00",
                                "statistics": {
                                    "fifthPercentile": 79,
                                    "twentyFifthPercentile": 122,
                                    "median": 165,
                                    "seventyFifthPercentile": 271,
                                    "ninetyFifthPercentile": 366
                                }
                            },
                            {
                                "startTime": "16:00",
                                "endTime": "17:00",
                                "pointTime": "16:00",
                                "statistics": {
                                    "fifthPercentile": 79,
                                    "twentyFifthPercentile": 127,
                                    "median": 171,
                                    "seventyFifthPercentile": 276,
                                    "ninetyFifthPercentile": 362
                                }
                            },
                            {
                                "startTime": "17:00",
                                "endTime": "18:00",
                                "pointTime": "17:00",
                                "statistics": {
                                    "fifthPercentile": 80,
                                    "twentyFifthPercentile": 118,
                                    "median": 164,
                                    "seventyFifthPercentile": 262,
                                    "ninetyFifthPercentile": 333
                                }
                            },
                            {
                                "startTime": "18:00",
                                "endTime": "19:00",
                                "pointTime": "18:00",
                                "statistics": {
                                    "fifthPercentile": 75,
                                    "twentyFifthPercentile": 100,
                                    "median": 132,
                                    "seventyFifthPercentile": 170,
                                    "ninetyFifthPercentile": 205
                                }
                            },
                            {
                                "startTime": "19:00",
                                "endTime": "20:00",
                                "pointTime": "19:00",
                                "statistics": {
                                    "fifthPercentile": 76,
                                    "twentyFifthPercentile": 100,
                                    "median": 125,
                                    "seventyFifthPercentile": 152,
                                    "ninetyFifthPercentile": 172
                                }
                            },
                            {
                                "startTime": "20:00",
                                "endTime": "21:00",
                                "pointTime": "20:00",
                                "statistics": {
                                    "fifthPercentile": 74,
                                    "twentyFifthPercentile": 100,
                                    "median": 129,
                                    "seventyFifthPercentile": 153,
                                    "ninetyFifthPercentile": 172
                                }
                            },
                            {
                                "startTime": "21:00",
                                "endTime": "22:00",
                                "pointTime": "21:00",
                                "statistics": {
                                    "fifthPercentile": 75,
                                    "twentyFifthPercentile": 102,
                                    "median": 127,
                                    "seventyFifthPercentile": 151,
                                    "ninetyFifthPercentile": 173
                                }
                            },
                            {
                                "startTime": "22:00",
                                "endTime": "23:00",
                                "pointTime": "22:00",
                                "statistics": {
                                    "fifthPercentile": 73,
                                    "twentyFifthPercentile": 96,
                                    "median": 123,
                                    "seventyFifthPercentile": 152,
                                    "ninetyFifthPercentile": 176
                                }
                            },
                            {
                                "startTime": "23:00",
                                "endTime": "00:00",
                                "pointTime": "23:00",
                                "statistics": {
                                    "fifthPercentile": 73,
                                    "twentyFifthPercentile": 94,
                                    "median": 125,
                                    "seventyFifthPercentile": 155,
                                    "ninetyFifthPercentile": 173
                                }
                            }
                        ]
                    },
                    "insulinStatistics": {
                        "total": {
                            "averageDaily": {
                                "volume": 25.4
                            }
                        },
                        "bolus": {
                            "averageDaily": {
                                "volume": 13.9,
                                "count": 6.1,
                                "percent": 55
                            }
                        },
                        "basal": {
                            "averageDaily": {
                                "volume": 11.5,
                                "percent": 45
                            }
                        }
                    },
                    "bolusStatisticalDay": {
                        "total": {
                            "statistics": {
                                "averageDaily": {
                                    "volume": 13.9,
                                    "count": 6.1
                                }
                            }
                        },
                        "data": [
                            {
                                "startTime": "00:00",
                                "endTime": "06:00",
                                "partOfDay": "nighttime",
                                "statistics": {
                                    "averageDaily": {
                                        "volume": 0.1,
                                        "count": 0.3
                                    }
                                }
                            },
                            {
                                "startTime": "06:00",
                                "endTime": "12:00",
                                "partOfDay": "morning",
                                "statistics": {
                                    "averageDaily": {
                                        "volume": 4,
                                        "count": 1.7
                                    }
                                }
                            },
                            {
                                "startTime": "12:00",
                                "endTime": "18:00",
                                "partOfDay": "afternoon",
                                "statistics": {
                                    "averageDaily": {
                                        "volume": 5.6,
                                        "count": 2.3
                                    }
                                }
                            },
                            {
                                "startTime": "18:00",
                                "endTime": "00:00",
                                "partOfDay": "evening",
                                "statistics": {
                                    "averageDaily": {
                                        "volume": 4.2,
                                        "count": 1.9
                                    }
                                }
                            }
                        ]
                    },
                    "bolusCauseTypeStatistics": {
                        "mealOnlyAndMealAndCorrection": {
                            "averageDaily": {
                                "volume": 13.8,
                                "count": 5.7,
                                "percent": 99.3
                            }
                        },
                        "correctionOnly": {
                            "averageDaily": {
                                "volume": 0.1,
                                "count": 0.4,
                                "percent": 0.7
                            }
                        },
                        "manual": {
                            "averageDaily": {
                                "volume": 0,
                                "count": 0,
                                "percent": 0
                            }
                        }
                    },
                    "bolusOverrideStatistics": {
                        "override": {
                            "percent": 2,
                            "count": 1
                        },
                        "days": 7
                    },
                    "carbsStatistics": {
                        "averageDaily": {
                            "value": 129,
                            "count": 5.7
                        }
                    },
                    "basalTimeInMode": {
                        "automated": {
                            "percent": 99
                        },
                        "hypoProtect": {
                            "percent": 4
                        },
                        "limited": {
                            "percent": 0
                        },
                        "manual": {
                            "percent": 1
                        }
                    },
                    "settings": {
                        "bolus": {
                            "isCalculatorEnabled": true,
                            "insulinActionDuration": null,
                            "targetGlucoseAndCorrectAbove": {
                                "segments": [
                                    {
                                        "targetGlucose": 110,
                                        "correctAbove": 110,
                                        "startTime": "00:00",
                                        "endTime": "18:00"
                                    },
                                    {
                                        "targetGlucose": 120,
                                        "correctAbove": 120,
                                        "startTime": "18:00",
                                        "endTime": "21:00"
                                    },
                                    {
                                        "targetGlucose": 110,
                                        "correctAbove": 110,
                                        "startTime": "21:00",
                                        "endTime": "00:00"
                                    }
                                ]
                            },
                            "insulinToCarbRatio": {
                                "segments": [
                                    {
                                        "ratio": "1:10",
                                        "startTime": "00:00",
                                        "endTime": "06:00"
                                    },
                                    {
                                        "ratio": "1:9",
                                        "startTime": "06:00",
                                        "endTime": "11:00"
                                    },
                                    {
                                        "ratio": "1:9",
                                        "startTime": "11:00",
                                        "endTime": "17:00"
                                    },
                                    {
                                        "ratio": "1:9",
                                        "startTime": "17:00",
                                        "endTime": "00:00"
                                    }
                                ]
                            },
                            "correctionFactor": {
                                "segments": [
                                    {
                                        "factor": "1:93",
                                        "startTime": "00:00",
                                        "endTime": "06:30"
                                    },
                                    {
                                        "factor": "1:75",
                                        "startTime": "06:30",
                                        "endTime": "22:30"
                                    },
                                    {
                                        "factor": "1:93",
                                        "startTime": "22:30",
                                        "endTime": "00:00"
                                    }
                                ]
                            }
                        }
                    }
                },
                "daily": [
                    {
                        "date": "2022-05-29",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-05-29T00:00:00.000",
                                    "endDate": "2022-05-29T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-05-29T18:00:00.000",
                                    "endDate": "2022-05-29T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-05-29T21:00:00.000",
                                    "endDate": "2022-05-29T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 148,
                            "data": [
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-05-29T07:03:24.094-04:00",
                                        "displayedDate": "2022-05-29T07:03:24.094-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 43,
                                        "date": "2022-05-29T12:16:27.623-04:00",
                                        "displayedDate": "2022-05-29T12:16:27.623-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 15,
                                        "date": "2022-05-29T15:47:49.873-04:00",
                                        "displayedDate": "2022-05-29T15:47:49.873-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-05-29T16:50:20.643-04:00",
                                        "displayedDate": "2022-05-29T16:50:20.643-04:00"
                                    },
                                    {
                                        "value": 20,
                                        "date": "2022-05-29T17:35:11.369-04:00",
                                        "displayedDate": "2022-05-29T17:35:20.643-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-05-29T19:02:39.217-04:00",
                                        "displayedDate": "2022-05-29T19:02:39.217-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 16.2,
                            "data": [
                                [
                                    {
                                        "value": 2.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-29T07:03:24.094-04:00",
                                        "displayedDate": "2022-05-29T07:03:24.094-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 4.8,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-29T12:16:27.623-04:00",
                                        "displayedDate": "2022-05-29T12:16:27.623-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-29T15:47:49.873-04:00",
                                        "displayedDate": "2022-05-29T15:47:49.873-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3.3,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-29T16:50:20.643-04:00",
                                        "displayedDate": "2022-05-29T16:50:20.643-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2.2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-29T17:35:11.369-04:00",
                                        "displayedDate": "2022-05-29T17:35:11.369-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-29T19:02:39.217-04:00",
                                        "displayedDate": "2022-05-29T19:02:39.217-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 0.2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "correctionOnly",
                                        "date": "2022-05-29T21:47:37.449-04:00",
                                        "displayedDate": "2022-05-29T21:47:37.449-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 11.4
                        },
                        "podChange": {
                            "data": [
                                {
                                    "deactivatedDate": "2022-05-29T00:01:00.000-05:00",
                                    "activatedDate": "2022-05-29T00:02:00.000-05:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-05-28T23:46:30.000",
                                    "displayedEndDate": "2022-05-29T00:16:30.000",
                                    "isIconDisplayed": true
                                },
                                {
                                    "deactivatedDate": "2022-05-29T06:45:17.973-04:00",
                                    "activatedDate": "2022-05-29T07:30:17.973-04:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-05-29T06:45:17.973",
                                    "displayedEndDate": "2022-05-29T07:30:17.973",
                                    "isIconDisplayed": true
                                },
                                {
                                    "deactivatedDate": "2022-05-29T23:58:00.000-05:00",
                                    "activatedDate": "2022-05-29T23:59:00.000-05:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-05-29T23:43:30.000",
                                    "displayedEndDate": "2022-05-30T00:13:30.000",
                                    "isIconDisplayed": true
                                }
                            ]
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-05-29T00:00:00.000-04:00",
                                    "endDate": "2022-05-29T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T00:00:00.000-04:00",
                                    "endDate": "2022-05-29T00:06:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T00:26:14.000-04:00",
                                    "endDate": "2022-05-29T01:06:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T01:36:14.000-04:00",
                                    "endDate": "2022-05-29T01:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T02:01:14.000-04:00",
                                    "endDate": "2022-05-29T02:26:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T02:41:14.000-04:00",
                                    "endDate": "2022-05-29T04:11:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T05:16:14.000-04:00",
                                    "endDate": "2022-05-29T06:26:13.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T06:31:14.000-04:00",
                                    "endDate": "2022-05-29T06:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T07:36:13.000-04:00",
                                    "endDate": "2022-05-29T08:21:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T09:21:14.000-04:00",
                                    "endDate": "2022-05-29T10:21:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T10:36:14.000-04:00",
                                    "endDate": "2022-05-29T11:01:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T11:36:14.000-04:00",
                                    "endDate": "2022-05-29T11:51:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T12:11:14.000-04:00",
                                    "endDate": "2022-05-29T12:31:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T13:31:14.000-04:00",
                                    "endDate": "2022-05-29T15:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T16:21:14.000-04:00",
                                    "endDate": "2022-05-29T16:36:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T18:31:14.000-04:00",
                                    "endDate": "2022-05-29T19:11:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T19:21:14.000-04:00",
                                    "endDate": "2022-05-29T19:26:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T19:36:14.000-04:00",
                                    "endDate": "2022-05-29T19:56:14.000-04:00"
                                },
                                {
                                    "value": "maxDelivery",
                                    "startDate": "2022-05-29T21:11:14.000-04:00",
                                    "endDate": "2022-05-29T21:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T21:46:14.000-04:00",
                                    "endDate": "2022-05-29T21:56:14.000-04:00"
                                },
                                {
                                    "value": "maxDelivery",
                                    "startDate": "2022-05-29T22:41:14.000-04:00",
                                    "endDate": "2022-05-29T22:51:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-29T23:41:14.000-04:00",
                                    "endDate": "2022-05-29T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-05-29T00:01:13.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-29T00:06:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-29T00:11:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-05-29T00:16:13.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-29T00:21:14.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-29T00:26:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T00:31:14.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-05-29T00:36:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-29T00:41:14.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-05-29T00:46:13.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-05-29T00:51:14.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-05-29T00:56:13.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-29T01:01:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-29T01:06:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-29T01:11:14.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-05-29T01:16:13.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-29T01:21:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-29T01:26:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-29T01:31:13.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-29T01:36:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-29T01:41:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-29T01:46:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-29T01:51:13.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-29T01:56:14.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-05-29T02:01:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-29T02:06:15.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-05-29T02:11:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-29T02:16:13.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-29T02:21:13.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-05-29T02:26:14.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-05-29T02:31:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-29T02:36:14.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-05-29T02:41:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-29T02:46:13.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-05-29T02:51:14.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-05-29T02:56:14.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-05-29T03:01:14.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-05-29T03:06:14.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-05-29T03:11:14.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-29T03:16:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-05-29T03:21:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T03:26:13.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-05-29T03:31:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-05-29T03:36:14.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-05-29T03:41:13.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-05-29T03:46:13.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-05-29T03:51:13.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-05-29T03:56:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-29T04:01:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-29T04:06:14.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-05-29T04:11:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-05-29T04:16:15.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-05-29T04:21:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-29T04:26:14.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-29T04:31:13.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-29T04:36:14.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-05-29T04:41:14.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-05-29T04:46:13.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-29T04:51:13.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-29T04:56:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-05-29T05:01:14.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-05-29T05:06:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-29T05:11:13.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-05-29T05:16:14.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-05-29T05:21:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-29T05:26:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-05-29T05:31:13.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-29T05:36:14.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-05-29T05:41:14.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-05-29T05:46:14.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-05-29T05:51:14.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-05-29T05:56:13.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-29T06:01:14.000-04:00",
                                        "value": 62
                                    },
                                    {
                                        "date": "2022-05-29T06:06:14.000-04:00",
                                        "value": 61
                                    },
                                    {
                                        "date": "2022-05-29T06:11:14.000-04:00",
                                        "value": 64
                                    },
                                    {
                                        "date": "2022-05-29T06:16:13.000-04:00",
                                        "value": 39
                                    },
                                    {
                                        "date": "2022-05-29T06:21:13.000-04:00",
                                        "value": 66
                                    },
                                    {
                                        "date": "2022-05-29T06:26:13.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-29T06:31:14.000-04:00",
                                        "value": 64
                                    },
                                    {
                                        "date": "2022-05-29T06:36:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-29T06:41:14.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-29T06:46:14.000-04:00",
                                        "value": 60
                                    },
                                    {
                                        "date": "2022-05-29T06:51:14.000-04:00",
                                        "value": 54
                                    },
                                    {
                                        "date": "2022-05-29T06:56:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-29T07:01:13.000-04:00",
                                        "value": 49
                                    },
                                    {
                                        "date": "2022-05-29T07:06:14.000-04:00",
                                        "value": 42
                                    },
                                    {
                                        "date": "2022-05-29T07:11:14.000-04:00",
                                        "value": 57
                                    },
                                    {
                                        "date": "2022-05-29T07:16:14.000-04:00",
                                        "value": 47
                                    },
                                    {
                                        "date": "2022-05-29T07:21:14.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-29T07:26:14.000-04:00",
                                        "value": 43
                                    },
                                    {
                                        "date": "2022-05-29T07:31:14.000-04:00",
                                        "value": 54
                                    },
                                    {
                                        "date": "2022-05-29T07:36:13.000-04:00",
                                        "value": 49
                                    },
                                    {
                                        "date": "2022-05-29T07:41:14.000-04:00",
                                        "value": 59
                                    },
                                    {
                                        "date": "2022-05-29T07:46:14.000-04:00",
                                        "value": 45
                                    },
                                    {
                                        "date": "2022-05-29T07:51:13.000-04:00",
                                        "value": 63
                                    },
                                    {
                                        "date": "2022-05-29T07:56:14.000-04:00",
                                        "value": 44
                                    },
                                    {
                                        "date": "2022-05-29T08:01:14.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-29T08:06:14.000-04:00",
                                        "value": 47
                                    },
                                    {
                                        "date": "2022-05-29T08:11:14.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-29T08:16:14.000-04:00",
                                        "value": 64
                                    },
                                    {
                                        "date": "2022-05-29T08:21:14.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-29T08:26:13.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-29T08:31:14.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-29T08:36:14.000-04:00",
                                        "value": 63
                                    },
                                    {
                                        "date": "2022-05-29T08:41:16.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-29T08:46:14.000-04:00",
                                        "value": 39
                                    },
                                    {
                                        "date": "2022-05-29T08:51:14.000-04:00",
                                        "value": 58
                                    },
                                    {
                                        "date": "2022-05-29T08:56:14.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-29T09:01:14.000-04:00",
                                        "value": 45
                                    },
                                    {
                                        "date": "2022-05-29T09:06:14.000-04:00",
                                        "value": 48
                                    },
                                    {
                                        "date": "2022-05-29T09:11:14.000-04:00",
                                        "value": 66
                                    },
                                    {
                                        "date": "2022-05-29T09:16:14.000-04:00",
                                        "value": 62
                                    },
                                    {
                                        "date": "2022-05-29T09:21:14.000-04:00",
                                        "value": 63
                                    },
                                    {
                                        "date": "2022-05-29T09:26:14.000-04:00",
                                        "value": 44
                                    },
                                    {
                                        "date": "2022-05-29T09:31:13.000-04:00",
                                        "value": 39
                                    },
                                    {
                                        "date": "2022-05-29T09:36:14.000-04:00",
                                        "value": 50
                                    },
                                    {
                                        "date": "2022-05-29T09:41:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-29T09:46:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-29T09:51:14.000-04:00",
                                        "value": 58
                                    },
                                    {
                                        "date": "2022-05-29T09:56:13.000-04:00",
                                        "value": 54
                                    },
                                    {
                                        "date": "2022-05-29T10:01:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-29T10:06:14.000-04:00",
                                        "value": 49
                                    },
                                    {
                                        "date": "2022-05-29T10:11:15.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-29T10:16:14.000-04:00",
                                        "value": 66
                                    },
                                    {
                                        "date": "2022-05-29T10:21:14.000-04:00",
                                        "value": 44
                                    },
                                    {
                                        "date": "2022-05-29T10:26:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-29T10:31:14.000-04:00",
                                        "value": 50
                                    },
                                    {
                                        "date": "2022-05-29T10:36:14.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-29T10:41:14.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-29T10:46:14.000-04:00",
                                        "value": 63
                                    },
                                    {
                                        "date": "2022-05-29T10:51:14.000-04:00",
                                        "value": 59
                                    },
                                    {
                                        "date": "2022-05-29T10:56:14.000-04:00",
                                        "value": 45
                                    },
                                    {
                                        "date": "2022-05-29T11:01:14.000-04:00",
                                        "value": 59
                                    },
                                    {
                                        "date": "2022-05-29T11:06:14.000-04:00",
                                        "value": 45
                                    },
                                    {
                                        "date": "2022-05-29T11:11:14.000-04:00",
                                        "value": 48
                                    },
                                    {
                                        "date": "2022-05-29T11:16:14.000-04:00",
                                        "value": 56
                                    },
                                    {
                                        "date": "2022-05-29T11:21:13.000-04:00",
                                        "value": 56
                                    },
                                    {
                                        "date": "2022-05-29T11:26:14.000-04:00",
                                        "value": 61
                                    },
                                    {
                                        "date": "2022-05-29T11:31:14.000-04:00",
                                        "value": 54
                                    },
                                    {
                                        "date": "2022-05-29T11:36:14.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-29T11:41:14.000-04:00",
                                        "value": 53
                                    },
                                    {
                                        "date": "2022-05-29T11:46:14.000-04:00",
                                        "value": 48
                                    },
                                    {
                                        "date": "2022-05-29T11:51:14.000-04:00",
                                        "value": 66
                                    },
                                    {
                                        "date": "2022-05-29T11:56:14.000-04:00",
                                        "value": 42
                                    },
                                    {
                                        "date": "2022-05-29T12:01:14.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-05-29T12:06:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-29T12:11:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-29T12:16:14.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-29T12:21:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-29T12:26:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T12:31:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-29T12:36:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T12:41:14.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-29T12:46:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-29T12:51:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-05-29T12:56:14.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-05-29T13:01:14.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-05-29T13:06:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-29T13:11:14.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-29T13:16:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-05-29T13:21:14.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-05-29T13:26:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-29T13:31:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-29T13:36:14.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-05-29T13:41:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-29T13:46:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-29T13:51:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-29T13:56:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-29T14:01:14.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-05-29T14:06:14.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-05-29T14:11:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-29T14:16:14.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-05-29T14:21:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-29T14:26:14.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-05-29T14:31:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-05-29T14:36:14.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-05-29T14:41:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-29T14:46:14.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-05-29T14:51:14.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-05-29T14:56:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-29T15:01:14.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-05-29T15:06:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-29T15:11:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-29T15:16:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-29T15:21:14.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-05-29T15:26:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-05-29T15:31:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-29T15:36:14.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-05-29T15:41:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-29T15:46:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-29T15:51:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-29T15:56:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-29T16:01:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-29T16:06:14.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-05-29T16:11:14.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-05-29T16:16:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-29T16:21:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-29T16:26:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-05-29T16:31:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-29T16:36:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-29T16:41:14.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-05-29T16:46:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-29T16:51:14.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-05-29T16:56:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-29T17:01:14.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-29T17:06:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-29T17:11:14.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-05-29T17:16:14.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-05-29T17:21:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-29T17:26:14.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-29T17:31:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-05-29T17:36:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-05-29T17:41:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-29T17:46:14.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-29T17:51:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-29T17:56:14.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-05-29T18:01:14.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-05-29T18:06:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-29T18:11:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-29T18:16:14.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-05-29T18:21:14.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-05-29T18:26:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-29T18:31:14.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-05-29T18:36:14.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-05-29T18:41:14.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-05-29T18:46:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T18:51:14.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-05-29T18:56:14.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-05-29T19:01:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-29T19:06:14.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-29T19:11:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-29T19:16:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T19:21:14.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-05-29T19:26:14.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-29T19:31:14.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-05-29T19:36:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-29T19:41:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-29T19:46:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-29T19:51:14.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-05-29T19:56:14.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-05-29T20:01:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-29T20:06:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-05-29T20:11:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-29T20:16:14.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-05-29T20:21:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-05-29T20:26:14.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-05-29T20:31:14.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-05-29T20:36:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-29T20:41:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-29T20:46:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-29T20:51:14.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-05-29T20:56:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-29T21:01:14.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-05-29T21:06:14.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-05-29T21:11:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-29T21:16:14.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-05-29T21:21:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-29T21:26:15.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-29T21:31:14.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-05-29T21:36:14.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-05-29T21:41:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-29T21:46:14.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-05-29T21:51:16.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T21:56:14.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-05-29T22:01:14.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-05-29T22:06:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-29T22:11:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-29T22:16:14.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-05-29T22:21:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-05-29T22:26:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-29T22:31:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-29T22:36:14.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-05-29T22:41:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-29T22:46:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-29T22:51:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-29T22:56:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-29T23:01:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-29T23:06:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-29T23:11:14.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-05-29T23:16:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-29T23:21:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-05-29T23:26:14.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-05-29T23:31:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-05-29T23:36:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-05-29T23:41:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-05-29T23:46:14.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-05-29T23:51:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-29T23:56:14.000-04:00",
                                        "value": 179
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    },
                    {
                        "date": "2022-05-30",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-05-30T00:00:00.000",
                                    "endDate": "2022-05-30T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-05-30T18:00:00.000",
                                    "endDate": "2022-05-30T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-05-30T21:00:00.000",
                                    "endDate": "2022-05-30T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 150,
                            "data": [
                                [
                                    {
                                        "value": 25,
                                        "date": "2022-05-30T07:07:48.782-04:00",
                                        "displayedDate": "2022-05-30T07:07:48.782-04:00"
                                    },
                                    {
                                        "value": 2,
                                        "date": "2022-05-30T07:40:32.419-04:00",
                                        "displayedDate": "2022-05-30T07:52:48.782-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-05-30T12:11:05.962-04:00",
                                        "displayedDate": "2022-05-30T12:11:05.962-04:00"
                                    },
                                    {
                                        "value": 20,
                                        "date": "2022-05-30T12:28:10.964-04:00",
                                        "displayedDate": "2022-05-30T12:56:05.962-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 13,
                                        "date": "2022-05-30T15:43:21.798-04:00",
                                        "displayedDate": "2022-05-30T15:43:21.798-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 15,
                                        "date": "2022-05-30T18:44:24.213-04:00",
                                        "displayedDate": "2022-05-30T18:44:24.213-04:00"
                                    },
                                    {
                                        "value": 10,
                                        "date": "2022-05-30T19:01:21.228-04:00",
                                        "displayedDate": "2022-05-30T19:29:24.213-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 35,
                                        "date": "2022-05-30T21:23:04.571-04:00",
                                        "displayedDate": "2022-05-30T21:23:04.571-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 17.2,
                            "data": [
                                [
                                    {
                                        "value": 3.7,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T07:07:48.782-04:00",
                                        "displayedDate": "2022-05-30T07:07:48.782-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 0.2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T07:40:32.419-04:00",
                                        "displayedDate": "2022-05-30T07:40:32.419-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3.3,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T12:11:05.962-04:00",
                                        "displayedDate": "2022-05-30T12:11:05.962-04:00"
                                    },
                                    {
                                        "value": 2.2,
                                        "isValueDisplayed": false,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T12:28:10.964-04:00",
                                        "displayedDate": "2022-05-30T12:31:05.962-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.4,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T15:43:21.798-04:00",
                                        "displayedDate": "2022-05-30T15:43:21.798-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.5,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T18:44:24.213-04:00",
                                        "displayedDate": "2022-05-30T18:44:24.213-04:00"
                                    },
                                    {
                                        "value": 1.1,
                                        "isValueDisplayed": false,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T19:01:21.228-04:00",
                                        "displayedDate": "2022-05-30T19:04:24.213-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3.8,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-30T21:23:04.571-04:00",
                                        "displayedDate": "2022-05-30T21:23:04.571-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 10.8
                        },
                        "podChange": {
                            "data": [
                                {
                                    "deactivatedDate": "2022-05-30T06:45:17.973-04:00",
                                    "activatedDate": "2022-05-30T07:30:17.973-04:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-05-30T06:45:17.973",
                                    "displayedEndDate": "2022-05-30T07:30:17.973",
                                    "isIconDisplayed": true
                                }
                            ]
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-05-30T00:00:00.000-04:00",
                                    "endDate": "2022-05-30T09:46:14.000-04:00"
                                },
                                {
                                    "value": "hypoProtect",
                                    "startDate": "2022-05-30T09:46:14.000-04:00",
                                    "endDate": "2022-05-30T11:06:14.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-05-30T11:06:14.000-04:00",
                                    "endDate": "2022-05-30T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T00:00:00.000-04:00",
                                    "endDate": "2022-05-30T00:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T01:11:14.000-04:00",
                                    "endDate": "2022-05-30T01:26:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T01:46:14.000-04:00",
                                    "endDate": "2022-05-30T01:56:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T03:46:14.000-04:00",
                                    "endDate": "2022-05-30T04:01:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T04:16:14.000-04:00",
                                    "endDate": "2022-05-30T04:31:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T05:21:14.000-04:00",
                                    "endDate": "2022-05-30T06:01:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T07:26:14.000-04:00",
                                    "endDate": "2022-05-30T09:01:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T09:41:14.000-04:00",
                                    "endDate": "2022-05-30T10:46:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T11:41:14.000-04:00",
                                    "endDate": "2022-05-30T12:36:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T13:31:14.000-04:00",
                                    "endDate": "2022-05-30T14:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T15:21:14.000-04:00",
                                    "endDate": "2022-05-30T15:51:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T16:01:14.000-04:00",
                                    "endDate": "2022-05-30T16:36:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T17:11:16.000-04:00",
                                    "endDate": "2022-05-30T17:36:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T17:51:14.000-04:00",
                                    "endDate": "2022-05-30T18:16:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T18:36:14.000-04:00",
                                    "endDate": "2022-05-30T19:11:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T19:46:14.000-04:00",
                                    "endDate": "2022-05-30T20:31:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T20:46:15.000-04:00",
                                    "endDate": "2022-05-30T20:56:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T21:21:14.000-04:00",
                                    "endDate": "2022-05-30T21:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-30T22:21:14.000-04:00",
                                    "endDate": "2022-05-30T22:56:14.000-04:00"
                                },
                                {
                                    "value": "maxDelivery",
                                    "startDate": "2022-05-30T23:36:14.000-04:00",
                                    "endDate": "2022-05-30T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-05-30T00:01:14.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-05-30T00:06:14.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-05-30T00:11:14.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-05-30T00:16:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-05-30T00:21:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-30T00:26:14.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-05-30T00:31:14.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-05-30T00:36:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-30T00:41:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-30T00:46:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-30T00:51:14.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-05-30T00:56:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-30T01:01:14.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-05-30T01:06:14.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-05-30T01:11:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-30T01:16:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-30T01:21:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-30T01:26:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-05-30T01:31:14.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-30T01:36:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-30T01:41:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-30T01:46:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-30T01:51:14.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-05-30T01:56:14.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-30T02:01:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-05-30T02:06:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-30T02:11:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-30T02:16:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-30T02:21:14.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-05-30T02:26:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-05-30T02:31:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-30T02:36:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-30T02:41:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-30T02:46:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-30T02:51:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-30T02:56:14.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-05-30T03:01:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-30T03:06:14.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-05-30T03:11:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-30T03:16:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-30T03:21:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-30T03:26:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-30T03:31:14.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-05-30T03:36:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-30T03:41:14.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-05-30T03:46:14.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-30T03:51:14.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-05-30T03:56:14.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-05-30T04:01:14.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-30T04:06:14.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-05-30T04:11:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-30T04:16:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-30T04:21:14.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-05-30T04:26:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-30T04:31:14.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-05-30T04:36:14.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-05-30T04:41:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-30T04:46:14.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-05-30T04:51:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-05-30T04:56:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-30T05:01:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-05-30T05:06:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-30T05:11:14.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-05-30T05:16:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-30T05:21:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-05-30T05:26:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-05-30T05:31:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-30T05:36:14.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-05-30T05:41:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-30T05:46:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-30T05:51:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-30T05:56:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-30T06:01:14.000-04:00",
                                        "value": 59
                                    },
                                    {
                                        "date": "2022-05-30T06:06:14.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-30T06:11:14.000-04:00",
                                        "value": 67
                                    },
                                    {
                                        "date": "2022-05-30T06:16:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T06:21:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T06:26:14.000-04:00",
                                        "value": 54
                                    },
                                    {
                                        "date": "2022-05-30T06:31:14.000-04:00",
                                        "value": 56
                                    },
                                    {
                                        "date": "2022-05-30T06:36:14.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-30T06:41:14.000-04:00",
                                        "value": 50
                                    },
                                    {
                                        "date": "2022-05-30T06:46:14.000-04:00",
                                        "value": 50
                                    },
                                    {
                                        "date": "2022-05-30T06:51:14.000-04:00",
                                        "value": 58
                                    },
                                    {
                                        "date": "2022-05-30T06:56:14.000-04:00",
                                        "value": 63
                                    },
                                    {
                                        "date": "2022-05-30T07:01:14.000-04:00",
                                        "value": 48
                                    },
                                    {
                                        "date": "2022-05-30T07:06:14.000-04:00",
                                        "value": 45
                                    },
                                    {
                                        "date": "2022-05-30T07:11:16.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-30T07:16:14.000-04:00",
                                        "value": 59
                                    },
                                    {
                                        "date": "2022-05-30T07:21:14.000-04:00",
                                        "value": 57
                                    },
                                    {
                                        "date": "2022-05-30T07:26:14.000-04:00",
                                        "value": 46
                                    },
                                    {
                                        "date": "2022-05-30T07:31:14.000-04:00",
                                        "value": 56
                                    },
                                    {
                                        "date": "2022-05-30T07:36:14.000-04:00",
                                        "value": 42
                                    },
                                    {
                                        "date": "2022-05-30T07:41:14.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-30T07:46:14.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-30T07:51:14.000-04:00",
                                        "value": 53
                                    },
                                    {
                                        "date": "2022-05-30T07:56:14.000-04:00",
                                        "value": 44
                                    },
                                    {
                                        "date": "2022-05-30T08:01:14.000-04:00",
                                        "value": 57
                                    },
                                    {
                                        "date": "2022-05-30T08:06:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T08:11:14.000-04:00",
                                        "value": 43
                                    },
                                    {
                                        "date": "2022-05-30T08:16:14.000-04:00",
                                        "value": 43
                                    },
                                    {
                                        "date": "2022-05-30T08:21:14.000-04:00",
                                        "value": 49
                                    },
                                    {
                                        "date": "2022-05-30T08:26:14.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-30T08:31:14.000-04:00",
                                        "value": 56
                                    },
                                    {
                                        "date": "2022-05-30T08:36:14.000-04:00",
                                        "value": 48
                                    },
                                    {
                                        "date": "2022-05-30T08:41:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T08:46:14.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-30T08:51:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-30T08:56:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-30T09:01:14.000-04:00",
                                        "value": 66
                                    },
                                    {
                                        "date": "2022-05-30T09:06:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-30T09:11:14.000-04:00",
                                        "value": 63
                                    },
                                    {
                                        "date": "2022-05-30T09:16:14.000-04:00",
                                        "value": 62
                                    },
                                    {
                                        "date": "2022-05-30T09:21:14.000-04:00",
                                        "value": 44
                                    },
                                    {
                                        "date": "2022-05-30T09:26:14.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-30T09:31:14.000-04:00",
                                        "value": 67
                                    },
                                    {
                                        "date": "2022-05-30T09:36:14.000-04:00",
                                        "value": 43
                                    },
                                    {
                                        "date": "2022-05-30T09:41:14.000-04:00",
                                        "value": 55
                                    },
                                    {
                                        "date": "2022-05-30T09:46:14.000-04:00",
                                        "value": 46
                                    },
                                    {
                                        "date": "2022-05-30T09:51:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T09:56:14.000-04:00",
                                        "value": 43
                                    },
                                    {
                                        "date": "2022-05-30T10:01:14.000-04:00",
                                        "value": 64
                                    },
                                    {
                                        "date": "2022-05-30T10:06:14.000-04:00",
                                        "value": 49
                                    },
                                    {
                                        "date": "2022-05-30T10:11:14.000-04:00",
                                        "value": 44
                                    },
                                    {
                                        "date": "2022-05-30T10:16:15.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-30T10:21:14.000-04:00",
                                        "value": 57
                                    },
                                    {
                                        "date": "2022-05-30T10:26:14.000-04:00",
                                        "value": 64
                                    },
                                    {
                                        "date": "2022-05-30T10:31:14.000-04:00",
                                        "value": 56
                                    },
                                    {
                                        "date": "2022-05-30T10:36:14.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-30T10:41:14.000-04:00",
                                        "value": 48
                                    },
                                    {
                                        "date": "2022-05-30T10:46:14.000-04:00",
                                        "value": 57
                                    },
                                    {
                                        "date": "2022-05-30T10:51:14.000-04:00",
                                        "value": 51
                                    },
                                    {
                                        "date": "2022-05-30T10:56:14.000-04:00",
                                        "value": 41
                                    },
                                    {
                                        "date": "2022-05-30T11:01:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T11:06:14.000-04:00",
                                        "value": 58
                                    },
                                    {
                                        "date": "2022-05-30T11:11:14.000-04:00",
                                        "value": 55
                                    },
                                    {
                                        "date": "2022-05-30T11:16:14.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-30T11:21:14.000-04:00",
                                        "value": 64
                                    },
                                    {
                                        "date": "2022-05-30T11:26:14.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-30T11:31:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T11:36:14.000-04:00",
                                        "value": 55
                                    },
                                    {
                                        "date": "2022-05-30T11:41:14.000-04:00",
                                        "value": 40
                                    },
                                    {
                                        "date": "2022-05-30T11:46:14.000-04:00",
                                        "value": 52
                                    },
                                    {
                                        "date": "2022-05-30T11:51:14.000-04:00",
                                        "value": 47
                                    },
                                    {
                                        "date": "2022-05-30T11:56:17.000-04:00",
                                        "value": 68
                                    },
                                    {
                                        "date": "2022-05-30T12:01:14.000-04:00",
                                        "value": 65
                                    },
                                    {
                                        "date": "2022-05-30T12:06:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-30T12:11:14.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-05-30T12:16:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-05-30T12:21:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-30T12:26:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-30T12:31:14.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-05-30T12:36:14.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-05-30T12:41:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-05-30T12:46:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-30T12:51:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-30T12:56:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-30T13:01:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-30T13:06:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-30T13:11:14.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-05-30T13:16:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-30T13:21:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-30T13:26:14.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-05-30T13:31:14.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-05-30T13:36:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-30T13:41:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-30T13:46:14.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-05-30T13:51:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-30T13:56:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-30T14:01:14.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-05-30T14:06:14.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-05-30T14:11:14.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-05-30T14:16:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-30T14:21:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-30T14:26:14.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-05-30T14:31:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-30T14:36:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-30T14:41:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-30T14:46:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-30T14:51:14.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-05-30T14:56:14.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-05-30T15:01:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-30T15:06:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-30T15:11:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-05-30T15:16:14.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-30T15:21:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-30T15:26:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-30T15:31:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-30T15:36:14.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-05-30T15:41:14.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-05-30T15:46:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-30T15:51:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-05-30T15:56:14.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-05-30T16:01:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-30T16:06:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-05-30T16:11:14.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-05-30T16:16:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-05-30T16:21:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-30T16:26:14.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-30T16:31:14.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-30T16:36:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-30T16:41:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-30T16:46:14.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-30T16:51:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-30T16:56:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-30T17:01:14.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-05-30T17:06:14.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-05-30T17:11:16.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-05-30T17:16:14.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-05-30T17:21:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-05-30T17:26:14.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-05-30T17:31:14.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-05-30T17:36:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-05-30T17:41:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-05-30T17:46:14.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-05-30T17:51:14.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-05-30T17:56:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-30T18:01:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-30T18:06:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-30T18:11:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-30T18:16:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-30T18:21:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-30T18:26:14.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-05-30T18:31:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-30T18:36:14.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-05-30T18:41:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-05-30T18:46:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-30T18:51:14.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-05-30T18:56:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-30T19:01:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-05-30T19:06:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-30T19:11:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-05-30T19:16:14.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-05-30T19:21:14.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-05-30T19:26:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-05-30T19:31:14.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-05-30T19:36:14.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-05-30T19:41:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-30T19:46:14.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-05-30T19:51:14.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-05-30T19:56:14.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-05-30T20:01:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-05-30T20:06:14.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-05-30T20:11:14.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-05-30T20:16:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-30T20:21:14.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-05-30T20:26:14.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-05-30T20:31:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-05-30T20:36:14.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-05-30T20:41:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-30T20:46:15.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-30T20:51:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-05-30T20:56:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-05-30T21:01:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-30T21:06:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-05-30T21:11:14.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-05-30T21:16:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-05-30T21:21:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-30T21:26:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-30T21:31:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-30T21:36:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-30T21:41:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-30T21:46:14.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-05-30T21:51:14.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-05-30T21:56:14.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-05-30T22:01:14.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-05-30T22:06:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-30T22:11:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-30T22:16:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-30T22:21:14.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-05-30T22:26:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-30T22:31:14.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-05-30T22:36:14.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-05-30T22:41:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-30T22:46:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-30T22:51:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-30T22:56:14.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-05-30T23:01:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-05-30T23:06:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-30T23:11:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-30T23:16:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-05-30T23:21:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-30T23:26:14.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-05-30T23:31:14.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-05-30T23:36:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-30T23:41:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-05-30T23:46:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-30T23:51:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-05-30T23:56:14.000-04:00",
                                        "value": 101
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    },
                    {
                        "date": "2022-05-31",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-05-31T00:00:00.000",
                                    "endDate": "2022-05-31T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-05-31T18:00:00.000",
                                    "endDate": "2022-05-31T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-05-31T21:00:00.000",
                                    "endDate": "2022-05-31T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 103,
                            "data": [
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-05-31T07:13:07.951-04:00",
                                        "displayedDate": "2022-05-31T07:13:07.951-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 13,
                                        "date": "2022-05-31T11:04:44.220-04:00",
                                        "displayedDate": "2022-05-31T11:04:44.220-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 45,
                                        "date": "2022-05-31T15:56:06.451-04:00",
                                        "displayedDate": "2022-05-31T15:56:06.451-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 5,
                                        "date": "2022-05-31T17:43:33.214-04:00",
                                        "displayedDate": "2022-05-31T17:43:33.214-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-05-31T20:49:38.081-04:00",
                                        "displayedDate": "2022-05-31T20:49:38.081-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 11.2,
                            "data": [
                                [
                                    {
                                        "value": 2.4,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-31T07:13:07.951-04:00",
                                        "displayedDate": "2022-05-31T07:13:07.951-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.8,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-31T11:04:44.220-04:00",
                                        "displayedDate": "2022-05-31T11:04:44.220-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 4.7,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-31T15:56:06.451-04:00",
                                        "displayedDate": "2022-05-31T15:56:06.451-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 0.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-31T17:43:33.214-04:00",
                                        "displayedDate": "2022-05-31T17:43:33.214-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-05-31T20:49:38.081-04:00",
                                        "displayedDate": "2022-05-31T20:49:38.081-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 14.2
                        },
                        "podChange": {
                            "data": [
                                {
                                    "deactivatedDate": "2022-05-31T07:21:14.000-04:00",
                                    "activatedDate": "2022-05-31T07:30:17.973-04:00",
                                    "isDeactivatedDateEstimated": true,
                                    "displayedStartDate": "2022-05-31T07:10:45.986",
                                    "displayedEndDate": "2022-05-31T07:40:45.986",
                                    "isIconDisplayed": true
                                },
                                {
                                    "deactivatedDate": "2022-05-31T08:27:14.014-04:00",
                                    "activatedDate": "2022-05-31T08:42:17.973-04:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-05-31T08:19:45.993",
                                    "displayedEndDate": "2022-05-31T08:49:45.993",
                                    "isIconDisplayed": true
                                }
                            ]
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-05-31T00:00:00.000-04:00",
                                    "endDate": "2022-05-31T07:31:14.000-04:00"
                                },
                                {
                                    "value": "hypoProtect",
                                    "startDate": "2022-05-31T07:31:14.000-04:00",
                                    "endDate": "2022-05-31T08:21:14.000-04:00"
                                },
                                {
                                    "value": "manual",
                                    "startDate": "2022-05-31T08:21:14.000-04:00",
                                    "endDate": "2022-05-31T08:26:12.000-04:00"
                                },
                                {
                                    "value": "limited",
                                    "startDate": "2022-05-31T08:41:17.000-04:00",
                                    "endDate": "2022-05-31T09:01:15.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-05-31T09:01:15.000-04:00",
                                    "endDate": "2022-05-31T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T00:06:14.000-04:00",
                                    "endDate": "2022-05-31T00:11:14.000-04:00"
                                },
                                {
                                    "value": "maxDelivery",
                                    "startDate": "2022-05-31T00:56:14.000-04:00",
                                    "endDate": "2022-05-31T01:06:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T01:21:14.000-04:00",
                                    "endDate": "2022-05-31T01:31:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T02:51:14.000-04:00",
                                    "endDate": "2022-05-31T03:06:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T05:56:14.000-04:00",
                                    "endDate": "2022-05-31T06:01:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T06:46:14.000-04:00",
                                    "endDate": "2022-05-31T07:06:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T07:11:16.000-04:00",
                                    "endDate": "2022-05-31T07:21:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T07:31:14.000-04:00",
                                    "endDate": "2022-05-31T08:21:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T10:11:15.000-04:00",
                                    "endDate": "2022-05-31T10:41:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T13:36:15.000-04:00",
                                    "endDate": "2022-05-31T14:46:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T14:56:15.000-04:00",
                                    "endDate": "2022-05-31T15:51:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T17:16:15.000-04:00",
                                    "endDate": "2022-05-31T17:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T17:56:15.000-04:00",
                                    "endDate": "2022-05-31T18:36:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T18:46:15.000-04:00",
                                    "endDate": "2022-05-31T20:31:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-05-31T20:36:15.000-04:00",
                                    "endDate": "2022-05-31T22:01:15.000-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-05-31T00:01:14.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-05-31T00:06:14.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-05-31T00:11:14.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-31T00:16:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-31T00:21:14.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-05-31T00:26:14.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-05-31T00:31:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-31T00:36:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-31T00:41:14.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-05-31T00:46:14.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-05-31T00:51:14.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-05-31T00:56:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-31T01:01:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-31T01:06:14.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-05-31T01:11:16.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-31T01:16:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-31T01:21:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-31T01:26:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-31T01:31:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-05-31T01:36:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-31T01:41:14.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-31T01:46:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-31T01:51:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-31T01:56:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-05-31T02:01:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-31T02:06:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-31T02:11:15.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-05-31T02:16:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-31T02:21:14.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-05-31T02:26:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-31T02:31:14.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-05-31T02:36:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-05-31T02:41:14.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-05-31T02:46:14.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-05-31T02:51:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-05-31T02:56:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-31T03:01:14.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-05-31T03:06:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-31T03:11:14.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-05-31T03:16:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-31T03:21:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-05-31T03:26:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-31T03:31:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-31T03:36:16.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-31T03:41:14.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-31T03:46:14.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-05-31T03:51:14.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-05-31T03:56:14.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-05-31T04:01:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-31T04:06:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-05-31T04:11:14.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-05-31T04:16:14.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-31T04:21:14.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-05-31T04:26:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-31T04:31:14.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-31T04:36:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-31T04:41:14.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-05-31T04:46:14.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-05-31T04:51:14.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-05-31T04:56:14.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-05-31T05:01:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-31T05:06:14.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-05-31T05:11:14.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-05-31T05:16:14.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-05-31T05:21:14.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-05-31T05:26:14.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-05-31T05:31:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-31T05:36:14.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-05-31T05:41:14.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-05-31T05:46:14.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-31T05:51:14.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-05-31T05:56:14.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-05-31T06:01:14.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-05-31T06:06:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-31T06:11:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-05-31T06:16:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-05-31T06:21:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-31T06:26:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T06:31:14.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-05-31T06:36:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-31T06:41:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-31T06:46:14.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-05-31T06:51:14.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-05-31T06:56:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-05-31T07:01:14.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-05-31T07:06:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-31T07:11:16.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T07:16:14.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-05-31T07:21:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-05-31T07:26:14.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-05-31T07:31:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-05-31T07:36:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-05-31T07:41:14.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-05-31T07:46:14.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-05-31T07:51:14.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-05-31T07:56:14.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-05-31T08:01:14.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-05-31T08:06:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-31T08:11:14.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-31T08:16:14.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-31T08:21:14.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-05-31T08:26:12.000-04:00",
                                        "value": 134
                                    }
                                ],
                                [
                                    {
                                        "date": "2022-05-31T08:46:17.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-31T08:51:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-31T08:56:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-31T09:01:15.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-05-31T09:06:15.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-05-31T09:11:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-05-31T09:16:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-05-31T09:21:15.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-31T09:26:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-31T09:31:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-05-31T09:36:15.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-31T09:41:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-05-31T09:46:15.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-05-31T09:51:16.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-05-31T09:56:16.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-05-31T10:01:15.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-05-31T10:06:15.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-05-31T10:11:15.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-05-31T10:16:16.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-05-31T10:21:15.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-05-31T10:26:15.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-05-31T10:31:15.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-05-31T10:36:15.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-05-31T10:41:15.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-05-31T10:46:15.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-31T10:51:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-05-31T10:56:15.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-05-31T11:01:16.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-31T11:06:15.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-05-31T11:11:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-05-31T11:16:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-05-31T11:21:15.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-05-31T11:26:15.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-05-31T11:31:15.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-05-31T11:36:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-31T11:41:15.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-05-31T11:46:15.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-05-31T11:51:15.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-05-31T11:56:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-31T12:01:15.000-04:00",
                                        "value": 221
                                    },
                                    {
                                        "date": "2022-05-31T12:06:15.000-04:00",
                                        "value": 192
                                    },
                                    {
                                        "date": "2022-05-31T12:11:15.000-04:00",
                                        "value": 239
                                    },
                                    {
                                        "date": "2022-05-31T12:16:15.000-04:00",
                                        "value": 369
                                    },
                                    {
                                        "date": "2022-05-31T12:21:15.000-04:00",
                                        "value": 197
                                    },
                                    {
                                        "date": "2022-05-31T12:26:15.000-04:00",
                                        "value": 212
                                    },
                                    {
                                        "date": "2022-05-31T12:31:15.000-04:00",
                                        "value": 395
                                    },
                                    {
                                        "date": "2022-05-31T12:36:15.000-04:00",
                                        "value": 224
                                    },
                                    {
                                        "date": "2022-05-31T12:41:15.000-04:00",
                                        "value": 272
                                    },
                                    {
                                        "date": "2022-05-31T12:46:15.000-04:00",
                                        "value": 206
                                    },
                                    {
                                        "date": "2022-05-31T12:51:15.000-04:00",
                                        "value": 399
                                    },
                                    {
                                        "date": "2022-05-31T12:56:15.000-04:00",
                                        "value": 217
                                    },
                                    {
                                        "date": "2022-05-31T13:01:15.000-04:00",
                                        "value": 199
                                    },
                                    {
                                        "date": "2022-05-31T13:06:15.000-04:00",
                                        "value": 372
                                    },
                                    {
                                        "date": "2022-05-31T13:11:15.000-04:00",
                                        "value": 255
                                    },
                                    {
                                        "date": "2022-05-31T13:16:15.000-04:00",
                                        "value": 207
                                    },
                                    {
                                        "date": "2022-05-31T13:21:15.000-04:00",
                                        "value": 336
                                    },
                                    {
                                        "date": "2022-05-31T13:26:15.000-04:00",
                                        "value": 357
                                    },
                                    {
                                        "date": "2022-05-31T13:31:15.000-04:00",
                                        "value": 269
                                    },
                                    {
                                        "date": "2022-05-31T13:36:15.000-04:00",
                                        "value": 338
                                    },
                                    {
                                        "date": "2022-05-31T13:41:15.000-04:00",
                                        "value": 351
                                    },
                                    {
                                        "date": "2022-05-31T13:46:15.000-04:00",
                                        "value": 305
                                    },
                                    {
                                        "date": "2022-05-31T13:51:15.000-04:00",
                                        "value": 301
                                    },
                                    {
                                        "date": "2022-05-31T13:56:15.000-04:00",
                                        "value": 319
                                    },
                                    {
                                        "date": "2022-05-31T14:01:15.000-04:00",
                                        "value": 216
                                    },
                                    {
                                        "date": "2022-05-31T14:06:15.000-04:00",
                                        "value": 283
                                    },
                                    {
                                        "date": "2022-05-31T14:11:17.000-04:00",
                                        "value": 307
                                    },
                                    {
                                        "date": "2022-05-31T14:16:15.000-04:00",
                                        "value": 279
                                    },
                                    {
                                        "date": "2022-05-31T14:21:15.000-04:00",
                                        "value": 230
                                    },
                                    {
                                        "date": "2022-05-31T14:26:15.000-04:00",
                                        "value": 217
                                    },
                                    {
                                        "date": "2022-05-31T14:31:15.000-04:00",
                                        "value": 226
                                    },
                                    {
                                        "date": "2022-05-31T14:36:15.000-04:00",
                                        "value": 300
                                    },
                                    {
                                        "date": "2022-05-31T14:41:16.000-04:00",
                                        "value": 255
                                    },
                                    {
                                        "date": "2022-05-31T14:46:15.000-04:00",
                                        "value": 372
                                    },
                                    {
                                        "date": "2022-05-31T14:51:16.000-04:00",
                                        "value": 258
                                    },
                                    {
                                        "date": "2022-05-31T14:56:15.000-04:00",
                                        "value": 358
                                    },
                                    {
                                        "date": "2022-05-31T15:01:16.000-04:00",
                                        "value": 258
                                    },
                                    {
                                        "date": "2022-05-31T15:06:19.000-04:00",
                                        "value": 310
                                    },
                                    {
                                        "date": "2022-05-31T15:11:17.000-04:00",
                                        "value": 360
                                    },
                                    {
                                        "date": "2022-05-31T15:16:15.000-04:00",
                                        "value": 222
                                    },
                                    {
                                        "date": "2022-05-31T15:21:15.000-04:00",
                                        "value": 212
                                    },
                                    {
                                        "date": "2022-05-31T15:26:15.000-04:00",
                                        "value": 267
                                    },
                                    {
                                        "date": "2022-05-31T15:31:16.000-04:00",
                                        "value": 298
                                    },
                                    {
                                        "date": "2022-05-31T15:36:16.000-04:00",
                                        "value": 252
                                    },
                                    {
                                        "date": "2022-05-31T15:41:16.000-04:00",
                                        "value": 231
                                    },
                                    {
                                        "date": "2022-05-31T15:46:15.000-04:00",
                                        "value": 395
                                    },
                                    {
                                        "date": "2022-05-31T15:51:15.000-04:00",
                                        "value": 295
                                    },
                                    {
                                        "date": "2022-05-31T15:56:15.000-04:00",
                                        "value": 214
                                    },
                                    {
                                        "date": "2022-05-31T16:01:18.000-04:00",
                                        "value": 273
                                    },
                                    {
                                        "date": "2022-05-31T16:06:15.000-04:00",
                                        "value": 369
                                    },
                                    {
                                        "date": "2022-05-31T16:11:15.000-04:00",
                                        "value": 299
                                    },
                                    {
                                        "date": "2022-05-31T16:16:15.000-04:00",
                                        "value": 249
                                    },
                                    {
                                        "date": "2022-05-31T16:21:15.000-04:00",
                                        "value": 281
                                    },
                                    {
                                        "date": "2022-05-31T16:26:15.000-04:00",
                                        "value": 353
                                    },
                                    {
                                        "date": "2022-05-31T16:31:15.000-04:00",
                                        "value": 251
                                    },
                                    {
                                        "date": "2022-05-31T16:36:15.000-04:00",
                                        "value": 229
                                    },
                                    {
                                        "date": "2022-05-31T16:41:15.000-04:00",
                                        "value": 265
                                    },
                                    {
                                        "date": "2022-05-31T16:46:15.000-04:00",
                                        "value": 262
                                    },
                                    {
                                        "date": "2022-05-31T16:51:15.000-04:00",
                                        "value": 318
                                    },
                                    {
                                        "date": "2022-05-31T16:56:15.000-04:00",
                                        "value": 207
                                    },
                                    {
                                        "date": "2022-05-31T17:01:15.000-04:00",
                                        "value": 366
                                    },
                                    {
                                        "date": "2022-05-31T17:06:15.000-04:00",
                                        "value": 184
                                    },
                                    {
                                        "date": "2022-05-31T17:11:15.000-04:00",
                                        "value": 317
                                    },
                                    {
                                        "date": "2022-05-31T17:16:15.000-04:00",
                                        "value": 391
                                    },
                                    {
                                        "date": "2022-05-31T17:21:15.000-04:00",
                                        "value": 364
                                    },
                                    {
                                        "date": "2022-05-31T17:26:15.000-04:00",
                                        "value": 388
                                    },
                                    {
                                        "date": "2022-05-31T17:31:15.000-04:00",
                                        "value": 189
                                    },
                                    {
                                        "date": "2022-05-31T17:36:15.000-04:00",
                                        "value": 349
                                    },
                                    {
                                        "date": "2022-05-31T17:41:15.000-04:00",
                                        "value": 183
                                    },
                                    {
                                        "date": "2022-05-31T17:46:15.000-04:00",
                                        "value": 318
                                    },
                                    {
                                        "date": "2022-05-31T17:51:15.000-04:00",
                                        "value": 214
                                    },
                                    {
                                        "date": "2022-05-31T17:56:15.000-04:00",
                                        "value": 394
                                    },
                                    {
                                        "date": "2022-05-31T18:01:15.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-05-31T18:06:15.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-31T18:11:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-31T18:16:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-31T18:21:15.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-05-31T18:26:15.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-31T18:31:15.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-05-31T18:36:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-05-31T18:41:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T18:46:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-31T18:51:15.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-05-31T18:56:15.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-05-31T19:01:15.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-31T19:06:15.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-05-31T19:11:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T19:16:15.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-05-31T19:21:15.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-31T19:26:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-05-31T19:31:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-05-31T19:36:16.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-05-31T19:41:15.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-31T19:46:15.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-05-31T19:51:15.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-05-31T19:56:15.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-05-31T20:01:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-05-31T20:06:15.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-05-31T20:11:15.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-05-31T20:16:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-05-31T20:21:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-05-31T20:26:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T20:31:15.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-05-31T20:36:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-05-31T20:41:15.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-05-31T20:46:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-05-31T20:51:15.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-05-31T20:56:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-31T21:01:15.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-05-31T21:06:15.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-05-31T21:11:15.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-05-31T21:16:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-05-31T21:21:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-05-31T21:26:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T21:31:15.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-05-31T21:36:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-31T21:41:15.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-05-31T21:46:15.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-05-31T21:51:15.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-05-31T21:56:15.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-31T22:01:15.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-05-31T22:06:15.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-05-31T22:11:15.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-05-31T22:16:15.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-05-31T22:21:16.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-05-31T22:26:15.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-05-31T22:31:15.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-05-31T22:36:15.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-05-31T22:41:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-05-31T22:46:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-05-31T22:51:15.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-05-31T22:56:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-05-31T23:01:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-05-31T23:06:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-31T23:11:15.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-05-31T23:16:15.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-05-31T23:21:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-05-31T23:26:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-05-31T23:31:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-05-31T23:36:15.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-05-31T23:41:15.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-05-31T23:46:15.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-05-31T23:51:15.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-05-31T23:56:15.000-04:00",
                                        "value": 84
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    },
                    {
                        "date": "2022-06-01",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-06-01T00:00:00.000",
                                    "endDate": "2022-06-01T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-06-01T18:00:00.000",
                                    "endDate": "2022-06-01T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-06-01T21:00:00.000",
                                    "endDate": "2022-06-01T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 130,
                            "data": [
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-06-01T08:00:46.622-04:00",
                                        "displayedDate": "2022-06-01T08:00:46.622-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-06-01T12:48:30.908-04:00",
                                        "displayedDate": "2022-06-01T12:48:30.908-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-06-01T15:22:47.267-04:00",
                                        "displayedDate": "2022-06-01T15:22:47.267-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 50,
                                        "date": "2022-06-01T18:27:56.092-04:00",
                                        "displayedDate": "2022-06-01T18:27:56.092-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 15.2,
                            "data": [
                                [
                                    {
                                        "value": 0.4,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "correctionOnly",
                                        "date": "2022-06-01T00:14:36.615-04:00",
                                        "displayedDate": "2022-06-01T00:14:36.615-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3.4,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-01T08:00:46.622-04:00",
                                        "displayedDate": "2022-06-01T08:00:46.622-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2.2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-01T12:48:30.908-04:00",
                                        "displayedDate": "2022-06-01T12:48:30.908-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3.5,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-01T15:22:47.267-04:00",
                                        "displayedDate": "2022-06-01T15:22:47.267-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 5.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-01T18:27:56.092-04:00",
                                        "displayedDate": "2022-06-01T18:27:56.092-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 13.4
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-01T00:00:00.000-04:00",
                                    "endDate": "2022-06-01T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T00:16:15.000-04:00",
                                    "endDate": "2022-06-01T00:46:15.000-04:00"
                                },
                                {
                                    "value": "maxDelivery",
                                    "startDate": "2022-06-01T01:21:15.000-04:00",
                                    "endDate": "2022-06-01T01:31:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T05:06:15.000-04:00",
                                    "endDate": "2022-06-01T05:36:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T06:01:15.000-04:00",
                                    "endDate": "2022-06-01T06:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T07:41:15.000-04:00",
                                    "endDate": "2022-06-01T08:16:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T08:21:15.000-04:00",
                                    "endDate": "2022-06-01T09:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T09:41:15.000-04:00",
                                    "endDate": "2022-06-01T09:51:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T10:06:15.000-04:00",
                                    "endDate": "2022-06-01T10:31:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T12:06:15.000-04:00",
                                    "endDate": "2022-06-01T12:16:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T12:21:15.000-04:00",
                                    "endDate": "2022-06-01T14:11:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T16:26:15.000-04:00",
                                    "endDate": "2022-06-01T16:51:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T18:11:15.000-04:00",
                                    "endDate": "2022-06-01T18:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T19:01:15.000-04:00",
                                    "endDate": "2022-06-01T21:21:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T21:31:14.000-04:00",
                                    "endDate": "2022-06-01T21:41:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-01T22:01:15.000-04:00",
                                    "endDate": "2022-06-01T22:21:15.000-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-06-01T00:01:15.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-06-01T00:06:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-01T00:11:15.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-01T00:16:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-01T00:21:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-01T00:26:15.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-01T00:31:15.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-01T00:36:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-01T00:41:15.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-01T00:46:15.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-01T00:51:15.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-01T00:56:15.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-01T01:01:15.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-01T01:06:15.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-01T01:11:15.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-06-01T01:16:15.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-06-01T01:21:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-01T01:26:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-01T01:31:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-01T01:36:15.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-01T01:41:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-01T01:46:15.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-01T01:51:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-01T01:56:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-01T02:01:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-01T02:06:15.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-01T02:11:15.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-01T02:16:15.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-01T02:21:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-01T02:26:15.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-01T02:31:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-01T02:36:15.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-01T02:41:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-01T02:46:15.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-01T02:51:15.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-01T02:56:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-01T03:01:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-01T03:06:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-01T03:11:15.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-06-01T03:16:15.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-06-01T03:21:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-01T03:26:15.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-01T03:31:15.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-01T03:36:15.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-01T03:41:15.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-06-01T03:46:15.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-01T03:51:15.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-06-01T03:56:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-01T04:01:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-01T04:06:15.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-01T04:11:15.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-01T04:16:15.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-01T04:21:15.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-01T04:26:15.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-01T04:31:15.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-01T04:36:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-01T04:41:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-06-01T04:46:15.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-01T04:51:15.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-01T04:56:15.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-06-01T05:01:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-01T05:06:15.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-01T05:11:15.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-01T05:16:15.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-01T05:21:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-06-01T05:26:15.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-06-01T05:31:15.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-01T05:36:15.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-01T05:41:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-01T05:46:15.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-01T05:51:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-01T05:56:15.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-01T06:01:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-01T06:06:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-01T06:11:15.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-01T06:16:15.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-01T06:21:15.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-01T06:26:15.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-01T06:31:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-01T06:36:15.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-01T06:41:15.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-01T06:46:15.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-01T06:51:15.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-01T06:56:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-01T07:01:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-01T07:06:15.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-01T07:11:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-06-01T07:16:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-01T07:21:15.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-06-01T07:26:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-01T07:31:15.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-06-01T07:36:15.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-01T07:41:15.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-01T07:46:15.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-06-01T07:51:15.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-01T07:56:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-01T08:01:15.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-01T08:06:15.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-01T08:11:15.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-01T08:16:15.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-01T08:21:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-01T08:26:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-01T08:31:15.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-01T08:36:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-01T08:41:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-01T08:46:15.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-01T08:51:15.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-06-01T08:56:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-01T09:01:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-01T09:06:15.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-01T09:11:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-01T09:16:15.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-01T09:21:16.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-01T09:26:15.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-06-01T09:31:15.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-01T09:36:15.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-01T09:41:15.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-01T09:46:15.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-01T09:51:15.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-06-01T09:56:15.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-01T10:01:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-01T10:06:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-01T10:11:15.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-01T10:16:15.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-01T10:21:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-01T10:26:15.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-01T10:31:15.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-06-01T10:36:15.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-01T10:41:15.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-06-01T10:46:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-01T10:51:17.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-01T10:56:15.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-01T11:01:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-01T11:06:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-01T11:11:15.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-01T11:16:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-01T11:21:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-01T11:26:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-01T11:31:15.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-01T11:36:15.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-01T11:41:15.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-01T11:46:15.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-01T11:51:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-01T11:56:15.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-01T12:01:15.000-04:00",
                                        "value": 316
                                    },
                                    {
                                        "date": "2022-06-01T12:06:15.000-04:00",
                                        "value": 221
                                    },
                                    {
                                        "date": "2022-06-01T12:11:15.000-04:00",
                                        "value": 211
                                    },
                                    {
                                        "date": "2022-06-01T12:16:15.000-04:00",
                                        "value": 310
                                    },
                                    {
                                        "date": "2022-06-01T12:21:15.000-04:00",
                                        "value": 383
                                    },
                                    {
                                        "date": "2022-06-01T12:26:15.000-04:00",
                                        "value": 333
                                    },
                                    {
                                        "date": "2022-06-01T12:31:15.000-04:00",
                                        "value": 341
                                    },
                                    {
                                        "date": "2022-06-01T12:36:15.000-04:00",
                                        "value": 366
                                    },
                                    {
                                        "date": "2022-06-01T12:41:15.000-04:00",
                                        "value": 234
                                    },
                                    {
                                        "date": "2022-06-01T12:46:15.000-04:00",
                                        "value": 285
                                    },
                                    {
                                        "date": "2022-06-01T12:51:15.000-04:00",
                                        "value": 209
                                    },
                                    {
                                        "date": "2022-06-01T12:56:15.000-04:00",
                                        "value": 248
                                    },
                                    {
                                        "date": "2022-06-01T13:01:15.000-04:00",
                                        "value": 309
                                    },
                                    {
                                        "date": "2022-06-01T13:06:15.000-04:00",
                                        "value": 284
                                    },
                                    {
                                        "date": "2022-06-01T13:11:15.000-04:00",
                                        "value": 375
                                    },
                                    {
                                        "date": "2022-06-01T13:16:15.000-04:00",
                                        "value": 187
                                    },
                                    {
                                        "date": "2022-06-01T13:21:15.000-04:00",
                                        "value": 193
                                    },
                                    {
                                        "date": "2022-06-01T13:26:15.000-04:00",
                                        "value": 301
                                    },
                                    {
                                        "date": "2022-06-01T13:31:15.000-04:00",
                                        "value": 289
                                    },
                                    {
                                        "date": "2022-06-01T13:36:17.000-04:00",
                                        "value": 184
                                    },
                                    {
                                        "date": "2022-06-01T13:41:15.000-04:00",
                                        "value": 281
                                    },
                                    {
                                        "date": "2022-06-01T13:46:15.000-04:00",
                                        "value": 354
                                    },
                                    {
                                        "date": "2022-06-01T13:51:15.000-04:00",
                                        "value": 282
                                    },
                                    {
                                        "date": "2022-06-01T13:56:15.000-04:00",
                                        "value": 182
                                    },
                                    {
                                        "date": "2022-06-01T14:01:15.000-04:00",
                                        "value": 208
                                    },
                                    {
                                        "date": "2022-06-01T14:06:15.000-04:00",
                                        "value": 340
                                    },
                                    {
                                        "date": "2022-06-01T14:11:15.000-04:00",
                                        "value": 357
                                    },
                                    {
                                        "date": "2022-06-01T14:16:15.000-04:00",
                                        "value": 276
                                    },
                                    {
                                        "date": "2022-06-01T14:21:15.000-04:00",
                                        "value": 261
                                    },
                                    {
                                        "date": "2022-06-01T14:26:15.000-04:00",
                                        "value": 187
                                    },
                                    {
                                        "date": "2022-06-01T14:31:15.000-04:00",
                                        "value": 215
                                    },
                                    {
                                        "date": "2022-06-01T14:36:15.000-04:00",
                                        "value": 368
                                    },
                                    {
                                        "date": "2022-06-01T14:41:17.000-04:00",
                                        "value": 318
                                    },
                                    {
                                        "date": "2022-06-01T14:46:15.000-04:00",
                                        "value": 324
                                    },
                                    {
                                        "date": "2022-06-01T14:51:15.000-04:00",
                                        "value": 371
                                    },
                                    {
                                        "date": "2022-06-01T14:56:15.000-04:00",
                                        "value": 358
                                    },
                                    {
                                        "date": "2022-06-01T15:01:15.000-04:00",
                                        "value": 283
                                    },
                                    {
                                        "date": "2022-06-01T15:06:15.000-04:00",
                                        "value": 355
                                    },
                                    {
                                        "date": "2022-06-01T15:11:15.000-04:00",
                                        "value": 224
                                    },
                                    {
                                        "date": "2022-06-01T15:16:15.000-04:00",
                                        "value": 377
                                    },
                                    {
                                        "date": "2022-06-01T15:21:15.000-04:00",
                                        "value": 370
                                    },
                                    {
                                        "date": "2022-06-01T15:26:15.000-04:00",
                                        "value": 257
                                    },
                                    {
                                        "date": "2022-06-01T15:31:15.000-04:00",
                                        "value": 269
                                    },
                                    {
                                        "date": "2022-06-01T15:36:15.000-04:00",
                                        "value": 386
                                    },
                                    {
                                        "date": "2022-06-01T15:41:15.000-04:00",
                                        "value": 257
                                    },
                                    {
                                        "date": "2022-06-01T15:46:17.000-04:00",
                                        "value": 339
                                    },
                                    {
                                        "date": "2022-06-01T15:51:15.000-04:00",
                                        "value": 321
                                    },
                                    {
                                        "date": "2022-06-01T15:56:15.000-04:00",
                                        "value": 281
                                    },
                                    {
                                        "date": "2022-06-01T16:01:15.000-04:00",
                                        "value": 307
                                    },
                                    {
                                        "date": "2022-06-01T16:06:15.000-04:00",
                                        "value": 219
                                    },
                                    {
                                        "date": "2022-06-01T16:11:15.000-04:00",
                                        "value": 206
                                    },
                                    {
                                        "date": "2022-06-01T16:16:15.000-04:00",
                                        "value": 395
                                    },
                                    {
                                        "date": "2022-06-01T16:21:15.000-04:00",
                                        "value": 375
                                    },
                                    {
                                        "date": "2022-06-01T16:26:15.000-04:00",
                                        "value": 347
                                    },
                                    {
                                        "date": "2022-06-01T16:31:15.000-04:00",
                                        "value": 242
                                    },
                                    {
                                        "date": "2022-06-01T16:36:15.000-04:00",
                                        "value": 279
                                    },
                                    {
                                        "date": "2022-06-01T16:41:15.000-04:00",
                                        "value": 359
                                    },
                                    {
                                        "date": "2022-06-01T16:46:15.000-04:00",
                                        "value": 388
                                    },
                                    {
                                        "date": "2022-06-01T16:51:15.000-04:00",
                                        "value": 340
                                    },
                                    {
                                        "date": "2022-06-01T16:56:15.000-04:00",
                                        "value": 273
                                    },
                                    {
                                        "date": "2022-06-01T17:01:15.000-04:00",
                                        "value": 282
                                    },
                                    {
                                        "date": "2022-06-01T17:06:15.000-04:00",
                                        "value": 208
                                    },
                                    {
                                        "date": "2022-06-01T17:11:15.000-04:00",
                                        "value": 287
                                    },
                                    {
                                        "date": "2022-06-01T17:16:15.000-04:00",
                                        "value": 293
                                    },
                                    {
                                        "date": "2022-06-01T17:21:15.000-04:00",
                                        "value": 346
                                    },
                                    {
                                        "date": "2022-06-01T17:26:15.000-04:00",
                                        "value": 286
                                    },
                                    {
                                        "date": "2022-06-01T17:31:15.000-04:00",
                                        "value": 298
                                    },
                                    {
                                        "date": "2022-06-01T17:36:15.000-04:00",
                                        "value": 289
                                    },
                                    {
                                        "date": "2022-06-01T17:41:15.000-04:00",
                                        "value": 357
                                    },
                                    {
                                        "date": "2022-06-01T17:46:15.000-04:00",
                                        "value": 366
                                    },
                                    {
                                        "date": "2022-06-01T17:51:15.000-04:00",
                                        "value": 241
                                    },
                                    {
                                        "date": "2022-06-01T17:56:15.000-04:00",
                                        "value": 258
                                    },
                                    {
                                        "date": "2022-06-01T18:01:15.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-06-01T18:06:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-01T18:11:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-01T18:16:15.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-06-01T18:21:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-01T18:26:15.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-01T18:31:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-01T18:36:15.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-01T18:41:15.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-06-01T18:46:15.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-01T18:51:15.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-01T18:56:15.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-01T19:01:15.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-01T19:06:15.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-06-01T19:11:15.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-01T19:16:15.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-01T19:21:15.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-06-01T19:26:15.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-01T19:31:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-01T19:36:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-01T19:41:15.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-01T19:46:15.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-01T19:51:15.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-01T19:56:15.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-01T20:01:15.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-01T20:06:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-01T20:11:15.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-01T20:16:15.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-01T20:21:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-01T20:26:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-01T20:31:15.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-06-01T20:36:15.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-01T20:41:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-01T20:46:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-01T20:51:15.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-01T20:56:15.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-01T21:01:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-01T21:06:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-01T21:11:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-01T21:16:15.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-01T21:21:15.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-01T21:26:15.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-01T21:31:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-06-01T21:36:15.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-01T21:41:15.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-01T21:46:15.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-01T21:51:15.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-01T21:56:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-01T22:01:15.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-01T22:06:15.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-01T22:11:15.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-01T22:16:15.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-01T22:21:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-06-01T22:26:15.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-01T22:31:15.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-06-01T22:36:15.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-01T22:41:15.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-01T22:46:15.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-06-01T22:51:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-01T22:56:15.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-01T23:01:15.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-06-01T23:06:15.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-06-01T23:11:15.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-01T23:16:15.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-06-01T23:21:15.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-01T23:26:15.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-01T23:31:15.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-06-01T23:36:15.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-01T23:41:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-01T23:46:15.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-06-01T23:51:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-01T23:56:15.000-04:00",
                                        "value": 89
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    },
                    {
                        "date": "2022-06-02",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-06-02T00:00:00.000",
                                    "endDate": "2022-06-02T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-06-02T18:00:00.000",
                                    "endDate": "2022-06-02T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-06-02T21:00:00.000",
                                    "endDate": "2022-06-02T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 136,
                            "data": [
                                [
                                    {
                                        "value": 23,
                                        "date": "2022-06-02T06:35:57.865-04:00",
                                        "displayedDate": "2022-06-02T06:35:57.865-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 13,
                                        "date": "2022-06-02T11:29:33.906-04:00",
                                        "displayedDate": "2022-06-02T11:29:33.906-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-06-02T13:17:18.371-04:00",
                                        "displayedDate": "2022-06-02T13:17:18.371-04:00"
                                    },
                                    {
                                        "value": 10,
                                        "date": "2022-06-02T13:26:46.940-04:00",
                                        "displayedDate": "2022-06-02T14:02:18.371-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-06-02T18:33:07.914-04:00",
                                        "displayedDate": "2022-06-02T18:33:07.914-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-06-02T21:04:26.586-04:00",
                                        "displayedDate": "2022-06-02T21:04:26.586-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 13.1,
                            "data": [
                                [
                                    {
                                        "value": 2.9,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-02T06:35:57.865-04:00",
                                        "displayedDate": "2022-06-02T06:35:57.865-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-02T11:29:33.906-04:00",
                                        "displayedDate": "2022-06-02T11:29:33.906-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3.2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-02T13:17:18.371-04:00",
                                        "displayedDate": "2022-06-02T13:17:18.371-04:00"
                                    },
                                    {
                                        "value": 1.1,
                                        "isValueDisplayed": false,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-02T13:26:46.940-04:00",
                                        "displayedDate": "2022-06-02T13:37:18.371-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-02T18:33:07.914-04:00",
                                        "displayedDate": "2022-06-02T18:33:07.914-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2.3,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-02T21:04:26.586-04:00",
                                        "displayedDate": "2022-06-02T21:04:26.586-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 12.3
                        },
                        "podChange": {
                            "data": [
                                {
                                    "deactivatedDate": "2022-06-02T23:45:17.973-04:00",
                                    "activatedDate": "2022-06-03T00:30:17.973-04:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-06-02T23:45:17.973",
                                    "displayedEndDate": "2022-06-02T23:59:59.999",
                                    "isIconDisplayed": false
                                }
                            ]
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-02T00:00:00.000-04:00",
                                    "endDate": "2022-06-02T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T03:26:15.000-04:00",
                                    "endDate": "2022-06-02T03:46:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T05:46:15.000-04:00",
                                    "endDate": "2022-06-02T06:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T06:56:15.000-04:00",
                                    "endDate": "2022-06-02T08:16:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T10:21:15.000-04:00",
                                    "endDate": "2022-06-02T11:31:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T11:46:15.000-04:00",
                                    "endDate": "2022-06-02T12:21:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T13:01:15.000-04:00",
                                    "endDate": "2022-06-02T13:41:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T14:31:14.000-04:00",
                                    "endDate": "2022-06-02T14:51:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T15:06:16.000-04:00",
                                    "endDate": "2022-06-02T15:16:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T16:51:14.000-04:00",
                                    "endDate": "2022-06-02T19:46:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-02T20:16:14.000-04:00",
                                    "endDate": "2022-06-02T21:31:14.000-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-06-02T00:01:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-02T00:06:15.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-02T00:11:15.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-02T00:16:15.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-06-02T00:21:15.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-02T00:26:15.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-02T00:31:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-02T00:36:15.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-02T00:41:15.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-02T00:46:15.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-02T00:51:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-02T00:56:15.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-02T01:01:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-02T01:06:15.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-02T01:11:15.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-02T01:16:15.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-02T01:21:15.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-02T01:26:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-02T01:31:15.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-06-02T01:36:15.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-02T01:41:15.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-06-02T01:46:15.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-02T01:51:15.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-06-02T01:56:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-02T02:01:15.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-02T02:06:15.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-02T02:11:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-02T02:16:15.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-02T02:21:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-02T02:26:15.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-02T02:31:15.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-02T02:36:15.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-02T02:41:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-02T02:46:15.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-02T02:51:15.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-02T02:56:15.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-02T03:01:15.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-02T03:06:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-02T03:11:15.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-02T03:16:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-02T03:21:15.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-02T03:26:15.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-02T03:31:15.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-02T03:36:14.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-02T03:41:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-02T03:46:15.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-02T03:51:15.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-02T03:56:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-02T04:01:15.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-02T04:06:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-02T04:11:15.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-06-02T04:16:15.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-02T04:21:15.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-02T04:26:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-02T04:31:14.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-02T04:36:15.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-06-02T04:41:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-02T04:46:15.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-02T04:51:15.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-02T04:56:15.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-02T05:01:15.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-06-02T05:06:15.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-02T05:11:15.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-02T05:16:15.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-06-02T05:21:15.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-02T05:26:15.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-02T05:31:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-02T05:36:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-02T05:41:15.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-02T05:46:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-02T05:51:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-02T05:56:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-02T06:01:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-02T06:06:15.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-02T06:11:15.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-02T06:16:15.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-02T06:21:15.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-02T06:26:15.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-02T06:31:15.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-06-02T06:36:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-02T06:41:15.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-02T06:46:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-02T06:51:15.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-02T06:56:15.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-02T07:01:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-02T07:06:15.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-06-02T07:11:15.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-06-02T07:16:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-02T07:21:14.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-02T07:26:15.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-02T07:31:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-02T07:36:15.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-02T07:41:14.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-06-02T07:46:15.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-02T07:51:15.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-02T07:56:15.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-02T08:01:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-02T08:06:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-02T08:11:15.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-02T08:16:15.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-02T08:21:15.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-06-02T08:26:15.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-02T08:31:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-02T08:36:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-02T08:41:14.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-02T08:46:14.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-06-02T08:51:15.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-06-02T08:56:14.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-06-02T09:01:15.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-02T09:06:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-02T09:11:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-02T09:16:15.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-02T09:21:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-02T09:26:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-02T09:31:15.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-02T09:36:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-02T09:41:14.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-02T09:46:15.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-02T09:51:15.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-02T09:56:15.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-02T10:01:15.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-02T10:06:15.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-02T10:11:16.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-02T10:16:15.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-02T10:21:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-02T10:26:15.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-02T10:31:15.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-02T10:36:15.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-02T10:41:15.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-02T10:46:14.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-02T10:51:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-02T10:56:15.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-02T11:01:15.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-02T11:06:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-02T11:11:15.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-02T11:16:15.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-02T11:21:15.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-02T11:26:14.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-02T11:31:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-02T11:36:15.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-06-02T11:41:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-02T11:46:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-02T11:51:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-02T11:56:15.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-02T12:01:15.000-04:00",
                                        "value": 196
                                    },
                                    {
                                        "date": "2022-06-02T12:06:15.000-04:00",
                                        "value": 376
                                    },
                                    {
                                        "date": "2022-06-02T12:11:15.000-04:00",
                                        "value": 333
                                    },
                                    {
                                        "date": "2022-06-02T12:16:14.000-04:00",
                                        "value": 271
                                    },
                                    {
                                        "date": "2022-06-02T12:21:14.000-04:00",
                                        "value": 349
                                    },
                                    {
                                        "date": "2022-06-02T12:26:14.000-04:00",
                                        "value": 313
                                    },
                                    {
                                        "date": "2022-06-02T12:31:15.000-04:00",
                                        "value": 312
                                    },
                                    {
                                        "date": "2022-06-02T12:36:15.000-04:00",
                                        "value": 299
                                    },
                                    {
                                        "date": "2022-06-02T12:41:14.000-04:00",
                                        "value": 319
                                    },
                                    {
                                        "date": "2022-06-02T12:46:14.000-04:00",
                                        "value": 237
                                    },
                                    {
                                        "date": "2022-06-02T12:51:15.000-04:00",
                                        "value": 394
                                    },
                                    {
                                        "date": "2022-06-02T12:56:15.000-04:00",
                                        "value": 343
                                    },
                                    {
                                        "date": "2022-06-02T13:01:15.000-04:00",
                                        "value": 279
                                    },
                                    {
                                        "date": "2022-06-02T13:06:15.000-04:00",
                                        "value": 294
                                    },
                                    {
                                        "date": "2022-06-02T13:11:15.000-04:00",
                                        "value": 240
                                    },
                                    {
                                        "date": "2022-06-02T13:16:15.000-04:00",
                                        "value": 353
                                    },
                                    {
                                        "date": "2022-06-02T13:21:15.000-04:00",
                                        "value": 197
                                    },
                                    {
                                        "date": "2022-06-02T13:26:15.000-04:00",
                                        "value": 382
                                    },
                                    {
                                        "date": "2022-06-02T13:31:15.000-04:00",
                                        "value": 382
                                    },
                                    {
                                        "date": "2022-06-02T13:36:16.000-04:00",
                                        "value": 340
                                    },
                                    {
                                        "date": "2022-06-02T13:41:15.000-04:00",
                                        "value": 362
                                    },
                                    {
                                        "date": "2022-06-02T13:46:14.000-04:00",
                                        "value": 396
                                    },
                                    {
                                        "date": "2022-06-02T13:51:14.000-04:00",
                                        "value": 187
                                    },
                                    {
                                        "date": "2022-06-02T13:56:14.000-04:00",
                                        "value": 234
                                    },
                                    {
                                        "date": "2022-06-02T14:01:17.000-04:00",
                                        "value": 244
                                    },
                                    {
                                        "date": "2022-06-02T14:06:15.000-04:00",
                                        "value": 242
                                    },
                                    {
                                        "date": "2022-06-02T14:11:14.000-04:00",
                                        "value": 357
                                    },
                                    {
                                        "date": "2022-06-02T14:16:14.000-04:00",
                                        "value": 227
                                    },
                                    {
                                        "date": "2022-06-02T14:21:15.000-04:00",
                                        "value": 283
                                    },
                                    {
                                        "date": "2022-06-02T14:26:15.000-04:00",
                                        "value": 221
                                    },
                                    {
                                        "date": "2022-06-02T14:31:14.000-04:00",
                                        "value": 291
                                    },
                                    {
                                        "date": "2022-06-02T14:36:15.000-04:00",
                                        "value": 225
                                    },
                                    {
                                        "date": "2022-06-02T14:41:14.000-04:00",
                                        "value": 347
                                    },
                                    {
                                        "date": "2022-06-02T14:46:15.000-04:00",
                                        "value": 211
                                    },
                                    {
                                        "date": "2022-06-02T14:51:15.000-04:00",
                                        "value": 239
                                    },
                                    {
                                        "date": "2022-06-02T14:56:14.000-04:00",
                                        "value": 380
                                    },
                                    {
                                        "date": "2022-06-02T15:01:15.000-04:00",
                                        "value": 294
                                    },
                                    {
                                        "date": "2022-06-02T15:06:16.000-04:00",
                                        "value": 336
                                    },
                                    {
                                        "date": "2022-06-02T15:11:15.000-04:00",
                                        "value": 351
                                    },
                                    {
                                        "date": "2022-06-02T15:16:14.000-04:00",
                                        "value": 272
                                    },
                                    {
                                        "date": "2022-06-02T15:21:14.000-04:00",
                                        "value": 310
                                    },
                                    {
                                        "date": "2022-06-02T15:26:14.000-04:00",
                                        "value": 354
                                    },
                                    {
                                        "date": "2022-06-02T15:31:15.000-04:00",
                                        "value": 184
                                    },
                                    {
                                        "date": "2022-06-02T15:36:14.000-04:00",
                                        "value": 209
                                    },
                                    {
                                        "date": "2022-06-02T15:41:15.000-04:00",
                                        "value": 398
                                    },
                                    {
                                        "date": "2022-06-02T15:46:14.000-04:00",
                                        "value": 363
                                    },
                                    {
                                        "date": "2022-06-02T15:51:15.000-04:00",
                                        "value": 364
                                    },
                                    {
                                        "date": "2022-06-02T15:56:14.000-04:00",
                                        "value": 214
                                    },
                                    {
                                        "date": "2022-06-02T16:01:15.000-04:00",
                                        "value": 205
                                    },
                                    {
                                        "date": "2022-06-02T16:06:14.000-04:00",
                                        "value": 196
                                    },
                                    {
                                        "date": "2022-06-02T16:11:14.000-04:00",
                                        "value": 288
                                    },
                                    {
                                        "date": "2022-06-02T16:16:15.000-04:00",
                                        "value": 337
                                    },
                                    {
                                        "date": "2022-06-02T16:21:15.000-04:00",
                                        "value": 355
                                    },
                                    {
                                        "date": "2022-06-02T16:26:14.000-04:00",
                                        "value": 330
                                    },
                                    {
                                        "date": "2022-06-02T16:31:14.000-04:00",
                                        "value": 238
                                    },
                                    {
                                        "date": "2022-06-02T16:36:14.000-04:00",
                                        "value": 270
                                    },
                                    {
                                        "date": "2022-06-02T16:41:14.000-04:00",
                                        "value": 222
                                    },
                                    {
                                        "date": "2022-06-02T16:46:14.000-04:00",
                                        "value": 357
                                    },
                                    {
                                        "date": "2022-06-02T16:51:14.000-04:00",
                                        "value": 345
                                    },
                                    {
                                        "date": "2022-06-02T16:56:15.000-04:00",
                                        "value": 323
                                    },
                                    {
                                        "date": "2022-06-02T17:01:15.000-04:00",
                                        "value": 361
                                    },
                                    {
                                        "date": "2022-06-02T17:06:14.000-04:00",
                                        "value": 342
                                    },
                                    {
                                        "date": "2022-06-02T17:11:15.000-04:00",
                                        "value": 377
                                    },
                                    {
                                        "date": "2022-06-02T17:16:14.000-04:00",
                                        "value": 308
                                    },
                                    {
                                        "date": "2022-06-02T17:21:14.000-04:00",
                                        "value": 296
                                    },
                                    {
                                        "date": "2022-06-02T17:26:15.000-04:00",
                                        "value": 249
                                    },
                                    {
                                        "date": "2022-06-02T17:31:15.000-04:00",
                                        "value": 291
                                    },
                                    {
                                        "date": "2022-06-02T17:36:15.000-04:00",
                                        "value": 283
                                    },
                                    {
                                        "date": "2022-06-02T17:41:14.000-04:00",
                                        "value": 307
                                    },
                                    {
                                        "date": "2022-06-02T17:46:15.000-04:00",
                                        "value": 265
                                    },
                                    {
                                        "date": "2022-06-02T17:51:14.000-04:00",
                                        "value": 222
                                    },
                                    {
                                        "date": "2022-06-02T17:56:14.000-04:00",
                                        "value": 233
                                    },
                                    {
                                        "date": "2022-06-02T18:01:14.000-04:00",
                                        "value": 235
                                    },
                                    {
                                        "date": "2022-06-02T18:06:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-02T18:11:15.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-02T18:16:15.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-02T18:21:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-02T18:26:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-02T18:31:15.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-06-02T18:36:15.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-02T18:41:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-02T18:46:14.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-02T18:51:15.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-02T18:56:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-02T19:01:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-02T19:06:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-02T19:11:15.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-06-02T19:16:14.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-02T19:21:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-02T19:26:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-06-02T19:31:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-02T19:36:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-02T19:41:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-02T19:46:14.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-02T19:51:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-02T19:56:14.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-06-02T20:01:15.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-02T20:06:15.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-02T20:11:25.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-02T20:16:14.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-02T20:21:14.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-02T20:26:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-02T20:31:14.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-02T20:36:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-02T20:41:15.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-02T20:46:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-02T20:51:15.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-06-02T20:56:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-02T21:01:15.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-02T21:06:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-02T21:11:15.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-02T21:16:14.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-02T21:21:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-02T21:26:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-02T21:31:14.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-02T21:36:15.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-02T21:41:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-02T21:46:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-02T21:51:14.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-02T21:56:14.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-02T22:01:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-02T22:06:14.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-02T22:11:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-02T22:16:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-02T22:21:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-02T22:26:14.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-02T22:31:15.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-02T22:36:15.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-02T22:41:15.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-06-02T22:46:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-02T22:51:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-02T22:56:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-02T23:01:14.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-06-02T23:06:15.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-02T23:11:15.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-02T23:16:14.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-02T23:21:15.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-02T23:26:14.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-06-02T23:31:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-02T23:36:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-02T23:41:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-02T23:46:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-02T23:51:15.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-02T23:56:18.000-04:00",
                                        "value": 161
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    },
                    {
                        "date": "2022-06-03",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-06-03T00:00:00.000",
                                    "endDate": "2022-06-03T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-06-03T18:00:00.000",
                                    "endDate": "2022-06-03T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-06-03T21:00:00.000",
                                    "endDate": "2022-06-03T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 95,
                            "data": [
                                [
                                    {
                                        "value": 15,
                                        "date": "2022-06-03T06:13:27.103-04:00",
                                        "displayedDate": "2022-06-03T06:13:27.103-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 25,
                                        "date": "2022-06-03T12:41:00.810-04:00",
                                        "displayedDate": "2022-06-03T12:41:00.810-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 10,
                                        "date": "2022-06-03T16:26:41.346-04:00",
                                        "displayedDate": "2022-06-03T16:26:41.346-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-06-03T19:09:46.184-04:00",
                                        "displayedDate": "2022-06-03T19:09:46.184-04:00"
                                    },
                                    {
                                        "value": 25,
                                        "date": "2022-06-03T19:17:12.822-04:00",
                                        "displayedDate": "2022-06-03T19:54:46.184-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 9.6,
                            "data": [
                                [
                                    {
                                        "value": 0.1,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "correctionOnly",
                                        "date": "2022-06-03T00:37:06.589-04:00",
                                        "displayedDate": "2022-06-03T00:37:06.589-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.8,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-03T06:13:27.103-04:00",
                                        "displayedDate": "2022-06-03T06:13:27.103-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-03T12:41:00.810-04:00",
                                        "displayedDate": "2022-06-03T12:41:00.810-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 0.8,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-03T16:26:41.346-04:00",
                                        "displayedDate": "2022-06-03T16:26:41.346-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 1.6,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-03T19:09:46.184-04:00",
                                        "displayedDate": "2022-06-03T19:09:46.184-04:00"
                                    },
                                    {
                                        "value": 2.8,
                                        "isValueDisplayed": false,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-03T19:17:12.822-04:00",
                                        "displayedDate": "2022-06-03T19:29:46.184-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 10
                        },
                        "podChange": {
                            "data": [
                                {
                                    "deactivatedDate": "2022-06-02T23:45:17.973-04:00",
                                    "activatedDate": "2022-06-03T00:30:17.973-04:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-06-03T00:00:00.000",
                                    "displayedEndDate": "2022-06-03T00:30:17.973",
                                    "isIconDisplayed": true
                                },
                                {
                                    "deactivatedDate": "2022-06-03T16:37:47.096-04:00",
                                    "activatedDate": "2022-06-03T17:09:11.077-04:00",
                                    "isDeactivatedDateEstimated": false,
                                    "displayedStartDate": "2022-06-03T16:37:47.096",
                                    "displayedEndDate": "2022-06-03T17:09:11.077",
                                    "isIconDisplayed": true
                                }
                            ]
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-03T00:00:00.000-04:00",
                                    "endDate": "2022-06-03T16:36:17.000-04:00"
                                },
                                {
                                    "value": "manual",
                                    "startDate": "2022-06-03T16:36:17.000-04:00",
                                    "endDate": "2022-06-03T16:37:23.000-04:00"
                                },
                                {
                                    "value": "manual",
                                    "startDate": "2022-06-03T17:06:17.000-04:00",
                                    "endDate": "2022-06-03T18:36:15.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-03T18:36:15.000-04:00",
                                    "endDate": "2022-06-03T23:59:59.999-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T00:36:14.000-04:00",
                                    "endDate": "2022-06-03T00:56:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T01:16:14.000-04:00",
                                    "endDate": "2022-06-03T01:31:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T02:16:14.000-04:00",
                                    "endDate": "2022-06-03T02:41:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T03:36:14.000-04:00",
                                    "endDate": "2022-06-03T04:01:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T05:16:15.000-04:00",
                                    "endDate": "2022-06-03T05:26:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T05:41:14.000-04:00",
                                    "endDate": "2022-06-03T05:51:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T06:06:14.000-04:00",
                                    "endDate": "2022-06-03T07:26:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T07:51:15.000-04:00",
                                    "endDate": "2022-06-03T08:31:15.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T09:26:14.000-04:00",
                                    "endDate": "2022-06-03T10:21:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T11:31:14.000-04:00",
                                    "endDate": "2022-06-03T12:41:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T13:16:14.000-04:00",
                                    "endDate": "2022-06-03T14:06:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T14:41:15.000-04:00",
                                    "endDate": "2022-06-03T15:26:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T15:41:14.000-04:00",
                                    "endDate": "2022-06-03T15:56:14.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T16:11:14.000-04:00",
                                    "endDate": "2022-06-03T16:36:17.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T18:36:15.000-04:00",
                                    "endDate": "2022-06-03T20:31:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-03T20:36:15.000-04:00",
                                    "endDate": "2022-06-03T21:31:16.000-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-06-03T00:01:14.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-06-03T00:06:15.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-03T00:11:15.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-03T00:16:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-03T00:21:15.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-03T00:26:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-03T00:31:15.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-03T00:36:14.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-06-03T00:41:15.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-03T00:46:16.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-03T00:51:14.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-03T00:56:16.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-06-03T01:01:15.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-03T01:06:15.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-03T01:11:14.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-03T01:16:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-03T01:21:15.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-03T01:26:14.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-03T01:31:14.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-03T01:36:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-03T01:41:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-03T01:46:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-03T01:51:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-03T01:56:14.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-03T02:01:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-03T02:06:14.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-03T02:11:15.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-03T02:16:14.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-03T02:21:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-03T02:26:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-03T02:31:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-03T02:36:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-03T02:41:15.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-03T02:46:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-03T02:51:16.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-03T02:56:14.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-03T03:01:15.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-03T03:06:14.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-03T03:11:15.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-03T03:16:15.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-03T03:21:15.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-03T03:26:15.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-03T03:31:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-03T03:36:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-03T03:41:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-03T03:46:14.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-03T03:51:14.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-03T03:56:14.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-03T04:01:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-03T04:06:14.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-03T04:11:16.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-03T04:16:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-03T04:21:14.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-03T04:26:15.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-03T04:31:15.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-03T04:36:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-06-03T04:41:14.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-03T04:46:14.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-03T04:51:15.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-03T04:56:14.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-03T05:01:14.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-06-03T05:06:14.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-03T05:11:14.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-06-03T05:16:15.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-03T05:21:15.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-03T05:26:14.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-03T05:31:14.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-06-03T05:36:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-03T05:41:14.000-04:00",
                                        "value": 127
                                    },
                                    {
                                        "date": "2022-06-03T05:46:15.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-03T05:51:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-03T05:56:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-03T06:01:14.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-03T06:06:14.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-03T06:11:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-03T06:16:14.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-03T06:21:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-03T06:26:14.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-06-03T06:31:14.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-03T06:36:15.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-03T06:41:14.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-03T06:46:14.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-03T06:51:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-06-03T06:56:14.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-03T07:01:15.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-03T07:06:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-03T07:11:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-03T07:16:15.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-03T07:21:16.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-03T07:26:15.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-06-03T07:31:15.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-03T07:36:16.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-03T07:41:14.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-03T07:46:15.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-03T07:51:15.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-03T07:56:14.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-03T08:01:15.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-03T08:06:15.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-03T08:11:15.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-03T08:16:14.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-06-03T08:21:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-03T08:26:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-03T08:31:15.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-03T08:36:15.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-03T08:41:15.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-03T08:46:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-03T08:51:15.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-03T08:56:14.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-03T09:01:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-03T09:06:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-03T09:11:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-03T09:16:14.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-03T09:21:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-03T09:26:14.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-03T09:31:14.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-03T09:36:14.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-03T09:41:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-03T09:46:14.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-03T09:51:15.000-04:00",
                                        "value": 132
                                    },
                                    {
                                        "date": "2022-06-03T09:56:14.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-03T10:01:14.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-03T10:06:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-03T10:11:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-03T10:16:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-03T10:21:14.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-03T10:26:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-03T10:31:14.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-03T10:36:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-03T10:41:14.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-03T10:46:14.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-03T10:51:14.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-06-03T10:56:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-03T11:01:14.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-03T11:06:15.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-03T11:11:14.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-06-03T11:16:14.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-06-03T11:21:15.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-03T11:26:14.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-03T11:31:14.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-03T11:36:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-03T11:41:14.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-03T11:46:14.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-03T11:51:14.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-06-03T11:56:15.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-03T12:01:14.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-03T12:06:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-03T12:11:14.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-03T12:16:14.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-03T12:21:14.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-03T12:26:14.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-06-03T12:31:14.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-03T12:36:14.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-06-03T12:41:14.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-06-03T12:46:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-03T12:51:15.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-03T12:56:14.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-03T13:01:14.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-06-03T13:06:14.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-03T13:11:16.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-03T13:16:14.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-03T13:21:14.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-03T13:26:15.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-03T13:31:14.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-06-03T13:36:14.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-06-03T13:41:14.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-06-03T13:46:14.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-03T13:51:14.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-03T13:56:14.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-03T14:01:14.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-03T14:06:14.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-03T14:11:14.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-03T14:16:14.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-03T14:21:14.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-06-03T14:26:14.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-03T14:31:15.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-03T14:36:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-03T14:41:15.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-06-03T14:46:14.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-03T14:51:14.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-03T14:56:14.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-03T15:01:14.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-03T15:06:15.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-06-03T15:11:14.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-03T15:16:14.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-03T15:21:14.000-04:00",
                                        "value": 178
                                    },
                                    {
                                        "date": "2022-06-03T15:26:14.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-03T15:31:14.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-03T15:36:14.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-03T15:41:14.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-03T15:46:14.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-03T15:51:14.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-03T15:56:14.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-03T16:01:14.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-03T16:06:14.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-03T16:11:14.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-06-03T16:16:14.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-03T16:21:14.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-03T16:26:14.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-03T16:31:17.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-03T16:36:17.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-03T16:37:23.000-04:00",
                                        "value": 175
                                    }
                                ],
                                [
                                    {
                                        "date": "2022-06-03T17:11:17.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-03T17:16:17.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-03T17:21:16.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-03T17:26:16.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-03T17:31:15.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-03T17:36:16.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-03T17:41:15.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-03T17:46:16.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-03T17:51:15.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-03T17:56:16.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-03T18:01:17.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-03T18:06:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-03T18:11:16.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-03T18:16:17.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-03T18:21:16.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-06-03T18:26:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-03T18:31:16.000-04:00",
                                        "value": 145
                                    },
                                    {
                                        "date": "2022-06-03T18:36:15.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-03T18:41:15.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-06-03T18:46:16.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-03T18:51:15.000-04:00",
                                        "value": 157
                                    },
                                    {
                                        "date": "2022-06-03T18:56:16.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-03T19:01:15.000-04:00",
                                        "value": 173
                                    },
                                    {
                                        "date": "2022-06-03T19:06:15.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-03T19:11:16.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-03T19:16:16.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-03T19:21:16.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-03T19:26:16.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-03T19:31:16.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-03T19:36:16.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-03T19:41:16.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-06-03T19:46:15.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-06-03T19:51:16.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-03T19:56:16.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-06-03T20:01:16.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-03T20:06:16.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-06-03T20:11:15.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-03T20:16:16.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-03T20:21:16.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-03T20:26:16.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-03T20:31:16.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-06-03T20:36:15.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-03T20:41:16.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-03T20:46:16.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-03T20:51:16.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-03T20:56:17.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-03T21:01:16.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-03T21:06:15.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-06-03T21:11:16.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-06-03T21:16:16.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-06-03T21:21:16.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-03T21:26:16.000-04:00",
                                        "value": 92
                                    },
                                    {
                                        "date": "2022-06-03T21:31:16.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-03T21:36:16.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-03T21:41:16.000-04:00",
                                        "value": 107
                                    },
                                    {
                                        "date": "2022-06-03T21:46:16.000-04:00",
                                        "value": 143
                                    },
                                    {
                                        "date": "2022-06-03T21:51:16.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-03T21:56:16.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-03T22:01:16.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-03T22:06:16.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-03T22:11:16.000-04:00",
                                        "value": 179
                                    },
                                    {
                                        "date": "2022-06-03T22:16:16.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-03T22:21:16.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-03T22:26:15.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-03T22:31:16.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-06-03T22:36:16.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-03T22:41:16.000-04:00",
                                        "value": 87
                                    },
                                    {
                                        "date": "2022-06-03T22:46:16.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-03T22:51:16.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-06-03T22:56:16.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-06-03T23:01:16.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-06-03T23:06:16.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-06-03T23:11:16.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-03T23:16:16.000-04:00",
                                        "value": 133
                                    },
                                    {
                                        "date": "2022-06-03T23:21:16.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-06-03T23:26:16.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-03T23:31:16.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-03T23:36:16.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-03T23:41:16.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-03T23:46:16.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-03T23:51:15.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-03T23:56:16.000-04:00",
                                        "value": 150
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    },
                    {
                        "date": "2022-06-04",
                        "hasData": true,
                        "utcOffset": {
                            "doesChange": false
                        },
                        "targetGlucose": {
                            "data": [
                                {
                                    "startDate": "2022-06-04T00:00:00.000",
                                    "endDate": "2022-06-04T17:59:59.999",
                                    "value": 110
                                },
                                {
                                    "startDate": "2022-06-04T18:00:00.000",
                                    "endDate": "2022-06-04T20:59:59.999",
                                    "value": 120
                                },
                                {
                                    "startDate": "2022-06-04T21:00:00.000",
                                    "endDate": "2022-06-04T23:59:59.999",
                                    "value": 110
                                }
                            ]
                        },
                        "carbs": {
                            "total": 141,
                            "data": [
                                [
                                    {
                                        "value": 3,
                                        "date": "2022-06-04T06:29:13.777-04:00",
                                        "displayedDate": "2022-06-04T06:29:13.777-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 33,
                                        "date": "2022-06-04T07:22:36.105-04:00",
                                        "displayedDate": "2022-06-04T07:22:36.105-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 40,
                                        "date": "2022-06-04T11:35:11.925-04:00",
                                        "displayedDate": "2022-06-04T11:35:11.925-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 30,
                                        "date": "2022-06-04T14:41:29.461-04:00",
                                        "displayedDate": "2022-06-04T14:41:29.461-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 20,
                                        "date": "2022-06-04T19:12:00.163-04:00",
                                        "displayedDate": "2022-06-04T19:12:00.163-04:00"
                                    },
                                    {
                                        "value": 15,
                                        "date": "2022-06-04T19:22:19.831-04:00",
                                        "displayedDate": "2022-06-04T19:57:00.163-04:00"
                                    }
                                ]
                            ]
                        },
                        "bolus": {
                            "total": 14.5,
                            "data": [
                                [
                                    {
                                        "value": 0.4,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-04T06:29:13.777-04:00",
                                        "displayedDate": "2022-06-04T06:29:13.777-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 3,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-04T07:22:36.105-04:00",
                                        "displayedDate": "2022-06-04T07:22:36.105-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 5,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "down",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-04T11:35:11.925-04:00",
                                        "displayedDate": "2022-06-04T11:35:11.925-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-04T14:41:29.461-04:00",
                                        "displayedDate": "2022-06-04T14:41:29.461-04:00"
                                    }
                                ],
                                [
                                    {
                                        "value": 2.5,
                                        "isValueDisplayed": true,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-04T19:12:00.163-04:00",
                                        "displayedDate": "2022-06-04T19:12:00.163-04:00"
                                    },
                                    {
                                        "value": 1.6,
                                        "isValueDisplayed": false,
                                        "extendedType": "immediate",
                                        "overrideType": "none",
                                        "causeType": "mealOnlyAndMealAndCorrection",
                                        "date": "2022-06-04T19:22:19.831-04:00",
                                        "displayedDate": "2022-06-04T19:32:00.163-04:00"
                                    }
                                ]
                            ]
                        },
                        "basal": {
                            "total": 8.4
                        },
                        "basalMode": {
                            "data": [
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-04T00:00:00.000-04:00",
                                    "endDate": "2022-06-04T07:31:16.000-04:00"
                                },
                                {
                                    "value": "hypoProtect",
                                    "startDate": "2022-06-04T07:31:16.000-04:00",
                                    "endDate": "2022-06-04T08:31:16.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-04T08:31:16.000-04:00",
                                    "endDate": "2022-06-04T08:56:16.000-04:00"
                                },
                                {
                                    "value": "hypoProtect",
                                    "startDate": "2022-06-04T08:56:16.000-04:00",
                                    "endDate": "2022-06-04T10:56:16.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-04T10:56:16.000-04:00",
                                    "endDate": "2022-06-04T15:01:16.000-04:00"
                                },
                                {
                                    "value": "limited",
                                    "startDate": "2022-06-04T15:01:16.000-04:00",
                                    "endDate": "2022-06-04T15:11:16.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-04T15:11:16.000-04:00",
                                    "endDate": "2022-06-04T16:51:16.000-04:00"
                                },
                                {
                                    "value": "hypoProtect",
                                    "startDate": "2022-06-04T16:51:16.000-04:00",
                                    "endDate": "2022-06-04T17:51:16.000-04:00"
                                },
                                {
                                    "value": "automated",
                                    "startDate": "2022-06-04T17:51:16.000-04:00",
                                    "endDate": "2022-06-04T19:56:16.000-04:00"
                                }
                            ]
                        },
                        "basalSubmode": {
                            "data": [
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T03:31:16.000-04:00",
                                    "endDate": "2022-06-04T03:41:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T04:16:16.000-04:00",
                                    "endDate": "2022-06-04T04:21:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T05:51:16.000-04:00",
                                    "endDate": "2022-06-04T07:51:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T08:01:16.000-04:00",
                                    "endDate": "2022-06-04T09:51:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T10:46:16.000-04:00",
                                    "endDate": "2022-06-04T11:06:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T13:46:16.000-04:00",
                                    "endDate": "2022-06-04T14:01:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T14:31:16.000-04:00",
                                    "endDate": "2022-06-04T15:11:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T15:31:16.000-04:00",
                                    "endDate": "2022-06-04T16:21:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T17:21:16.000-04:00",
                                    "endDate": "2022-06-04T17:51:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T18:26:16.000-04:00",
                                    "endDate": "2022-06-04T18:36:16.000-04:00"
                                },
                                {
                                    "value": "insulinPaused",
                                    "startDate": "2022-06-04T19:21:16.000-04:00",
                                    "endDate": "2022-06-04T19:36:16.000-04:00"
                                }
                            ]
                        },
                        "glucose": {
                            "continuousData": [
                                [
                                    {
                                        "date": "2022-06-04T00:01:16.000-04:00",
                                        "value": 129
                                    },
                                    {
                                        "date": "2022-06-04T00:06:16.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-04T00:11:16.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-04T00:16:16.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-04T00:21:16.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-04T00:26:16.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-06-04T00:31:16.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-04T00:36:16.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-04T00:41:16.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-04T00:46:16.000-04:00",
                                        "value": 97
                                    },
                                    {
                                        "date": "2022-06-04T00:51:16.000-04:00",
                                        "value": 119
                                    },
                                    {
                                        "date": "2022-06-04T00:56:16.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-04T01:01:16.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-04T01:06:16.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-04T01:11:16.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-04T01:16:16.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-06-04T01:21:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T01:26:16.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-04T01:31:16.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-04T01:36:16.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-04T01:41:16.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-04T01:46:16.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-04T01:51:16.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-06-04T01:56:16.000-04:00",
                                        "value": 162
                                    },
                                    {
                                        "date": "2022-06-04T02:01:16.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-04T02:06:17.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-04T02:11:16.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-04T02:16:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T02:21:16.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-04T02:26:16.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-04T02:31:16.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-04T02:36:16.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-04T02:41:16.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-04T02:46:16.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-04T02:51:16.000-04:00",
                                        "value": 118
                                    },
                                    {
                                        "date": "2022-06-04T02:56:16.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-06-04T03:01:16.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-06-04T03:06:17.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-04T03:11:16.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-06-04T03:16:16.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-04T03:21:16.000-04:00",
                                        "value": 104
                                    },
                                    {
                                        "date": "2022-06-04T03:26:16.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-04T03:31:16.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-04T03:36:16.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-04T03:41:16.000-04:00",
                                        "value": 73
                                    },
                                    {
                                        "date": "2022-06-04T03:46:16.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-06-04T03:51:16.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-04T03:56:16.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-04T04:01:16.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-06-04T04:06:16.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-04T04:11:16.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-04T04:16:16.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-06-04T04:21:16.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-04T04:26:16.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-06-04T04:31:16.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-04T04:36:16.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-04T04:41:18.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T04:46:19.000-04:00",
                                        "value": 117
                                    },
                                    {
                                        "date": "2022-06-04T04:51:18.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-04T04:56:16.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-04T05:01:16.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-04T05:06:16.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-04T05:11:16.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-04T05:16:16.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-04T05:21:16.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-04T05:26:16.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-06-04T05:31:16.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-04T05:36:16.000-04:00",
                                        "value": 154
                                    },
                                    {
                                        "date": "2022-06-04T05:41:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T05:46:16.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-04T05:51:16.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-04T05:56:16.000-04:00",
                                        "value": 139
                                    },
                                    {
                                        "date": "2022-06-04T06:01:16.000-04:00",
                                        "value": 141
                                    },
                                    {
                                        "date": "2022-06-04T06:06:16.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-04T06:11:16.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-04T06:16:16.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-04T06:21:16.000-04:00",
                                        "value": 125
                                    },
                                    {
                                        "date": "2022-06-04T06:26:16.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-04T06:31:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T06:36:16.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-04T06:41:16.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-04T06:46:16.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-04T06:51:16.000-04:00",
                                        "value": 149
                                    },
                                    {
                                        "date": "2022-06-04T06:56:16.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-04T07:01:16.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-04T07:06:16.000-04:00",
                                        "value": 81
                                    },
                                    {
                                        "date": "2022-06-04T07:11:16.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-06-04T07:16:16.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-04T07:21:16.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-04T07:26:16.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-04T07:31:16.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-04T07:36:16.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-04T07:41:16.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-04T07:46:16.000-04:00",
                                        "value": 96
                                    },
                                    {
                                        "date": "2022-06-04T07:51:16.000-04:00",
                                        "value": 120
                                    },
                                    {
                                        "date": "2022-06-04T07:56:16.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-04T08:01:16.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-04T08:06:16.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-04T08:11:18.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-04T08:16:16.000-04:00",
                                        "value": 108
                                    },
                                    {
                                        "date": "2022-06-04T08:21:16.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-04T08:26:16.000-04:00",
                                        "value": 147
                                    },
                                    {
                                        "date": "2022-06-04T08:31:16.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-04T08:36:16.000-04:00",
                                        "value": 84
                                    },
                                    {
                                        "date": "2022-06-04T08:41:16.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-06-04T08:46:16.000-04:00",
                                        "value": 174
                                    },
                                    {
                                        "date": "2022-06-04T08:51:16.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-04T08:56:16.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-04T09:01:16.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-04T09:06:16.000-04:00",
                                        "value": 103
                                    },
                                    {
                                        "date": "2022-06-04T09:11:16.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-04T09:16:16.000-04:00",
                                        "value": 161
                                    },
                                    {
                                        "date": "2022-06-04T09:21:16.000-04:00",
                                        "value": 102
                                    },
                                    {
                                        "date": "2022-06-04T09:26:16.000-04:00",
                                        "value": 90
                                    },
                                    {
                                        "date": "2022-06-04T09:31:16.000-04:00",
                                        "value": 93
                                    },
                                    {
                                        "date": "2022-06-04T09:36:16.000-04:00",
                                        "value": 131
                                    },
                                    {
                                        "date": "2022-06-04T09:41:16.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-04T09:46:16.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-04T09:51:16.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-06-04T09:56:16.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-04T10:01:16.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-04T10:06:16.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-04T10:11:16.000-04:00",
                                        "value": 70
                                    },
                                    {
                                        "date": "2022-06-04T10:16:16.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-04T10:21:16.000-04:00",
                                        "value": 88
                                    },
                                    {
                                        "date": "2022-06-04T10:26:16.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-06-04T10:31:16.000-04:00",
                                        "value": 165
                                    },
                                    {
                                        "date": "2022-06-04T10:36:16.000-04:00",
                                        "value": 115
                                    },
                                    {
                                        "date": "2022-06-04T10:41:16.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-04T10:46:16.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-04T10:51:16.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-04T10:56:16.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-04T11:01:16.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-04T11:06:16.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-04T11:11:16.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-04T11:16:16.000-04:00",
                                        "value": 155
                                    },
                                    {
                                        "date": "2022-06-04T11:21:16.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-04T11:26:16.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-04T11:31:16.000-04:00",
                                        "value": 100
                                    },
                                    {
                                        "date": "2022-06-04T11:36:16.000-04:00",
                                        "value": 74
                                    },
                                    {
                                        "date": "2022-06-04T11:41:16.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-04T11:46:16.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-04T11:51:16.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-04T11:56:16.000-04:00",
                                        "value": 77
                                    },
                                    {
                                        "date": "2022-06-04T12:01:16.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-04T12:06:16.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-04T12:11:16.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-04T12:16:16.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-06-04T12:21:16.000-04:00",
                                        "value": 151
                                    },
                                    {
                                        "date": "2022-06-04T12:26:16.000-04:00",
                                        "value": 170
                                    },
                                    {
                                        "date": "2022-06-04T12:31:16.000-04:00",
                                        "value": 177
                                    },
                                    {
                                        "date": "2022-06-04T12:36:16.000-04:00",
                                        "value": 112
                                    },
                                    {
                                        "date": "2022-06-04T12:41:16.000-04:00",
                                        "value": 130
                                    },
                                    {
                                        "date": "2022-06-04T12:46:16.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-04T12:51:16.000-04:00",
                                        "value": 122
                                    },
                                    {
                                        "date": "2022-06-04T12:56:16.000-04:00",
                                        "value": 176
                                    },
                                    {
                                        "date": "2022-06-04T13:01:16.000-04:00",
                                        "value": 138
                                    },
                                    {
                                        "date": "2022-06-04T13:06:16.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-04T13:11:16.000-04:00",
                                        "value": 123
                                    },
                                    {
                                        "date": "2022-06-04T13:16:16.000-04:00",
                                        "value": 160
                                    },
                                    {
                                        "date": "2022-06-04T13:21:16.000-04:00",
                                        "value": 114
                                    },
                                    {
                                        "date": "2022-06-04T13:26:16.000-04:00",
                                        "value": 169
                                    },
                                    {
                                        "date": "2022-06-04T13:31:16.000-04:00",
                                        "value": 111
                                    },
                                    {
                                        "date": "2022-06-04T13:36:16.000-04:00",
                                        "value": 83
                                    },
                                    {
                                        "date": "2022-06-04T13:41:16.000-04:00",
                                        "value": 105
                                    },
                                    {
                                        "date": "2022-06-04T13:46:16.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-04T13:51:16.000-04:00",
                                        "value": 128
                                    },
                                    {
                                        "date": "2022-06-04T13:56:16.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-04T14:01:16.000-04:00",
                                        "value": 172
                                    },
                                    {
                                        "date": "2022-06-04T14:06:16.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-04T14:11:16.000-04:00",
                                        "value": 75
                                    },
                                    {
                                        "date": "2022-06-04T14:16:16.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-04T14:21:16.000-04:00",
                                        "value": 109
                                    },
                                    {
                                        "date": "2022-06-04T14:26:16.000-04:00",
                                        "value": 101
                                    },
                                    {
                                        "date": "2022-06-04T14:31:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T14:36:16.000-04:00",
                                        "value": 146
                                    },
                                    {
                                        "date": "2022-06-04T14:41:16.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-04T14:46:16.000-04:00",
                                        "value": 124
                                    },
                                    {
                                        "date": "2022-06-04T14:51:16.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-06-04T14:56:16.000-04:00",
                                        "value": 137
                                    },
                                    {
                                        "date": "2022-06-04T15:01:16.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-04T15:06:16.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-04T15:11:16.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-04T15:16:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T15:21:16.000-04:00",
                                        "value": 156
                                    },
                                    {
                                        "date": "2022-06-04T15:26:16.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-04T15:31:16.000-04:00",
                                        "value": 142
                                    },
                                    {
                                        "date": "2022-06-04T15:36:16.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-04T15:41:16.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-04T15:46:16.000-04:00",
                                        "value": 171
                                    },
                                    {
                                        "date": "2022-06-04T15:51:16.000-04:00",
                                        "value": 86
                                    },
                                    {
                                        "date": "2022-06-04T15:56:16.000-04:00",
                                        "value": 79
                                    },
                                    {
                                        "date": "2022-06-04T16:01:16.000-04:00",
                                        "value": 166
                                    },
                                    {
                                        "date": "2022-06-04T16:06:16.000-04:00",
                                        "value": 76
                                    },
                                    {
                                        "date": "2022-06-04T16:11:16.000-04:00",
                                        "value": 110
                                    },
                                    {
                                        "date": "2022-06-04T16:16:16.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-04T16:21:16.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-04T16:26:16.000-04:00",
                                        "value": 152
                                    },
                                    {
                                        "date": "2022-06-04T16:31:16.000-04:00",
                                        "value": 159
                                    },
                                    {
                                        "date": "2022-06-04T16:36:16.000-04:00",
                                        "value": 158
                                    },
                                    {
                                        "date": "2022-06-04T16:41:16.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-04T16:46:16.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-04T16:51:16.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-04T16:56:16.000-04:00",
                                        "value": 98
                                    },
                                    {
                                        "date": "2022-06-04T17:01:16.000-04:00",
                                        "value": 85
                                    },
                                    {
                                        "date": "2022-06-04T17:06:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T17:11:16.000-04:00",
                                        "value": 80
                                    },
                                    {
                                        "date": "2022-06-04T17:16:16.000-04:00",
                                        "value": 175
                                    },
                                    {
                                        "date": "2022-06-04T17:21:16.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-04T17:26:17.000-04:00",
                                        "value": 150
                                    },
                                    {
                                        "date": "2022-06-04T17:31:16.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-06-04T17:36:16.000-04:00",
                                        "value": 134
                                    },
                                    {
                                        "date": "2022-06-04T17:41:16.000-04:00",
                                        "value": 91
                                    },
                                    {
                                        "date": "2022-06-04T17:46:16.000-04:00",
                                        "value": 71
                                    },
                                    {
                                        "date": "2022-06-04T17:51:16.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-04T17:56:16.000-04:00",
                                        "value": 168
                                    },
                                    {
                                        "date": "2022-06-04T18:01:16.000-04:00",
                                        "value": 99
                                    },
                                    {
                                        "date": "2022-06-04T18:06:16.000-04:00",
                                        "value": 135
                                    },
                                    {
                                        "date": "2022-06-04T18:11:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T18:16:16.000-04:00",
                                        "value": 116
                                    },
                                    {
                                        "date": "2022-06-04T18:21:16.000-04:00",
                                        "value": 153
                                    },
                                    {
                                        "date": "2022-06-04T18:26:16.000-04:00",
                                        "value": 136
                                    },
                                    {
                                        "date": "2022-06-04T18:31:16.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-04T18:36:16.000-04:00",
                                        "value": 72
                                    },
                                    {
                                        "date": "2022-06-04T18:41:16.000-04:00",
                                        "value": 164
                                    },
                                    {
                                        "date": "2022-06-04T18:46:16.000-04:00",
                                        "value": 140
                                    },
                                    {
                                        "date": "2022-06-04T18:51:16.000-04:00",
                                        "value": 82
                                    },
                                    {
                                        "date": "2022-06-04T18:56:16.000-04:00",
                                        "value": 144
                                    },
                                    {
                                        "date": "2022-06-04T19:01:16.000-04:00",
                                        "value": 94
                                    },
                                    {
                                        "date": "2022-06-04T19:06:16.000-04:00",
                                        "value": 163
                                    },
                                    {
                                        "date": "2022-06-04T19:11:16.000-04:00",
                                        "value": 113
                                    },
                                    {
                                        "date": "2022-06-04T19:16:16.000-04:00",
                                        "value": 121
                                    },
                                    {
                                        "date": "2022-06-04T19:21:16.000-04:00",
                                        "value": 148
                                    },
                                    {
                                        "date": "2022-06-04T19:26:16.000-04:00",
                                        "value": 167
                                    },
                                    {
                                        "date": "2022-06-04T19:31:16.000-04:00",
                                        "value": 126
                                    },
                                    {
                                        "date": "2022-06-04T19:36:16.000-04:00",
                                        "value": 106
                                    },
                                    {
                                        "date": "2022-06-04T19:41:16.000-04:00",
                                        "value": 95
                                    },
                                    {
                                        "date": "2022-06-04T19:46:16.000-04:00",
                                        "value": 89
                                    },
                                    {
                                        "date": "2022-06-04T19:51:16.000-04:00",
                                        "value": 78
                                    },
                                    {
                                        "date": "2022-06-04T19:56:16.000-04:00",
                                        "value": 82
                                    }
                                ]
                            ],
                            "discreteData": null
                        }
                    }
                ],
                "settings": {
                    "device": {
                        "serialNumber": "s-db62b2f2-0be4-4eb5-88e9-0984df11127b"
                    },
                    "basal": {
                        "maxRate": 2,
                        "isTemporaryEnabled": null,
                        "programs": [
                            {
                                "name": "Basal 1",
                                "segments": [
                                    {
                                        "rate": 0.75,
                                        "startTime": "00:00",
                                        "endTime": "03:00"
                                    },
                                    {
                                        "rate": 0.65,
                                        "startTime": "03:00",
                                        "endTime": "08:00"
                                    },
                                    {
                                        "rate": 0.45,
                                        "startTime": "08:00",
                                        "endTime": "12:00"
                                    },
                                    {
                                        "rate": 0.75,
                                        "startTime": "12:00",
                                        "endTime": "17:00"
                                    },
                                    {
                                        "rate": 0.5,
                                        "startTime": "17:00",
                                        "endTime": "22:00"
                                    },
                                    {
                                        "rate": 0.8,
                                        "startTime": "22:00",
                                        "endTime": "00:00"
                                    }
                                ],
                                "totalRate": 15.15
                            }
                        ]
                    },
                    "bolus": {
                        "isCalculatorEnabled": true,
                        "insulinActionDuration": null,
                        "isExtendedEnabled": null,
                        "isReverseCorrectionEnabled": true,
                        "minGlucoseForCalculation": 70,
                        "max": null,
                        "targetGlucoseAndCorrectAbove": {
                            "segments": [
                                {
                                    "targetGlucose": 110,
                                    "correctAbove": 110,
                                    "startTime": "00:00",
                                    "endTime": "18:00"
                                },
                                {
                                    "targetGlucose": 120,
                                    "correctAbove": 120,
                                    "startTime": "18:00",
                                    "endTime": "21:00"
                                },
                                {
                                    "targetGlucose": 110,
                                    "correctAbove": 110,
                                    "startTime": "21:00",
                                    "endTime": "00:00"
                                }
                            ]
                        },
                        "insulinToCarbRatio": {
                            "insulin": 1,
                            "segments": [
                                {
                                    "carbs": 10,
                                    "startTime": "00:00",
                                    "endTime": "06:00"
                                },
                                {
                                    "carbs": 9,
                                    "startTime": "06:00",
                                    "endTime": "11:00"
                                },
                                {
                                    "carbs": 9,
                                    "startTime": "11:00",
                                    "endTime": "17:00"
                                },
                                {
                                    "carbs": 9,
                                    "startTime": "17:00",
                                    "endTime": "00:00"
                                }
                            ]
                        },
                        "correctionFactor": {
                            "insulin": 1,
                            "segments": [
                                {
                                    "glucose": 93,
                                    "startTime": "00:00",
                                    "endTime": "06:30"
                                },
                                {
                                    "glucose": 75,
                                    "startTime": "06:30",
                                    "endTime": "22:30"
                                },
                                {
                                    "glucose": 93,
                                    "startTime": "22:30",
                                    "endTime": "00:00"
                                }
                            ]
                        },
                        "usedCarbPresets": null
                    }
                },
                "common": {
                    "measurementUnits": {
                        "glucose": "mg/dL",
                        "insulin": "unit",
                        "insulinCorrectionFactor": "unit:mg/dL",
                        "insulinToCarbRatio": "unit:grams",
                        "carbs": "g",
                        "basalRate": "U/hr",
                        "dailyBasalRate": "U/day"
                    },
                    "insulinDeliveryModeHypoProtectTargetGlucose": 150,
                    "glucoseRanges": {
                        "veryLow": {
                            "lowerBound": null,
                            "lowerBoundType": null,
                            "upperBound": 54,
                            "upperBoundType": "open"
                        },
                        "low": {
                            "lowerBound": 54,
                            "lowerBoundType": "closed",
                            "upperBound": 69,
                            "upperBoundType": "closed"
                        },
                        "target": {
                            "lowerBound": 70,
                            "lowerBoundType": "closed",
                            "upperBound": 180,
                            "upperBoundType": "closed"
                        },
                        "high": {
                            "lowerBound": 181,
                            "lowerBoundType": "closed",
                            "upperBound": 250,
                            "upperBoundType": "closed"
                        },
                        "veryHigh": {
                            "lowerBound": 250,
                            "lowerBoundType": "open",
                            "upperBound": null,
                            "upperBoundType": null
                        }
                    },
                    "glucoseDisplayRange": {
                        "lowerBound": 0,
                        "lowerBoundType": "closed",
                        "upperBound": 400,
                        "upperBoundType": "closed"
                    }
                }
            }
        }
    }`);
