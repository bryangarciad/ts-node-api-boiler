import { DisplayedGlucoseMeasuringDeviceCategory } from "./enum/displayed-glucose-measuring-device-category.enum";
import { DisplayedPdmDeviceClass } from "./enum/displayed-pdm-device-class.enum";
import { Daily } from "./report-daily.model";

interface Range {
    lowerBound: number;
    lowerBoundType: string;
    upperBound: number;
    upperBoundType: string;
}

type glucoseRangeKeys = "high" | "low" | "target" | "veryHigh" | "veryLow";

interface Common {
    glucoseDisplayRange: Range;
    glucoseRanges: Record<glucoseRangeKeys, Range>;
    insulinDeliveryModeHypoProtectTargetGlucose: number;
    measurementUnits: {
        basalRate: string;
        carbs: string;
        dailyBasalRate: string;
        glucose: string;
        insulin: string;
        insulinCorrectionFactor: string;
        insulinToCarbRatio: string;
    };
}

interface ReportDataCharacteristics {
    isRecent: boolean;
    recencyCheckPeriodDays: number;
    isSufficientForSummary?: boolean;
    sufficiencyForSummaryCheckPeriodDays?: number;
}

interface ReportDevice {
    pdmDeviceClass: DisplayedPdmDeviceClass;
    primaryGlucoseMeasuringDeviceCategory: DisplayedGlucoseMeasuringDeviceCategory;
    isPdmDeviceBolusCalculatorEnabled?: boolean;
}
interface PersonName {
    first?: string;
    last?: string;
}

interface ReportPatientProfile {
    name: PersonName;
    birthdate?: string;
    age?: number;
}

interface PeriodReport {
    days: number;
    endDate: string;
    startDate: string;
}
interface ReportBasalSettings {
    maxRate?: number;
    isTemporaryEnabled?: boolean;
    programs?: {
        name: string;
        totalRate: number;
    }[];
}

interface TimeSegment {
    startTime: string;
    endTime: string;
}

interface TimeSegmentsSettings<T extends TimeSegment> {
    segments: T[];
}

interface TargetGlucoseAndCorrectAboveTimeSegment extends TimeSegment {
    targetGlucose: number;
    correctAbove: number;
}

interface InsulinToCarbRatioDetailedSettings extends TimeSegment {
    insulin: number;
}

interface UsedCarbPreset {
    value: number;
}

interface ReportBolusSettings {
    isCalculatorEnabled?: boolean;
    insulinActionDuration?: number;
    isExtendedEnabled?: boolean;
    minGlucoseForCalculation: number;
    isReverseCorrectionEnabled: boolean;
    max?: number;
    targetGlucoseAndCorrectAbove?: TimeSegmentsSettings<TargetGlucoseAndCorrectAboveTimeSegment>;
    insulinToCarbRatio?: TimeSegmentsSettings<InsulinToCarbRatioDetailedSettings>;
    correctionFactor?: TimeSegmentsSettings<InsulinToCarbRatioDetailedSettings>;
    usedCarbPresets?: UsedCarbPreset[];
}

interface ReportDeviceDetailedSettings {
    serialNumber: string;
}

interface ReportSettings {
    basal: ReportBasalSettings;
    bolus: ReportBolusSettings;
    device: ReportDeviceDetailedSettings;
}

export interface Report {
    common: Common;
    createdDate: string;
    daily: Daily[];
    dataCharacteristics: ReportDataCharacteristics;
    device: ReportDevice;
    patient: ReportPatientProfile;
    period: PeriodReport;
    settings: ReportSettings;
}
